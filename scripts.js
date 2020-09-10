function mostrar(id){
    var elemento = document.getElementById(id);
    var cl = document.getElementsByName("drop");
    document.getElementById("java").classList.remove('active');
    document.getElementById("python").classList.remove('active');
    document.getElementById("webapp").classList.remove('active');
    document.getElementById("contacto").classList.remove('active');
    document.getElementById("habilidades").classList.remove('active');
    document.getElementById("inicio").classList.remove('active');
    if(elemento!=null){
        elemento.classList.add("active");
    }
}