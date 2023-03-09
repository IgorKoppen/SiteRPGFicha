export class FichaView {

 ficha
constructor(fichas){
    this.ficha = fichas
}

    render(){
        this.root = document.querySelector("#root");
        const Ficha = this.CriarFicha();
    }

    
CriarFicha() {
    root.innerHTML =  `<form class="formFicha" action="" id="Form">
    <section>
        <div class="FichaInfoTop">
            <div>
                <input type="text" placeholder="Nome Personagem" name="NomePersonagem">
                <label for="NomePersonagem">PERSONAGEM</label>
            </div>
            <div> <label for="NomeJogador">JOGADOR</label>
                <input type="text" placeholder="Nome Jogador" name="NomeJogador" id="PlayerName">
            </div>
            <img src="src/assets/Imgs/RpgLogo.jpg" width="100%" draggable="false">
        </div>
        <div class="OriginsDiv">
            <div>
                <input type="text" name="RACA" placeholder="Raça">
                <label for="RACA">RAÇA</label>
            </div>
            <div>
                <input type="text" name="ORIGER" placeholder="Origem">
                <label for="ORIGER">ORIGEM</label>
            </div>
            <div class="DivClassNivel">
                <div> <input type="text" name="CLASS" placeholder="Class">
                    <label for="CLASS">CLASS</label>
                </div>
                <div> <input type="number" name="NÍVEL" id="Nivel" placeholder="Nível">
                    <label for="NÍVEL">NÍVEL</label>
                </div>

            </div>
            <div>
                <input type="text" name="DIVINDADE" placeholder="Divindade">
                <label for="DIVINDADE">DIVINDADE</label>
            </div>
        </div>
    </section>
    <section class="BodyInformation">
    <sectino class="MainSection">
        <div class="AtributosDiv">
            <div class="Atributo"><label for="Força">FOR</label><input type="number" name="Força" id="forca"
                    class="EventInputAtributo" data-nameAtribute="For">
                <div>
                    <h3 id="ForcaModificador">0</h3>
                </div>
            </div>
            <div class="Atributo"><label for="Destreza">DES</label><input type="number" name="Destreza"
                    class="EventInputAtributo" data-nameAtribute="Des">
                <div>
                    <h3 id="DestrezaModificador">0</h3>
                </div>
            </div>
            <div class="Atributo"><label for="Constituição">CON</label><input type="number"
                    name="Constituição" class="EventInputAtributo" data-nameAtribute="Con">
                <div>
                    <h3 id="ConstituicaoModificador">0</h3>
                </div>
            </div class="Atributo">
            <div><label for="Inteligencia">INT</label><input type="number" name="Inteligencia"
                    class="EventInputAtributo" data-nameAtribute="Int">
                <div>
                    <h3 id="InteligenciaModificador">0</h3>
                </div>
            </div class="Atributo">
            <div><label for="Sabedoria">SAB</label><input type="number" name="Sabedoria"
                    class="EventInputAtributo" data-nameAtribute="Sab">
                <div>
                    <h3 id="SabedoriaModificador">0</h3>
                </div>
            </div class="Atributo">
            <div><label for="Carisma">CAR</label><input type="number" name="Carisma"
                    class="EventInputAtributo" data-nameAtribute="Car">
                <div>
                    <h3 id="CarismaModificador">0</h3>
                </div>
            </div>
        </div>
        <section class="HPAndManaDiv">
            <div class="DivContadorHPouMana">
                <div>
                    <br>
                    <input type="text" name="MaximoHp" class="InputMaximo">
                    <label for="MaximoHp">Máximo</label>
                </div>
                <div>
                    <label for="PontoVida"> PONTOS DE VIDA</label>
                    <input type="text" name="PontoVida">
                    <h4>Atuais</h4>
                </div>
            </div>
            <div class="DivContadorHPouMana">
                <div>
                    <br>
                    <input type="text" name="MaximoMana" class="InputMaximo">
                    <label for="MaximoHp">Máximo</label>
                </div>
                <div>
                    <label for="PontoVida"> PONTOS DE MANA</label>
                    <input type="text" name="PontoVida">
                    <h4>Atuais</h4>
                </div>
            </div>

        </section>
        <div class="AtaquesDiv">
            <table>
                <thead>
                    <tr>
                        <th>ATAQUES</th>
                        <th>TESTE DE ATAQUE</th>
                        <th>DANO</th>
                        <th>CRÍTICO</th>
                        <th>TIPO</th>
                        <th>ALCANCE</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                    </tr>
                    <tr>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                    </tr>
                    <tr>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                    </tr>
                    <tr>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <section class="MainDefense">
            <div>
                <div class="DefesaDiv">
                    <div class="boxTotalDefesa">
                        <label></label>DEFESA</label>
                        <h3 id="TotalDef">10</h3>
                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Mod. de Des</th>
                                    <th>Bônus de armadura</th>
                                    <th>Bônus de escudo</th>
                                    <th>Outros</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td><input type="text" class="InputDef"></td>
                                <td><input type="text" class="InputDef"></td>
                                <td><input type="text" class="InputDef"></td>
                                <td><input type="text" class="InputDef"></td>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ARMADURA & ESCUDO</th>
                                <th>Defesa</th>
                                <th>Penalidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text"></td>
                                <td><input type="text"></td>
                                <td><input type="text"></td>
                            </tr>
                            <tr>
                                <td><input type="text"></td>
                                <td><input type="text"></td>
                                <td><input type="text"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="BoxProficiencias">
                <label for="Proficiencias">PROFICIÊNCIAS & OUTRAS CARACTERÍSTICAS</label>
                <textarea name="Proficiencias"></textarea>
            </div>
        </section>
        <section class="divHabilidades">
            <label for="HABILIDADES">HABILIDADES & MAGIAS</label>
            <div class="DivTextArea">
            <textarea name="HABILIDADES"></textarea>
            </div>
        </section>
        </sectino>
        <aside class="PericiasDiv">
            <div>
                <table class="TabPericiasMain">
                    <thead>
                        <tr>
                            <th>Péricias</th>
                            <th>TOTAL</th>
                            <th>1/2 do nível</th>
                            <th>Mod de atributo</th>
                            <th>Treino</th>
                            <th>Outros</th>
                        </tr>
                       
                    </thead>
                    <tbody id="TablePericias">
                 

                    </tbody>

                </table>
                <div>
                    <p>Penalidade de armadura. Somente treinado</p>
                </div>
            </div>
            <div class="EquipamentosDiv">
                <h3>EQUIPAMENTOS</h3>
                <textarea></textarea>
                <div class="DinheiroDiv">

                    <div>
                        <label for="Dinheiro">T$</label>
                        <input type="text" name="Dinheiro">
                    </div>
                    <div>
                        <label for="TO">TO</label>
                        <input type="text" name="To">
                    </div>
                </div>

            </div>
        </aside>
    </section>
</form>`

 }
    
}