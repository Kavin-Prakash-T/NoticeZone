import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomeLayout from './layouts/HomeLayout.jsx'
import NoticePage from './components/NoticePage.jsx'
import NoticeDetailPage from './components/NoticeDetailPage.jsx'
import LoginForm from './components/LoginForm.jsx'
import RegistrationForm from './components/RegistrationForm.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <ToastContainer />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route element={<HomeLayout />}>
                    <Route path="/notices">
                        <Route index element={<NoticePage />} />
                        <Route path=":id" element={<NoticeDetailPage />} />
                    </Route>
                </Route>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegistrationForm />} />
            </Routes>
        </BrowserRouter>
    </>
)
