import React from 'react'
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai"
import { Navbar } from 'flowbite-react';

import bannerNavbar from '../assets/bannerNavbar.png'; 
// import { useDispatch, useSelector } from "react-redux";



const Navbarr = () => {
    
    // const eventos = useSelector((state)=>state.eventos);
    
    // const selectorcontroller = ()=>{
    //   console.log(eventos);
    // }
    return (
        <div>
        {/* <button onClick={selectorcontroller}>aca!</button> */}
            <div className='border-b-[1px] border-solid border-black flex justify-end px-2'> <a className='text-blue-700 text-2xl' target='_blank' href="https://www.facebook.com/" ><AiFillFacebook/></a><a className='text-rose-500 text-2xl' target='_blank' href="https://www.instagram.com/" ><AiFillInstagram/></a></div>
            <Navbar
                fluid={true}
                rounded={true}
                className="py-8 bg-transparent"
            >
                <Navbar.Brand href="localhost:5173/asdf">
                    <img
                        src={bannerNavbar}
                        className="mr-3 h-20"
                        alt="Caracola"
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/talleres"
                    >
                        Talleres
                    </Navbar.Link>
                    <Navbar.Link href="/noticias">
                        Noticias
                    </Navbar.Link>
                    <Navbar.Link href="/eventos">
                        Eventos
                    </Navbar.Link>
                    <Navbar.Link href="/nosotros">
                        Nosotros
                    </Navbar.Link>
                    <Navbar.Link href="/contacto">
                        Contacto
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navbarr;