import Head from 'next/head'
/** Custom Modules */
import NavBar from '../components/NavBar';
import AboutDescription from '../components/AboutDescription'

export default function Home() {
  return (
    <>
      <NavBar />
      <AboutDescription />
    </>
  )
}
