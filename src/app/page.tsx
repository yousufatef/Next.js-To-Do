import TodoForm from '@/components/TodoForm'
import TodoTable from '@/components/TodoTable'

import { getUserTodosAction } from '../../actions/todo.actions'
import { auth } from '@clerk/nextjs/server'

const Home = async () => {
  const { userId } = await auth()

  const todos = await getUserTodosAction({ userId })
  return (
    <main className="container">
      <div className="mx-auto flex w-full lg:w-3/4 flex-col justify-center space-y-4 mt-10">
        <TodoForm userId={userId} />
        <TodoTable todos={todos} />
      </div>
    </main>
  )
}

export default Home