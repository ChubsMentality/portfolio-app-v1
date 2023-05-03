import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CgDetailsMore } from 'react-icons/cg'

export default function ProjectCard({ displayType, displaySrc, id, setSelectedProj, setDetailsVisible }) {
    const openDetails = (id) => {
        setSelectedProj(id)
        setDetailsVisible(true)
    }

    return (
        <motion.div
            className={
                id === 3 ?
                    'relative h-[340px] min-w-[245px] rounded-sm bg-gradient-to-r from-[#232526] to-[#414345] 425:h-[380px] 425:min-w-[270px] 425:rounded-md tablet:h-[460px] tablet:min-w-[340px] tablet:rounded-lg laptop:h-[420px] laptop:min-w-[290px] 1280:h-[520px] 1280:min-w-[360px] 1440:h-[590px] 1440:min-w-[390px] 1440:rounded-[5px] 1600:h-[630px] 1600:min-w-[420px] 1600:rounded-[10px] 1920:h-[770px] 1920:min-w-[500px] overflow-hidden'
                    :
                    'relative h-[340px] min-w-[245px] rounded-sm bg-lightDark 425:h-[380px] 425:min-w-[270px] 425:rounded-md tablet:h-[460px] tablet:min-w-[340px] tablet:rounded-lg laptop:h-[420px] laptop:min-w-[290px] 1280:h-[520px] 1280:min-w-[360px] 1440:h-[590px] 1440:min-w-[390px] 1440:rounded-[5px] 1600:h-[630px] 1600:min-w-[420px] 1600:rounded-[10px] 1920:h-[770px] 1920:min-w-[500px] overflow-hidden'
            }
        >
            {displayType === 'video' &&
                <video
                    className='h-full w-full object-cover rounded-sm pointer-events-none 1600:rounded-[10px]'
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
                    className='h-full w-full pointer-events-none 1920:h-[120%] 1920:w-[120%] 1920:absolute 1920:left-[-50px] 1920:top-[-40px]'
                >
                </iframe>
            }

            {displayType === 'img' ?
                id === 3 ? 
                    <img 
                        className='h-[260px] w-[200px] object-cover absolute top-[50%] left-[50%] translate-x-[-40%] translate-y-[-50%] select-none
                        425:h-[290px] 425:w-[220px] tablet:h-[340px] tablet:w-[255px] pointer-events-none 1280:h-[360px] 1280:w-[275px]
                        1440:h-[400px] 1440:w-[300px] 1600:h-[440px] 1600:w-[330px] 1920:h-[520px] 1920:w-[400px]'
                        src={displaySrc} />
                    :
                    <img
                        className='h-full w-full object-cover select-none pointer-events-none 1440:rounded-[5px]' 
                        src={displaySrc}  
                    />
                :
                null
            }

            <button 
                className='absolute bottom-0 right-0 z-10 text-[.7rem] text-[white] font-Poppins font-light flex items-center gap-x-[10px] p-2 rounded-tl-sm
                backdrop-blur-md 425:p-[10px] 425:text-[.75rem] 425:backdrop-blur-lg 425:rounded-tl-md tablet:text-[.95rem] tablet:p-[12px] laptop:text-[.8rem]
                1440:text-[1rem] 1440:gap-x-[15px] 1440:p-[12px] 1600:text-[1.2rem] 1920:text-[1.4rem] 1920:p-[15px]'
                onClick={() => openDetails(id)}
            >
                <CgDetailsMore 
                    className='h-[20px] w-[20px] object-cover 425:h-[23px] 425:w-[23px] tablet:h-[25px] tablet:w-[25px] laptop:h-[20px] laptop:w-[20px]
                    1280:h-[25px] 1280:w-[25px] 1440:h-[28px] 1440:w-[28px] 1600:h-[34px] 1600:w-[34px] 1920:h-[38px] 1920:w-[38px]' 
                    color='white' 
                />
                View Details
            </button>
        </motion.div>
    )
}