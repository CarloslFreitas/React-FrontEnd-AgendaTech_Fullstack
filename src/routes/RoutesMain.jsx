import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'
import { RegisterPage } from '../pages/RegisterPage'
import { ProtectedRoutes } from './ProtectedRoutes'
import { PublicRoutes } from './PublicRoutes'
import { ContactProvider } from '../providers/contactContext'

export const RoutesMain = () => {

    return (
        <Routes>

            <Route element={<PublicRoutes />}>
                <Route path='/' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
            </Route>

            <Route element={<ProtectedRoutes />}>
                <Route path='/home' element={<ContactProvider>
                    <HomePage />
                </ContactProvider>} />
            </Route>

        </Routes>
    )
}