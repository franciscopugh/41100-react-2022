class Pokemon {
    constructor(nombre, tipo, vidas, ataque) {
        this.nombre = nombre
        this.tipo = tipo
        this.vidas = vidas
        this.ataque = ataque
        this.nivel = 1
    }
}

export class Electrico extends Pokemon {
    constructor(nombre, tipo, vidas, ataque, dañoImpactrueno) {
        super(nombre, tipo, vidas, ataque)
        this.dañoImpactrueno = dañoImpactrueno
    }
}

export class Fuego extends Pokemon{
    constructor(nombre, tipo, vidas, ataque, dañoLlamarada) {
        super(nombre, tipo, vidas, ataque)
        this.dañoLlamarada = dañoLlamarada
    }
}

export class Normal extends Pokemon{
    constructor(nombre, tipo, vidas, ataque, dañoTackle) {
        super(nombre, tipo, vidas, ataque)
        this.dañoTackle = dañoTackle
    }
}
