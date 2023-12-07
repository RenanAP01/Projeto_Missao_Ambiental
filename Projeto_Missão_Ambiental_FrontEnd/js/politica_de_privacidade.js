// Função para exibir o pop-up
function mostrarPopup() {
    document.getElementById('popup').style.display = 'block';
  }
  
  // Função para fechar o pop-up
  function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  // Exiba o pop-up quando a página for carregada (opcional)
  window.onload = function() {
    mostrarPopup();
  };