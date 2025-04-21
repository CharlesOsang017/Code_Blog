import { ArrowRight } from 'lucide-react'
import logo from "../../assets/logoipsum-224.svg";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='flex justify-between items-center py-4 px-20'>
        <Link to={'/'} className='flex items-center gap-2 cursor-pointer'>
            <img src={logo} alt="logo" />
            <h2 className='text-xl font-medium'>Code_Blog</h2>
        </Link>
        <div className='cursor-pointer shadow-xl hover:border-gray-900 flex items-center gap-2 border border-gray-500 py-2 px-4 box-shadow'>
            <h2 className='font-medium text-sm'>Get started</h2>
            <ArrowRight size={18}/>
        </div>

    </div>
  )
}

export default Header