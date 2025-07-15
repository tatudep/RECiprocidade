import React, { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, Heart, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const Entrar = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bem-vindo à RECiprocidade
          </h1>
          <p className="text-gray-600">
            Conectando empresas e ONGs para um mundo melhor
          </p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="login">Entrar</TabsTrigger>
            <TabsTrigger value="register">Cadastrar</TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">Entrar na sua conta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>

                <div>
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Sua senha" 
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Lembrar de mim
                  </label>
                  <a href="#" className="text-green-600 hover:text-green-700">
                    Esqueceu a senha?
                  </a>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Entrar
                </Button>

                <div className="text-center text-sm text-gray-600">
                  Não tem uma conta?{' '}
                  <button 
                    className="text-green-600 hover:text-green-700 font-medium"
                    onClick={() => {}}
                  >
                    Cadastre-se aqui
                  </button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Register Tab */}
          <TabsContent value="register">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">Criar nova conta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Tipo de Organização</Label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <Button variant="outline" className="h-16 flex flex-col">
                      <Building2 className="h-6 w-6 mb-1" />
                      <span className="text-xs">Empresa</span>
                    </Button>
                    <Button variant="outline" className="h-16 flex flex-col">
                      <Heart className="h-6 w-6 mb-1" />
                      <span className="text-xs">ONG</span>
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input id="nome" placeholder="Seu nome completo" />
                </div>

                <div>
                  <Label htmlFor="email-register">E-mail</Label>
                  <Input id="email-register" type="email" placeholder="seu@email.com" />
                </div>

                <div>
                  <Label htmlFor="password-register">Senha</Label>
                  <div className="relative">
                    <Input 
                      id="password-register" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Crie uma senha" 
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirm-password">Confirmar Senha</Label>
                  <div className="relative">
                    <Input 
                      id="confirm-password" 
                      type={showConfirmPassword ? "text" : "password"} 
                      placeholder="Confirme sua senha" 
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="text-xs text-gray-600">
                  <label className="flex items-start">
                    <input type="checkbox" className="mr-2 mt-1" />
                    <span>
                      Eu concordo com os{' '}
                      <a href="#" className="text-green-600 hover:text-green-700">
                        Termos de Uso
                      </a>{' '}
                      e{' '}
                      <a href="#" className="text-green-600 hover:text-green-700">
                        Política de Privacidade
                      </a>
                    </span>
                  </label>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Criar Conta
                </Button>

                <div className="text-center text-sm text-gray-600">
                  Já tem uma conta?{' '}
                  <button 
                    className="text-green-600 hover:text-green-700 font-medium"
                    onClick={() => {}}
                  >
                    Entre aqui
                  </button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Access Links */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">Ou acesse diretamente:</p>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/empresas/cadastro">
              <Button variant="outline" className="w-full">
                <Building2 className="mr-2 h-4 w-4" />
                Cadastro Empresa
              </Button>
            </Link>
            <Link to="/ongs/cadastro">
              <Button variant="outline" className="w-full">
                <Heart className="mr-2 h-4 w-4" />
                Cadastro ONG
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entrar;
