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
          I'm a Full Stack React-Node | Web3-blockchain Engineer
        </SectionTitle>
        <SectionText>
          I like to to build amazing and useful applications 🚀 <br/>
          Currently I'm focused on Web, Cross-platform Mobile & Blockchain development 🧑‍💻.
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
