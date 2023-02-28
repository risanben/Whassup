import React from 'react'
import { Routes, Route } from 'react-router'

import routes from './routes'

import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { UserDetails } from './pages/user-details'
import { HomePage } from './pages/home-page'

export function RootCmp() {

    return (
        <div className='flex'>
            <AppHeader />
            <main className='main-app-section'>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
                {/* <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                    <Route path="user/:id" element={<UserDetails />} />
                </Routes> */}
            </main>
            {/* <AppFooter /> */}
        </div>
    )
}


