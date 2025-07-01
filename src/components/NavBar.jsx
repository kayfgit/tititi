import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import signin from '../assets/signin.svg'

function NavBar() {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/signin');
  }

  return (
    <>
      <header className='relative w-300 h-30 justify-center items-center'>
        <div className='w-300 h-20 flex-row flex justify-between items-center'>
          <div className='w-125 h-10 flex justify-start items-center'>
            <a href="/">
              <img className='cursor-pointer w-30 h-30' src={logo} alt="" />
            </a>
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
            <button onClick={handleClick} className='duration-200 rounded-xl cursor-pointer flex justify-center items-center hover:rounded-xl px-3 py-1 text-zinc-900 text-sm hover:bg-gray-100 ml-4 text-nowrap'>
              <img className='w-4 align-middle inline-block mr-2' src={signin} alt="" />
              <span>Entrar</span>
            </button>
            <div className='duration-200 cursor-pointer font-bold mr-2 flex justify-center items-center rounded-xl px-3 py-1.5 text-white text-sm bg-[#515f4f] ml-4 text-nowrap'>
              <span>Criar conta</span>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default NavBar
