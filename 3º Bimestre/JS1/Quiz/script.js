const botoes = document.querySelectorAll('button');

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        if(index===0){
            const opcaoCorreta = document.querySelector('input[value="16 de Fevereiro de 1990"]');


        if(opcaoCorreta.checked){
            let correto = document.querySelectorAll(".correct")[index];

            correto.style.display = "block";

            let incorreto = document.querySelectorAll(".incorrect")[index];
                
            incorreto.style.display = "none";
        }
        else{
                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "block";
            }
        }
        if(index===1){
            const opcaoCorreta = document.querySelector('input[value="Xo"]');

            if(opcaoCorreta.checked){
                let correto = document.querySelectorAll(".correct")[index];

                correto.style.display = "block";

                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "none"; 
            }
                else{ 
                    let incorreto = document.querySelectorAll(".incorrect")[index];
                    incorreto.style.display = "block";
                }
        }
        if(index===2){
            const opcaoCorreta = document.querySelector('input[value="Abel"]');

            if(opcaoCorreta.checked){
                let correto = document.querySelectorAll(".correct")[index];

                correto.style.display = "block";

                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "none";
            }
            else{
                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "block";
            }
        }
        if(index===3){
            const opcaoCorreta = document.querySelector('input[value="4 álbuns"]');

            if(opcaoCorreta.checked){
                let correto = document.querySelectorAll(".correct")[index];

                correto.style.display = "block";

                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "none";
            }
            else{
                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "block";
            }
         }
         if(index===4){
            const opcaoCorreta = document.querySelector('input[value="Canadá"]');

            if(opcaoCorreta.checked){
                let correto = document.querySelectorAll(".correct")[index];

                correto.style.display = "block";

                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "none";
            }
            else{
                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "block";
            }
         }
    })
})