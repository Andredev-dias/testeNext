"use client";
// import Link from "next/link";
import { useEffect, useState } from "react";
import Image from 'next/image'

interface IData {
  name: string;
  image: string;
  id: string;
}

const HookPage = () => {
  const [characters, setCharacters] = useState<IData[]>([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      console.log(data);
      setCharacters(data.results);
    };
    load();
  }, []);

  return (
    <>
      {characters.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <Image
              src={item.image}
              width={200}
              height={200}
              alt="Picture of the author"/>
            {/* <Link href={`/perso/${item.id}`}>Abrir personagem</Link> */}
          </div>
        );
      })}
    </>
  );
};

export default HookPage;