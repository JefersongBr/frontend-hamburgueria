function HomeButtons()
{
  return(
    <div className="flex justify-center "> 
      
      <div className="fixed bottom-52 ">  
      <button className="font-bold min-w-36 bg-slate-50 text-orange-950 py-1 rounded-lg mt-1"
      >Fazer Pedido</button>
      </div>

      <div className="fixed bottom-40 ">
      <button className="font-bold min-w-36 bg-slate-50 text-orange-950 py-1 rounded-lg mt-1"
      >Seu Pedido</button>
      </div>

      <div className="fixed bottom-28 ">
      <button className="font-bold min-w-36 bg-slate-50 text-orange-950 py-1 rounded-lg mt-1"
      >Informações</button>
      </div>

    </div>
    
  );
}

export default HomeButtons;