import { useState } from "react";
import Porta from "../components/Porta";
import Presente from "../components/Presente";
import PortaModel from "../model/porta";

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1))

  return (
    <div style={{ display: "flex" }}>
      {/* pode ser passado definindo ou não a propriedades true e false */}
      {/* olhar para o componente como um imput, onde é passado valor e modificado */}
      <Porta value={p1} />


    </div>
  )
}
