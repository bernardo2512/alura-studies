import { TarefaInterface } from '../../types/tarefa';
import Item from './item';
import style from './Lista.module.scss'

interface Props {
    tarefas: TarefaInterface[],
    selecionaTarefa: (tarefaSelecionada: TarefaInterface) => void
}

export default function Lista({tarefas, selecionaTarefa}: Props){
   
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map(item => (
                   <Item 
                   selecionaTarefa = {selecionaTarefa}
                   key={item.id}
                    {...item}
                   />
                ))}
            </ul>
        </aside>
    )
}