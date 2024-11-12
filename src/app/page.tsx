'use client'
import { useEffect, useRef, useState } from "react"
import nodemailer from "nodemailer"
import Link from "next/link"
import ServicePage from "./pages/servicePage"
import SuportPage from "./pages/suportPage"
import PricingPage from "./pages/pricingPage"
import ContactFormPage from "./pages/contactFormPage"
import HomePage from "./pages/homePage"
import Footer from "./components/footer"
import Navbar from "./components/Navbar"
import ServicesPage from "./pages/servicePage"
import PlansPage from "./pages/plansPage"




export default function Home() {


  ///lógica para verificar se o elemento esta sendo observado na tela inicial e gerar a animação 


  
/*   const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [hasSend, setHasSend] = useState(false)

  const handleSumit = async (e) => {

    const transporter = nodemailer.createTransport()
    const mailOptions = {
      from: email,
      to: "comercial@g10solution.com.br",
      name,
      subject,
      message,
    }

    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log('error')
      } else {
        console.log('sucess')
      }
    })
  } */

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
