import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProvider';

const SocialLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const {setUser, directLogin} = useContext(AuthContext);

    const handleGoogleLogin = () => {
        directLogin(googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            alert(error.code);
        })

    }


    const handleGithubLogin = () => {
        directLogin(githubProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            alert(error.code);
        })

    }
    return (
        <div>
            <h2 className='font-semibold mb-4'>Login With</h2>
            <div className='flex flex-col gap-2'>
                <button onClick={handleGoogleLogin} className='btn btn-outline text-cyan-500'>
                    <FaGoogle></FaGoogle> Login with Google
                </button>
                <button onClick={handleGithubLogin} className='btn btn-outline'>
                    <FaGithub></FaGithub> Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;