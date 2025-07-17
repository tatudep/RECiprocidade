import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contato = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tem dúvidas sobre nossa plataforma? Precisa de ajuda para conectar sua empresa ou ONG? 
            Estamos aqui para ajudar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Envie sua Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="nome">Nome Completo *</Label>
                  <Input id="nome" placeholder="Seu nome completo" />
                </div>
                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" placeholder="(11) 99999-9999" />
                </div>
                <div>
                  <Label htmlFor="tipo">Tipo de Organização *</Label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Selecione...</option>
                    <option value="empresa">Empresa</option>
                    <option value="ong">ONG</option>
                    <option value="pessoa-fisica">Pessoa Física</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="assunto">Assunto *</Label>
                <Input id="assunto" placeholder="Sobre o que você gostaria de falar?" />
              </div>

              <div>
                <Label htmlFor="mensagem">Mensagem *</Label>
                <Textarea 
                  id="mensagem" 
                  placeholder="Conte-nos como podemos ajudar você..."
                  rows={6}
                />
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">E-mail</h4>
                      <p className="text-gray-600">contato@cin.ufpe.br</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Telefone</h4>
                      <p className="text-gray-600">(81) 2126-8430</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Endereço</h4>
                      <p className="text-gray-600">
                      Av. Jornalista Aníbal Fernandes, s/n<br />
                      Cidade Universitária Recife - PE, 50740-560
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Horário de Atendimento</h4>
                      <p className="text-gray-600">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 8h às 12h
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Como cadastrar minha empresa?</h4>
                    <p className="text-sm text-gray-600">Acesse a página "Empresas" e clique em "Cadastrar Empresa".</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Como minha ONG pode receber apoio?</h4>
                    <p className="text-sm text-gray-600">Cadastre sua ONG em nossa plataforma e aguarde o contato de empresas interessadas.</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-gray-900">A plataforma é gratuita?</h4>
                    <p className="text-sm text-gray-600">Sim! Nossa plataforma é 100% gratuita para empresas e ONGs.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
