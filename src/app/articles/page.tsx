"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
function Articles() {
  let [carQuery, setCarQuery] = useState("");
  let articleNames = ["rejilla negra vento", "alma de vento", "marco radiador"];
  return (
    <div className="flex flex-col self-stretch bg-white">
      <Header />
      <div className="flex flex-col space-y-6">
        <div className="flex p-4 justify-center">
          <Input
            className="ml-24 sm:ml-0 border border-gray-600 w-2/4"
            placeholder="Nombre del artículo..."
            onChange={(e) => {
              setCarQuery(e.target.value);
              // console.log(carQuery);
            }}
          />
          <Button variant="outline" className="ml-1">
            <SearchIcon />
          </Button>
        </div>
        {articleNames[0]
          .toLocaleLowerCase()
          .includes(carQuery.toLocaleLowerCase()) ? (
          <div className="flex flex-col items-center">
            <div>
              <Image
                src={"/articulo1.png"}
                alt=""
                width={200}
                height={200}
                className="rounded"
              ></Image>
              <Link href={"/buy"} className="flex flex-col px-2">
                <Button variant="link" className="w-fit self-center">
                  Rejilla Negra Vento{" "}
                </Button>
              </Link>{" "}
            </div>
            <div className="self-center text-green-900 font-extrabold bg-gray-300 rounded">
              {"$1650"}
            </div>
          </div>
        ) : null}
        {articleNames[1]
          .toLocaleLowerCase()
          .includes(carQuery.toLocaleLowerCase()) ? (
          <div className="flex flex-col items-center">
            <div>
              <Image
                src={"/articulo2.png"}
                alt=""
                width={200}
                height={200}
                className="rounded"
              ></Image>
              <Link className="flex flex-col px-2" href={"/buy"}>
                <Button variant="link" className="w-fit self-center">
                  Alma de Vento{" "}
                </Button>
              </Link>
            </div>
            <div className="self-center text-green-900 font-extrabold bg-gray-300 rounded">
              {"$1800"}
            </div>
          </div>
        ) : null}
        {articleNames[2]
          .toLocaleLowerCase()
          .includes(carQuery.toLocaleLowerCase()) ? (
          <div className="flex flex-col items-center">
            <div>
              <Image
                src={"/articulo3.png"}
                alt=""
                width={200}
                height={200}
                className="rounded"
              ></Image>
              <Link className="flex flex-col px-2" href={"/buy"}>
                <Button variant="link" className="w-fit self-center">
                  Marco Radiador{" "}
                </Button>
              </Link>
            </div>
            <div className="self-center text-green-900 font-extrabold bg-gray-300 rounded">
              {"$1280"}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Articles;
