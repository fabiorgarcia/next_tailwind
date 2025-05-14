import Image from "next/image";
import profile from '../public/logo.svg'


const data = await fetch('https://my-json-server.typicode.com/fabiorgarcia/next_tailwind/products')
const posts = await data.json()


export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 content justify-center items-center">
          <Image
              src={profile}
              width={50}
              height={50}
              alt="Gerenciamento de Produtos"
            />
          <h1 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">Gerenciamento de Produtos</h1>
        </div>

        <div className="sm:flex gap-1  ">
          

          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor"  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" className="sm:mb-0 mb-2 w-full sm:w-64 flex-auto block p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Procure pelo Nome do Produto..." required />
          </div>

            <input type="date" id="default-datepicker"  className="sm:mb-0 mb-2 w-full sm:w-32 flex-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
            <input type="date" id="default-datepicker"  className="sm:mb-0 mb-2 w-full sm:w-32 flex-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />


          <button type="submit" className="w-full sm:w-14 flex-none p-2.5 sm:ms-2 text-sm font-medium text-white bg-gray-500 rounded-lg border border-gray-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-500 dark:focus:ring-blue-800 ">
              <svg className="w-4 h-4 inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search</span>
          </button>

        </div>

        <div className="md:rounded-lg md:p-8 md:bg-white grid grid-cols-1 gap-4 ">

          <div className="font-semibold hidden md:flex  bg-white border-b-1 border-gray-300">
            <div className="w-2/7 p-2">Nome do Produto</div>
            <div className="w-1/7 p-2">Categoria</div>
            <div className="w-1/7 p-2">Preço</div>
            <div className="w-2/7 p-2">Descrição</div>
            <div className="w-1/7 p-2">Imagem</div>
          </div>

          <div className="md:flex md:p-0 p-4 bg-white hover:bg-gray-100 rounded-lg md:border-b-1 border-gray-200">
            <div className="md:w-2/7 mb-1 p-1">
              <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Nome do Produto</label>
              <div>Cafeteira Espresso 3 Corações Lov Preto</div>
            </div>
            <div className="md:w-1/7 mb-1 p-1">
              <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
              <div>Eletroportáteis</div>
            </div>
            <div className="md:w-1/7 mb-1 p-1">
              <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Preço</label>
              <div>R$ 379,05</div>
            </div>
            <div className="md:w-2/7 mb-1 p-1">
              <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
              <div className="textDescr">A Lov é uma cafeteira de espressos e multibebidas da Tres. Na cor preta, ela é automática e de multipressão, com extração silenciosa garante cafés espressos perfeitos, bebidas cremosas, cafés filtrados e chás ao simples toque de um botão.</div>
            </div>
            <div className="w-full md:w-1/7 p-1">
              <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Imagem</label>
              <div className="textShort">https://a-static.mlcdn.com.br/280x210/cafeteira-espresso-3-coracoes-lov-preto/magazineluiza/236950400/fa6fb47c81a1aa56ad88dc5bbe4696f6.jpg</div>
            </div>
          </div>

          <div className="md:flex md:p-0 p-4 bg-white hover:bg-gray-100 rounded-lg md:border-b-1 border-gray-200">
            <div className="md:w-2/7 mb-1 p-1">
              <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Nome do Produto</label>
              <div>Cafeteira Espresso 3 Corações Lov Preto</div>
            </div>
            <div className="md:w-1/7 mb-1 p-1">
              <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
              <div>Eletroportáteis</div>
            </div>
            <div className="md:w-1/7 mb-1 p-1">
              <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Preço</label>
              <div>R$ 379,05</div>
            </div>
            <div className="md:w-2/7 mb-1 p-1">
              <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
              <div className="textDescr">A Lov é uma cafeteira de espressos e multibebidas da Tres. Na cor preta, ela é automática e de multipressão, com extração silenciosa garante cafés espressos perfeitos, bebidas cremosas, cafés filtrados e chás ao simples toque de um botão.</div>
            </div>
            <div className="w-full md:w-1/7 p-1">
              <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Imagem</label>
              <div className="textShort">https://a-static.mlcdn.com.br/280x210/cafeteira-espresso-3-coracoes-lov-preto/magazineluiza/236950400/fa6fb47c81a1aa56ad88dc5bbe4696f6.jpg</div>
            </div>
          </div>

        </div>

      </div>

      <ul>
      {posts.map((item: any) => (
        <li key={item.id}>{item.name}{item.category}</li>
      ))}
    </ul>
    </main>
    
  );
}
