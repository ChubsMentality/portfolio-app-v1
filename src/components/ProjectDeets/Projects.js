import LandingPage from '../../assets/landingPage.jpg'
import Tbbt from '../../assets/tbbt.jpg'
import CountryWeather from '../../assets/countryWeather.svg'

export const Projects = [
    {
        id: 0,
        name: 'Ecommerce App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod iaculis facilisis. Vestibulum ut tempor mi, at fringilla diam. Quisque.',
        displayType: 'video',
        displaySrc: 'https://res.cloudinary.com/duqrbjm81/video/upload/v1682066262/pexels-danny-orloff-4380323-1080x1920-60fps_dtzfeg.mp4',
        languages: ['ReactJS', 'React-Query', 'Redux Toolkit', 'GSAP', 'ExpressJS', 'MongoDB'],
        status: 'Ongoing',
        link: null,
    },
    {
        id: 1,
        name: 'Spotify Clone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod iaculis facilisis. Vestibulum ut tempor mi, at fringilla diam. Quisque.',
        displayType: 'iframe',
        displaySrc: 'https://my.spline.design/untitled-259e625ddeb7a256c9ae2fcb726a8962/',
        languages: ['ReactJS', 'Redux Toolkit', 'SpotifyAPI'],
        status: 'Finished',
        link: 'https://spotify-clone-nu-tawny.vercel.app/'
    },
    {
        id: 2,
        name: 'Travel Inspired Landing Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod iaculis facilisis. Vestibulum ut tempor mi, at fringilla diam. Quisque.',
        displayType: 'img',
        displaySrc: LandingPage,
        languages: ['NextJS', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
        status: 'Ongoing',
        link: null,
    },
    {
        id: 3,
        name: 'Frontend Mentor - REST Countries API',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod iaculis facilisis. Vestibulum ut tempor mi, at fringilla diam. Quisque.',
        displayType: 'img',
        displaySrc: CountryWeather,
        languages: ['ReactJS', 'OpenWeatherAPI', 'REST COUNTRIES API'],
        status: 'Finished',
        link: 'https://countryweatherapi.vercel.app/',
    },
    {
        id: 4,
        name: 'Frontend Mentor - Rock, Paper, Scissor, Lizard, Spock',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod iaculis facilisis. Vestibulum ut tempor mi, at fringilla diam. Quisque.',
        displayType: 'img',
        displaySrc: Tbbt,
        languages: ['HTML', 'CSS', 'JS'],
        status: 'Finished',
        link: 'https://portfolio-tbbt-game.vercel.app/',
    },
]
