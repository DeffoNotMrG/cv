import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Anne Nijland",
  initials: "AN",
  location: "Amersfoort, Netherlands",
  locationLink: "https://goo.gl/maps/HcFhvcGZ4uvLZQwW6",
  about:
    "Hospitality Enthusiast",
  summary:
    "Dedicated and enthusiastic professional with a passion for hospitality and a genuine love for working with people. With a flexible mindset and a commitment to excellence, I thrive in dynamic environments. I am eager to contribute my skills and positive energy to a team committed to delivering exceptional service to all guests.",
  avatarUrl: "https://media.licdn.com/dms/image/D5603AQFJ4GkgwujKQA/profile-displayphoto-shrink_800_800/0/1710343950800?e=1715817600&v=beta&t=C8vsrbZMhSlRAH2V2e1vA4bKhuVNZdhTiRKc55ULn_0",
  personalWebsiteUrl: "https://annenijland.com/",
  contact: {
    email: "anne.nijland@outlook.com",
    tel: "Ask me on LinkedIn",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ghurmy",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anne-n-288812168/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ghurmy",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "NHL Stenden University of Applied Sciences, Leeuwarden",
      degree: "BA International Hospitality Management",
      start: "2018",
      end: "2022",
      },
      {
      school: "HAN University of Applied Sciences, Nijmegen",
      degree: "BA Sportkunde",
      start: "2017",
      end: "2018",
      },
      {
      school: "Christelijk Lyceum Veenendaal",
      degree: "HAVO, Economics & Society",
      start: "2012",
      end: "2017",
      },
  ],
  work: [
    {
      company: "Van der Valk Amersfoort A1",
      link: "/",
      badges: ["Onsite"],
      title: "Restaurant manager",
      start: "April 2023",
      end: "Present",
      description:
      "Managing day to day operations, responsible for 4 different F&B outlets, and in charge of hiring new staff.",
      },
      {
      company: "Botanic Sanctuary Antwerp",
      link: "/",
      badges: ["Hybrid"],
      title: "MICE Executive",
      start: "July 2022",
      end: "March 2023",
      description:
      "Organizing all sorts of events like congresses and large weddings. Performing administrative work including invoicing, quoting, and aftersales.",
      },
      {
      company: "Botanic Sanctuary Antwerp",
      link: "/",
      badges: ["Hybrid"],
      title: "Sales & Events Trainee",
      start: "Sept 2021",
      end: "June 2022",
      description:
      "Assisted with pre-opening operations, performed site visits, set up the reservations department of Hertog Jan at Botanic, and handled administrative work.",
      },
      {
      company: "Barista Café Veenendaal",
      link: "/",
      badges: ["Onsite"],
      title: "Barista & Hostess",
      start: "April 2021",
      end: "Aug 2021",
      description:
      "Obtained latte art skills and assisted with kitchen work.",
      },
      {
      
      company: "Van der Valk Leeuwarden",
      link: "/",
      badges: ["Onsite"],
      title: "Restaurant Supervisor",
      start: "Sept 2019",
      end: "March 2021",
      description:
      "Managed day to day operations and was responsible for the Live Cooking restaurant with up to 400 seats.",
      },
      {
      company: "Various",
      link: "/",
      badges: ["Onsite"],
      title: "Various jobs in Hospitality",
      start: "Feb 2016",
      end: "Aug 2019",
      description:
      "Worked different jobs as a hostess, waitress and bartender in Veenendaal & Leeuwarden.",
      },
  ],
  skills: [
    "Communication",
      "Leadership",
      "Teamwork",
      "Flexibility",
      "Responsibility",
  ],
  projects: [
    {
      title: "SVH Leermeester",
      techStack: [
        "2023",
      ],
      description: "",
      logo: ConsultlyLogo,
      link: {
        label: "Freelance",
        href: "/",
      },
    },
    {
      title: "BHV",
      techStack: [
        "2023",
      ],
      description: "",
      logo: ConsultlyLogo,
      link: {
        label: "Freelance",
        href: "https://www.ghurmy.xyz",
      },
    },
    
    {
      title: "Wine Certificate SDEN1",
      techStack: [
        "2019",
      ],
      description: "",
      logo: ConsultlyLogo,
      link: {
        label: "Freelance",
        href: "/",
      },
    },
    {
      title: "Barista training by Single Estate",
      techStack: ["2018",],
      description:
        "",
      logo: MonitoLogo,
      link: {
        label: "Freelancer",
        href: "https://www.instagram.com/alshetkraakt/",
      },
    },
    
  ],
} as const;
