class Veiculo {
    constructor(modelo, fabricante, anoModelo, anoFabricacao) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.anoModelo = anoModelo;
        this.anoFabricacao = anoFabricacao;
        this.velocidade = 0; // Inicializando a velocidade a 0
    }

    frear() {
        if (this.velocidade > 0) {
            this.velocidade = 0;
            console.log(`${this.modelo} está parando.`);
        } else {
            console.log(`${this.modelo} já está parada.`);
        }
    }

    acelerar() {
        if (this.velocidade === 0) {
            this.velocidade = 1;
            console.log(`${this.modelo} está acelerando: vrum!`);
        } else {
            console.log(`${this.modelo} já está em movimento.`);
        }
    }
}

class Moto extends Veiculo {
    constructor(modelo, fabricante, anoModelo, anoFabricacao, potencia) {
        super(modelo, fabricante, anoModelo, anoFabricacao);
        this.potencia = potencia;
    }
}

class Caminhao extends Veiculo {
    constructor(modelo, fabricante, anoModelo, anoFabricacao, capacidadeDeCarga) {
        super(modelo, fabricante, anoModelo, anoFabricacao);
        this.capacidadeDeCarga = capacidadeDeCarga;
    }
}

// Instanciando objetos da classe Moto
const motoDoMarcelo = new Moto("CBR 1000RR", "Honda", 2024, 2023, 189);
const motoDaDiva = new Moto("CB 500X", "Honda", 2024, 2023, 159);
const motoDoJoao = new Moto("MT-07", "Yamaha", 2023, 2022, 75);

// Instanciando objetos da classe Caminhao
const caminhaoDoCarlos = new Caminhao("Actros", "Mercedes-Benz", 2022, 2021, 18000);
const caminhaoDoPedro = new Caminhao("FH16", "Volvo", 2023, 2022, 25000);
const caminhaoDaAna = new Caminhao("Stralis", "Iveco", 2021, 2020, 20000);

console.log(motoDoMarcelo);
console.log(motoDaDiva);
console.log(motoDoJoao);
console.log(caminhaoDoCarlos);
console.log(caminhaoDoPedro);
console.log(caminhaoDaAna);

// Testando os métodos acelerar e frear para motoDoMarcelo
motoDoMarcelo.acelerar(); // Deve imprimir "CBR 1000RR está acelerando: vrum!"
motoDoMarcelo.acelerar(); // Deve imprimir "CBR 1000RR já está em movimento."
motoDoMarcelo.frear();    // Deve imprimir "CBR 1000RR está parando."
motoDoMarcelo.frear();    // Deve imprimir "CBR 1000RR já está parada."

// Testando os métodos acelerar e frear para motoDaDiva
motoDaDiva.acelerar(); // Deve imprimir "CB 500X está acelerando: vrum!"
motoDaDiva.acelerar(); // Deve imprimir "CB 500X já está em movimento."
motoDaDiva.frear();    // Deve imprimir "CB 500X está parando."
motoDaDiva.frear();    // Deve imprimir "CB 500X já está parada."

// Testando os métodos acelerar e frear para motoDoJoao
motoDoJoao.acelerar(); // Deve imprimir "MT-07 está acelerando: vrum!"
motoDoJoao.acelerar(); // Deve imprimir "MT-07 já está em movimento."
motoDoJoao.frear();    // Deve imprimir "MT-07 está parando."
motoDoJoao.frear();    // Deve imprimir "MT-07 já está parada."

// Testando os métodos acelerar e frear para caminhaoDoCarlos
caminhaoDoCarlos.acelerar(); // Deve imprimir "Actros está acelerando: vrum!"
caminhaoDoCarlos.acelerar(); // Deve imprimir "Actros já está em movimento."
caminhaoDoCarlos.frear();    // Deve imprimir "Actros está parando."
caminhaoDoCarlos.frear();    // Deve imprimir "Actros já está parado."

// Testando os métodos acelerar e frear para caminhaoDoPedro
caminhaoDoPedro.acelerar(); // Deve imprimir "FH16 está acelerando: vrum!"
caminhaoDoPedro.acelerar(); // Deve imprimir "FH16 já está em movimento."
caminhaoDoPedro.frear();    // Deve imprimir "FH16 está parando."
caminhaoDoPedro.frear();    // Deve imprimir "FH16 já está parado."

// Testando os métodos acelerar e frear para caminhaoDaAna
caminhaoDaAna.acelerar(); // Deve imprimir "Stralis está acelerando: vrum!"
caminhaoDaAna.acelerar(); // Deve imprimir "Stralis já está em movimento."
caminhaoDaAna.frear();    // Deve imprimir "Stralis está parando."
caminhaoDaAna.frear();    // Deve imprimir "Stralis já está parado."
