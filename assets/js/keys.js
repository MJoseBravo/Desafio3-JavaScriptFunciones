let cambioColor = ''
let actionType = ''

    document.addEventListener("keydown", function(event){
        if (event.key === "a" || event.key === "A"){
            cambioColor ='pink'
            actionType = 'pintar'
        } else if (event.key === "s" || event.key === "S"){
            cambioColor ='orange'
            actionType = 'pintar'
        } else if (event.key === "d" || event.key === "D"){
            cambioColor ='skyblue'
            actionType = 'pintar'
        } else if (event.key === "q" || event.key === "Q"){
            cambioColor ='purple'
            actionType = 'box'
        } else if (event.key === "w" || event.key === "W"){
            cambioColor ='gray'
            actionType = 'box'
        } else if (event.key === "e" || event.key === "E"){
            cambioColor ='brown'
            actionType = 'box'
        }
        action (cambioColor, actionType)
    })

    function action(color, actionType){
        if (actionType === 'pintar'){
            pintarColor(color)
        } else if (actionType === 'box'){
            nuevoBox(color)
        }
    }

    function pintarColor(color){
        key = document.getElementById("key");
        key.style.backgroundColor = color
    }

    function nuevoBox(color){
        const nuevoBox = document.createElement('div')
        document.body.appendChild(nuevoBox)
        nuevoBox.style.width = '200px'
        nuevoBox.style.height = '200px'
        nuevoBox.style.backgroundColor = color
        nuevoBox.style.border = 'solid 1px black' 
    }

   