'use client'
import Footer from "./components/footer"
import Navbar from "./components/Navbar"
import PlansPage from "./pages/plansPage"




export default function Home() {

  return (
    <main>

      <section className="">
        <Navbar/>
        <PlansPage/>
        <Footer/>
      </section>  
    </main>
  )
}
