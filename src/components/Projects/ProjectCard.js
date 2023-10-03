import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { GoMarkGithub } from "react-icons/go";
import { IconContext } from "react-icons";
import {
  LinkName,
  ProjectCard,
  ProjectCodeLink,
  ProjectDetails,
  ProjectImage,
  ProjectLiveLink,
  ProjectTitle,
  ProjectTransitionImage,
  ProjectTechnology,

} from "../styles/Projects.styled";

const ProjectCardComponent = ({
  image,
  transitionImage,
  title,
  technology,
  codeLink,
  liveLink,
  hasLink,
 
}) => {
  return (
    <>
      <IconContext.Provider value={{ size: "1rem" }}>
        <ProjectCard >
          <ProjectImage src={image} alt={title} />
          <ProjectTransitionImage src={transitionImage} alt={title} />
          <ProjectDetails>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectTechnology> | {technology}</ProjectTechnology>
          
            <ProjectCodeLink  
              href={codeLink}
              hasLink={hasLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoMarkGithub />
              <LinkName>Github Code</LinkName>
            </ProjectCodeLink>
            <ProjectLiveLink
              href={liveLink}
              hasLink={hasLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkExternal />
              <LinkName>Live</LinkName>
            </ProjectLiveLink>
         
          </ProjectDetails>
        </ProjectCard>
      </IconContext.Provider>
    </>
  );
};

export default ProjectCardComponent;
