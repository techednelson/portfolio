import Link from 'next/link';
import React, { memo } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillCodeSandboxCircle } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <AiFillCodeSandboxCircle size="3rem" /> <span style={{ marginLeft: '0.5rem' }} >Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      {/*<li>*/}
      {/*  <Link href="#about">*/}
      {/*    <NavLink>About</NavLink>*/}
      {/*  </Link>*/}
      {/*</li>*/}
    </Div2>
      <Div3>
        <SocialIcons target="_blank" href="https://github.com/techednelson">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://www.linkedin.com/in/nelson-sandoval">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default memo(Header);
