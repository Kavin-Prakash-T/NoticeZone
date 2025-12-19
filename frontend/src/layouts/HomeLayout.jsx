import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'


const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default HomeLayout