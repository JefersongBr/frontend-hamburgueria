import { useNavigate } from "react-router-dom";

function CardapioPage() 
{

  const navigate = useNavigate()

  return (
    <div className="w-screen h-screen bg-orange-200 flex justify-self-start p-16">

      <div className="w-[400px]">
        <h1 className="text-3xl font-bold text-amber-950 text-center">BurguerCraft</h1>
      </div>

      <div className="flex justify-end items-center h-1">
        <button onClick={() => navigate("/")} 
        className="font-bold text-2xl min-w-44 text-orange-950 px-8 py-4 rounded-lg mt-10 bg-orange-200">
          Início
        </button>
      </div>


      <div className="flex justify-end items-center h-1">
        <button onClick={() => navigate("/carrinho")} 
        className="font-bold text-2xl min-w-44 text-orange-950 px-8 py-4 rounded-lg mt-10 bg-orange-200"
        >Pedido</button>
        </div>

      <div className="flex justify-end items-center h-1">
        <button onClick={() => navigate("/login")} 
        className="font-bold text-2xl min-w-44 text-orange-950 px-8 py-4 rounded-lg mt-10 bg-orange-200">
          Conta
        </button>
      </div>

      <div className="flex justify-end items-center h-1">
        <button onClick={() => navigate("/info")} 
        className="font-bold text-2xl min-w-44 text-orange-950 px-8 py-4 rounded-lg mt-10 bg-orange-200">
          Info
        </button>
      </div>

    </div>
  );

}

export default CardapioPage;