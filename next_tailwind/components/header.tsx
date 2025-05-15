import Image from "next/image";
import profile from '../public/logo.svg'

interface HeaderProps {
    title: string;
}

export default function Header({title}: HeaderProps) {

    return (
        <div className="flex gap-2 content justify-center items-center">
            <Image
                src={profile}
                width={50}
                height={50}
                alt="Gerenciamento de Produtos"
            />
            <h1 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">{title}</h1>
        </div>
    )
    
}