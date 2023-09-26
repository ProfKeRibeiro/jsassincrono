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
// async function entrega(){
//     const pedido1 = await requisicao("hamburger", aleatorio())
//     console.log(pedido1);
//     const pedido2 = await requisicao("x-burguer", aleatorio())
//     console.log(pedido2);
//     const pedido3 = await requisicao("refrigerante", aleatorio())
//     console.log(pedido3);
//     console.log("pedidos entregues na mesa 1");
// }
// entrega();
//promise reject
// async function entrega(){
    
//     const pedido1 = await requisicao("hamburger", aleatorio())
//     console.log(pedido1);
//     const pedido2 = await requisicao("pipoca", aleatorio())
//     console.log(pedido2);
//     const pedido3 = await requisicao("x-burguer", aleatorio())
//     console.log(pedido3);
//     console.log("pedidos entregues na mesa 1");
// }
// entrega();
//promise reject com tratamento de erro
async function entrega(){
    try{
    const pedido1 = await requisicao("hamburger", aleatorio())
    console.log(pedido1);
    const pedido2 = await requisicao("pipoca", aleatorio())
    console.log(pedido2);
    const pedido3 = await requisicao("x-burguer", aleatorio())
    console.log(pedido3);
    console.log("pedidos entregues na mesa 1");
    } catch (e) {console.log("ERRO:",e)};
}
entrega();