import logo from '../assets/logo.svg'
import playstore from '../assets/playstore.svg'
import basquete from '../assets/basquete.webp'
import applewhite from '../assets/applewhite.png'
import mail from '../assets/mail.svg'
import facebook from '../assets/facebook.svg'
import cellphone from '../assets/cellphone.svg'

function Footer() {
  return (
    <>
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
    </>
  )

}

export default Footer
