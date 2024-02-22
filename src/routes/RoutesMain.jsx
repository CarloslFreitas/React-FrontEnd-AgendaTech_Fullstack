import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'
import { RegisterPage } from '../pages/RegisterPage'

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
        </Routes>
    )
}