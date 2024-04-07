import React, { useState } from "react";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";
import { FormControl } from "./ui/form";
import { popularMakes } from "@/utils/data";
import { Input } from "./ui/input";

type CustomSelectProps = {
  onValueChange: (...event: any[]) => void;
};
function CustomSelect({ onValueChange }: CustomSelectProps) {
  let [make, setMake] = useState<string>(""); //state to kee track of the selected make, not used yet
  return (
    <Select onValueChange={onValueChange}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder="Selecciona la marca..." />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {popularMakes.map((value) => (
          <SelectItem value={value} key={value}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default CustomSelect;
