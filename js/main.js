`use strict`

// definisco un array per la listSpesa
const listaSpesa = [
    `Riso` 
    ,`Pasta` 
    ,`Caffe`
    ,`Latte`
    ,`Olio`
    ,`Zucchero`
    ,`Sale`
    ,`Verdure`
    ,`Detersivo`
    ,`Acqua`
    ,`Pane`
    ,`Formaggio`
]


// definisco una variabile per selezionare (body)
const body = document.querySelector(`body`)

// definisco una variabile per aggiungere al html (div, h1, ul, img)
const div = document.createElement(`div`)
const h1 = document.createElement(`h1`)
const ul = document.createElement(`ul`)
const img = document.createElement(`img`)

// aggiungo le variabile per mettere al suo posto con (append)
body.append (div)
div.append (h1)
div.append (ul)
div.append (img)

// aggiungo dei class ai (body, div, h1 ) 
body.classList.add(`bg-primary`, `text-white`)
div.classList.add(`container`)
h1.classList.add(`text-center`)

// aggiungo innerHTML e una immagini
h1.innerHTML=(`Lista di spesa`)
img.src=`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKxeJUrB212YEITYs94cFcx1cXLXXFjn0T98SeyNkRQ&s`

// definisco un ciclo
let zero = 0;
while (zero < listaSpesa.length) {
    
    // definisco una variabile per createElement(`li`)
    const li = document.createElement(`li`)

    // aggiungo le variabile per mettere al suo posto
    ul.append(li)
    li.append(listaSpesa[zero])


    zero++;
}
