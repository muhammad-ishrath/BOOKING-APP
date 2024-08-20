import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";


const Header = () => {
    const {isLoggedIn} = useAppContext();
    return(
        //look tailwind documentation for more detaisl
        <div className="bg-blue-800 py-4 px-4">
            {/* container - cretae a box with max width within its parent 
            mx-auto - ceneters it within its parent
            flex - can use flow bix properties default is elements are in row 
            px-  padding in x axis  
            
            justfy-between vs flex space-x-2(fixed space)*/}

            <div className="container mx-auto flex justify-between px-60">
                <span className="text-4xl text-white font-bold tracking-tight">
                    <Link to="/"> MernHolidays.com </Link>
                </span>
                <span className="flex space-x-2">
                    {isLoggedIn? ( <>
                    <Link className="flex items-center text-white px-3 font-bold hover:bg-blue-600" to="/my-bookings">My Bookings</Link>
                    <Link className="flex items-center text-white px-3 font-bold hover:bg-blue-600"  to="/my-hotels">My Hotels</Link>
                    <SignOutButton />
                    
                    </>):(<Link to="/sign-in" className="flex  bg-white items-center text-blue-600 px-3 py-2 font-bold hover:bg-gray-100">Sign in</Link>)
                 }
                    </span>
            </div>
        </div>
      

    );
};

export default Header;