import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import routes from '../routes'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, logout, signup } from '../store/user.actions.js'
import { LoginSignup } from './login-signup.jsx'
import { useEffect } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { BsChatLeftDotsFill } from 'react-icons/bs'
import { BsFilter } from 'react-icons/bs'



export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.user)

    useEffect(() => {
        loadChats()
    }, [user])
    async function loadChats() {
        console.log('user', user)
        // try {
        //     const user = await login(credentials)
        //     showSuccessMsg(`Welcome: ${user.fullname}`)
        // } catch(err) {
        //     showErrorMsg('Cannot login')
        // }
    }
    async function onLogin(credentials) {
        try {
            const user = await login(credentials)
            showSuccessMsg(`Welcome: ${user.fullname}`)
        } catch (err) {
            showErrorMsg('Cannot login')
        }
    }
    async function onSignup(credentials) {
        try {
            const user = await signup(credentials)
            showSuccessMsg(`Welcome new user: ${user.fullname}`)
        } catch (err) {
            showErrorMsg('Cannot signup')
        }
    }
    async function onLogout() {
        try {
            await logout()
            showSuccessMsg(`Bye now`)
        } catch (err) {
            showErrorMsg('Cannot logout')
        }
    }

    return (
        <header className="app-header">
            <section className="top-section flex">
                {user &&
                    <>
                        {user.imgUrl && <img src={user.imgUrl} />}
                        <section className='menu-btns flex '>
                            <BsChatLeftDotsFill className='chat-btn' />
                            <BiDotsVerticalRounded className='menu-btn' />
                        </section>
                    </>}
            </section>

            <section className="chat-search flex align-center space-between">
                <section className="input-section flex">
                    <input type="text" placeholder='Search in chats' />
                </section>
                <BsFilter className='chat-filter-btn' />
            </section>

            <section className="archive">

            </section>
            <nav>
                {/* {routes.map(route => <NavLink key={route.path} to={route.path}>{route.label}</NavLink>)} */}

                {/* {user &&
                    <span className="user-info">
                        <Link to={`user/${user._id}`}>
                            {user.imgUrl && <img src={user.imgUrl} />}
                            {user.fullname}
                        </Link>
                        <span className="score">{user.score?.toLocaleString()}</span>
                        <button onClick={onLogout}>Logout</button>
                    </span>
                } */}
                {!user &&
                    <section className="user-info">
                        <LoginSignup onLogin={onLogin} onSignup={onSignup} />
                    </section>
                }
            </nav>
        </header>
    )
}