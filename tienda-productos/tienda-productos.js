
/*Pintamos en el DOM los títulos de los productos*/

let url = "https://fakestoreapi.com/products/"


fetch (url)
    .then (response => response.json())
    .then (data => {
        //console.log(data)
        let productos = data
        console.log(productos)
        
        productos.map(titulo => {

            let nombre = titulo.title

            let li = document.createElement("li")
            li.textContent = `${nombre}`
            document.getElementById('listaproductos').appendChild(li)
       
        })
    })

    /*Pintamos un select con las categorías*/

    let url2 = `https://fakestoreapi.com/products/categories/`
   

    fetch (url2)
        .then (res => res.json())
        .then (data => {
            
            for (let i = 0; i < data.length; i++) {
                
                let categoria = data[i]
                const option = document.createElement('option')
            option.textContent = ('Todas las categorías', `${categoria}`)
            document.getElementById('selector').appendChild(option)
       
            }
           
            const selectElement = document.querySelector('.opciones');

            selectElement.addEventListener('change', buscarFetch)

            function buscarFetch(){

                

                


            }
            


           
        })


