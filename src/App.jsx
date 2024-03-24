import { useState } from 'react'
import './App.css'
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'
import { Link } from 'react-router-dom'

function App() {
  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);

  const mobileNavContent = (
    <div className='lg:hidden block absolute top-16 w-full text-white left-0 right-0 bg bg-slate-900 transition'>
      <ul className='text-center text-xl p-20 '>
        <Link spy={true} smooth={true} to='/home'>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-50-800 hover:rounded'>Home</li>
        </Link>
        <Link spy={true} smooth={true} to='#'>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-50-800 hover:rounded'>About</li>
        </Link>
        <Link spy={true} smooth={true} to='#'>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-50-800 hover:rounded'>  Services</li>
        </Link>
        <Link spy={true} smooth={true} to='#'>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-50-800 hover:rounded'>Project</li>
        </Link>
        <Link spy={true} smooth={true} to='#'>
          <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-50-800 hover:rounded'>Sign out</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <>
      <nav>
        <div className='bg-slate-600 z-50 text-white lg:py5 px-20 py-4 flex-1 '>
          <div className='max-w-7xl mx-auto flex justify-between items-center'>
            <div className='flex items-center'>
              <span className='text-3xl font-bold'><img src="https://cdn-icons-png.freepik.com/256/522/522399.png?uid=R98459826&ga=GA1.2.1114926933.1708955695&" width={40} alt="" /></span>
            </div>

            <div className='hidden lg:flex md:flex lg:flex-1 items-center justify-end font-normal'>
              <ul className='flex gap-8 text-[18px]'>
                <Link spy={true} smooth={true} to='/home'>
                  <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-700 hover:border-fuchsia-600 cursor-pointer' >Home</li>
                </Link>
                <Link spy={true} smooth={true} to='#'>
                  <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-700 hover:border-fuchsia-600 cursor-pointer'>About</li>
                </Link>
                <Link spy={true} smooth={true} to='#'>
                  <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-700 hover:border-fuchsia-600 cursor-pointer'>Services</li>
                </Link>
                <Link spy={true} smooth={true} to='#'>
                  <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-700 hover:border-fuchsia-600 cursor-pointer'>Project</li>
                </Link>
                <Link spy={true} smooth={true} to='#'>
                  <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-700 hover:border-fuchsia-600 cursor-pointer'>Sign out</li>
                </Link>
              </ul>
            </div>

            <div className='lg:hidden md:hidden flex items-center'>
              <button className='focus:outline-none' onClick={handleclick}>
                {click ? <FaTimes /> : <CiMenuFries />}
              </button>
            </div>
          </div>
        </div>
        {click && mobileNavContent}
      </nav>
    </>
  );
}

export default App;
