export default function Tarefas({ tarefas, tarefa, terminadas, setTerminadas }) {

    function terminarTarefa(tarefaTerminada) {
        const novoArray = [...terminadas, tarefaTerminada];
        setTerminadas(novoArray);
        if(tarefas.length - novoArray.length > 0) {
            alert(`Agora so faltam ${tarefas.length - novoArray.length} tarefas! Uhull!`)
        } else {
            alert("Você terminou tudo, parabéns!")
        }
        
    }

    return (
        <li 
                className={`tarefa ${terminadas.includes(tarefa) ? "finalizada" : ""}`} 
                onClick={() => terminarTarefa(tarefa)}
                >

                <ion-icon name={terminadas.includes(tarefa) ? "checkmark-circle" : "ellipse-outline"}></ion-icon>
               {tarefa}
            </li>
    );
}