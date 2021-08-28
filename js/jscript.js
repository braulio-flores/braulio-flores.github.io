
class animal {
	animal(especie,edad,color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
	}
}

const perro  = new animal("perro",5,"red");

// document.write("hola");
document.write(perro.especie);
