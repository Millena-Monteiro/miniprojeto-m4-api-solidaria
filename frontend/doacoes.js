document.getElementById('form-doacao').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const doacao = {
      nome: document.getElementById('nome').value,
      item: document.getElementById('item').value,
      quantidade: parseInt(document.getElementById('quantidade').value),
      pontoColeta: document.getElementById('pontoColeta').value,
      enderecoColeta: document.getElementById('enderecoColeta').value
    };
  
    try {
      const resposta = await fetch('http://localhost:3000/doacoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(doacao)
      });
  
      if (resposta.ok) {
        alert('Doação registrada com sucesso!');
        document.getElementById('form-doacao').reset(); // Limpa o formulário
      } else {
        const erro = await resposta.json();
        alert(`Erro: ${erro.mensagem}`);
      }
    } catch (error) {
      alert('Erro ao enviar doação. Verifique a conexão com o servidor.');
      console.error(error);
    }
  });
  