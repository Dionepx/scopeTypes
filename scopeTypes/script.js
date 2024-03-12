// 3 tipos de escopos em JS

//OBS: let e const se limitam por escopo, o var nao.

// 1° tipo: Escopo de funcoes:
function getMessage() {
     let message = 'oi'
   }
   // console.log(message) -> message nao existe fora do escopo da funcao
   
   // 2° tipo: Escopo de blocos:
   if (true) { // if (true) -> codigo sempre sera executado
     let dragon = 'Balerion'
     var color = 'red'
   }
   // console.log(dragon) //-> dragon nao existe fora do escopo de bloco
   // console.log(color) //-> color sera exibido por ser uma var (nao se limita por escopo)
   
   // 3° tipo: Escopo de léxico: funcoes aninhadas estao sujeitas a buscar variaveis no escopo ACIMA DELA
   
   const external = () => {
     const book = 'Sapiens'
   
     const internal = () => { 
       console.log(book.toUpperCase())
     }
   
     internal()
   }
   