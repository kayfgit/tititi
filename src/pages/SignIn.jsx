import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import playstore from '../assets/playstore.svg'

function SignIn() {
  return (
    <>
      <div className='bg-white w-screen min-h-screen flex items-center justify-center overflow-y-auto'>

        {/* background */}
        <div className="absolute top-20 left-[-150px] bg-zinc-200 h-70 w-70 rounded-full">
        </div>
        <div className="absolute top-80 left-[90vw] bg-zinc-300 h-25 w-25 rounded-full">
        </div>
        <div className="absolute top-140 left-[85vw] bg-zinc-100 h-90 w-90 rounded-full">
        </div>
        {/* background */}


        <main className='min-h-screen w-300 flex flex-col overflow-y-auto'>

          {/* nav */}
          <NavBar />
          {/* nav */}

          <form className="pb-8 w-full h-210 flex flex-col justify-center items-center ">
            <div className="mb-3 gap-3 h-30 w-100 flex justify-center items-center flex-col">
              <span className="text-3xl font-bold">Entre na sua conta</span>
              <p className="text-sm text-zinc-700">Acesse sua conta para gerenciar seus eventos</p>
            </div>
            <div className="rounded-2xl shadow-lg w-110 h-130 flex flex-col justify-center items-center">
              <div className="gap-2 w-85 h-120 flex flex-col items-center">
                <div className="">
                  <span className="self-start text-sm text-zinc-700">Email</span>
                  <input className="bg-zinc-100 rounded-xl w-85 h-9 border-1 border-zinc-300 shadow-sm" type="text" />
                </div>
                <div className="mt-2">
                  <div className="w-full h-6 flex justify-between items-center">
                    <span className="text-sm text-zinc-700">Senha</span>
                    <a className="text-[13px] text-[#515f4f]" href="#">Esqueceu a senha?</a>
                  </div>
                  <input className="bg-zinc-100 rounded-xl w-85 h-9 border-1 border-zinc-300 shadow-sm" type="text" />
                </div>

                <span className="mt-4 text-[12px] text-zinc-500">Ao prosseguir você concorda com os <a className="text-[#515f4f] hover:underline" href="#">termos de uso</a> e <a className="text-[#515f4f] hover:underline" href="">política de privacidade</a></span>

                <div className="mt-2 w-full h-11 bg-[#515f4f] flex justify-center items-center rounded-xl">
                  <span className="text-white font-bold text-sm">Entrar</span>
                </div>

                <span className="mt-2 text-sm text-zinc-500">Não possui uma conta? <a className="text-[#515f4f] font-bold" href="#">Cadastrar-se</a></span>

                <div className="mt-3 flex w-full h-10 justify-center items-center gap-3">
                  <hr className="flex-grow border-0.5 border-zinc-200"></hr>
                  <span className="text-zinc-500 text-sm">Ou continue com</span>
                  <hr className="flex-grow border-0.5 border-zinc-200"></hr>
                </div>

                <div className="mt-2 w-full h-15 flex justify-between items-center">
                  <button className="hover:bg-zinc-100 duration-200 border px-12 py-2 border-zinc-300 rounded-xl flex justify-center items-center">
                    <img className="w-4 h-4 mr-2" src={playstore} alt="" />
                    <span className="text-sm">Google</span>
                  </button>
                  <button className="hover:bg-zinc-100 duration-200 border px-12 py-2 border-zinc-300 rounded-xl flex justify-center items-center">
                    <img className="w-4 h-4 mr-2" src={playstore} alt="" />
                    <span className="text-sm">Apple</span>
                  </button>
                </div>


              </div>
              <span className="text-xs text-zinc-400 justify-self-end">Atividade protegida por criptografia de ponta a ponta</span>
            </div>
          </form>

          {/* footer */}
          <Footer />
          {/* footer */}

        </main>
      </div>
    </>
  )
}

export default SignIn
