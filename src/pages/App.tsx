import React, { useState } from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario'
import Lista from '../components/lista';
import { TarefaInterface } from '../types/tarefa';
import app from './App.module.scss'

function App() {
   const [tarefas, setTarefas] = useState<TarefaInterface[] | []>([])

   const [selecionado,setSelecionado] = useState<TarefaInterface>()

   function selecionaTarefa(tarefaSelecionada: TarefaInterface){
      setSelecionado(tarefaSelecionada)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({...tarefa,selecionado: tarefa.id === tarefaSelecionada.id? true: false})))
   }

   function finalizarTarefa(){
      if(selecionado){
        setSelecionado(undefined)
        setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>{
          if(tarefa.id === selecionado.id){
              return {
                ...tarefa,
                selecionado:false,
                completado:true
              }
          }
          return tarefa
        }))
      }
   }
  return (
    <div className={app.AppStyle}>
     <Formulario setTarefas = {setTarefas}/>
     <Lista tarefas = {tarefas} selecionaTarefa={selecionaTarefa}/>
     <Cronometro selecionado = {selecionado} finalizarTarefa= {finalizarTarefa}/>
    </div>
  );
}

export default App;
