import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
const navItems = ["lupa.svg", "ubicacion.svg", "hablando.svg"];

function Header() {
  return (
    <header className="flex flex-col px-5 pt-2 pb-2 w-full text-white bg-black shadow-sm max-md:max-w-full">
      <nav className="flex  justify-center mt-2.5 w-full text-center max-md:flex-wrap max-md:max-w-full sm:justify-between">
        <div className="flex justify-center gap-5 text-sm font-bold leading-4 uppercase max-md:flex-wrap">
          <Link href={"/"}>
            <Image
              loading="lazy"
              src="/Automars.png"
              alt="Logo"
              className="rounded"
              width={300}
              height={300}
            />
            <h1 className="font-bold text-base">Ixtapaluca</h1>
          </Link>

          <div className="flex flex-col  md:flex-row px-2 py-px my-auto sm:gap-4">
            <Link href={"/"}>
              {" "}
              <Button variant="link" className="text-white text-large">
                INICIO
              </Button>
            </Link>
            <Link href={"/about"}>
              {" "}
              <Button variant="link" className="text-white text-large">
                NOSOTROS
              </Button>
            </Link>
            <Link href={"/manual"}>
              {" "}
              <Button variant="link" className="text-white text-large">
                MANUALES
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex gap-0 self-start mt-4 text-xs leading-4 whitespace-nowrap">
          {/* <div className="flex flex-col px-2 py-4">
            <button type="button">
              <img
                loading="lazy"
                src={navItems[0]}
                alt=""
                className="self-center aspect-square w-[30px]"
              />
            </button>
            <div className="mt-1.5">Buscar</div>
          </div> */}
          <Link
            href={
              "https://www.google.com/maps/place/AutoMars/@19.3119498,-98.9021813,17z/data=!3m1!4b1!4m6!3m5!1s0x85ce1fc4f9f3f5d9:0x41de5a480815b76c!8m2!3d19.3119448!4d-98.8996064!16s%2Fg%2F11fcq24bc_?entry=ttu"
            }
            className="flex flex-col px-2"
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
            href={
              "https://www.google.com/search?q=auto+mars&sca_esv=40a7f3b289392aea&sca_upv=1&sxsrf=ACQVn09DHph7GbxqmlX51mEzfRDTXMoGrg%3A1711755216751&ei=0E8HZujHLfqckPIP5Lqi8Ao&ved=0ahUKEwjo74uN0ZqFAxV6DkQIHWSdCK4Q4dUDCBA&uact=5&oq=auto+mars&gs_lp=Egxnd3Mtd2l6LXNlcnAiCWF1dG8gbWFyczIKECMYgAQYigUYJzIIEAAYgAQYywEyCBAAGIAEGMsBMgcQABiABBgKMgcQABiABBgKMgcQABiABBgKMgcQABiABBgKMgcQABiABBgKMgcQABiABBgKMgcQABiABBgKSJ8KUOQCWOQCcAF4AZABAJgBmgGgAZoBqgEDMC4xuAEDyAEA-AEBmAICoAKlAcICChAAGEcY1gQYsAOYAwCIBgGQBgiSBwMxLjGgB-QH&sclient=gws-wiz-serp#lrd=0x85ce1fc4f9f3f5d9:0x41de5a480815b76c,1,,,,"
            }
            className="flex flex-col px-2"
          >
            <img
              loading="lazy"
              src={navItems[2]}
              alt=""
              className="self-center aspect-square w-[30px]"
            />
            <div className="mt-1.5">Reviews</div>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
