document.getElementById('form-doador').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;

  try {
    const response = await fetch('http://localhost:3000/doadores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, email, telefone })
    });

    if (!response.ok) {
      throw new Error('Erro ao cadastrar');
    }

    const data = await response.json();
    alert('✅ Doador cadastrado com sucesso!');
    console.log('Doador cadastrado:', data);

    // Redirecionar para página de doações (se desejar)
    // window.location.href = 'doacoes.html';

  } catch (error) {
    console.error('Erro ao cadastrar doador:', error);
    alert('❌ Erro ao cadastrar doador. Verifique a conexão com o servidor.');
  }
});
