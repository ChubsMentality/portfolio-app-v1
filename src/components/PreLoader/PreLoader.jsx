import { useEffect, useRef } from 'react'
import gsap, { Power0, Power1, Power2, Power3, Power4 } from 'gsap'

export default function PreLoader() {
    const container = useRef()
    const fName = useRef()
    const lName = useRef()
    const roleMobile = useRef()
    const role = useRef()

    const animate = () => {
        const t1 = gsap.timeline()
    
        t1.fromTo(fName.current, {
                y: -30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                ease: Power1.easeIn
            }
        )
    
        t1.fromTo(lName.current, {
                y: -30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                ease: Power2.easeIn,
            },
        )

        t1.fromTo(roleMobile.current, {
                y: -30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                ease: Power4.easeIn
            }
        )

        t1.fromTo(role.current, {
                y: -30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
            }
        )

        setTimeout(() => {
            t1.fromTo(roleMobile.current, {
                    y: 0,
                    opacity: 1
                },
                {
                    y: 30,
                    opacity: 0,
                    ease: Power4.easeOut,
                }
            )

            t1.fromTo(role.current, {
                    y: 0,
                    opacity: 1
                },
                {
                    y: 30,
                    opacity: 0,
                    ease: Power4.easeOut,

                }
            )

            t1.fromTo(lName.current, {
                    y: 0,
                    opacity: 1
                },
                {
                    y: 30,
                    opacity: 0,
                    ease: Power4.easeOut,
                }
            )

            t1.fromTo(fName.current, {
                    y: 0,
                    opacity: 1
                },
                {
                    y: 30,
                    opacity: 0,
                    ease: Power4.easeOut,
                }
            )

            t1.to(container.current, {
                y: '100%',
                ease: Power2.easeOut
            })
        }, 2000)
    }

    useEffect(() => {
        animate()
    }, [])

    return (
        <div 
            className='w-screen h-screen bg-preLoaderBg z-[100] fixed top-0 left-0'
            ref={container}
        >
            <div
                className='absolute top-[50%] left-[50%] translate-x-[-55%] translate-y-[-80%] pl-[35px] tablet:translate-x-[-50%]
                tablet:translate-y-[-70%] laptop:pl-[0] laptop:translate-y-[-60%]'
            >
                <p 
                    className='text-[white] text-left text-[2.7rem] font-AkiraExpanded 425:text-[3.1rem] tablet:text-[5rem] select-none
                    laptop:text-[4rem] 1280:text-[5.4rem] 1440:text-[5.7rem] 1600:text-[6.5rem] 1920:text-[7.5rem]'
                    ref={fName}
                >
                    Jericho
                </p>

                <p 
                    className='text-[white] text-left text-[2.7rem] font-AkiraExpanded mt-[-16px] 425:text-[3.1rem] 425:mt-[-35px] select-none
                    tablet:text-[5rem] laptop:text-[4rem] laptop:mt-[-30px] 1280:text-[5.4rem] 1280:mt-[-40px] 1440:text-[5.7rem]
                    1440:mt-[-43px] 1600:text-[6.5rem] 1600:mt-[-50px] 1920:text-[7.5rem] 1920:mt-[-60px]'
                    ref={lName}
                >
                    Salvador
                </p>

                <p
                    className='text-[white] text-[1.25rem] font-extralight font-Poppins tracking-[7px] mt-[-3px] 425:tracking-[9px] select-none
                    425:text-[1.33rem] tablet:hidden'
                    ref={roleMobile}
                >
                    Frontend Dev
                </p>

                <p 
                    className='hidden font-extralight font-Poppins text-[white] text-[1.8rem] tracking-[12px] tablet:block laptop:text-[1.5rem] select-none
                    1280:text-[1.6rem] 1280:tracking-[15px] 1280:mt-[-8px] 1440:text-[1.7rem] 1440:tracking-[16px] 1600:text-[2rem] 1600:tracking-[18px]
                    1920:text-[2.2rem] 1920:tracking-[23px]'
                    ref={role}
                >
                    Frontend Developer
                </p>
            </div>
        </div>
    )
}