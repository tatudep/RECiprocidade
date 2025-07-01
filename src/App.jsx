import OngsList from './components/ongsList';
import OngForm from './components/ongForm';
import EmpresaList from './components/empresaList';
import EmpresaForm from './components/empresaForm';
import './App.css';

function App() {
  return (
    <div>
      <h1>RECiprocidade</h1>
      <OngForm />
      <OngsList />
      <EmpresaForm />
      <EmpresaList />
    </div>
  );
}

export default App;