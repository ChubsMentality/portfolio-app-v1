import { useState, useEffect, useRef } from 'react'
import { animateScroll as scroll, Link } from 'react-scroll'
import { CgMenuRight } from 'react-icons/cg'
import gsap from 'gsap'

export default function Navbar({ menuVisible, setMenuVisible }) {
    const [scrollPos, setScrollPos] = useState()
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const navbar = useRef()

    const scrollTop = () => {
        if(window.scrollY === 0) return

        scroll.scrollToTop()
        setMenuVisible(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollPos(window.scrollY)
        })

        setTimeout(() => {
            gsap.from(navbar.current, {
                y: 35,
                opacity: 0,
            })
        }, 4000)
    }, [])

    return (
        <nav
            className='fixed top-0 left-0 px-375 h-[60px] w-full z-20 backdrop-blur-2xl shadow-sm flex justify-between
            items-center 425:px-425 425:h-[62px] tablet:px-768 tablet:h-[75px] laptop:px-1024 laptop:h-[62px] 1280:px-1280 1280:h-[67px]
            1440:px-1440 1440:h-[73px] 1600:px-1600 1600:h-[80px] 1920:px-1920 1920:h-[90px]'
            ref={navbar}
        >
            <button 
                style={scrollPos >= 800 ? { color: 'white' } : { color: 'black'}} 
                className='font-Poppins font-bold text-[1.1rem] transition-colors duration-300 ease-in 425:text-[1.18rem] tablet:text-[1.5rem]
                laptop:text-[1.2rem] 1280:text-[1.4rem] 1440:text-[1.6rem] 1600:text-[1.85rem] 1920:text-[2rem]'
                onClick={() => scrollTop()}
            >
                JERICHO.DEV
            </button>

            <ul className='hidden tablet:flex item-center gap-x-[30px] laptop:gap-x-[33px] 1280:gap-x-[39px] 1440:gap-x-[45px] 1600:gap-x-[50px] 1920:gap-x-[55px]'>
                <Link 
                    onClick={() => scrollTop()}
                    className={scrollPos >= 800 ? 'link-light' : 'link-dark'}
                    style={scrollPos >= 800 ? { color: 'white' } : { color: 'black'}}
                >
                    Home
                </Link>
                <Link 
                    to='aboutMe'
                    smooth={true}
                    offset={-120}
                    className={scrollPos >= 800 ? 'link-light' : 'link-dark'}
                    style={scrollPos >= 800 ? { color: 'white' } : { color: 'black'}}
                >
                    About Me
                </Link>

                <Link 
                    to='projects'
                    smooth={true}
                    offset={-120}
                    className={scrollPos >= 800 ? 'link-light' : 'link-dark'}
                    style={scrollPos >= 800 ? { color: 'white' } : { color: 'black'}}
                >
                    Projects
                </Link>

                <Link 
                    to='contactMe'
                    smooth={true}
                    offset={100}
                    className={scrollPos >= 800 ? 'link-light' : 'link-dark'}
                    style={scrollPos >= 800 ? { color: 'white' } : { color: 'black'}}
                >
                    Contact Me
                </Link>
            </ul>

            <button onClick={() => setMenuVisible(true)} className='tablet:hidden'>
                <CgMenuRight className='h-[28px] w-[28px] transition-colors duration-300 ease-in 425:h-[30px] 425:w-[30px]' color={scrollPos >= 800 ? 'white' : 'black'} />
            </button>
        </nav>
    )
}