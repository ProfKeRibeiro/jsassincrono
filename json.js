const request = async (obj) => {
    try {
        const response = await fetch(obj.url, {
            method: obj.method
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return obj.success(data);
    } catch (error) {
        return obj.error(error.message);
    }
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
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = `CEP: ${response.cep}<br>
    Logradouro: ${response.logradouro}<br>
    Bairro: ${response.bairro}<br>
    Localidade: ${response.localidade}<br>
    UF: ${response.uf}</br>`;
    resultado.appendChild(p);

}
