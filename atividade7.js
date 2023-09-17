//aluno: Céu do Nascimento
class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
      this.agencia = agencia;
      this.numero = numero;
      this.tipo = tipo;
      this._saldo = saldo;
    }
  
    get saldo() {
      return this._saldo;
    }
  
    set saldo(novoSaldo) {
      this._saldo = novoSaldo;
    }
  
    depositar(valor) {
      if (valor > 0) {
        this._saldo += valor;
        console.log(`Depósito de R$${valor} feito. Novo saldo na conta: R$${this._saldo}`);
      } else {
        console.log("Valor de depósito inválido. Por favor, tente novamente mais tarde.");
      }
    }
  
    sacar(valor) {
      if (valor > 0 && valor <= this._saldo) {
        this._saldo -= valor;
        console.log(`Saque de R$${valor} feito. Novo saldo: R$${this._saldo}`);
      } else {
        console.log("Não autorizado. Saldo na conta insuficiente ou o valor é inválido. Por favor, tente novamente mais tarde.");
      }
    }
  }
  
  class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
      super(agencia, numero, "Conta Corrente", saldo);
      this.cartaoCredito = cartaoCredito;
    }
  
    get cartaoCredito() {
      return this._cartaoCredito;
    }
  
    set cartaoCredito(novoCartaoCredito) {
      this._cartaoCredito = novoCartaoCredito;
    }
  }
  
  class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
      super(agencia, numero, "Conta Poupança", saldo);
    }
  }
  
  class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
      super(agencia, numero, "Conta Universitária", saldo);
    }
  
    sacar(valor) {
      if (valor > 0 && valor <= 500 && valor <= this._saldo) {
        this._saldo -= valor;
        console.log(`Saque de R$${valor} feito. Novo saldo: R$${this._saldo}`);
      } else {
        console.log("Saque não autorizado. Saldo insuficiente, valor digitado inválido ou valor digitado acima do limite permitido.");
      }
    }
  }
  
  // Exemplo de uso das classes
  const contaCorrente = new ContaCorrente("001", "12345", 1000, 1000);
  contaCorrente.depositar(500);
  contaCorrente.sacar(300);
  console.log("Saldo da sua Conta Corrente:", contaCorrente.saldo);
  
  const contaPoupanca = new ContaPoupanca("002", "54321", 5000);
  contaPoupanca.depositar(1000);
  contaPoupanca.sacar(2000);
  console.log("Saldo da sua Conta Poupança:", contaPoupanca.saldo);
  
  const contaUniversitaria = new ContaUniversitaria("003", "67890", 800, 500);
  contaUniversitaria.depositar(300);
  contaUniversitaria.sacar(700);
  console.log("Saldo da sua Conta Universitária:", contaUniversitaria.saldo);