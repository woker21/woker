'use client'
import { Spotlight } from "./components/ui/Spotlight";
import Menu from "./components/menu";
import Presentacion from "../app/components/ui/presentspotligh"

import { useState } from "react";




export default function SpotlightPreview() {

  const [ver, setVer] = useState(1);


  return (

    
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden flex-col">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <Menu />
        <Presentacion />

        <button onClick={()=> setVer(ver + 1)}>Pulsar</button>
        
        {ver}
      </div>
    



  );
}