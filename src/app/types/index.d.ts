export type LabelsResponse = {
  labels: {
    lang: {
      [key: string]: Labels;
    };
  };
};

export type Labels = {
  pages: Pages;
  components: Components;
};

// ------------------------- PAGES TYPES -------------------------

type Pages = {
  homepage: HomePage;
  about: AboutPage;
  portfolio: PortfolioPage;
  contact: ContactPage;
};
type HomePage = {
  title: string;
  desc: string;
  projectsBtn: string;
  contactBtn: string;
};
type AboutPage = {
  aboutTitle: string;
  aboutDesc: string;
  aboutMotto: string;
  skillsTitle: string;
  skillsList: string[];
  expTitle: string;
};
type PortfolioPage = {
  title: string;
  getTouchText: string;
  getTouchBtn: string;
  rotatingText: string;
};
type ContactPage = {
  message: string;
  email: string;
  sendBtn: string;
  successMsg: string;
  errorMsg: string;
};

// ------------------------- COMPONENTS TYPES -------------------------

type Components = {
  navbar: Navbar;
  timeline: Timeline;
  carousel: Carousel;
  form: Form;
};
type Navbar = {
  links: Link[];
  social: Social[];
};
type Timeline = {
  jobs: Job[];
};
type Carousel = {
  projects: Project[];
};
type Form = {};

// ------------------------- OTHER TYPES -------------------------

type Link = {
  url: string;
  title: string;
};
type Social = {
  name: string;
  url: string;
  src: string;
};
type Job = {
  role: string;
  date: string;
  company: string;
};
type Project = {
  title: string;
  desc: string;
  img: string;
  alt: string;
  link: string;
  bg: string;
};
export type Languages = {
  lang: string;
  img: string;
  alt: string;
};
