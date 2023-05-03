import { useState, useEffect, useRef } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { animateScroll as scroll } from 'react-scroll'
import gsap, { Power1, Power2, Power4, Sine } from 'gsap'

export default function NavbarMenu({ menuVisible, setMenuVisible }) {
    const menu = useRef()

    const scrollTop = () => {
        if(window.scrollY === 0) return

        scroll.scrollToTop()
        setMenuVisible(false)
    }

    useEffect(() => {
        if(menuVisible === true) {
            gsap.to(menu.current, {
                x: 0,
                // ease: Sine.easeIn,
            })

            gsap.fromTo('#link', 
                {
                    opacity: 0,
                    x: 80,
                },
                {
                    opacity: 1,
                    x: 0,
                    stagger: 0.2
                },
            )
        } else {
            gsap.to(menu.current, {
                x: '100%',
                // ease: Sine.easeOut,
            })
        }
    }, [menuVisible])

    return (
        <div 
            className='fixed top-0 right-0 h-screen w-[60vw] bg-dark z-30 translate-x-[100%]
             shadow-2xl 425:w-[58vw]'
            ref={menu}
        >
            <button onClick={() => setMenuVisible(false)}>
                <IoCloseOutline 
                    color='white' 
                    className='absolute top-[30px] right-[15px] h-[33px] w-[33px] 425:right-[18px]' 
                />
            </button>

            <ul className='mt-[130px] mr-[20px] 425:mr-[23px]'>
                <li 
                    className='text-[white] text-right text-[1.3rem] font-Poppins font-extralight block mb-[30px]
                    425:text-[1.5rem] 425:mb-[33px]'
                    onClick={() => scrollTop()}
                    id='link'
                >
                    Home
                </li>

                <li 
                    className='text-[white] text-right text-[1.3rem] font-Poppins font-extralight block mb-[30px]
                    425:text-[1.5rem] 425:mb-[33px]'
                    id='link'
                >
                    About Me
                </li>

                <li 
                    className='text-[white] text-right text-[1.3rem] font-Poppins font-extralight block mb-[30px]
                    425:text-[1.5rem] 425:mb-[33px]'
                    id='link'
                >
                    Projects
                </li>

                <li 
                    className='text-[white] text-right text-[1.3rem] font-Poppins font-extralight block mb-[30px]
                    425:text-[1.5rem] 425:mb-[33px]'
                    id='link'
                >
                    Contact Me
                </li>
            </ul>
        </div>
    )
}