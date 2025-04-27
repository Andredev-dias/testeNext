"use client";

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import { api } from "@/constants/api";



interface IData {
  name: string;
  gender: string;
  status: string;
  species: string;
  image: string;
}

const AxiosPage = () => {
  const [data, setData] = useState<IData[]>([]);
  const [erro, setErro] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>(
    "Não foi possível buscar os dados!!!"
  );
  const [page, setPage] = useState<string>("");

  useEffect(() => {
    api
      .get(`/character/?page=${page}`)
      .then((res : any) => {
        setErro(false);
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch((error : any) => {
        console.log(error);
        if (error.response.status === 404) {
          setErrorMessage("Página não encontrada!!!");
        }
        setErro(true);
      });
  }, [page]);

  return (
    <section>
      <h1>Página com useEffect e Axios</h1>
      <input
        className="p-4 border"
        placeholder="1/42"
        type="text"
        value={page}
        onChange={(e) => setPage(e.target.value)}
      />
      {erro && <h5>{errorMessage}</h5>}
      <Suspense fallback={<div>Loading...</div>}>
        {data.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <Image
              className="h-auto w-[200px]"
              src={item.image}
              alt="Character Photo"
              width={200}
              height={300}
              priority={true}
            ></Image>
            <h3>{item.species}</h3>
            <p>{item.status}</p>
            <p>{item.gender}</p>
          </div>
        ))}
      </Suspense>
    </section>
  );
};

export default AxiosPage;