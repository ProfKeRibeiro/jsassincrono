function aleatorio(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function requisicao(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(msg === 'pipoca')
        reject('Pedido invalido')
        setTimeout(()=>{
            resolve(msg);
        },tempo);
    });
}
// // requisicao("hamburger", aleatorio())
// .then(resposta => {console.log(resposta);})
// // requisicao("x-bacon", aleatorio())
// .then(resposta => {console.log(resposta);})
// // requisicao("refrigerante", aleatorio())
// .then(resposta => {console.log(resposta);})

requisicao("hamburger", aleatorio())
.then(resposta => {console.log(resposta);
     return requisicao("x-bacon", aleatorio())})
.then(resposta => {console.log(resposta)
    return requisicao("refrigerante", aleatorio())})
.then(resposta => {console.log(resposta)
    return requisicao("pipoca", aleatorio())})
.catch(erro=> {console.log("Error: ", erro)})

// console.log("condimentos")

