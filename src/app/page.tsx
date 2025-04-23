import TodoForm from '@/components/TodoForm'
import TodoTable from '@/components/TodoTable'

import {  getTodoListAction } from '../../actions/todo.actions'

const Home = async () => {
  const todos = await getTodoListAction()
  return (
    <main className="container">
      <div className="mx-auto flex w-full lg:w-3/4 flex-col justify-center space-y-4 mt-10">
        <TodoForm />
        <TodoTable todos={todos} />
      </div>
    </main>
  )
}

export default Home