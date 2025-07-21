import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renderiza o placeholder corretamente', () => {
    render(<SearchBar placeholder="Buscar algo..." />);
    expect(screen.getByPlaceholderText('Buscar algo...')).toBeInTheDocument();
  });

  it('chama onSearch ao clicar no botão', () => {
    const handleSearch = jest.fn();
    render(<SearchBar onSearch={handleSearch} />);
    fireEvent.change(screen.getByPlaceholderText('Pesquisar...'), { target: { value: 'Teste' } });
    fireEvent.click(screen.getByRole('button'));
    expect(handleSearch).toHaveBeenCalledWith('Teste');
  });

  it('chama onSearch ao pressionar Enter', () => {
    const handleSearch = jest.fn();
    render(<SearchBar onSearch={handleSearch} />);
    const input = screen.getByPlaceholderText('Pesquisar...');
    fireEvent.change(input, { target: { value: 'Outro teste' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(handleSearch).toHaveBeenCalledWith('Outro teste');
  });
});
