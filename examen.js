class Alumnno{
    constructor(nombres,edad){
        this._nombres = nombres;
        this._edad = edad;
        
    }
}
class Maestro extends Alumnno{
    constructor(nombres,asignatura,edad){
        super(nombres,edad)
        this._edad=edad
        this._asignatura = asignatura
    }
    asignarCurso(curso, estudiante) {
        curso.asignarMaestro(this, estudiante);
      }
  }
class Estudiante extends Alumnno{
    constructor(nombre, edad){
        super(nombre, edad); 
        this.notas =[] 
    }
   agregarnota(nota){
    this.notas.push(nota)
   }
   Cpromedio(){
    const totalNotas = this.notas.reduce((tp, nota) => tp + nota, 0);
    return totalNotas / this.notas.length;
   }
   aprobmateria(){
    const promedio=this.Cpromedio();
    return promedio >=3 ?'aprobado':'reprobado';
   }
}
class Curso {
    constructor(materia) {
      this.materia = materia;
      this.maestro = null;
      this.estudiante = null;
    }
    asignarMaestro(maestro, estudiante){
        this.maestro = maestro;
        this.estudiante = estudiante;
    }
    agnotaestudiante(nota){
        this.estudiante.agregarnota(nota)   
    }
}
///estudiante e instructor
const instalvaro = new Maestro('alvaro valncia','diseño web',31);
const estubeymar = new Estudiante('beymar',20);
const cursodeweb = new Curso ('diseño web','alvaro','beymar');
instalvaro.asignarCurso(cursodeweb,estubeymar);
///notas 
const nota =[5,4,3,5,4];
nota.forEach(nota=>{cursodeweb.agnotaestudiante(nota)});
//promedio y aprobado
const Prombeymar = estubeymar.Cpromedio();0
const ebeymar=estubeymar.aprobmateria();

console.log(instalvaro )
console.log(estubeymar)
console.log(cursodeweb)
console.log(`El promedio de ${estubeymar.nombre} es ${Prombeymar.toFixed(2)}.`);
console.log(`beymar está ${ebeymar} en la materia.`);



