import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
const navItems = ["lupa.svg", "ubicacion.svg", "hablando.svg"];

function Header() {
  return (
    <header className="flex flex-col px-5 pt-2 pb-2 w-full text-white bg-gray-900 shadow-sm">
      {/* <nav className="flex justify-center mt-2.5 w-full text-center max-md:flex-wrap max-md:max-w-full sm:justify-between"> */}
      <div className="flex flex-col sm:flex-row justify-start gap-1 sm:gap-5 text-sm font-bold leading-4 max-md:flex-wrap">
        <div className="self-center">
          <Link href={"/"}>
            <Image
              src="/favicon.png"
              alt="Logo"
              className="rounded priority"
              width={120}
              height={120}
            />
          </Link>
        </div>

        <div className="flex flex-col self-center md:flex-row px-2 py-px my-auto sm:gap-4">
          <Link href={"/"} className="text-center">
            {" "}
            <Button variant="link" className="text-white text-large py-1">
              CATÁLOGO
            </Button>
          </Link>
          <Link href={"/articles"}>
            {" "}
            <Button variant="link" className="text-white text-large py-1">
              ARTÍCULOS
            </Button>
          </Link>
          <Link href={"/about"}>
            {" "}
            <Button variant="link" className="text-white text-large py-1">
              NOSOTROS
            </Button>
          </Link>
        </div>
        <div className="flex gap-0 self-center mt-4 text-xs sm:ml-auto leading-4 whitespace-nowrap">
          <Link
            href={
              "https://www.google.com/maps/place/GRUPO+SAMEXA/@19.3781689,-99.1454174,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1fdfecb2a8a69:0x1686f98fc4123360!8m2!3d19.3781689!4d-99.1428425!16s%2Fg%2F11fjn3lzgt?entry=ttu"
            }
            className="flex flex-col px-2 self-center"
          >
            <img
              loading="lazy"
              src={navItems[1]}
              alt=""
              className="self-center aspect-square w-[30px]"
            />
            <div className="mt-1.5">Ubicación</div>
          </Link>
          <Link
            href={"https://www.facebook.com/gruposamexa?locale=es_LA"}
            className="flex flex-col px-2"
          >
            <img
              loading="lazy"
              src={navItems[2]}
              alt=""
              className="self-center aspect-square w-[30px]"
            />
            <div className="mt-1.5">Redes</div>
          </Link>
        </div>
      </div>
      {/* </nav> */}
    </header>
  );
}

export default Header;
