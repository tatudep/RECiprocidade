import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import * as PrismaExports from './prisma/generated/prisma/index.js'; 

const PrismaClient = PrismaExports.PrismaClient;
let prisma;

const app = express();
app.use(cors());
app.use(express.json());

// ---------------- ROTAS DE USUÁRIO ----------------

app.post('/usuarios', async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const usuario = await prisma.Usuario.create({
      data: { email, password: hashedPassword, role: role || "user" }
    });
    const { password: _, ...userData } = usuario;
    res.status(201).json(userData);
  } catch (error) {
    console.error("Erro no cadastro de usuário:", error);
    if (error.code === 'P2002') {
      return res.status(409).json({ message: "Email já cadastrado." });
    }
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await prisma.Usuario.findMany();
    const usuariosLimpos = usuarios.map(u => {
      const { password: _, ...rest } = u;
      return rest;
    });
    res.status(200).json(usuariosLimpos);
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    res.status(500).json({ message: "Erro interno do servidor ao listar usuários." });
  }
});


app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await prisma.Usuario.findUnique({ where: { email } });
    if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
      return res.status(400).json({ message: "Email ou senha inválidos." });
    }
    const { password: _, ...userData } = usuario;
    res.status(200).json({ message: "Login bem-sucedido!", user: userData });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

// ---------------- ROTAS DE ONG ----------------

app.post('/ongs', async (req, res) => {
  try {
    const {
      nome, cnpj, areaAtuacao, anoFundacao, missao, principaisProjetos,
      website, telefone, enderecoCompleto, odsTrabalhados,
      principaisNecessidades, numeroBeneficiarios, numeroVoluntarios,
      usuarioId
    } = req.body;

    if (!nome || !cnpj || !areaAtuacao || !anoFundacao || !missao || !principaisProjetos ||
        !telefone || !enderecoCompleto || !odsTrabalhados || !principaisNecessidades) {
      return res.status(400).json({ message: "Campos obrigatórios faltando." });
    }

    const ong = await prisma.ONG.create({
      data: {
        nome, cnpj, areaAtuacao,
        anoFundacao: parseInt(anoFundacao),
        missao, principaisProjetos,
        website, telefone, enderecoCompleto,
        odsTrabalhados,
        principaisNecessidades,
        numeroBeneficiarios: numeroBeneficiarios ? parseInt(numeroBeneficiarios) : null,
        numeroVoluntarios: numeroVoluntarios ? parseInt(numeroVoluntarios) : null,
        ...(usuarioId && { usuario: { connect: { id: usuarioId } } })
      }
    });

    res.status(201).json(ong);
  } catch (error) {
    console.error("Erro no cadastro de ONG:", error);
    if (error.code === 'P2002') {
      return res.status(409).json({ message: "ONG com este CNPJ já cadastrada." });
    }
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

app.get('/ongs', async (req, res) => {
  const ongs = await prisma.ONG.findMany({ where: req.query });
  res.status(200).json(ongs);
});

app.put('/ongs/:id', async (req, res) => {
  const ong = await prisma.ONG.update({
    where: { id: req.params.id },
    data: req.body
  });
  res.status(200).json(ong);
});

app.delete('/ongs/:id', async (req, res) => {
  await prisma.ONG.delete({ where: { id: req.params.id } });
  res.status(200).json({ message: "ONG deletada com sucesso." });
});

// ---------------- ROTAS DE EMPRESAS ----------------

app.post('/empresas', async (req, res) => {
  try {
    const {
      nome, cnpj, setorAtuacao, porteEmpresa, descricao,
      website, telefone, enderecoCompleto, odsInteresse,
      porqueApoiarOngs, usuarioId
    } = req.body;

    if (!nome || !cnpj || !setorAtuacao || !porteEmpresa || !descricao ||
        !telefone || !enderecoCompleto || !odsInteresse || !porqueApoiarOngs) {
      return res.status(400).json({ message: "Campos obrigatórios faltando." });
    }

    const empresa = await prisma.Empresa.create({
      data: {
        nome, cnpj, setorAtuacao, porteEmpresa, descricao,
        website, telefone, enderecoCompleto,
        odsInteresse,
        porqueApoiarOngs,
        ...(usuarioId && { usuario: { connect: { id: usuarioId } } })
      }
    });

    res.status(201).json(empresa);
  } catch (error) {
    console.error("Erro no cadastro de empresa:", error);
    if (error.code === 'P2002') {
      return res.status(409).json({ message: "Empresa com este CNPJ já cadastrada." });
    }
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

app.get('/empresas', async (req, res) => {
  const empresas = await prisma.Empresa.findMany({ where: req.query });
  res.status(200).json(empresas);
});

app.put('/empresas/:id', async (req, res) => {
  const empresa = await prisma.Empresa.update({
    where: { id: req.params.id },
    data: req.body
  });
  res.status(200).json(empresa);
});

app.delete('/empresas/:id', async (req, res) => {
  await prisma.Empresa.delete({ where: { id: req.params.id } });
  res.status(200).json({ message: "Empresa deletada com sucesso." });
});

// ---------------- INÍCIO DO SERVIDOR ----------------

async function startServer() {
  prisma = new PrismaClient();
  try {
    await prisma.$connect();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
    app.listen(3000, () => console.log("API rodando na porta 3000"));
  } catch (error) {
    console.error("Erro ao iniciar servidor:", error);
    process.exit(1);
  }
}

startServer();

process.on("beforeExit", async () => {
  if (prisma) await prisma.$disconnect();
});