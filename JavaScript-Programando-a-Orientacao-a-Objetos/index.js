import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
/*cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;*/


const cliente2 = new Cliente("Andrey", 12345678900); 
/*cliente2.nome = "Andrey"
cliente2.cpf = 12345678900;*/


const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
/*contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;*/

contaCorrenteRicardo.depositar(5000);


/*const contaCorrenteAndrey = new ContaCorrente();
contaCorrenteAndrey.agencia = 1101;
contaCorrenteAndrey.cliente = cliente2;*/

const conta2 = new ContaCorrente(cliente2, 1101);
/*conta2.cliente = cliente2;
conta2.agencia = 1101;*/

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log("valor: ", valor);
console.log(conta2);
