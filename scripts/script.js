let black = 'black'
let blue = 'blue' 
let ciano = 'cyan'
let green = 'green'
let brown = 'brown'
let purple = 'purple'
let pink = 'pink'

let n = 0

let colors = [black, blue, ciano, green, brown,  purple, pink]

let colors_name = ['Preto', 'Azul', 'Ciano', 'Verde', 'Marrom', 'Roxo', 'Rosa']

function change(){
    name_color = document.querySelector('div#screen > p > span')
    main = document.querySelector('body')


    if (n <= 6){
        name_color.innerHTML = colors_name[n]
        main.style.backgroundColor = colors[n]
        n++
    } else{      
        n = 0
        name_color.innerHTML = colors_name[n]
        main.style.backgroundColor = colors[n]
    }

    console.log(colors[n])

}