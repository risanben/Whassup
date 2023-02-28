import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import homeSvg from '../assets/img/home.svg'
import { CHANGE_COUNT } from '../store/user.reducer'
import { FaLock } from 'react-icons/fa'

export function HomePage() {
    const dispatch = useDispatch()
    const count = useSelector(storeState => storeState.userModule.count)

    function changeCount(diff) {
        console.log('Changing count by:', diff);
        dispatch({ type: CHANGE_COUNT, diff })
    }

    return (
        <section className='home-page flex column align-center'>
            <img className="home-svg" src={homeSvg} />
            <section className='home-txt flex column align-center'>
                <h4>Whassup Web</h4>
                <h6>Send and Receive messages without keeping your phone online.
                    Use Whassup on up to 4 linked devices and 1 phone at the same time.
                </h6>
            </section>
            <span className="home-footer">
                <FaLock className='lock-logo'/>
                <span>End-to-end encrypted</span> 
            </span>
        </section >
    )
}