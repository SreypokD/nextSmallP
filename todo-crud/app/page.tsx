import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import { TodoList } from "./components/TodoList";



export default async function Home() {
  //getAllTodos function from api
  const   tasks = await getAllTodos();
  return (
    <main className="max-w-4xl mx-auto mt-4 ">
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo Task List</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  )
}
