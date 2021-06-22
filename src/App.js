import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Card from './componentes/Card';
import Item from './componentes/Item/item';

function App() {


  

  const [tarefas, setTarefas] = useState([])
  const adicionarCard = (tarefa) => {
    setTarefas([
      tarefa,
      ...tarefas
    ])
  }

  const excluir = (xpto) => {
    tarefas.splice(xpto, 1)
    setTarefas([
      ...tarefas
    ])
  }

  return (
    <div>
      <Formulario aoSalvar={adicionarCard}/>
      <Card>
        {tarefas.map((item, indice) => 
          // <li key={indice}>
          //   {item.tarefa} - [ <a href="/#" onClick={() => { excluir(indice) }}>excluir</a> ]
          // </li>
        <Item key={indice} excluir={excluir} indice={indice} item={item.tarefa}/>
        
        )}
      </Card>
    </div>
  );
}

export default App;