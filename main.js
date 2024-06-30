const botaoAdiciona = document.querySelector("button");
const inputTarefa = document.querySelector('#tarefa');
const lista = document.querySelector("#lista");

botaoAdiciona.addEventListener('click', adicionaTarefa);

function adicionaTarefa(){  

    if(inputTarefa.value.length >3){
        let itemDiv = document.createElement('div');
        itemDiv.id = "divLista";

        let li = document.createElement('li');
        li.innerText = inputTarefa.value;
        itemDiv.appendChild(li);

        let btnFeito = document.createElement('button');
        btnFeito.id = "btnFeito";
        let btnRemover = document.createElement('button');
        btnRemover.id = "btnRemover";


        btnRemover.innerHTML = '<i class="fa fa-minus-circle fa-xs">Remover</i>'


        itemDiv.appendChild(btnRemover)


        lista.appendChild(itemDiv);

        inputTarefa.value = "";
    }
}
    inputTarefa.addEventListener("keyup", (evento)=>{
        if(evento.key == "Enter"){
            adicionaTarefa();
        }
    } );

    lista.addEventListener('click', listAction);

    function listAction(evento){
        if(evento.target.nodeName == "BUTTON" && evento.target.id == "btnFeito"){
            evento.target.parentElement.classList.toggle('completa');
        }
        if(evento.target.nodeName == "BUTTON" && evento.target.id == "btnRemover"){
            let paiDoBotaoRemover = evento.target.parentElement;
            paiDoBotaoRemover.remove();
                
        }
    }

