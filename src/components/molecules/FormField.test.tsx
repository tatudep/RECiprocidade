import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MoleculeFormField } from './FormField';

describe('MoleculeFormField', () => {
  it('renderiza o label corretamente', () => {
    render(<MoleculeFormField label="Nome" name="nome" />);
    expect(screen.getByText('Nome')).toBeInTheDocument();
  });

  it('exibe o asterisco quando required', () => {
    render(<MoleculeFormField label="Email" name="email" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('renderiza o placeholder corretamente', () => {
    render(<MoleculeFormField label="Telefone" name="telefone" placeholder="Digite seu telefone" />);
    expect(screen.getByPlaceholderText('Digite seu telefone')).toBeInTheDocument();
  });

  it('chama onChange ao digitar', () => {
    const handleChange = jest.fn();
    render(
      <MoleculeFormField label="Nome" name="nome" onChange={handleChange} />
    );
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Teste' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('exibe mensagem de erro quando error é passado', () => {
    render(
      <MoleculeFormField label="Nome" name="nome" error="Campo obrigatório" />
    );
    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
  });
});
