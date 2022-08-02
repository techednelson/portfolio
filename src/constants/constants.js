import {
  DiAngularSimple,
  DiJavascript1,
  DiReact,
  DiCss3,
  DiJava,
  DiPostgresql,
  DiMongodb,
  DiTerminal
} from 'react-icons/di';
import {
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiDgraph,
  SiAiohttp,
  SiGraphql,
  SiExpo,
  SiEthereum,
  SiSolidity,
  SiKubernetes,
  SiNextdotjs,
} from 'react-icons/si';
import { FaHardHat, FaDocker, FaCloud } from 'react-icons/fa';

export const projects = [
  {
    title: 'Crypto Union',
    description: 'Decentralized application (Dapp) which allows users to exchange Ethers from one account to another through the Ethereum Blockchain with crypto wallet Metamask.',
    image: '/images/crypto-union.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Solidity', 'Hardhat', 'Ethers.js'],
    source: 'https://github.com/techednelson/crypto-union',
    visit: 'https://crypto-union.netlify.app/',
    id: 1,
  },
  {
    title: 'Calculator',
    description:"Calculator that perform the basic mathematics operations built with pure JavaScript and Css.",
    image: '/images/calculator.png',
    tags: ['Vanilla JavaScript', 'Html', 'CSS'],
    source: 'https://github.com/techednelson/Javascript-Calculator',
    visit: 'https://codepen.io/techednelson/full/gxorJr/',
    id: 2,
  },
  {
    title: 'Simon Game',
    description: "Web app which resembles the famous Simon game of short-term memory built with pure JavaScript and Css.",
    image: '/images/simon_game.png',
    tags: ['Vanilla JavaScript', 'Html', 'CSS'],
    source: 'https://github.com/techednelson/Simon-Game',
    visit: 'https://codepen.io/techednelson/full/xPjLbj/',
    id: 3,
  },
  {
    title: 'Tic Tac Toe',
    description: "Famous game built with 2 difficulty levels, easy and hard. Ai logic was developed with a very basic JavaScript algorithm.",
    image: '/images/tic_tac_toe.png',
    tags: ['Vanilla JavaScript', 'Html', 'CSS'],
    source: 'https://github.com/techednelson/Tic-Tac-Toe-Game',
    visit: 'https://codepen.io/techednelson/full/wPYqOb/',
    id: 4,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];

export const technologies = [
  {
    id: 1,
    title: 'Front-End',
    technologies: [
      { icon: <DiReact size="3rem" />, name: 'React.js' },
      { icon: <SiNextdotjs style={{ marginLeft: '4px' }} size="2.2rem" />, name: 'Next.js' },
      { icon: <DiAngularSimple size="3rem" />, name: 'Angular.js' },
      { icon: <DiJavascript1 size="2.8rem"  />, name: 'JavaScript' },
      { icon: <SiTypescript size="2rem" />, name: 'TypeScript', isSiIcon: true },
      { icon: <DiCss3 size="2.5rem" style={{ position: 'relative', top: '6px' }} />, name: 'Css, Sass, Less' },
      { icon: <SiTailwindcss size="2.8rem" style={{ position: 'relative', top: '6px' }}  />, name: 'Tailwind', isSiIcon: true },
    ]
  },
  {
    id: 2,
    title: 'Back-End',
    technologies: [
      { icon: <SiNodedotjs size="2.2rem" />, name: 'Express, Nestjs', isSiIcon: true  },
      { icon: <DiJava size="3rem" />, name: 'JavaEE, Spring' },
      { icon: <SiAiohttp size="2.2rem" />, name: 'Restful Services', isSiIcon: true },
      { icon: <SiGraphql size="2.2rem" />, name: 'Graphql', isSiIcon: true },
      { icon: <DiPostgresql size="3rem" />, name: 'Postgresql' },
      { icon: <DiMongodb size="3rem" />, name: 'Mongo' },
      { icon: <SiDgraph size="2.2rem" />, name: 'Dgraph', isSiIcon: true },
      { icon: <FaCloud size="2.2rem" style={{ marginLeft: '4px' }} />, name: 'Firebase, AWS, Azure' },
      { icon: <FaDocker size="2.2rem" style={{ marginLeft: '4px' }} />, name: 'Docker' },
      { icon: <SiKubernetes size="2.2rem" />, name: 'Kubernetes', isSiIcon: true },
    ]
  },
  {
    id: 3,
    title: 'Mobile X-Platform',
    technologies: [
      { icon: <DiTerminal size="2rem" />, name: 'React Native Cli' },
      { icon: <SiExpo size="1.5rem" />, name: 'Expo Framework', isSiIcon: true },
    ]
  },
  {
    id: 4,
    title: 'Blockchain',
    technologies: [
      { icon: <SiEthereum size="2rem" />, name: 'Ethereum', isSiIcon: true },
      { icon: <SiSolidity size="2rem" />, name: 'Solidity', isSiIcon: true },
      { icon: <FaHardHat size="2rem" />, name: 'Hardhat', isSiIcon: true },
      { icon: <DiJavascript1 size="2.5rem"  />, name: 'Ethers.js' },
    ]
  }
]
