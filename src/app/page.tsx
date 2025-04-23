import TodoForm from '@/components/TodoForm'
import TodoTable from '@/components/TodoTable'

import { getTodoListAction } from '../../actions/todo.actions'

const Home = async () => {
  const todos = await getTodoListAction()
  return (
    <main className='container'>
      <TodoTable todos={todos} />
      <TodoForm />
    </main>
  )
}

export default Home