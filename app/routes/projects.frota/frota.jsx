import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import { Footer } from '~/components/footer';
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
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Sistema de Gerenciamento de Veículos - FROTA';
const description =
  'Sistema completo para controle e gestão de frotas de veículos com funcionalidades de cadastro, manutenção, abastecimento e geração de relatórios gerenciais.';
const roles = ['Desenvolvimento Full Stack', 'Backend', 'Frontend', 'Banco de Dados'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Frota = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
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
            <ProjectSectionHeading>Sobre o Projeto</ProjectSectionHeading>
            <ProjectSectionText>
              O Sistema FROTA foi desenvolvido para solucionar os desafios do gerenciamento 
              de frotas de veículos, oferecendo uma plataforma centralizada para controle 
              completo de todas as operações relacionadas aos veículos da organização.
            </ProjectSectionText>
            <ProjectSectionText>
              O sistema permite o cadastro detalhado de veículos, motoristas e manutenções, 
              além de fornecer dashboards interativos com métricas essenciais para tomada 
              de decisões estratégicas.
            </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Funcionalidades Principais</ProjectSectionHeading>
              <ProjectSectionText>
                O sistema oferece cadastro completo de veículos com informações detalhadas 
                como placa, modelo, ano, quilometragem e status. O módulo de manutenções 
                permite o registro de manutenções preventivas e corretivas, com histórico 
                completo e alertas automáticos.
              </ProjectSectionText>
              <ProjectSectionText>
                Além disso, inclui controle de abastecimentos com registro de consumo e custos, 
                gestão de documentação veicular (IPVA, seguro, licenciamento), e sistema de 
                relatórios gerenciais com gráficos e análises de desempenho da frota.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionHeading>Tecnologias Utilizadas</ProjectSectionHeading>
            <ProjectSectionText>
              O projeto foi desenvolvido utilizando tecnologias modernas e robustas. 
              No backend, foi implementado com Node.js e Express, garantindo alta performance 
              e escalabilidade. O banco de dados relacional MySQL foi escolhido para 
              armazenamento seguro e eficiente dos dados.
            </ProjectSectionText>
            <ProjectSectionText>
              No frontend, foram utilizadas tecnologias web modernas (HTML5, CSS3, JavaScript) 
              para criar uma interface intuitiva e responsiva, permitindo acesso tanto em 
              desktops quanto em dispositivos móveis.
            </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Módulos do Sistema</ProjectSectionHeading>
              <ProjectSectionText>
                O sistema é dividido em módulos integrados: Cadastro de Veículos permite 
                gerenciar toda a frota com informações detalhadas e fotos dos veículos. 
                O módulo de Manutenções controla todo o histórico de manutenções preventivas 
                e corretivas, com alertas de vencimento.
              </ProjectSectionText>
              <ProjectSectionText>
                O Controle de Abastecimento registra todos os abastecimentos realizados, 
                calcula consumo médio e identifica anomalias. O módulo de Relatórios gera 
                análises completas sobre custos operacionais, desempenho da frota e 
                indicadores de manutenção.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionHeading>Resultados e Benefícios</ProjectSectionHeading>
            <ProjectSectionText>
              O Sistema FROTA proporciona redução significativa de custos operacionais 
              através do controle preciso de manutenções e consumo de combustível. 
              A centralização das informações elimina processos manuais e reduz erros, 
              enquanto os relatórios gerenciais fornecem insights valiosos para otimização 
              da frota.
            </ProjectSectionText>
            <ProjectSectionText>
              A plataforma aumenta a eficiência operacional ao automatizar processos de 
              controle e permitir o acesso rápido ao histórico completo de cada veículo, 
              facilitando a tomada de decisões estratégicas sobre renovação, manutenção 
              e distribuição da frota.
            </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default Frota;