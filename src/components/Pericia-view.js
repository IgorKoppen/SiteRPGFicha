export class PericiaView {

   pericia
   static NumPericia = 0;

   constructor(pericia) {
      this.pericia = pericia
   }

   render() {
      console.log("Render")
      const TablePericias = document.getElementById("TablePericias");
      this.pericia.forEach(pericia => {
         const periciaTd = this.criarPericia(pericia);
         TablePericias.appendChild(periciaTd);
      });
   }
   updateTotal(element) {
      const elementeNum = parseInt(element.dataset.index);
      const parentNode = element.parentElement.parentElement;
      parentNode.childNodes[3].firstChild.value = this.pericia[elementeNum].total;
   }

   updateTotalNivel() {
      const nivel = document.querySelectorAll(".nivelhalf")
      nivel.forEach((nivelinput, index) => {
         nivelinput.value = this.pericia[index].nivel
         this.updateTotal(nivelinput)
      })
   }
   updateAllnivel() {
      const allInputs = document.querySelectorAll(".nivelhalf")
      allInputs.forEach((input, index) => {
         input.value = this.pericia[index].nivel;
      })

   }

   criarPericia(pericia) {
      const periciaTr = document.createElement('tr');
      periciaTr.classList.add('Pericia');



      periciaTr.innerHTML = `
          <td>${pericia.nome}</td>
          <td><input type="number" value="${pericia.total}" data-index="${PericiaView.NumPericia + "-total"}" class="total" disabled="true"></td>
          <td><input type="number" value="${pericia.nivel}" data-index="${PericiaView.NumPericia}" class="nivelhalf" disabled="true"></td>
          <td class="Tipo" data-index="${PericiaView.NumPericia}">${pericia.tipo}</td>
          <td><input type="number" value="${pericia.treino}" class="treino" data-index="${PericiaView.NumPericia}"></td>
          <td><input type="number" value="${pericia.outros}" class="outros" data-index=" ${PericiaView.NumPericia}"></td>
      `
      PericiaView.NumPericia++
      return periciaTr;
   }


}