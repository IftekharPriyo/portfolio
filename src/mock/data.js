import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Meet, ',
  name: 'Iftekhar',
  subtitle: 'Software Engineering Enthusiast',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Currently an CS undergrad student pursuing the degree in North South University. Practicing Full Stack Web Development and Blockchain Implementation. Like to spend my leisure playing video games.',
  paragraphTwo: ': C, C++, Java, JavaScript(ES6), HTML/CSS, SQL, MongoDB, Embedded C, Solidity',
  paragraphThree: ': ReactJS, NodeJS, Express, Bootstrap, Material-UI',
  paragraphFour: ': Git, VS Code, C9 Dev Environment, Arduino, Raspberry Pi, Heroku',
  paragraphFive: ': Blockchain, Software Engineering, Cyber Security, IOT',
  resume: 'https://drive.google.com/u/1/uc?id=1G8IGy8SmPmiuyDdByenS92GbWGdtETmT&export=download', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'travelguru.PNG',
    title: 'Travel Guru',
    info: 'A simple travel booking where a person can choose his destination and look for hotels.',
    info2: 'Client can choose his desired date to travel and then get redirect to hotel pages. Login along with FB and Google is integrated.',
    info3: 'Technology Used: React, React-Hooks, React-Router, Firebase, React-Bootstrap, React-Material UI',
    url: 'https://travel-guru-80328.web.app/home',
    repo: 'https://github.com/IftekharPriyo/travel-guru', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'vNetwork.PNG',
    title: 'Volunteer Network',
    info: 'A simple website where volunteers can login and register for some volunteering works in his preferable date.',
    info2: 'Also admin panel who can add tasks and maintain other stus as well. Login systems integrated.',
    info3: 'Technology : React, React-Hooks, React-Router, Node.js, Express, Mongo-DB, React-Bootstrap',
    url: 'https://volunteer-network-81239.web.app/',
    repo: 'https://github.com/IftekharPriyo/volunteer-network-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'socialbuddy.PNG',
    title: 'Social Buddy',
    info: 'A simple social media newsfeed UI',
    info2: 'Can enter any post from the newsfeed to check the comments in that certain post.',
    info3: 'Technology : React, React-Hooks, React-Router, Material-UI, React-Bootstrap',
    url: 'https://relaxed-noether-861026.netlify.app/home',
    repo: 'https://github.com/IftekharPriyo/social-buddy', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hardrock.PNG',
    title: 'Hard Rock',
    info: 'A simple but yet useful website for fetching lyrics of your desired song.',
    info2: 'Search your desired songs lyric and it will be displayed right below.',
    info3: 'Technology : HTML/CSS, JavaScript',
    url: 'https://iftekharpriyo.github.io/hard-rock/',
    repo: 'https://github.com/IftekharPriyo/hard-rock', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to collaborate or hire?',
  btn: 'Reach Me',
  email: 'iftekhar.ali01@northsouth.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/x_priyo',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://medium.com/@iftekharpriyo',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/md-iftekhar-ali-priyo-315297150/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/IftekharPriyo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
