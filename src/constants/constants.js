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
  SiKubernetes,
  SiNextdotjs,
  SiFirebase,
  SiAmazonaws,
  SiMicrosoftazure,
  SiTerraform,
  SiLinux,
  SiApachemaven,
  SiGradle,
  SiJfrog,
  SiJenkins,
  SiGnubash
} from 'react-icons/si';
import { FaHardHat, FaDocker, FaCloud } from 'react-icons/fa';

export const projects = [
  {
    title: 'Terraform EC2 Jenkins',
    description: 'This project uses terraform to provision an ec2 instance on aws with Jenkins, Git & Maven to start creating CI/CD pipelines.',
    image: '/images/jenkins.png',
    tags: ['Git', 'Docker', 'Jenkins', 'AWS', 'EC2', 'Maven'],
    source: 'https://github.com/techednelson/terraform-ec2-jenkins',
    visit: '',
    id: 1,
  },
  {
    title: 'Terraform EKS Argocd',
    description: 'With this project you can provision an AWS EKS cluster with Terraform & install ArgoCD ',
    image: '/images/argocd.png',
    tags: ['Kubernetes', 'AWS', 'Terraform', 'EKS', 'Argocd'],
    source: 'https://github.com/techednelson/terraform-eks-argocd',
    visit: '',
    id: 2,
  },
  {
    title: 'FCM - Push Notifications System',
    description: 'FCM push notifications system is a full stack web application which intents to help companies to send push notifications to customers across Google FCM',
    image: '/images/FCM.png',
    tags: ['Nodejs', 'TypeScript', 'NestJs', 'Firebase'],
    source: 'https://github.com/techednelson/firebase-push-notifications-system',
    visit: '',
    id: 3,
  },
  {
    title: 'Crypto Union',
    description: 'Decentralized application (Dapp) which allows users to exchange Ethers from one account to another through the Ethereum Blockchain with crypto wallet Metamask.',
    image: '/images/crypto-union.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Solidity', 'Hardhat', 'Ethers.js'],
    source: 'https://github.com/techednelson/crypto-union',
    visit: 'https://crypto-union.netlify.app/',
    id: 4,
  },
  {
    title: 'Calculator',
    description:"Calculator that perform the basic mathematics operations built with pure JavaScript and Css.",
    image: '/images/calculator.png',
    tags: ['Vanilla JavaScript', 'Html', 'CSS'],
    source: 'https://github.com/techednelson/Javascript-Calculator',
    visit: 'https://codepen.io/techednelson/full/gxorJr/',
    id: 5,
  },
  {
    title: 'Simon Game',
    description: "Web app which resembles the famous Simon game of short-term memory built with pure JavaScript and Css.",
    image: '/images/simon_game.png',
    tags: ['Vanilla JavaScript', 'Html', 'CSS'],
    source: 'https://github.com/techednelson/Simon-Game',
    visit: 'https://codepen.io/techednelson/full/xPjLbj/',
    id: 6,
  },
  {
    title: 'Tic Tac Toe',
    description: "Famous game built with 2 difficulty levels, easy and hard. Ai logic was developed with a very basic JavaScript algorithm.",
    image: '/images/tic_tac_toe.png',
    tags: ['Vanilla JavaScript', 'Html', 'CSS'],
    source: 'https://github.com/techednelson/Tic-Tac-Toe-Game',
    visit: 'https://codepen.io/techednelson/full/wPYqOb/',
    id: 7,
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
    title: 'DevOps',
    technologies: [
      { icon: <SiAmazonaws size="2.5rem" style={{ marginLeft: '0px' }} />, name: 'AWS' },
      { icon: <SiMicrosoftazure size="1.8rem" style={{ marginLeft: '6px' }} />, name: 'Azure' },
      { icon: <FaDocker size="2.2rem" style={{ marginLeft: '2px' }} />, name: 'Docker' },
      { icon: <SiKubernetes size="2.2rem" />, name: 'Kubernetes', isSiIcon: true },
      { icon: <SiJenkins size="2rem" />, name: 'Jenkins', isSiIcon: true },
      { icon: <SiGnubash size="2rem" />, name: 'Bash', isSiIcon: true },
      { icon: <SiTerraform size="2.2rem"  />, name: 'Terraform' },
      { icon: <SiLinux size="2.2rem"  />, name: 'Linux' },
      { icon: <SiApachemaven size="2.2rem"  />, name: 'Maven' },
      { icon: <SiGradle size="2.2rem"  />, name: 'Gradle' },
      { icon: <SiJfrog size="2.2rem"  />, name: 'JFrog' },
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
      { icon: <SiFirebase size="2.2rem" style={{ marginLeft: '4px' }} />, name: 'Firebase' },
    ]
  },
  {
    id: 3,
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
    id: 4,
    title: 'Mobile X-Platform',
    technologies: [
      { icon: <DiTerminal size="2rem" />, name: 'React Native Cli' },
      { icon: <SiExpo size="1.5rem" />, name: 'Expo Framework', isSiIcon: true },
    ]
  },
]
