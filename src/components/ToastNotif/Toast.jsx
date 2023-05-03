import { useEffect, useRef } from 'react'
import { FiCheck } from 'react-icons/fi'
import gsap from 'gsap'

export default function Toast() {
    const toast = useRef()

    useEffect(() => {
        gsap.from(toast.current, {
            y: -30,
            opacity: 0,
        })

        setTimeout(() => {
            gsap.to(toast.current, {
                y: 15,
                opacity: 0,
            })
        }, 1500)
    }, [])

    return (
        <div 
            className='w-fit py-[7px] px-[12px] fixed left-[50%] translate-x-[-50%] bottom-[30px] z-50 rounded-sm backdrop-blur-[15px]
            flex justify-center items-center gap-x-[10px] tablet:bottom-[40px] tablet:py-[10px] tablet:px-[18px] tablet:gap-x-[15px]
            laptop:gap-x-[10px] 1600:gap-x-[14px] 1600:px-[20px] 1600:bottom-[50px] 1920:gap-x-[15px] 1920:px-[25px] 1920:py-[11px]
            bg-gradient-to-r from-gradient_1 from-2% via-gradient_2 via-10% via-gradient_3 via-12% via-gradient_4 via-18% to-gradient_5'
            ref={toast}
        >
            <div className='bg-toastSuccess rounded-sm p-[2px] tablet:p-[3px] laptop:p-[2px] 1920:p-[4px]'>
                <FiCheck 
                    color='white' 
                    className='h-[20px] w-[20px] tablet:h-[23px] tablet:w-[23px] laptop:h-[18px] laptop:w-[18px] 1600:h-[25px]
                    1600:w-[25px] 1920:h-[30px] 1920:w-[30px]' 
                />
            </div>
            
            <p 
                className='text-[white] text-[.9rem] font-Poppins tablet:text-[1.05rem] laptop:text-[.9rem] 1600:text-[1.1rem]
                1920:text-[1.35rem]'
            >
                Email Sent
            </p>
        </div>
    )
}