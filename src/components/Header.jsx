import moment from 'moment';
import logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <div className='flex flex-col items-center gap-4 mt-4'>
            <div className="log">
                <img className='w-[350px]' src={logo} alt="The Dragon News" />
            </div>
            <h2 className='text-gray-500'>Journalism Without Fear or Favour</h2>
            <p className='text-gray-600 text-lg'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;