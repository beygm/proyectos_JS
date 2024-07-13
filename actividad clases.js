class Persona{
    constructor (nombre,apellido ,edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this.edad = edad;
    }
    
    get nombre (){
        return this._nombre
    }
    set nombre (nombre){
         this._nombre = nombre;
    }

    get apellido (){
        return this._apellido

    }
    set apellido (apellido){
        this._apellido = apellido;
   }
    get edad (){
        return this._edad }
        
    set edad (edad){
            this._edad = edad;
    }

 nombrecompleto(){
    return this._nombre+' '+this._apellido;
 }
 toString(){
    return this.nombreCompleto();
}
}


class Empleado extends Persona {
    constructor(nombre, apellido, edad, sueldo){
        super (nombre, apellido, edad);
        this._sueldo = sueldo 
        
    }
    get sueldo() {
        return this._sueldo;
    }
   set sueldo(sueldo){
     this._sueldo = sueldo 
   }
   nombrecompleto(){
    return super.nombrecompleto()+ ' y su sueldo es de'+ this._sueldo}


}
class Cliente extends Persona {
    constructor(nombre, apellido, edad , fecha){
        super (nombre, apellido, edad);
        this._fecha = fecha 
        
    }
    get fecha() {
        return this._fecha;
    }
   set fecha(fecha){
     this._fecha = fecha 
   }
   nombrecompleto(){
    return super.nombrecompleto()+ ' y su sueldo es de'+ this._fecha}



   }


   let empleado = new Empleado ('beymar','guette',20,300000000000)
   console.log(empleado)
   let cliente = new Cliente ('beymar' ,'guette' ,20, '30 de noviembre')
   console.log (cliente)
