import blogProjectIcon from '../../assets/images/project-blog.png'
import tictactoeIcon from '../../assets/images/project-tictactoe.png'
import investCalIcon from '../../assets/images/project-investment.png'
import landingPage from '../../assets/images/project-landingpage.jpg'
import airbnbProject from '../../assets/images/project-airbnb.png';
import travellify from '../../assets/images/projecttravellify.png';
import reactfood from '../../assets/images/reactfood.png';
const projects = [
    {
        projectIcon: blogProjectIcon,
        title: "Yash Blogs",
        description: " Created a blogging web app allowing users to register, login, create, update, delete, and share blogs.Implemented authority-based access control for blogmanagement.Enabled viewing of other bloggers' profiles and their blogs toenhance user engagement.Designed a responsive and modern UI using ReactJS and TailwindCSS for an improved user experience.Managed data storage and retrieval efficiently using MongoDB and Mongo Atlas",
        techstack: "Node ,MongoDB ,Express ,React",
        livelink: "https://yashblog.vercel.app/",
        githublink: "https://github.com/Yash1Hingu/yashblog"
    },
    {
        projectIcon: airbnbProject,
        title: "Airbnb Clone",
        description: "Introducing HomelyHub, a cutting-edge platform that redefines the way you travel and host. This Airbnb clone offers a seamless and user-friendly experience for both guests and hosts, providing a one-stop solution for accommodation needs.",
        techstack: "Node ,MongoDB ,Express ,React",
        livelink: "https://airbnb-zeta-ten.vercel.app/",
        githublink: "https://github.com/Yash1Hingu/airbnb"
    },
    {
        projectIcon: travellify,
        title: "Travellify (Acehack3.0 Hackathon)",
        description: "Travellify makes travel blogging and sharing content simple for enthusiasts, facilitating the sharing of adventures, culture, and cuisine. By promoting community engagement through likes and comments, it enables travelers to connect, exchange insights, and motivate one another.",
        techstack: "Node ,MongoDB ,Express ,React",
        livelink: "https://devfolio.co/projects/travellify-2373",
        githublink: "https://github.com/Yash1Hingu/Travellify"
    },
    {
        projectIcon: reactfood,
        title: "React Food",
        description: "This React application uses Context API to handle cart items. With Context API, cart data is shared across the app without passing props through many layers. It allows adding, removing, and updating items in the cart. The cart's state and functions are stored in a context provider, making them accessible to any component in the app. This makes the code cleaner and easier to manage while improving the app's performance and user experience.",
        techstack: "React",
        livelink: "https://react-food-mu.vercel.app/",
        githublink: "https://github.com/Yash1Hingu/ReactFood"
    },
    {
        projectIcon: investCalIcon,
        title: "Investment Calculator",
        description: "Unlock the power of smart financial planning with my Investment Calculator! Seamlessly calculate potential returns on your investments and make informed decisions. Whether you're a seasoned investor or just starting, this tool simplifies the complex. Input your data, explore possibilities,",
        techstack: "React JS",
        livelink: "https://investment-calculator-lovat.vercel.app/",
        githublink: "https://github.com/Yash1Hingu/LearnReact-ExpensenseTracker"
    },
    {
        projectIcon: landingPage,
        title: "Sunnyside - Landing Page",
        description: "Welcome to Sunnyside - Where Every Day Radiates Positivity! 🌞 Immerse yourself in a world of vibrant colors, scenic landscapes, and joyful moments. Our mission is to brighten your day and inspire positivity. ☀️",
        techstack: "React JS",
        livelink: "https://yash1hingu.github.io/SunnysideAgencyLandingPage/",
        githublink: "https://github.com/Yash1Hingu/LearnReact-ExpensenseTracker"
    }

]

export default projects;