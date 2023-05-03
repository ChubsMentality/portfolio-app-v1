import { useState, useEffect, useRef } from 'react'
import { VscClose } from 'react-icons/vsc'
import { TbExternalLink } from 'react-icons/tb' 
import gsap from 'gsap'

export default function ProjectDeets({ id, name, desc, displayType, displaySrc, languages, status, link, visible, setVisible }) {
    const modal = useRef()
    const closeIcon = useRef()
    const display = useRef()
    const content = useRef()

    useEffect(() => {
        if(visible === true) {
            const t1 = gsap.timeline()
            
            if(window.innerWidth >= 1024) {

            } else {
                gsap.fromTo(modal.current, {
                    display: 'none',
                },
                {
                    display: 'flex'
                })
    
                t1.fromTo(display.current, {
                    y: -30,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                })
    
                t1.fromTo(content.current, {
                    y: -30,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                })
            }
        } 
    }, [visible])

    const close = () => {
        const t1 = gsap.timeline()

        if(window.innerWidth >= 1024) {
            setVisible(false)
        } else {
            t1.fromTo(content.current, {
                y: 30,
                opacity: 1,
            },
            {
                y: 60,
                opacity: 0,
            })
    
            t1.fromTo(display.current, {
                y: 0,
                opacity: 1,
            },
            {
                y: 30,
                opacity: 0,
            })
    
            gsap.fromTo(modal.current, {
                display: 'block'
            },
            {
                display: 'none',
                delay: .45,
            })
    
            setTimeout(() => {
                setVisible(false)
            }, 1000)
        }
    }

    return (
        <div 
            className='h-screen w-full bg-[#0f0f0f] z-50 fixed top-0 left-0 flex flex-col transition-all duration-200 ease-in
            tablet:h-[750px] tablet:w-[580px] tablet:top-[50%] tablet:left-[50%] tablet:translate-x-[-50%] tablet:translate-y-[-50%] tablet:rounded-md
            laptop:flex-row laptop:h-[560px] laptop:w-[760px] 1280:w-[800px] 1440:w-[880px] 1440:h-[620px] 1600:w-[950px] 1600:h-[660px]
            1920:h-[750px] 1920:w-[1150px]'
            ref={modal}
        >
            <VscClose 
                className='absolute top-[20px] right-375 h-[30px] w-[30px] tablet:right-[45px] cursor-pointer z-50 laptop:right-[20px]
                1440:h-[32px] 1440:w-[32px] 1600:h-[35px] 1600:w-[35px] 1920:h-[38px] 1920:w-[38px] 1920:right-[25px]' 
                color='white'
                onClick={() => close()}
                ref={closeIcon}
            />

            <div 
                className='mx-375 mt-[85px] h-[230px] rounded-md relative 425:h-[220px] 425:mx-425 tablet:mx-[55px] tablet:h-[240px] tablet:mt-[70px]
                laptop:h-full laptop:w-[50%] laptop:m-0 laptop:p-[35px] 1440:p-[40px] 1600:p-[58px] 1920:w-[47%] 1920:p-[50px]'
                ref={display}
            >
                {displayType === 'video' &&
                    <video
                        className='h-full w-full object-cover rounded-md'
                        src={displaySrc}
                        autoPlay
                        loop
                        muted
                        controls=''
                    >
                    </video>
                }

                {displayType === 'iframe' &&
                    <iframe src={displaySrc} frameBorder='0' 
                        className='h-full w-full pointer-events-none'
                    >
                    </iframe>
                }

                {displayType === 'img' ?
                    id === 3 ? 
                        <div className='h-full w-full bg-gradient-to-r from-[#232526] to-[#414345] rounded-md'>
                            <img 
                                className='h-[150px] w-[110px] object-cover absolute top-[50%] left-[50%] translate-x-[-40%] translate-y-[-50%] select-none rounded-md
                                tablet:h-[200px] tablet:w-[150px] laptop:h-[300px] laptop:w-[227px] 1280:h-[340px] 1280:w-[260px] 1440:h-[388px] 1440:w-[290px]'
                                src={displaySrc}
                            />
                        </div>
                        :
                        <img
                            className='h-full w-full object-cover select-none rounded-md' 
                            src={displaySrc}
                        />
                    :
                    null
                }
            </div>

            <div
                className='mx-375 mt-[25px] font-Poppins 425:mx-425 tablet:mx-[55px] laptop:m-0 laptop:w-[50%] laptop:pr-[30px] 
                1920:w-[53%] 1920:pl-[10px] 1920:pr-[50px]'
                ref={content}
            >
                <h6 
                    className='text-[white] text-[1.8rem] font-medium leading-9 425:text-[2rem] laptop:mt-[90px] laptop:text-[1.95rem] 1440:text-[2.1rem]
                    1440:leading-[36px] 1600:text-[2.1rem] 1600:leading-[40px] 1920:text-[2.5rem]'
                >
                    {name && name}
                </h6>
                <a 
                    className='text-[#b0b0b0] text-[.95rem] flex items-center gap-x-[5px] mt-[5px] 425:mt-[8px] laptop:text-[.9rem] laptop:gap-x-[6px]
                    laptop:mt-[4px] cursor-pointer 1280:mt-[7px] 1440:mt-[12px] 1440:text-[1.1rem] 1600:text-[1.25rem] 1600:mt-[10px] 1920:text-[1.35rem]
                    1920:gap-x-[9px] 1920:mt-[10px]'
                    href={link && link}
                    target='_blank'
                >
                    <TbExternalLink 
                        className='h-[21px] w-[21px] mt-[-5px] 425:h-[23px] 425:w-[23px] laptop:h-[20px] laptop:w-[20px] laptop:mt-[-3px]
                        1440:h-[24px] 1440:w-[24px] 1600:h-[26px] 1600:w-[26px] 1920:h-[33px] 1920:w-[33px]'
                        color='#b0b0b0' 
                    />
                    Website Link
                </a>

                <p 
                    className='text-[white] text-[1rem] mt-[28px] 425:mt-[30px] 425:text-[1.2rem] laptop:text-[1.05rem] laptop:mt-[28px] 1440:text-[1.2rem] 1440:mt-[33px]
                    1600:text-[1.3rem] 1920:text-[1.65rem] 1920:mt-[48px]'
                >
                    Description
                </p>
                <p 
                    className='text-[white] text-[.85rem] font-extralight mt-[5px] leading-[25px] 425:text-[.9rem] laptop:text-[.8rem] 
                    laptop:leading-[23px] 1440:text-[.93rem] 1440:leading-[25px] 1600:text-[1rem] 1920:text-[1.22rem] 1920:leading-[29px]
                    1920:mt-[6px]'
                >
                    {desc}
                </p>

                <p 
                    className='text-[white] text-[1rem] mt-[30px] 425:text-[1.2rem] laptop:text-[1.05rem] 1440:text-[1.2rem] 1440:mt-[33px]
                    1600:text-[1.3rem] 1920:text-[1.65rem] 1920:mt-[45px]'
                >
                    Technologies Used
                </p>
                <div className='flex flex-wrap gap-2 mt-[10px] 425:gap-[10px] 1440:mt-[13px]'>
                    {languages?.map((item) => (
                        <p 
                            className='bg-[white] w-fit px-[13px] py-[5px] text-[.78rem] rounded-full laptop:text-[.65rem] laptop:px-[10px] laptop:py-[4px]
                            1440:text-[.75rem] 1440:px-[15px] 1440:py-[6px] 1600:text-[.86rem] 1600:px-[18px] 1600:py-[7px] 1920:text-[1rem] 1920:px-[23px]'
                            key={item}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}