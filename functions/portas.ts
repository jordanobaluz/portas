import PortaModel from "../model/porta";

//irá criar as portas por um array espeficando o tamanho e se está selecionada
export function criarPortas(qtde: number, selecionada: number): PortaModel[]{
    return Array.from({ length: qtde}, (_,i) => {
        const numero = i + 1
        const temPresente = numero === selecionada
        return new PortaModel(numero, temPresente)
    })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[]{
    return portas.map(portaAtual => {
        const igualModificada = portaAtual.numero === portaModificada.numero

        if(igualModificada){
            return portaModificada
        } //irá retornar a porta e desselecionar as outra, se estiver aberta nao mexe e retorna a propria porta
        else {
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })
}