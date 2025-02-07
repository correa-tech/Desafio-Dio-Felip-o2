function ranking(vitorias, derrotas){
     
    return vitorias - derrotas
}

let saldoDeVitoria = ranking(100, 50)

const nivelDeRanking = [
    {limite: 10, nível: "ferro" },
    {limite: 20, nível: "bronze" },
    {limite: 50, nível: "prata" },
    {limite: 80, nível: "ouro" },
    {limite: 90, nível: "diamante" },
    {limite: 100, nível: "lendario" },
    {limite: Infinity, nível: "imortal" }

];

let nivel = ""

for (let i = 0; i <nivelDeRanking.length; i++){
    if (nivel <= nivelDeRanking[i].limite){
        nivel = nivelDeRanking[i].nível
        break;
    }
}

console.log ("O Héroi tem o saldo de vitória de " + saldoDeVitoria  + " e está no nível: " + nivel)