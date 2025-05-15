'use client'

import Header from "@/components/header";
import Table from "@/components/table";
import Link from "next/link"
import ButtonSubmit from "@/components/buttonSubmit";
import { useState } from "react";



const data = await fetch('https://my-json-server.typicode.com/fabiorgarcia/next_tailwind/products')
var products = await data.json()


export default function Home() {

  const [listAll, setListAll] = useState(products);
  const [nameProd, setNameProd] = useState('');
  const [listProducts, setListProducts] = useState(products);



  function filterList(x:any) {
    
    setNameProd(x);

    x = x.toUpperCase();

    if (x) {
      const result = [];
      for (let i = 0; i < products.length; i++) {
        var y = products[i].name.toUpperCase();
        if  (y.startsWith(x)) {
          result.push(products[i])
      }

      setListProducts(result);
    } 
    
  } else {
    setListProducts(listAll);
  }
   

    
  }


  
  return (
    <main>
      <div className="flex flex-col gap-6 relative">
        
        <Header title='Gerenciamento de Produtos' />


        <div className="flex md:flex-row flex-col gap-2">
          
          <div className="md:flex md:w-1/2 w-full gap-4">

            <div className="md:w-1/2 w-full">
              <label htmlFor="default-search" className="font-light text-sm font-medium text-gray-900 dark:text-white">Filtar por Nome de Produto</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor"  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="text" id="default-search" className="sm:mb-0 mb-2 w-full flex-auto block p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Procure pelo Nome do Produto..." 
                value={nameProd}
                onChange={(e) => filterList(e.target.value)} />
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <label htmlFor="default-search" className="font-light text-sm font-medium text-gray-900 dark:text-white">Filtar por Faixa de Preço</label>

              <div className="flex gap-2">
                <div className="w-full">
                  <input type="number" id="default-datepicker"  className="sm:mb-0 mb-2 w-full  flex-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="De R$" />
                </div>
                <div className="w-full">
                  <input type="number" id="default-datepicker"  className="sm:mb-0 mb-2 w-full  flex-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Até R$" />
                </div>
              </div>
              
            </div>

          </div>


          <div className="md:flex  md:w-1/2 w-full justify-end-safe">

            <Link href={'/newproduct'} className="cursor-pointer mt-0 md:mt-6">
              <ButtonSubmit label={'Cadastrar Novo Produto ✚'}/>
            </Link>
          </div>

        </div>

        <Table productsList = {listProducts} />
      </div>
    </main>
  );
}
