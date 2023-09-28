import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoHtml5, IoLogoJavascript } from 'react-icons/io5'
import { SiTailwindcss, SiBootstrap, SiRedux, SiFigma, SiExpress, SiInstagram, SiIndeed, SiMongodb, SiVisualstudio } from 'react-icons/si'
import { FaCss3 } from 'react-icons/fa'
import { DiReact } from 'react-icons/di'
import { VscChromeMinimize, VscClose, VscChromeRestore } from 'react-icons/vsc'
import { Projects } from './components/ProjectDeets/Projects'
import Toast from './components/ToastNotif/Toast'
import ProjectCard from './components/ProjectDeets/ProjectCard'
import ProjectDeets from './components/ProjectDeets/ProjectDeets'
import Navbar from './components/Navbar/Navbar'
import NavbarMenu from './components/Navbar/NavbarMenu'
import PreLoader from './components/PreLoader/PreLoader'
import gsap, { Power0, Power1, Power2, Power3, Power4 } from 'gsap'
import Lenis from '@studio-freight/lenis'
import emailjs from '@emailjs/browser'
import './App.css'

function Overlay({ detailsVisible, setDetailsVisible }) {
  const overlay = useRef()

  useEffect(() => {
    if(detailsVisible === true) {
      gsap.fromTo(overlay.current, {
        opacity: 0,
        display: 'none'
      },
      {
        opacity: 1,
        display: 'block'
      })
    } else {
      gsap.fromTo(overlay.current, {
        display: 'block'
      },
      {
        display: 'none'
      })
    }
  }, [detailsVisible])

  return (
    <div 
      className='fixed top-0 left-0 h-screen w-full z-30 backdrop-blur-md transition-opacity ease-in'
      onClick={() => setDetailsVisible(false)}
      ref={overlay}
    >
    </div>
  )
}

