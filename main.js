function iniciar(){

        const body = document.body;

        body.classList.remove('body');
        body.classList.add('body2');

        let divInicio = document.getElementById("divInicio");
        let divFlores = document.getElementById("divFlores");

        divInicio.style.display = "none";
        divFlores.style.display = "block";

        let audio = document.getElementById("player");
        audio.play();

        document.body.classList.remove("container");    
}