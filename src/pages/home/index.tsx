import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-2">
      <h1 className='text-3xl font-bold text-blue-700 underline'>
        Atletas do Rei Pelé
      </h1>
      <Link
        className="mt-4 border border-zinc-400 p-1 rounded bg-green-500 hover:bg-green-200 hover:border-2 duration-700 font-medium"
        to='/formulariocadastral'
      >
        Página de cadastro
      </Link>
    </div>
  )
}
