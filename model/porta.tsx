export default class PortaModel {
    // atributo privado
    #numero: number
    #temPresente: boolean
    #selecionada: boolean
    #aberta: boolean

    constructor(numero: number, temPresente = false, selecionada = false, aberta = false) {
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get numero() {
        return this.#numero
    }
    get temPresente() {
        return this.#temPresente
    }
    get selecionada() {
        return this.#selecionada
    }
    get aberta() {
        return this.#aberta
    }
    get fechada() {
        return !this.#aberta
    }

    //se a porta tiver aberta, irá fechar e vice versa, modificando o atributo do objeto, como se fosse um metodo set
    //gera uma copia do objeto e não irá mexer no original
    alternaSelecionada() {
        const selecionada = !this.selecionada
        return new PortaModel(this.numero, this.temPresente, selecionada, this.#aberta)
    }

    abrir() {
        const aberta = true
        return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta)
    }

    desselecionar() {
        const selecionada = false
        return new PortaModel(this.numero, this.temPresente, selecionada, this.#aberta)
    }
}