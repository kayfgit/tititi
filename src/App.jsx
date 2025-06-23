import './index.css'
import logo from './assets/logo.svg'
import ticket from './assets/ticket.svg'
import playstore from './assets/playstore.svg'
import basquete from './assets/basquete.webp'
import applewhite from './assets/applewhite.png'
import mail from './assets/mail.svg'
import facebook from './assets/facebook.svg'
import signin from './assets/signin.svg'
import cellphone from './assets/cellphone.svg'
import searchwhite from './assets/searchwhite.svg'
import searchblack from './assets/searchblack.svg'
import people from './assets/people.svg'
import suitcase from './assets/suitcase.svg'

function App() {
  return (
    <>
      <div className='bg-white w-screen min-h-screen flex items-center justify-center overflow-y-auto'>
        <main className='min-h-screen w-300 flex flex-col overflow-y-auto'>

          {/* nav */}
          <header className='relative w-300 h-30 justify-center items-center'>
            <div className='w-300 h-20 flex-row flex justify-between items-center'>
              <div className='w-125 h-10 flex justify-start items-center'>
                <img className='w-30 h-30' src={logo} alt="" />
                <div className='duration-200 rounded-xl cursor-pointer flex-wrap flex justify-center items-center hover:rounded-xl px-3 py-1 text-zinc-900 text-sm hover:bg-gray-100 ml-6 text-nowrap'>
                  <span>Para produtores</span>
                </div>
                <div className='duration-200 rounded-xl cursor-pointer flex-wrap flex justify-center items-center hover:rounded-xl px-3 py-1 text-zinc-900 text-sm hover:bg-gray-100 ml-4 text-nowrap'>
                  <span>Sobre nós</span>
                </div>
                <div className='duration-200 rounded-xl cursor-pointer flex-wrap flex justify-center items-center hover:rounded-xl px-3 py-1 text-zinc-900 text-sm hover:bg-gray-100 ml-4 text-nowrap'>
                  <span>Ajuda</span>
                </div>
              </div>
              <div className='flex justify-center items-center w-50 h-10'>
                <div className='duration-200 rounded-xl cursor-pointer flex justify-center items-center hover:rounded-xl px-3 py-1 text-zinc-900 text-sm hover:bg-gray-100 ml-4 text-nowrap'>
                  <img className='w-4 align-middle inline-block mr-2' src={signin} alt="" />
                  <span>Entrar</span>
                </div>
                <div className='duration-200 cursor-pointer font-bold mr-2 flex justify-center items-center rounded-xl px-3 py-1.5 text-white text-sm bg-[#515f4f] ml-4 text-nowrap'>
                  <span>Criar conta</span>
                </div>
              </div>
            </div>
          </header>
          {/* nav */}


          {/* eyecandy */}
          <div className='border border-zinc-100 w-300 h-100 rounded-4xl shadow-sm'>
          </div>
          {/* eyecandy */}

          {/* search */}
          <div className='border border-zinc-100 my-6 rounded-3xl w-full h-18 flex justify-between items-center shadow-md'>
            <img className='w-6 mx-5' src={searchblack} alt="" />
            <div className='w-170 h-10 flex items-center'>
              <input placeholder='Buscar Eventos' className='text-lg text-zinc-700 w-170 h-10 flex items-center' type="text" name="" value="" />
            </div>

            <div className='bg-gray-200 h-8 w-px'></div>

            <div className='w-100 h-15 bg-white flex justify-center items-center'>
              <div className=' h-18 w-30 flex flex-col mt-2'>
                <span className='mx-4 mt-3 text-zinc-600 text-sm'>Data</span>
                <span className='mx-4 mt-0.5 text-black text-sm'>Selecionar</span>
              </div>

              <div className='bg-gray-200 h-8 w-px mx-1 self-center'></div>

              <div className=' h-18 w-30 flex flex-col mt-2'>
                <span className='mx-4 mt-3 text-zinc-600 text-sm'>Localizacao</span>
                <span className='mx-4 mt-0.5 text-black text-sm'>Selecionar</span>
              </div>

              <div className='bg-gray-200 h-8 w-px mx-1 self-center'></div>

              <div className=' h-18 w-30 flex flex-col mt-2'>
                <span className='mx-4 mt-3 text-zinc-600 text-sm text-nowrap'>Tipo de evento</span>
                <span className='mx-4 mt-0.5 text-black text-sm'>Selecionar</span>
              </div>
            </div>
            <div className='flex justify-center items-center w-13 h-13 mr-3 rounded-2xl bg-[#515f4f]'>
              <img className='h-6' src={searchwhite} alt="" />
            </div>
          </div>
          {/* search */}


          {/* categories */}
          <div className='flex flex-col h-20 w-full'>
            <span className='font-bold text-lg'>Categorias</span>
            <div className='flex h-10 mt-3 w-full'>
              <button className='bg-[#515f4f] px-3 justify-center items-center flex rounded-2xl text-white text-sm mr-2'>
                <img className='w-5 h-5 mr-2' src={ticket} alt="" />
                Todos
              </button>
              <button className='border border-zinc-200 px-3 justify-center items-center flex rounded-2xl text-black text-sm mr-2'>
                <img className='w-5 h-5 mr-2' src={people} alt="" />
                Esportes
              </button>
              <button className='border border-zinc-200 px-3 justify-center items-center flex rounded-2xl text-black text-sm'>
                <img className='w-5 h-5 mr-2' src={suitcase} alt="" />
                Conferencia
              </button>
            </div>
          </div>
          {/* categories */}


          {/* sports */}
          <div className=' flex flex-col h-15 w-full mt-10'>
            <span className='font-bold text-2xl'>Esportes</span>
          </div>

          <div className='h-160 w-full'>
            <div className='cursor-pointer hover:shadow-lg duration-200 flex justify-start items-center flex-col border border-zinc-200 shadow-sm rounded-3xl h-125 w-100'>
              <div className='h-65 w-93 mt-3 mb-5 rounded-2xl bg-zinc-100 group-hover:scale-102'>
              </div>
              <div className=' h-13 w-93'>
                <span className='text-black text-lg font-bold'>Meia Maratona da Amazonia</span>
                <p className='text-zinc-700 text-sm'>Belem/PA</p>
              </div>
              <div className='flex flex-col  h-30 w-93 mt-5'>
                <div className=' h-20 w-93'>
                  <span className='text-zinc-700'>A partir de</span>
                  <p className='text-2xl font-bold'>R$ 119,99</p>
                </div>

                <div className='bg-gray-200 h-px w-90 my-1 self-center'></div>

                <div className='flex justify-center items-center h-10 w-93'>
                  <button className='justify-center items-center flex text-zinc-500 font-light text-sm mx-2'>
                    <img className='w-5 h-5 mr-2' src={ticket} alt="" />
                    14 de setembro
                  </button>
                  <button className='justify-center items-center flex text-zinc-500 font-light text-sm mx-2'>
                    <img className='w-5 h-5 mr-2' src={ticket} alt="" />
                    05:00
                  </button>
                  <button className='justify-center items-center flex text-zinc-500 font-light text-sm mx-2'>
                    <img className='w-5 h-5 mr-2' src={ticket} alt="" />
                    Disponivel
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* sports */}

          {/* prefooter */}
          <div className='border-t border-zinc-200 flex flex-col h-80 w-full'>
            <div className='gap-5 flex justify-center items-center h-40 w-full'>
              <div className='flex flex-col h-35 w-100 justify-center '>
                <img className='h-30 w-30' src={logo} alt="" />
                <span className='text-zinc-500 text-sm'>Plataforma de compra e revenda de ingressos com tecnologia blockchain para garantir autenticidade e segurança.</span>
              </div>
              <div className='flex flex-col h-35 w-90'>
                <div className='flex items-center h-15 w-full '>
                  <p className=''>Links Rapidos</p>
                </div>
                <div className='flex justify-start h-20 w-full '>
                  <div className='flex flex-col gap-4 h-20 w-45 '>
                    <a className='text-zinc-500 text-sm' href="">Sobre Nós</a>
                    <a className='text-zinc-500 text-sm' href="">Privacidade</a>
                  </div>
                  <div className='flex flex-col gap-4 h-20 w-45  '>
                    <a className='text-zinc-500 text-sm' href="">Termos de Uso</a>
                    <a className='text-zinc-500 text-sm' href="">Ajuda</a>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center h-35 w-100 '>
                <div className='flex justify-center items-center mt-2 self-start h-10 w-10 bg-zinc-100 rounded-full mr-2'>
                  <img className='h-5' src={cellphone} alt="" />
                </div>
                <div className='h-30 w-70 '>
                  <p>Tititi App</p>
                  <span className='text-zinc-500 text-sm'>Disponível na App Store e Google Play. Validação de ingressos, compras e muito mais.</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col h-40 w-full '>
              <div className='my-2 flex justify-between h-10 w-full '>
                <div className='flex gap-4 h-10 w-90 '>
                  <div className='hover:bg-zinc-200 duration-200 cursor-pointer flex justify-center items-center self-start h-9 w-9 bg-zinc-100 rounded-full'>
                    <img className='h-5' src={mail} alt="" />
                  </div>
                  <div className='hover:bg-zinc-200 duration-200 cursor-pointer flex justify-center items-center self-start h-9 w-9 bg-zinc-100 rounded-full'>
                    <img className='h-5' src={facebook} alt="" />
                  </div>
                  <div className='hover:bg-zinc-200 duration-200 cursor-pointer flex justify-center items-center self-start h-9 w-9 bg-zinc-100 rounded-full'>
                    <img className='h-5' src={mail} alt="" />
                  </div>
                </div>
                <div className='flex gap-4 h-10 w-100 justify-end'>
                  <div className='flex rounded-lg bg-black h-10 w-40 cursor-pointer hover:bg-gray-800 duration-200'>
                    <div className='flex items-center justify-center h-10 rounded-l-lg w-10'>
                      <img className='h-5' src={applewhite} alt="" />
                    </div>
                    <div className='flex justify-center text-white flex-col h-10 w-30 rounded-r-lg'>
                      <p className='font-light text-[12px]'>Baixe na</p>
                      <span className='font-light text-[14px]'>App Store</span>
                    </div>
                  </div>
                  <div className='flex rounded-lg bg-black h-10 w-40 cursor-pointer hover:bg-gray-800 duration-200'>
                    <div className='flex items-center justify-center h-10 rounded-l-lg w-10'>
                      <img className='h-5' src={playstore} alt="" />
                    </div>
                    <div className='flex justify-center text-white flex-col h-10 w-30 rounded-r-lg'>
                      <p className='font-light text-[12px]'>Disponível no</p>
                      <span className='font-light text-[14px]'>Google Play</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center h-18 w-90 my-3 rounded-xl bg-zinc-100'>
                <div className='ml-4 flex items-center h-15 w-15 '>
                  <img className='w-10' src={basquete} alt="" />
                </div>
                <div className='flex justify-center flex-col h-15 w-65 '>
                  <p className='text-sm text-nowrap '>Ticketeira oficial da</p>
                  <span className='text-[#515f4f] font-bold text-sm text-nowrap'>Confederação Brasileira de Basquete</span>
                </div>
              </div>
            </div>
          </div>
          {/* prefooter */}

          {/* footer */}
          <footer>
            <div className='flex justify-between items-center border-t border-zinc-200 h-30 w-full'>
              <div className='h-15 w-90'>
                <span className='text-sm text-zinc-700'>© 2025 Tititi. Todos os direitos reservados.</span>
                <p className='mt-2 text-xs text-zinc-700'>CNPJ: 40.028.922/0001-69</p>
              </div>
              <div className='h-15 w-40 flex justify-end items-center gap-5 text-zinc-700 text-xs'>
                <a href="">Termos</a>
                <a href="">Privacidade</a>
              </div>
            </div>
          </footer>
          {/* footer */}


        </main >
      </div >
    </>
  )
}

export default App
