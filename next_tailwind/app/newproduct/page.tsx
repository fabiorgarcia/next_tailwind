'use client'

import Link from "next/link";
import Header from "@/components/header";
import Image from "next/image";
import iconhome from "@/public/home.svg"
import ButtonSubmit from "@/components/buttonSubmit";
import ButtonCancel from "@/components/buttonCancel";



export default function Product( getDados:any ) {



function validaForm(e:any) {
    e.preventDefault();
    getDados = e;
}
  
  
  return (
    <main>
      <div className="flex flex-col gap-6">
        
        <Header title='Gerenciamento de Produtos' />
        
        <div className="flex gap-2">
          <Link href={'/'}>
            <Image
                  src={iconhome}
                  width={25}
                  height={25}
                  alt="Home"
              />
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 "> ⁄ Cadastro de Novos Produtos</h1>
        </div>
        

        <form onSubmit={(e)=> validaForm(e)}>
          <div className="flex flex-col p-8 bg-white rounded-lg gap-4 border-gray-200">
            
        
            <div className="w-full p-1">
              <label htmlFor="name" className="Tablefont-semibold text-sm font-medium text-gray-900 dark:text-white">Nome do Produto</label>
              <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite o Nome do Produto" required />
            </div>
            <div className="flex-col md:flex-row flex w-full p-1 gap-4">
              <div className="md:w-1/2 w-full">
                <label htmlFor="category" className="Tablefont-semibold text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                <input type="text" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite a Categoria" required />
              </div>
              <div className="md:w-1/2 w-full">
                <label htmlFor="price" className="Tablefont-semibold text-sm font-medium text-gray-900 dark:text-white">Preço</label>
                <input type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite a Preço" required />
              </div>
            </div>
            <div className="w-full p-1">
              <label htmlFor="description" className="Tablefont-semibold text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
              <textarea id="description" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite a descrição do produto."></textarea>
            </div>
            <div className="w-full p-1">
              <label htmlFor="image" className="Tablefont-semibold text-sm font-medium text-gray-900 dark:text-white">URL da Imagem</label>
              <input type="text" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite a URL da imagem. http://..." required />
            </div>

            <div className="w-full p-1 flex justify-end-safe gap-4">
              <Link href={'/'}><ButtonCancel label={'Cancelar'}/></Link> 
              <ButtonSubmit label={'Cadastrar ✚'}/>
            </div>
            
          </div>
        </form>

      </div>
    </main>
  );
}
