import { useContext } from 'react';
import UserImage from '../assets/images/user.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser(() => {

        })
            .catch(error => {
                
            })
    }
    return (
        <div className='flex justify-between items-center py-2'>
            <div className=''></div>
            <div className='nav space-x-4'>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Career</Link>
            </div>
            <div className='login flex items-center gap-2'>
                {
                    user
                        ? <details className="dropdown dropdown-end">
                            {/* used 'list-none' to remove triangle sign of the details  */}
                            <summary className="m-1 list-none">            
                                <img className='w-12 rounded-full' src={user.photoURL} alt="" />
                            </summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><Link to="/profile" className='btn'>{user.displayName}</Link></li>
                                <li><button onClick={handleSignOut} className="btn">Sign Out</button></li>
                            </ul>
                        </details>
                        : <Link to="/auth/login" className='btn btn-neutral px-8'>Login</Link>
                }
                {/* <img src={UserImage} alt="" />
                <Link to="/auth/login" className='btn btn-neutral px-8'>Login</Link> */}
            </div>
        </div>
    );
};

export default NavBar;