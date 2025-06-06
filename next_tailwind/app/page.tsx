'use client'

import Header from "@/components/header";
import Table from "@/components/table";
import ButtonSubmit from "@/components/buttonSubmit";
import { useState } from "react";
import ButtonCancel from "@/components/buttonCancel";
import ButtonFilter from "@/components/buttonFilter";

const data = await fetch('https://my-json-server.typicode.com/fabiorgarcia/next_tailwind/products')
var products = await data.json()


export default function Home() {

  const [listAll, setListAll] = useState(products);
  const [nameProd, setNameProd] = useState('');
  const [priceInit, setPriceInit] = useState('');
  const [priceEnd, setPriceEnd] = useState('');
  const [listProducts, setListProducts] = useState(products);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [orderby, setOrderby] = useState('');


  function validaForm(e:any) {
    e.preventDefault();

    var result = [];
    var insertArray = [];
    insertArray = listProducts;
    var total = parseInt(listProducts.length) + 1;
    let produto1 = { id: total, name: name, category: category, price: price, description: description, image: image };
    insertArray.push(produto1);
    for (let i = 0; i < insertArray.length; i++) {
      result.push(insertArray[i])
    }
    setListProducts(result);
    setOpenModal(false);
  }

  function filterForm() {
    if (nameProd || priceInit || priceEnd) {
      let t_priceInit = 0;
      if (priceInit) {
        t_priceInit = parseInt(priceInit);
      }

      var result = [];
      for (let i = 0; i < listAll.length; i++) {
        var t_name = listAll[i].name.toUpperCase();
        var t_price = listAll[i].price;
        t_price = parseInt(t_price);

        if  (priceEnd && !nameProd) {
          if (t_price >= t_priceInit && t_price < parseInt(priceEnd) )
          result.push(listAll[i])
        }
        if  (!priceEnd && !nameProd && priceInit) {
          if (t_price >= t_priceInit )
          result.push(listAll[i])
        }
        if  (!priceEnd && nameProd) {
          if (t_price >= t_priceInit && t_name.startsWith(nameProd.toUpperCase())) {
            result.push(listAll[i])
          }
        }
        if  (priceEnd && nameProd) {
          if (t_price >= t_priceInit && t_price <= parseInt(priceEnd) && t_name.startsWith(nameProd.toUpperCase()) )
          result.push(listAll[i])
        }
      setListProducts(result);
      } 


    } else {
      setListProducts(listAll);
    }
  }

  function orderBy(colun:any) {
    setOrderby(colun);
    var sortResult = [];
    if (colun == 'name') {
      listProducts.sort((a:any, b:any) => a.name.localeCompare(b.name, 'pt-BR', { sensitivity: 'base' }));
    }
    if (colun == 'category') {
      listProducts.sort((a:any, b:any) => a.category.localeCompare(b.category, 'pt-BR', { sensitivity: 'base' }));
    }
    if (colun == 'price') {
      listProducts.sort((a:any, b:any) => a.price - b.price);
    }
    if (colun == 'description') {
      listProducts.sort((a:any, b:any) => a.description.localeCompare(b.description, 'pt-BR', { sensitivity: 'base' }));
    }
    if (colun == 'image') {
      listProducts.sort((a:any, b:any) => a.image.localeCompare(b.image, 'pt-BR', { sensitivity: 'base' }));
    }
    if (colun == '') {
      listProducts.sort((a:any, b:any) => a.id - b.id);
    }
    for (let i = 0; i < listProducts.length; i++) { 
      sortResult.push(listProducts[i])
    }
    setListProducts(sortResult);

  }

  function newItem() {
    setOpenModal(true);
    setName('');
    setCategory('');
    setPrice('');
    setDescription('');
    setImage('');
    var clearColun = '';
    orderBy(clearColun)
  }


  
  return (
    <main>
      <div className="flex flex-col gap-6 relative">
        
        <Header title='Gerenciamento de Produtos' />

        <div className="flex md:flex-row flex-col gap-2">
          
          <div className="md:flex md:w-3/4 w-full gap-4">

            <div className="md:w-1/2 w-full">
              <label htmlFor="default-search" className="font-light text-sm font-medium text-gray-900 dark:text-white">Filtar por Nome de Produto</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor"  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="text" id="default-search" className="sm:mb-0 mb-2 w-full flex-auto block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Procure pelo Nome do Produto..." 
                value={nameProd}
                onChange={(e) => setNameProd(e.target.value)} />
              </div>
            </div>

            <div className="md:w-1/2  w-full">

              <div className="md:flex gap-2 w-full">

                <div className="w-full">
                  <label htmlFor="default-search" className="font-light text-sm font-medium text-gray-900 dark:text-white">De R$</label>

                  <input 
                  type="number" 
                  className="sm:mb-0 mb-2 w-full  flex-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="R$"
                  value={priceInit}
                  onChange={(e) => setPriceInit(e.target.value)}  />
                </div>
                <div className="w-full">
                  <span className="font-light text-sm font-medium text-gray-900 dark:text-white w-32">Até R$</span>
                  <input 
                  type="number"  
                  className="sm:mb-0 mb-2 w-full  flex-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="R$"
                  value={priceEnd}
                  onChange={(e) => setPriceEnd(e.target.value)}  />
                </div>

                <div className="w-full">
                  <div onClick={() => filterForm()} className="mt-6 w-full"><ButtonFilter label={'Filtrar'} /></div>
                </div>

                <div className="w-full md:my-0 my-4">
                  <span className="font-light text-sm font-medium text-gray-900 dark:text-white w-32">Ordenar por:</span>

                  <select value={orderby} onChange={(e) => orderBy(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value={''}></option>
                    <option value={'name'}>Nome</option>
                    <option value={'category'}>Categoria</option>
                    <option value={'price'}>Preço</option>
                    <option value={'description'}>Descrição</option>
                    <option value={'image'}>Imagem</option>
                  </select>
                </div>
              </div>
              
            </div>

          </div>

          <div className="md:flex  md:w-1/4 w-full justify-end-safe">
            <div className="cursor-pointer mt-0 md:mt-6" onClick={() => newItem()}>
              <ButtonSubmit label={'Cadastrar Novo Produto ✚'}  />
            </div>
          </div>

        </div>

        <Table productsList={listProducts}  />
        

        {openModal && (
          <div className="modal">
            <div className="content flex flex-col gap-6">

              <form onSubmit={(e)=> validaForm(e)}>
                <div className="flex flex-col p-8 bg-white rounded-lg gap-4 border-gray-200">
                  <div className="flex gap-2">
                    <h1 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 "> ⁄ Cadastro de Novos Produtos</h1>
                  </div>
              
                  <div className="w-full p-1">
                    <label htmlFor="name" className="Tablefont-semibold text-sm font-medium text-gray-900 dark:text-white">Nome do Produto</label>
                    <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite o Nome do Produto" required />
                  </div>
                  <div className="flex-col md:flex-row flex w-full p-1 gap-4">
                    <div className="md:w-1/2 w-full">
                      <label htmlFor="category" className="Tablefont-semibold text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                      <input type="text" id="category" value={category} onChange={(e)=>setCategory(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite a Categoria" required />
                    </div>
                    <div className="md:w-1/2 w-full">
                      <label htmlFor="price" className="Tablefont-semibold text-sm font-medium text-gray-900 dark:text-white">Preço</label>
                      <input type="number" step="0.01" id="price" value={price} onChange={(e)=>setPrice(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite a Preço" required />
                    </div>
                  </div>
                  <div className="w-full p-1">
                    <label htmlFor="description" className="Tablefont-semibold text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
                    <textarea id="description" value={description} onChange={(e)=>setDescription(e.target.value)} rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite a descrição do produto."></textarea>
                  </div>
                  <div className="w-full p-1">
                    <label htmlFor="image" className="Tablefont-semibold text-sm font-medium text-gray-900 dark:text-white">URL da Imagem</label>
                    <input type="text" id="image" value={image} onChange={(e)=>setImage(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite a URL da imagem. http://..." required />
                  </div>

                  <div className="w-full p-1 flex justify-end-safe gap-4">
                    <div onClick={() => setOpenModal(false)}><ButtonCancel label={'Cancelar'} /></div>
                    <ButtonSubmit label={'Cadastrar ✚'}/>
                  </div>
                  
                </div>
              </form>

            </div>
          </div>
          )}

        
      </div>
    </main>
  );
}
