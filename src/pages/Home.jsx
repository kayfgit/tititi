import ticket from '../assets/ticket.svg'
import searchwhite from '../assets/searchwhite.svg'
import searchblack from '../assets/searchblack.svg'
import people from '../assets/people.svg'
import suitcase from '../assets/suitcase.svg'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Home() {

  return (
    <>
      <div className='bg-white w-screen min-h-screen flex items-center justify-center overflow-y-auto'>
        <main className='min-h-screen w-300 flex flex-col overflow-y-auto'>

          {/* nav */}
          <NavBar />
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

          {/* footer */}
          <Footer />
          {/* footer */}


        </main >
      </div >
    </>
  )
}

export default Home

