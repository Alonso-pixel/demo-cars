import Header from "@/components/header";
import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <>
      <Header />
      <div className="flex flex-col bg-red-500">
        <div className="flex justify-center">
          <Image src={""} alt="logo" />
        </div>
        <div className="flex justify-evenly ">
          <div>
            <h1 className="text-xl font-bold">Horario de apertura</h1>
            <p>Lunes a Viernes de 9:00 a 18:00</p>
            <p>Sábados de 9:00 a 14:00</p>
            <p>Domingos cerrado</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">Ubicación</h1>
            <p>Av. Cuauhtémoc 123, Ixtapaluca, Estado de México</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">Teléfono</h1>
            <p>55 1234 5678</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
