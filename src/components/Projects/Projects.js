import React, { memo } from 'react';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ImgCover
} from './ProjectsStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    {/*<SectionDivider />*/}
    <SectionTitle main>Some Personal Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => (
        <BlogCard key={i}>
          <ImgCover>
            <Img src={p.image} />
          </ImgCover>
          <TitleContent>
            <HeaderThree title>{p.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{p.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {p.tags.map((t, i) => <Tag key={i}>{t}</Tag>)}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks target="_blank" href={p.visit}>Visit</ExternalLinks>
            <ExternalLinks target="_blank" href={p.source}>Code</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default memo(Projects);
