import { Metadata } from "next";
import Link from "next/link";
import React, { Suspense } from "react";

type IData = {
  results: {
    name: string;
    status: string;
    id: string;
  }[];
};

export const metadata: Metadata = {
  title: "Lista de personagens",
  description: "Aplicação teste com consumo de api",
};

const HookPage = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data: IData = await res.json();

  return (
    <>
      <h1>Server side</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <p>{JSON.stringify(data)}</p> */}
        {data?.results.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.name}</h1>
              <p>{item.status}</p>
              <Link href={`/perso/${item.id}`}>ABRIR</Link>
            </div>
          );
        })}
      </Suspense>
    </>
  );
};

export default HookPage;