export default function App() {
  // Lenis
  const lenis = new Lenis()
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // const blob = document.getElementById('blob')
  // useEffect(() => {
  //   window.onpointermove = event => {
  //     const { clientX, clientY } = event
  //     setCoords(clientX)

  //     blob.animate({
  //       left: `${clientX}px`,
  //       top: `${clientY}px`
  //     }, { duration: 1000, fill: 'forwards' })
  //   }
  // }, [coords])

  // window.addEventListener('pointermove', (event) => {
  //   const { clientX, clientY } = event

  //   blob?.animate({
  //     left: `${clientX}px`,
  //     top: `${clientY}px`
  //   }, { duration: 1000, fill: 'forwards' })
  // })

  const [selectedProj, setSelectedProj] = useState(null)
  const [detailsVisible, setDetailsVisible] = useState(false)
  const [activePanel, setActivePanel] = useState('aboutMe')
  const [menuVisible, setMenuVisible] = useState(false)
  const [carouselWidth, setCarouselWidth] = useState()
  const [emailSuccess, setEmailSuccess] = useState(false)
  const heroText = useRef()
  const aboutMePanel = useRef()
  const expPanel = useRef()
  const skillsPanel = useRef()
  const projectsCarousel = useRef()
  const ecommerceVid = useRef()
  const form = useRef()

  const frontendSkills = [
    {
      id: 0,
      icon: <IoLogoHtml5 />,
      name: 'HTML',
      type: 'frontend',
    },
    {
      id: 1,
      icon: <FaCss3 />,
      name: 'CSS',
    },
    {
      id: 2,
      icon: <IoLogoJavascript />,
      name: 'JavaScript',
    },
    {
      id: 3,
      icon: <DiReact />,
      name: 'ReactJS',
    },
    {
      id: 4,
      icon: <DiReact />,
      name: 'React Native',
    },
    {
      id: 5,
      icon: <SiRedux />,
      name: 'Redux',
    },
    {
      id: 6,
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },
    {
      id: 7,
      icon: <SiBootstrap />,
      name: 'Bootstrap',
    },
    {
      id: 8,
      icon: <SiFigma />,
      name: 'Figma',
    },
    {
      id: 9,
      icon: null,
      name: 'GreenSock Animation Platform',
    },
  ]

  const backendSkills = [
    {
      id: 0,
      icon: <SiExpress />,
      name: 'Express.js'
    },
    {
      id: 1,
      icon: <SiMongodb />,
      name: 'MongoDB',
    }
  ]
  
  const switchToAboutMe = () => {
    if(activePanel === 'aboutMe') return

    setActivePanel('aboutMe')

    gsap.to(expPanel.current, {
      display: 'none'
    })

    gsap.to(skillsPanel.current, {
      display: 'none',
    })

    gsap.fromTo(aboutMePanel.current, {
        display: 'none',
        y: -30,
        opacity: 0,
      },
      {
        display: 'block',
        y: 0,
        opacity: 1,
        delay: .48,
      }
    )
  }

  const switchToExp = () => {
    if(activePanel === 'exp') return

    setActivePanel('exp')

    gsap.to(aboutMePanel.current, {
      display: 'none',
      
    })

    gsap.to(skillsPanel.current, {
      display: 'none',
    })

    gsap.fromTo(expPanel.current, {
        display: 'none',
        y: -30,
        opacity: 0,
      },
      {
        display: 'block',
        y: 0,
        opacity: 1,
        delay: .48,
      }
    )
  }
  
  const switchToSkills = () => {
    if(activePanel === 'skills') return

    setActivePanel('skills')

    gsap.to(aboutMePanel.current, {
      display: 'none',
    })

    gsap.to(expPanel.current, {
      display: 'none',
    })

    gsap.fromTo(skillsPanel.current, {
        display: 'none',
        y: -30,
        opacity: 0,
      },
      {
        display: 'block',
        y: 0,
        opacity: 1,
        delay: .48,
      }
    )
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_10fesfw', 'template_0wv7l0m', form.current, '5MG4vb_xzlw6iBgzJ')
      .then((result) => {
        console.log(result.text)
        setEmailSuccess(true)

        setTimeout(() => {
          setEmailSuccess(false)
        }, 3500)
      }, (error) => {
        console.log(error.text)
      })

    window.history.pushState({}, '', '/')
  }

  useEffect(() => {
    if(menuVisible === true) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [menuVisible])

  useEffect(() => {
    if(detailsVisible === true) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [detailsVisible])

  useEffect(() => {
    console.log('project index: ', selectedProj)
  }, [selectedProj])

  useEffect(() => {
    setTimeout(() => {
      gsap.from(heroText.current, {
        y: 20,
        opacity: 0,
      })
    }, 4000)

    gsap.to(expPanel.current, {
      display: 'none'
    })

    gsap.to(skillsPanel.current, {
      display: 'none'
    })

    setCarouselWidth(projectsCarousel.current.scrollWidth - projectsCarousel.current.offsetWidth)
    
    console.log(Projects)
  }, [])

  const blob = document.getElementById('blob')

  window.onpointermove = event => {
    const { clientX, clientY } = event

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 1000, fill: 'forwards' })
  }

  return ( 
   <div className='relative overflow-hidden'>
    <Navbar menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
    <NavbarMenu menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
    <Overlay detailsVisible={detailsVisible} setDetailsVisible={setDetailsVisible} />
    {emailSuccess === true ? <Toast /> : null}
    <PreLoader />

    {detailsVisible === true ?
      <ProjectDeets 
        id={Projects[selectedProj].id}
        name={Projects[selectedProj].name} 
        desc={Projects[selectedProj].description}
        displayType={Projects[selectedProj].displayType}
        displaySrc={Projects[selectedProj].displaySrc}
        languages={Projects[selectedProj].languages}
        status={Projects[selectedProj].status}
        link={Projects[selectedProj].link}
        visible={detailsVisible}
        setVisible={setDetailsVisible}
      />
      :
      null
    }

    {/* Hero Section */}
    <section className='h-screen relative overflow-hidden'>
      <div className='h-full w-screen absolute top-0 left-0 backdrop-blur-[12vmax] z-10'></div>
      <div 
        className='h-[75vmax] aspect-square rounded-full bg-gradient-to-r from-darkBlue via-skyBlue to-bg-white opacity-[.8] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] animate-rotate
        425:h-[80vmax] tablet:h-[100vmax] laptop:h-[120vmax] 1280:h-[140vmax] 1600:h-[155vmax]' 
        ref={blob}
        id='blob'
      >
      </div>
    
      <p 
        className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-[2.9rem] leading-[56px] font-Poppins font-semibold z-10 select-none
        425:text-[3.45rem] 425:leading-[63px] tablet:text-[5rem] tablet:leading-[86px] laptop:text-[6rem] laptop:leading-[90px]
        1280:text-[6.5rem] 1280:leading-[100px] 1440:leading-[110px] 1440:text-[6.7rem] 1600:text-[6.5rem] 1600:leading-[105px]
        1920:text-[8.2rem] 1920:leading-[135px]'
        ref={heroText}
      >
        And I build 
        <span className='font-Playfair font-thin italic'> Wonderful</span> experiences
      </p>
    </section>

    <section className='h-full bg-dark pt-[85px] pb-[30px] 425:pt-[100px] 425:pb-[45px] 1280:pt-[120px] 1280:pb-[80px] 1440:pt-[130px] 1600:pt-[150px] 1920:pt-[170px]'>
      <Element 
        className='relative bg-lightDark shadow-md rounded-b-md p-[20px] ml-375 mr-375 425:mx-425
        425:px-[25px] tablet:mx-768 tablet:p-[30px] laptop:mx-1024 laptop:mt-[20px] laptop:p-[40px] 1280:mx-1280 1440:mx-1440 1600:mx-1600
        1920:mx-1920 1920:p-[55px]'
        name='aboutMe'
      >
        {/* Tabs */}
        <div className='absolute left-0 top-[-30px] tablet:top-[-40px] laptop:top-[-33px] 1280:top-[-35px] 1440:top-[-40px] 1600:top-[-40px] 1920:top-[-48px]'>
          <button className={activePanel === 'aboutMe' ? 'active-panel' : 'inactive-panel'} onClick={() => switchToAboutMe()}>About Me</button>
          <button className={activePanel === 'exp' ? 'active-panel' : 'inactive-panel'} onClick={() => switchToExp()}>Experience</button>
          <button className={activePanel === 'skills' ? 'active-panel' : 'inactive-panel'} onClick={() => switchToSkills()}>Skills</button>
        </div>

        {/* Content */}
        <div className=''>
          <div ref={aboutMePanel}>
            <h6 
              className='text-[white] text-[1.5rem] font-semibold font-Poppins tablet:text-[2.3rem] laptop:text-[2rem] 1440:text-[2.45rem]
              1600:text-[2.8rem] 1920:text-[3.6rem]'
            >
              01. About Me
            </h6>
            <p 
              className='text-[white] text-[.85rem] font-thin font-Poppins mt-[8px] leading-7 tablet:text-[1rem] tablet:leading-[33px] 1440:text-[1.1rem]
              1440:leading-[38px] 1600:text-[1.3rem] 1600:leading-[43px] 1920:text-[1.6rem] 1920:leading-[50px]'
            >
              My interest for front-end development started when I was at 2nd-year of high school, though. I didn't thought I'd enjoy building web apps. Now I'm an aspiring front-end developer equipped with the knowledge of creating functional and user-friendly web applications.
            </p>
          </div>

          <div ref={expPanel}>
            <h6
              className='text-[white] text-[1.5rem] font-semibold font-Poppins tablet:text-[2.3rem] laptop:text-[2rem] 1440:text-[2.45rem]
              1600:text-[2.8rem] 1920:text-[3.6rem]'
            >
              02. Experience
            </h6>

            <p 
              className='mt-[10px] text-[white] font-medium font-Poppins tablet:text-[1.3rem] tablet:mt-[10px] laptop:text-[1.1rem] 1440:text-[1.3rem]
              1600:text-[1.55rem] 1920:text-[1.9rem]'
            >
              Sibol Pinoy Management Consultancy
            </p>
            <p
              className='mt-[4px] text-[white] font-extralight font-Poppins text-[.85rem] tablet:text-[1.1rem] laptop:text-[.95rem] 1440:text-[1.1rem].
              1600:text-[1.3rem] 1920:text-[1.5rem]'
            >
              Web development Intern
            </p>
            <p 
              className='mt-[2px] text-[white] font-extralight font-Poppins text-[.85rem] tablet:text-[1.1rem] laptop:text-[.95rem] 1440:text-[1.1rem]
              1600:text-[1.3rem] 1920:text-[1.5rem]'
            >
              Feb 7 - April 30, 2022
            </p>

            <ul>
              <li 
                className='list-square text-[white] font-extralight font-Poppins text-[.85rem] mx-[15px] mt-[15px] tablet:text-[1.1rem] tablet:mt-[20px] tablet:mx-[20px] laptop:text-[.95rem] laptop:mt-[19px]
                1440:text-[1.1rem] 1440:mt-[28px] 1600:text-[1.25rem] 1920:text-[1.5rem] 1920:mt-[35px]'
              >
                Assigned as a front-end developer for the company's E-Learning Portal project.
              </li>

              <li 
                className='list-square text-[white] font-extralight font-Poppins text-[.85rem] mx-[15px] mt-[15px] tablet:text-[1.1rem] tablet:mt-[20px] tablet:mx-[20px] laptop:text-[.95rem] laptop:mt-[19px]
                1440:text-[1.1rem] 1440:mt-[21px] 1600:text-[1.25rem] 1920:text-[1.5rem]'
              >
                Created and designed a prototype for the E-Learning portal.
              </li>

              <li 
                className='list-square text-[white] font-extralight font-Poppins text-[.85rem] mx-[15px] mt-[15px] tablet:text-[1.1rem] tablet:mt-[20px] tablet:mx-[20px] laptop:text-[.95rem] laptop:mt-[19px]
                1440:text-[1.1rem] 1440:mt-[21px] 1600:text-[1.25rem] 1920:text-[1.5rem]'
              >
                Built the prototype to be functional and responsive across multiple devices
              </li>

              <li 
                className='list-square text-[white] font-extralight font-Poppins text-[.85rem] mx-[15px] mt-[15px] tablet:text-[1.1rem] tablet:mt-[20px] tablet:mx-[20px] laptop:text-[.95rem] laptop:mt-[19px]
                1440:text-[1.1rem] 1440:mt-[21px] 1600:text-[1.25rem] 1920:text-[1.5rem]'
              >
                Transformed designs / prototypes from figma to code.
              </li>

              <li 
                className='list-square text-[white] font-extralight font-Poppins text-[.85rem] mx-[15px] mt-[15px] tablet:text-[1.1rem] tablet:mt-[20px] tablet:mx-[20px] laptop:text-[.95rem] laptop:mt-[19px]
                1440:text-[1.1rem] 1440:mt-[21px] 1600:text-[1.25rem] 1920:text-[1.5rem]'
              >
                Helped / Collaborated with other interns from another department as technicals in their webinars.
              </li>
            </ul>
          </div>

          <div ref={skillsPanel}>
            <h6 
              className='text-[white] text-[1.5rem] font-semibold font-Poppins tablet:text-[2.3rem] laptop:text-[2rem] 1440:text-[2.45rem]
              1600:text-[2.8rem] 1920:text-[3.6rem]'
            >
              03. Skills
            </h6>

            <p 
              className='text-[white] text-[.9rem] font-Poppins mt-[12px] mb-[6px] tablet:text-[1.2rem] tablet:mt-[18px] tablet:mb-[10px]
              laptop:text-[1rem] laptop:mt-[12px] 1440:text-[1.15rem] 1600:text-[1.3rem] 1600:mb-[10px] 1920:text-[1.7rem]'
            >
              Frontend
            </p>
            <div 
              className='flex items-center flex-wrap gap-x-[7px] gap-y-[10px] tablet:gap-[15px] laptop:gap-[10px] 1600:gap-[12px] 1920:gap-[15px]'
            >
              {frontendSkills.map((item) => (
                <div 
                  className='w-fit flex justify-center items-center gap-[6px] bg-[#262626] py-[5px] px-[10px] rounded-sm shadow-sm
                  tablet:py-[8px] tablet:px-[16px] tablet:gap-[7px] laptop:py-[6px] laptop:px-[12px] 1280:gap-[10px] 1280:py-[7px] 1280:px-[14px]
                  1440:gap-[12px] 1600:py-[8.5px] 1600:px-[15px] 1920:py-[9px] 1920:px-[20px]' 
                  key={item.id}
                >
                  <p 
                    className='text-[white] text-[.93rem] tablet:text-[1.1rem] laptop:text-[.9rem] 1280:text-[1rem] 1440:text-[1.2rem]
                    1600:text-[1.45rem] 1920:text-[1.75rem]'
                  >
                    {item.icon !== null && item.icon}
                  </p>
                  <p 
                    className='text-[white] text-[.8rem] font-Poppins font-extralight tablet:text-[.95rem] laptop:text-[.8rem] 1280:text-[.83rem]
                    1440:text-[.95rem] 1600:text-[1.05rem] 1920:text-[1.3rem]'
                  >
                    {item.name}
                  </p>
                </div>              
              ))}
            </div>

            <p 
              className='text-[white] text-[.9rem] mt-[15px] font-Poppins mb-[6px] tablet:text-[1.2rem] tablet:mt-[18px] tablet:mb-[10px]
              laptop:text-[1rem] laptop:mt-[18px] 1440:text-[1.15rem] 1440:mt-[25px] 1600:text-[1.3rem] 1600:mb-[10px] 1920:text-[1.7rem]'
            >
              Backend
            </p>
            <div 
              className='flex items-center flex-wrap gap-x-[7px] gap-y-[10px] tablet:gap-[15px] laptop:gap-[10px]'
            >
              {backendSkills.map((item) => (
                <div 
                  className='w-fit flex justify-center items-center gap-[6px] bg-[#262626] py-[5px] px-[10px] rounded-sm shadow-sm
                  tablet:py-[8px] tablet:px-[16px] tablet:gap-[7px] laptop:py-[6px] laptop:px-[12px] 1440:gap-[12px] 1600:py-[8.5px] 1600:px-[15px]
                  1920:py-[9px] 1920:px-[20px]' 
                  key={item.id}
                >
                  <p 
                    className='text-[white] text-[.93rem] tablet:text-[1.1rem] laptop:text-[.9rem] 1440:text-[1.2rem] 1600:text-[1.45rem] 1920:text-[1.75rem]'
                  >
                    {item.icon !== null && item.icon}
                  </p>
                  <p 
                    className='text-[white] text-[.8rem] font-Poppins font-extralight tablet:text-[.95rem] laptop:text-[.8rem] 1440:text-[.95rem]
                    1600:text-[1.05rem] 1920:text-[1.3rem]'
                  >
                    {item.name}
                  </p>
                </div>              
              ))}
            </div>

          </div>
        </div>
      </Element>

      {/* Projects */}
      <Element
        className='mt-[70px] ml-375 text-[white] text-[1.1rem] font-Poppins font-medium 425:ml-425 425:mt-[80px] 425:text-[1.2rem]
        tablet:ml-768 tablet:text-[1.6rem] laptop:text-[1.3rem] laptop:mt-[100px] laptop:ml-1024 1280:ml-1280 1440:ml-1440 1440:text-[1.7rem]
        1440:mt-[120px] 1600:ml-1600 1600:text-[1.9rem] 1920:ml-1920 1920:text-[2.2rem]'
        name='projects'
      >
        My Projects
      </Element>

      <motion.div className='cursor-grab overflow-hidden mt-[10px] w-full h-full 1440:mt-[20px]' ref={projectsCarousel}>
        <motion.div
          className='flex items-center gap-x-[25px] pl-375 425:pl-425 425:mt-[5px] tablet:pl-768 tablet:gap-x-[33px] laptop:pl-1024 
          1280:pl-1280 1280:gap-x-[37px] 1440:pl-1440 1600:pl-1600 1600:gap-x-[40px] 1920:pl-1920 1920:gap-x-[45px]' 
          drag='x' 
          dragConstraints={{
            right: 5,
            left: -carouselWidth
          }}
        >
          {Projects.map((project) => (
            <ProjectCard displayType={project.displayType} displaySrc={project.displaySrc} id={project.id} key={project.id} setSelectedProj={setSelectedProj} setDetailsVisible={setDetailsVisible} />
          ))}
        </motion.div>
      </motion.div>

      {/* New Form */}
      <Element
        className='h-[500px] bg-formBody mx-375 mt-[70px] 425:mx-425 425:mt-[80px] tablet:mx-768 tablet:h-[570px] laptop:mx-1024
        1280:mx-1280 1280:h-[580px] 1280:mt-[100px] 1440:mx-1440 1440:h-[660px] 1600:mx-1600 1600:h-[750px] 1600:mt-[140px] 1920:mx-1920
        1920:h-[850px]'
        name='contactMe'
      >
        <div 
          className="h-[8.5%] bg-formHead flex justify-between items-center px-[15px] tablet:h-[10%] laptop:h-[9%] laptop:px-[20px] 1600:px-[25px]
          1920:px-[35px]"
        >
          <SiVisualstudio 
            color='#5AA7F2' 
            className='w-[17px] h-[17px] tablet:h-[20px] tablet:w-[20px] laptop:h-[18px] laptop:w-[18px] 1440:h-[23px] 1440:w-[23px]
            1600:h-[26px] 1600:w-[26px] 1920:h-[30px] 1920:w-[30px]' 
          />

          <div>
            <p 
              className='text-[#9492A5] text-[.65rem] font-Poppins font-regular tablet:text-[.75rem] laptop:text-[.8rem] 1440:text-[.88rem]
              1920:text-[1rem]'
            >
              ContactMe.jsx - portfolio
            </p>
          </div>

          <div className='flex items-center gap-x-[10px] laptop:gap-x-[15px] 1440:gap-x-[20px] 1920:gap-x-[30px]'>
            <VscChromeMinimize className='w-[15px] h-[15px] laptop:h-[17px] laptop:w-[17px] 1440:h-[20px] 1440:w-[20px] 1600:h-[21px] 1600:w-[21px] 1920:h-[25px] 1920:w-[25px]' color='#9492A5' />
            <VscChromeRestore className='w-[15px] h-[15px] laptop:h-[17px] laptop:w-[17px] 1440:h-[20px] 1440:w-[20px] 1600:h-[21px] 1600:w-[21px] 1920:h-[25px] 1920:w-[25px]' color='#9492A5' />
            <VscClose className='w-[15px] h-[15px] laptop:h-[17px] laptop:w-[17px] 1440:h-[20px] 1440:w-[20px] 1600:h-[21px] 1600:w-[21px] 1920:h-[25px] 1920:w-[25px]' color='#9492A5' />
          </div>
        </div>

        {/* Form Content */}
        <div className="flex h-[91.5%] tablet:h-[90%] laptop:h-[91%]">
            
            {/* Socials - Mobile */}
            <div className="w-[18%] bg-formHead flex flex-col items-center gap-y-[10px] pt-[12px] 425:gap-y-[12px] 425:w-[15%] tablet:hidden">
              <a href='https://www.linkedin.com/in/jericho-salvador-3b5485215/' target='_blank'>
                <div className='h-[33px] w-[33px] bg-formBody grid place-items-center tablet:h-[40px] tablet:w-[40px] rounded-sm laptop:hidden'>
                  <FaLinkedinIn color='#9492A5' className='w-[18px] h-[18px]' />
                </div>
              </a>

              <a href='https://profile.indeed.com/welcome' target='_blank'>
                <div className='h-[33px] w-[33px] bg-formBody grid place-items-center tablet:h-[40px] tablet:w-[40px] rounded-sm laptop:hidden'>
                  <SiIndeed color='#9492A5' className='w-[18px] h-[18px]' />
                </div>
              </a>

              <a href='https://www.instagram.com/chubssalvador/' target='_blank'>
                <div className='h-[33px] w-[33px] bg-formBody grid place-items-center tablet:h-[40px] tablet:w-[40px] rounded-sm laptop:hidden'>
                  <SiInstagram color='#9492A5' className='w-[18px] h-[18px]' />
                </div>
              </a>
            </div>
            
            {/* Socials - Desktop */}
            <div className="hidden bg-formHead tablet:block tablet:w-[28%] px-[15px] laptop:px-[22px] laptop:w-[25%] 1600:px-[25px]">
              <p 
                className="font-Poppins font-medium text-[white] mt-[15px] mb-[15px] laptop:mt-[22px] 1600:text-[1.1rem] 1600:mt-[28px]"
              >
                Quick Links
              </p>

              <a 
                className="w-full h-[20px] bg-formBody shadow-sm pl-[16px] pr-[5px] py-[18px] mb-[12px] flex items-center
                1440:mb-[14px] 1440:py-[22px] 1600:py-[23px] 1600:mb-[15px] 1600:mt-[20px]"
                href='https://www.linkedin.com/in/jericho-salvador-3b5485215/' 
                target='_blank'
              >
                <FaLinkedinIn color='#9492A5' className='w-[18px] h-[18px] mr-[12px] 1600:h-[20px] 1600:w-[20px] 1600:mr-[15px]' />

                <p className="text-[#9392A5] 1600:text-[1.1rem]">LinkedIn</p>
              </a>

              <a 
                className="w-full h-[20px] bg-formBody shadow-sm pl-[16px] pr-[5px] py-[18px] mb-[12px] flex items-center
                1440:mb-[14px] 1440:py-[22px] 1600:py-[23px] 1600:mb-[15px]"
                href='https://profile.indeed.com/welcome' 
                target='_blank'
              >
                <SiIndeed color='#9492A5' className='w-[18px] h-[18px] mr-[12px] 1600:h-[20px] 1600:w-[20px] 1600:mr-[15px]' />

                <p className="text-[#9392A5] 1600:text-[1.1rem]">Indeed</p>
              </a>

              <a 
                className="w-full h-[20px] bg-formBody shadow-sm pl-[16px] pr-[5px] py-[18px] mb-[12px] flex items-center
                1440:mb-[14px] 1440:py-[22px] 1600:py-[23px] 1600:mb-[15px]"
                href='https://www.instagram.com/chubssalvador/' 
                target='_blank'
              >
                <SiInstagram color='#9492A5' className='w-[18px] h-[18px] mr-[12px] 1600:h-[20px] 1600:w-[20px] 1600:mr-[15px]' />

                <p className="text-[#9392A5] 1600:text-[1.1rem]">Instagram</p>
              </a>
            </div>

            {/* Content */}
            <form
              className="w-[82%] px-[18px] 425:px-[23px] 425:w-[85%] tablet:w-[72%] tablet:px-[35px] laptop:px-[50px] 1280:px-[60px]
              1440:px-[70px] 1600:px-[90px] 1920:px-[110px]"
              ref={form}
              onSubmit={sendEmail}
            >
              <h6 
                className='mt-[26px] text-[white] font-bold font-Poppins tablet:text-[1.2rem] tablet:mt-[33px] 1280:text-[1.4rem] 1280:mt-[37px]
                1440:mt-[50px] 1440:text-[1.6rem] 1600:text-[2rem]'
              >
                Contact Me
              </h6>

              <div className='relative mt-[25px] 1920:mt-[30px]'>
                <input 
                  className='peer w-full h-[40px] px-[10px] outline-none bg-lightDark text-[white] text-[.8rem] font-extralight rounded-sm transition duration-200 ease-in 
                  tablet:h-[45px] tablet:px-[15px] tablet:text-[.88rem] 1440:h-[45px] 1600:h-[50px] 1600:text-[1rem]
                  1920:h-[58px] 1920:text-[1.1rem]'
                  required
                  type='text'
                  name='user_name'
                />
                <span 
                  className='absolute top-[10px] left-[10px] text-[white] text-[.8rem] transition-all duration-200 ease-in 
                  peer-focus:translate-y-[-19px] peer-focus:text-[.68rem] peer-valid:translate-y-[-19px] peer-valid:text-[.68rem]
                  tablet:left-[15px] tablet:text-[.88rem] tablet:peer-focus:text-[.7rem] 1600:top-[14px] 1600:peer-focus:translate-y-[-22px]
                  1920:text-[1.1rem] 1920:peer-focus:text-[.85rem] 1920:peer-valid:text-[.85rem] 1920:peer-focus:translate-y-[-26px] 1920:peer-valid:translate-y-[-26px]'
                >
                  Name
                </span>
              </div>

              <div className='relative mt-[22px] 1600:mt-[25px] 1920:mt-[30px]'>
                <input 
                  className='peer w-full h-[40px] px-[10px] outline-none bg-lightDark text-[white] text-[.8rem] font-extralight rounded-sm transition duration-200 ease-in 
                  tablet:h-[45px] tablet:px-[15px] tablet:text-[.88rem] 1440:h-[45px] 1600:h-[50px] 1600:text-[1rem]
                  1920:h-[58px] 1920:text-[1.1rem]'
                  required
                  type='text'
                  name='user_email'
                />
                <span 
                  className='absolute top-[10px] left-[10px] text-[white] text-[.8rem] transition-all duration-200 ease-in 
                  peer-focus:translate-y-[-19px] peer-focus:text-[.68rem] peer-valid:translate-y-[-19px] peer-valid:text-[.68rem]
                  tablet:left-[15px] tablet:text-[.88rem] tablet:peer-focus:text-[.7rem] 1600:top-[14px] 1600:peer-focus:translate-y-[-22px]
                  1920:text-[1.1rem] 1920:peer-focus:text-[.85rem] 1920:peer-valid:text-[.85rem] 1920:peer-focus:translate-y-[-26px] 1920:peer-valid:translate-y-[-26px]'
                >
                  Email
                </span>
              </div>

              <div className='relative mt-[22px] 1600:mt-[25px] 1920:mt-[30px]'>
                <textarea 
                  className='peer w-full h-[150px] px-[10px] py-[10px] rounded-sm resize-none bg-lightDark outline-none text-[white]
                  text-[.88rem] tablet:h-[165px] tablet:px-[15px] 1600:h-[200px] 1600:text-[.95rem] 1920:text-[1.1rem] 1920:pt-[15px] 1920:h-[250px]'
                  required
                  name='message'
                >
                </textarea>

                <span
                  className='absolute top-[10px] left-[10px] text-[white] text-[.8rem] peer-focus:translate-y-[-19px] transition-all duration-200 ease-in
                  peer-focus:text-[.68rem] peer-valid:translate-y-[-19px] peer-valid:text-[.68rem] tablet:left-[15px] tablet:text-[.88rem] tablet:peer-focus:text-[.7rem]
                  1920:text-[1.1rem] 1920:peer-focus:text-[.85rem] 1920:peer-focus:translate-y-[-21px]'
                >
                  Message
                </span>
              </div>

              <button 
                className='h-[38px] w-full mt-[25px] bg-[#5AA7F2] text-[white] text-[.93rem] 425:text-[1.05rem] font-semibold font-Poppins rounded-sm
                425:h-[43px] tablet:h-[50px] 1280:h-[55px] 1280:text-[1.15rem] 1280:mt-[33px] 1600:text-[1.23rem] 1600:h-[60px] 1600:mt-[40px]
                1920:h-[65px] 1920:text-[1.33rem]'
                type='submit'
              >
                SEND MESSAGE
              </button>
            </form>
        </div>
      </Element>
    </section>
   </div>
  )
}