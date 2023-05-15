import { useState } from "react"

const App = () => {

    const [tarefas, setTarefas] = useState([]);
    const [tarefa,setTarefa] = useState("");

    const addTarefas = () => {
        if(tarefa !== ""){
            setTarefas([...tarefas,tarefa])
            setTarefa("");
            console.log(tarefas);
        }
    }
    const deleteTarefas = (index) => {
        const atualizarList = [...tarefas];
        console.log('Automatico...')
        //delete atualizarList[index];
        atualizarList.splice(index,1)
        setTarefas(atualizarList)
    }

    return(
        <div className="flex flex-col items-center">
             
            <h1 className="text-4xl m-16 font-bold text-white">Minhas Tarefas</h1>
                <div className="p-6">
                    <input className="bg-slate-100 rounded-md p-3 m-3"
                    type="text"
                    value={tarefa}
                    onChange={(t)=>{
                        setTarefa(t.target.value);
                    }}
                    placeholder="Crie uma nova tarefa"/>
                    <button  onClick={addTarefas}
                        className="bg-sky-500 text-white p-3 m-3 rounded-md font-semibold hover:bg-sky-700">Tarefa <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 inline">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <div>
                        {tarefas?.length > 0 ? (
                            <ul>
                                {
                                    tarefas.map((tarefa,index)=>(
                                        <div className="flex bg-slate-500 m-4 py-4 pl-12 pr-4 rounded-md" key={index}>
                                            <li className="self-center text-white font-semibold pr-10 mr-6 grow">{tarefa}</li>
                                            <button onClick={()=>{deleteTarefas(index)}} 
                                            className="bg-red-500 text-white p-2 mx-1 font-semibold rounded-md hover:bg-red-600 ">Delete<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mb-1 pl-1 inline">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                          </svg>
                                          </button>
                                        </div>

                                    ))
                                }
                            </ul>

                        ):(
                            <div>
                                <p className="text-white flex pt-5 ml-20">Nenhuma tarefa encontrada</p>
                            </div>
                        )}
                    </div>

                    
                </div>
        
        </div>

        
    )
    
}


export default App