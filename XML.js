let cepUrl = 'https://viacep.com.br/ws/18209240/xml/'

let xhr = new XMLHttpRequest();
xhr.open('GET', cepUrl, true);

xhr.onload = function () {
  // Verificando se a solicitação foi bem-sucedida
  if (xhr.status === 200) {
    // Obtendo o corpo da resposta
    document.querySelector('.container').innerHTML = xhr.responseText; 
    console.log(xhr.responseText)
  }
};
xhr.send()
