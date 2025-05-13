import Image from "next/image";
import profile from '../public/logo.svg'

export default function Home() {
  return (
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

      <div className="flex gap-2 content justify-center items-center">
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          value={'teste'}
        />
      </div>
    </div>
  );
}
