import express from 'express'
import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

// Rotas para ONGs
app.post('/ongs', async (req, res) => {
  const ong = await prisma.ong.create({ data: req.body })
  res.status(201).json(ong)
})

app.get('/ongs', async (req, res) => {
  const ongs = await prisma.ong.findMany({ where: req.query })
  res.status(200).json(ongs)
})

app.put('/ongs/:id', async (req, res) => {
  const ong = await prisma.ong.update({
    where: { id: req.params.id },
    data: req.body
  })
  res.status(200).json(ong)
})

app.delete('/ongs/:id', async (req, res) => {
  await prisma.ong.delete({ where: { id: req.params.id } })
  res.status(200).json({ message: 'ONG deletada com sucesso!' })
})

// Rotas para Empresas
app.post('/empresas', async (req, res) => {
  const empresa = await prisma.empresa.create({ data: req.body })
  res.status(201).json(empresa)
})

app.get('/empresas', async (req, res) => {
  const empresas = await prisma.empresa.findMany({ where: req.query })
  res.status(200).json(empresas)
})

app.put('/empresas/:id', async (req, res) => {
  const empresa = await prisma.empresa.update({
    where: { id: req.params.id },
    data: req.body
  })
  res.status(200).json(empresa)
})

app.delete('/empresas/:id', async (req, res) => {
  await prisma.empresa.delete({ where: { id: req.params.id } })
  res.status(200).json({ message: 'Empresa deletada com sucesso!' })
})

app.listen(3000, () => console.log('API rodando na porta 3000'))
