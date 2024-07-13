//constructor que sirva para crear objetos diferentes

function datos(nombre,apellido, email){
    this.nombre = nombre
    this.apellido = apellido
    this.email = email
    this.nombrecompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let padre = new datos('brayan','ruiz','xx@gmail.com', 300155684);
let madre = new datos('maria', 'carrera', 'mcarrera@gmail.com', 301245681)
let abuela = new datos('mariana', 'carrascal', 'marianacc@gmail.com', 301245681)




console.log(padre)
console.log(madre)
console.log(abuela)