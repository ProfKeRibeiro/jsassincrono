const request = (obj) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseXML);
        } else {
            console.log('Error');
            obj.error(xhr.statusText);
        }
    });
};

document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'button') {
        e.preventDefault();
        carregaPagina(el);
    }
});

function carregaPagina(el) {
    const inputcep = document.querySelector('#cep');
    request({
        method: 'GET',
        url: `https://viacep.com.br/ws/${inputcep.value}/json/`,
        success(response) {
            carregaResultado(response);
        },
        error(errorText) {
            console.log('Erro na requisição:', errorText);
        }
    });
}

function carregaResultado(response) {
    const resultado = document.querySelector('.container');
    resultado.innerHTML = ''; // Limpa o conteúdo anterior

    // Cria um elemento <xmp> para exibir o XML preservando a formatação
    const xmp = document.createElement('xmp');
    xmp.textContent = new XMLSerializer().serializeToString(response);

    // Adiciona o elemento <xmp> à div de resultado
    resultado.appendChild(xmp);
}