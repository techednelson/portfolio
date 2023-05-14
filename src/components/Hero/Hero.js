import React, { memo } from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Avatar, Img, LeftSection, PresentationText } from './HeroStyles';
import { SocialIcons } from '../Header/HeaderStyles';
import { AiFillLinkedin } from 'react-icons/ai';

const Hero = () => {
  const handleClick = (e) => {
    e.preventDefault()
    window.open('https://www.linkedin.com/in/nelson-sandoval', '_blank');
  }
  return (
    <Section row nopadding>
      <LeftSection>
        <Avatar>
          <Img src="/images/avatar3.svg"/>
        </Avatar>
        <SectionTitle main center>
          <PresentationText>
            Hi, my name is
          </PresentationText>
          Nelson Sandoval <br />
          I'm a DevOps Engineer with strong background in software engineering
        </SectionTitle>
        <SectionText>
          I'm Passionate about Cloud & Infrastructure as Code 🚀 <br/>
          I like Accelerating Software Delivery through Collaboration, Automation & Security 🧑‍💻.
        </SectionText>
        <Button onClick={handleClick}>
          <SocialIcons>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          More about me
        </Button>
      </LeftSection>
    </Section>
  )
};

export default memo(Hero);
