import './gerenciador-tarefas.css';
import { useRoutes } from 'hookrouter'
import ListarTarefas from './listar/listar-tarefas'
import CadastrarTarefas from './cadastrar/cadastrar-tarefa'
import AtualizarTarefa from './atualizar/atualizar-tarefa'


const routes = {
  '/': () => <ListarTarefas/>,
  '/cadastrar': ()=> <CadastrarTarefas/>,
  '/atualizar/:id': ({id}) => <AtualizarTarefa id={id}/>
}


function GerenciadorTarefas() {
  return useRoutes(routes)
}

export default GerenciadorTarefas;
