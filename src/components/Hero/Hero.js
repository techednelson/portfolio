import React, { memo } from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Avatar, LeftSection, PresentationText } from './HeroStyles';
import Image from 'next/image';
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
          <Image src="/images/avatar3.svg" height={200} width={200} />
        </Avatar>
        <SectionTitle main center>
          <PresentationText>
            Hi, my name is
          </PresentationText>
          Nelson Sandoval <br />
          I'm a Full-Stack Engineer
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
