import { LogOut } from "lucide-react"
import { ModeToggle } from "../mode-toggle"
import { Link } from "react-router-dom"

const Header = () => {
  type userType = {
    name: string,
    profile: string
  }
  const user: userType = {
    name: 'Charles17',
    profile: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
  }
  return (
    <div className="flex items-center justify-between bg-white border-b border-gray-500 px-4 py-2">
    <div className="text-2xl font-bold ml-10">Admin Panel</div>
    <div>
      <div className="flex items-center">
        {user ? (
          <div className="flex items-center gap-4">
             <h1>Hi, Admin</h1>
          <img className="rounded-full w-10 bg-contain h-10" src={user?.profile} alt={user.name} />   
          <ModeToggle />      
          <Link to="/login"><LogOut className="cursor-pointer"/></Link>
        </div>) : (<>Login</>)}
       
      </div>

    </div>
  </div>
  
  )
}

export default Header