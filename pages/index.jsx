import Porta from "../components/Porta";
import Presente from "../components/Presente";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      {/* pode ser passado definindo ou não a propriedades true e false */}
      <Porta selecionada={true} />
      <Porta selecionada={false} />
      <Porta selecionada />
      <Porta />

    </div>
  )
}
