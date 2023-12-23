import React, { useState } from 'react'
import '../styles/login.css'
import { login } from '../features/userSlice'
import { auth } from '../app/firebase'
import { useDispatch } from 'react-redux';

const Login = () => {
    const [name, setName] = useState("");
    const [profilePhotoUrl, setProfilePhotoUrl] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(
            userAuth => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        profilePhotoUrl: userAuth.user.photoURL,
                    })
                )
            }
        ).catch(error => alert(error))
    }

    const register = (e) => {
        e.preventDefault();
        if (!name) {
            return alert("Please enter a full name");
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePhotoUrl,
            }).then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePhotoUrl,
                    })
                )
            });
        }).catch(error => alert(error))
    }

    return (
        <div className='login'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
                alt="LinkedIn Logo"
            />

            <form>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter Full Name to Register"
                    type="text"
                />
                <input
                    value={profilePhotoUrl}
                    onChange={e => setProfilePhotoUrl(e.target.value)}
                    placeholder="Profile Picture URL (Optional)"
                    type="text"
                />
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>
                Not a member? <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login