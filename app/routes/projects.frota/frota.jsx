import { Footer } from '~/components/footer';

const basePath = import.meta.env.BASE_URL || '/';
const frotaBackground = `${basePath}frotaProjcImg.jpg`;
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';``
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Vehicle Management System - Fleet';
const description =
  'Complete system for controlling and managing vehicle fleets with features for registration, usage tracking, and generating management reports.';
const roles = ['Full Stack Development', 'Backend', 'Frontend', 'DataBase'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Frota = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={frotaBackground}
          srcSet={`${frotaBackground} 2560w`}
          width={2560}
          height={1700}
          placeholder={frotaBackground}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/SophiaT7/Sistema-de-gerenciamento-de-Veiculos---FROTA"
          roles={roles}
        />
        
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectSectionHeading>The Project</ProjectSectionHeading>
            <ProjectSectionText>
              The Fleet System was developed to solve the challenges of managing vehicle fleets, 
              offering a centralized platform for complete control of all operations related to the organization's vehicles.
            </ProjectSectionText>
            <ProjectSectionText>
              The system allows for detailed registration of vehicles and drivers, 
              including usage history so that each and every activity is recorded. 
            </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Main Features</ProjectSectionHeading>
              <ProjectSectionText>
                The system offers complete vehicle registration with detailed information such as 
                license plate, model, year, and status. 
                The maintenance module allows for the recording of vehicle pick-up and drop-off, 
                with a complete history and automatic alerts.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionHeading>Main Technologies</ProjectSectionHeading>
            <ProjectSectionText>
              The project was developed in Java, implementing JavaFX for the presentation layer (GUI). 
              Data storage was performed using MongoDB, a document-oriented NoSQL database, 
              managed via MongoDB Compass for viewing and manipulating the collections.
            </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionHeading>Results</ProjectSectionHeading>
            <ProjectSectionText>
              The Fleet System provides significant reductions in operational costs
              through precise usage control.
              Centralized information eliminates manual processes and reduces errors,
              while management reports provide valuable insights for fleet optimization, focusing on driver control and records. 
            </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default Frota;