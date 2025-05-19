import Link from "next/link"
import { useState } from "react";

interface TableProps {
    productsList: [];
}


export default function Table({productsList}: TableProps) {

    const [openModal, setOpenModal] = useState(false);
    const [textName, setTextName] = useState('');
    const [textDesc, setTextDesc] = useState('');
    const [textImge, setTextImage] = useState('');
    const [textCateg, setTextCateg] = useState('');
    const [textPrice, setTextPrice] = useState('');

    function showDescription(name:any, categ:any, price:any, descr:any, imag:any ) {
      setOpenModal(true);
      setTextDesc(descr);
      setTextImage(imag);
      setTextName(name);
      setTextCateg(categ);
      setTextPrice(price);
    }


    return (
        <div className="md:rounded-lg md:p-8 md:bg-white grid grid-cols-1 gap-4 ">
          <div className="font-semibold hidden md:flex  bg-white border-b-1 border-gray-300">
            <div className="w-2/7 p-2">Nome do Produto</div>
            <div className="w-1/7 p-2">Categoria</div>
            <div className="w-1/7 p-2">Preço</div>
            <div className="w-2/7 p-2">Descrição</div>
            <div className="w-1/7 p-2">Imagem</div>
          </div>


          {productsList.map((item: any) => (


                <div key={item.id} className="md:flex md:p-0 p-4 bg-white hover:bg-gray-100 rounded-lg md:border-b-1 border-gray-200" onClick={() => showDescription(item.name, item.category, item.price, item.description, item.image)}>
                    <div className="md:w-2/7 mb-1 p-1">
                    <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Nome do Produto</label>
                    <div>{item.name}</div>
                    </div>
                    <div className="md:w-1/7 mb-1 p-1">
                    <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                    <div>{item.category}</div>
                    </div>
                    <div className="md:w-1/7 mb-1 p-1">
                    <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Preço</label>
                    <div>R$ {item.price}</div>
                    </div>
                    <div className="md:w-2/7 mb-1 p-1">
                    <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
                    <div className="textDescr">{item.description}</div>
                    </div>
                    <div className="w-full md:w-1/7 p-1">
                    <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Imagem</label>
                    <div className="textShort text-blue-500"><Link href={item.image} target="_blank">{item.image}</Link></div>
                    </div>
                </div>
          
          ))}

           {openModal && (
              <div className="modal flex content-center" onClick={() => setOpenModal(false)}>
                <div className="contentDescription ">
                  <div className="flex flex-col p-8 bg-white rounded-lg gap-3 border-gray-200 content-center">

                      <div className="w-full flex justify-end-safe cursor-pointer">✖</div>
                      <div className="flex flex-col">
                        <label htmlFor="input-group-1" className="font-semibold text-sm font-medium text-gray-900 dark:text-white">Nome do Produto</label>
                        {textName}
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="input-group-1" className="font-semibold text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                        {textCateg}
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="input-group-1" className="font-semibold text-sm font-medium text-gray-900 dark:text-white">Preço</label>
                        R$ {textPrice}
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="input-group-1" className="font-semibold text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
                        {textDesc}
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="input-group-1" className="font-semibold text-sm font-medium text-gray-900 dark:text-white">Image</label>
                        <div className="textImage"><Link href={textImge} target="_blank">{textImge}</Link></div>
                      </div>
                    
                  </div>
                </div>
              </div>
            )}

        </div>

    )
    
}