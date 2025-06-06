interface buttonProps {
    label: string;
}

export default function ButtonCancel({label}: buttonProps) {

    return (
        <button type="button" className="w-full text-white bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-4 px-8 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {label}
        </button>
    )
    
}