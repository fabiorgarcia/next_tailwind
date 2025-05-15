import Header from "@/components/header";

export default function Product( {params }: { params: {id: string}}) {
  
  return (
    <main>
      <div className="flex flex-col gap-6">
        
        <Header title='Gerenciamento de Produtos' />
        <h1>Key:{params.id}</h1>
        <div className="md:flex md:p-0 p-4 bg-white hover:bg-gray-100 rounded-lg md:border-b-1 border-gray-200">
                    <div className="md:w-2/7 mb-1 p-1">
                    <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Nome do Produto</label>
                    <div></div>
                    </div>
                    <div className="md:w-1/7 mb-1 p-1">
                    <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                    <div></div>
                    </div>
                    <div className="md:w-1/7 mb-1 p-1">
                    <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Preço</label>
                    <div>R$ </div>
                    </div>
                    <div className="md:w-2/7 mb-1 p-1">
                    <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
                    <div className="textDescr"></div>
                    </div>
                    <div className="w-full md:w-1/7 p-1">
                    <label htmlFor="input-group-1" className="md:hidden block font-semibold text-sm font-medium text-gray-900 dark:text-white">Imagem</label>
                    <div className="textShort"></div>
                    </div>
                </div>
      </div>
    </main>
  );
}
