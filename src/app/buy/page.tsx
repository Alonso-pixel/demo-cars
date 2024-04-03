import React from "react";
import { Button } from "@/components/ui/button";

function Buy() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl">Comprar artículo</div>
      <Button className="w-fit bg-green-600">Comprar</Button>
    </div>
  );
}

export default Buy;
