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
 const mesa1 = [
    requisicao("hamburger", aleatorio()),
    requisicao("x-bacon", aleatorio()),
    requisicao("refrigerante", aleatorio())
 ];


// Promise.race(mesa1)
// .then(resposta => {console.log(resposta)})
// .catch(erro => {console.log("Error: ", erro)})
// console.log("condimentos")









// Promise.all(mesa1)
// .then(resposta => {console.log(resposta)})
// .catch(erro => {console.log("Error: ", erro)})

function status(){
    const pedido = "";
    if (pedido=='pronto'){ 
        return requisicao("X-bacon",1000)
    }
    else{
        return Promise.reject("Faça seu pedido")
    }
}
status()
.then(pedido=>console.log(pedido))
.catch(e=>console.log(e))