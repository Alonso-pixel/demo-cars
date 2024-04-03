import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Buy() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl">Comprar artículo</div>
      <Link href={"https://payments.google.com/gp/w/u/0/home/paymentmethods"}>
        <Button className="w-fit bg-green-600">Comprar</Button>
      </Link>
    </div>
  );
}

export default Buy;
