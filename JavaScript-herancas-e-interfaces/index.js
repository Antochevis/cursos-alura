import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionários/Gerente.js";
import { Diretor } from "./Funcionários/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
/*import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";*/

/*const cliente1 = new Cliente("Ricardo", 11122233309);
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;*/


//const cliente2 = new Cliente("Andrey", 12345678900); 
/*cliente2.nome = "Andrey"
cliente2.cpf = 12345678900;*/


//const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
/*contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;*/

//contaCorrenteRicardo.depositar(5000);
//contaCorrenteRicardo.sacar(1000);

//const contaPoupanca = new ContaPoupanca(500, cliente1, 1001);

//console.log(contaPoupanca);
//console.log(contaCorrenteRicardo);

/*const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(1000);
contaSalario.sacar(500);

console.log(contaSalario);*/


/*const contaCorrenteAndrey = new ContaCorrente();
contaCorrenteAndrey.agencia = 1101;
contaCorrenteAndrey.cliente = cliente2;*/

//const conta2 = new ContaCorrente(cliente2, 1101);
/*conta2.cliente = cliente2;
conta2.agencia = 1101;*/

//let valor = 200;
//contaCorrenteRicardo.transferir(valor, conta2);

//console.log("valor: ", valor);
//console.log(conta2);


//-------Funcionários-------

const diretor = new Diretor("Kauana", 2000, 12345678911);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Ana", 10000, 12345645622);
gerente.cadastrarSenha("123456")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");

console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);