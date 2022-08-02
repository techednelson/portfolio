import React, { memo } from 'react';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListTitle,
  Technology,
} from './TechnologiesStyles';
import { technologies } from '../../constants/constants';

const TechnologyComponent = ({ icon, name }) => (
  <Technology>
    <picture>
      {icon}
    </picture>
    <span style={{ marginLeft: '10px' }}>{name}</span>
  </Technology>
);

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've being coding for nearly 6 years 💪 in banking, insurance, betting and audit companies.
      I have experience with a range of technologies at work but also in my free time,
      because I love learning and building new things. These are the principal I've worked with 👇
    </SectionText>
    <List>
      {technologies.map(({ id, title, technologies }) => (
        <ListItem key={id}>
          <ListContainer>
            <ListTitle>{title}</ListTitle>
            {technologies.map(({ icon, name, isSiIcon }) =>
              isSiIcon ? (
                <div style={{ margin: "4px 0 4px 4px" }}>
                  <TechnologyComponent icon={icon} name={name} />
                </div>
              ) : (
                <TechnologyComponent icon={icon} name={name} />
              )
            )}
          </ListContainer>
        </ListItem>
      ))}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default memo(Technologies);
