import Head from 'next/head'
/** Custom Modules */
import NavBar from '../components/NavBar';
import ProjectButtonChoose from '../components/ProjectButtonChoose';


export default function Home() {
  return (
    <>
      <NavBar />
      <ProjectButtonChoose />
    </>

  )
}
