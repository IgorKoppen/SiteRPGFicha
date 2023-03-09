export class AtributosPersonagem {

    constructor(forca, destreza, constituicao, inteligencia, sabedoria, carisma) {

        this._forca = forca;
        this._destreza = destreza;
        this._constituicao = constituicao;
        this._inteligencia = inteligencia;
        this._sabedoria = sabedoria
        this._carisma = carisma

    }

    get forca() {
        return this._forca
    }
    get destreza() {
        return this._destreza
    }

    get contituicao() {
        return this._constituicao
    }

    get inteligencia() {
        return this._inteligencia
    }

    get sabedoria() {
        return this._sabedoria
    }

    get carisma() {
        return this._carisma
    }

    set forca(newForca) {
        this._forca = newForca;
    }
    set destreza(newValue) {
        this._destreza = newValue;
    }
    set contituicao(newValue) {
        this._constituicao = newValue;
    }
    set inteligencia(newValue) {
        this._inteligencia = newValue;
    }
    set sabedoria(newValue) {
        this._sabedoria = newValue;
    }
    set carisma(newValue) {
        this._carisma = newValue;
    }


    calcMod(valor) {
        const ModFicador = Math.floor((valor / 2) - 5);
        return ModFicador > 0 ? "+" + ModFicador : ModFicador;
    }



}