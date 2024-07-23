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

const motoDoMarcelo = new Moto("CBR 1000RR", "Honda", 2024, 2023, 189);
const motoDaDiva = new Moto("CB 500X", "Honda", 2024, 2023, 159);
const motoDoJoao = new Moto("MT-07", "Yamaha", 2023, 2022, 75);

console.log(motoDoMarcelo);
console.log(motoDaDiva);
console.log(motoDoJoao);

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
