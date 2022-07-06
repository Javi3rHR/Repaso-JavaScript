class Vehiculo{
static ruedas=4;

trayecto = ["Bilbao", "Madrid"];
constructor(marca){
this._marca = marca;
}
get marca()
{
return this._marca;
}
set marca(m)
{
this._marca=m;
}

saludo()
{
alert("hola");
}
}

let v1 = new Vehiculo("Lamborgini");

let v2 = Object.assign({},v1);

//let v2 = JSON.parse(JSON.stringify(v1));


v2.trayecto[0]="Badalona";
alert(`V1 ${v1.marca}`);
alert(`V2 ${v2.marca}`);