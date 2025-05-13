// ------------ PAGES -----------------

// HOMEPAGE
export const homeTitle = "Hi there! It's me, Gabriele!"
export const homeDesc = "Welcome to my personal page, where innovation and creativity converge. If you have time for a glance to my portfolio, you'll find a collection of projects that reflect my passion for details"
export const homeProjectsBtn = "View my projects"
export const homeContactBtn = "Contact me"

// ABOUT
export const aboutTitle = "About me"
export const aboutDes = "I’m a curious Full-Stack Developer with a passion for asking questions and discovering new things. I’m always pushing my limits, aiming to grow a little more each day — both as a person and as a professional. I love to find the beauty in things, and I try to bring a touch of that beauty into everything I create."
export const aboutMotto = "Sweep the shed!"
export const skillsTitle = "Skills"
export const skillsList = ["Javascript", "Typescript", "React", "NextJs", "SCSS", "Bootstrap", "Tailwind CSS", "MySQL", "PostgreSQL", "MongoDB", "NodeJs", "Express", "Webpack", "Vite", "Apache", "Docker", "Jenkins"]
export const expTitle = "Experience"

// PORTFOLIO
export const portfolioTitle = "Latest Projects"
export const portfolioGetTouch = "Let's get in touch!"
export const portfolioGetTouchBtn = "Click here"
export const portfolioGetTouchRotatingText = "Wanna talk? Email me"

// ------------ COMPONENTS -----------------

// NAVBAR
export const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];

export const social = [
    { url: "https://github.com/coccigabry", src: "/github.png", name: "Github" },
    {
        url: "https://it.linkedin.com/in/gabriele-cocilovo-b44458315",
        src: "/linkedin.png",
        name: "LinkedIn",
    },
];

// TIMELINE
export const jobs = [
    { role: "Front-End Developer", date: "May 2025 - Today", company: "IT Value Partner" },
    { role: "Front-End Developer", date: "Jun 2023 - May 2025", company: "Reply Aktive" },
    { role: "Front-End Developer", date: "Jan 2023 - Jun 2023", company: "IT Value Partner" },
];

// PROJECTS CAROUSEL
export const projects = [
    {
        title: "Cocci GPT",
        desc: "A Full-Stack JavaScript model-AI webApp built with React.js, Node.js and MongoDB. Ai powered by Google Gemini.",
        img: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Photo by Growtika on Unsplash",
        link: "https://github.com/coccigabry/cocciGPT",
        bg: "from-purple-300 to-violet-500"
    },
    {
        title: "Real-Time Chat",
        desc: "A Full-Stack JavaScript realtime chat built with React.js, Socket.io, Node.js and MongoDB.",
        img: "https://images.unsplash.com/photo-1555819207-d089c9205ba5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Photo by Priscilla Du Preez on Unsplash",
        link: "https://github.com/coccigabry/realtimeChat",
        bg: "from-violet-500 to-pink-300"
    },
    {
        title: "Food Ordering",
        desc: "A Full-Stack JavaScript webApp built with Next.js and MongoDB. Payment made via PayPal.",
        img: "https://images.unsplash.com/photo-1681262392875-eab4e1f2e79e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMG9yZGVyaW5nfGVufDB8MHwwfHx8Mg%3D%3D",
        alt: "Photo by Joylynn Goh on Unsplash",
        link: "https://github.com/coccigabry/foodOrderingApp",
        bg: "from-pink-300 to-red-500"
    },
];