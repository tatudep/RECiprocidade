const IndexTest = () => {
  return (
    <div 
      style={{ 
        padding: '20px', 
        backgroundColor: '#ffffff', 
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h1 style={{ color: '#000000', fontSize: '32px', margin: '0 0 20px 0' }}>
        TESTE - Página Funcionando!
      </h1>
      <p style={{ color: '#000000', fontSize: '18px', margin: '0 0 20px 0' }}>
        Se você está vendo isso, a página não está mais branca.
      </p>
      <div 
        style={{ 
          backgroundColor: '#ff0000', 
          color: '#ffffff', 
          padding: '10px', 
          marginTop: '20px',
          borderRadius: '5px'
        }}
      >
        Este é um teste com fundo vermelho para garantir que os estilos funcionam
      </div>
    </div>
  );
};

export default IndexTest;
