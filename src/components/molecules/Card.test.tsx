import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MoleculeCard } from './Card';

describe('Card', () => {
  it('renderiza o título corretamente', () => {
    render(<MoleculeCard title="Título Teste" />);
    expect(screen.getByText('Título Teste')).toBeInTheDocument();
  });

  it('renderiza o conteúdo passado como children', () => {
    render(
      <MoleculeCard title="Título Teste">
        <div>Conteúdo do Card</div>
      </MoleculeCard>
    );
    expect(screen.getByText('Conteúdo do Card')).toBeInTheDocument();
  });
});