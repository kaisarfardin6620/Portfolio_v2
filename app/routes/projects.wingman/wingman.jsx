import wingmanBackground from '~/assets/wingman-bg-dark.jpg';
import wingmanBackgroundLarge from '~/assets/wingman-bg-dark-large.jpg';
import wingmanBackgroundPlaceholder from '~/assets/wingman-bg-dark-placeholder.jpg';
import wingmanMobileLeft from '~/assets/wingman-mobile-left-persona-dark.jpg';
import wingmanMobileLeftLarge from '~/assets/wingman-mobile-left-persona-dark-large.jpg';
import wingmanMobileLeftPlaceholder from '~/assets/wingman-mobile-left-persona-dark-placeholder.jpg';
import wingmanMobileRight from '~/assets/wingman-mobile-right-realtime-dark.jpg';
import wingmanMobileRightLarge from '~/assets/wingman-mobile-right-realtime-dark-large.jpg';
import wingmanMobileRightPlaceholder from '~/assets/wingman-mobile-right-realtime-dark-placeholder.jpg';
import wingmanPipeline from '~/assets/wingman-pipeline.png';
import wingmanAdaptivePersonas from '~/assets/wingman-feature-adaptive-personas-dark.jpg';
import wingmanAdaptivePersonasLarge from '~/assets/wingman-feature-adaptive-personas-dark-large.jpg';
import wingmanAdaptivePersonasPlaceholder from '~/assets/wingman-feature-adaptive-personas-dark-placeholder.jpg';
import wingmanTargetProfile from '~/assets/wingman-feature-target-profile-dark.jpg';
import wingmanTargetProfileLarge from '~/assets/wingman-feature-target-profile-dark-large.jpg';
import wingmanTargetProfilePlaceholder from '~/assets/wingman-feature-target-profile-dark-placeholder.jpg';
import wingmanRealtimeDashboard from '~/assets/wingman-feature-realtime-dashboard-dark.jpg';
import wingmanRealtimeDashboardLarge from '~/assets/wingman-feature-realtime-dashboard-dark-large.jpg';
import wingmanRealtimeDashboardPlaceholder from '~/assets/wingman-feature-realtime-dashboard-dark-placeholder.jpg';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './wingman.module.css';

const title = 'Wingman: Multimodal AI Dating Coach';
const description =
  'A real-time AI assistant for dating and conversation, powered by OpenAI Vision, Whisper, Django Channels, Redis, and Celery. Supports text, image (OCR), and audio inputs.';
const roles = ['Django', 'Channels', 'OpenAI Vision', 'Whisper', 'Celery', 'Redis'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Wingman = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.wingman}>
        <ProjectBackground
          src={wingmanBackground}
          srcSet={`${wingmanBackground} 1280w, ${wingmanBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={wingmanBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/kaisarfardin6620"
          roles={roles}
        />

        {/* Hero Section */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectSectionColumns centered className={styles.heroMobiles}>
              <Image
                className={styles.heroMobileImage}
                srcSet={`${wingmanMobileLeft} 640w, ${wingmanMobileLeftLarge} 1280w`}
                width={640}
                height={296}
                placeholder={wingmanMobileLeftPlaceholder}
                alt="Wingman persona and tone configuration mobile view"
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 45vw, 40vw`}
              />
              <Image
                className={styles.heroMobileImage}
                srcSet={`${wingmanMobileRight} 640w, ${wingmanMobileRightLarge} 1280w`}
                width={640}
                height={296}
                placeholder={wingmanMobileRightPlaceholder}
                alt="Wingman real-time coaching mobile view"
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 45vw, 40vw`}
              />
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Multimodal Input Section */}
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Multimodal input pipeline</ProjectSectionHeading>
              <ProjectSectionText>
                Wingman accepts text, image screenshots, and audio voice notes in a single conversational flow.
                OpenAI Vision handles screenshot OCR to understand dating app conversations, while Whisper handles voice note transcription.
              </ProjectSectionText>
              <ProjectSectionText>
                Long-running OCR and transcription jobs are offloaded to Celery background workers, ensuring the chat interface remains fluid and responsive.
              </ProjectSectionText>
            </div>
            <div className={styles.pipelineImage}>
              <Image
                srcSet={`${wingmanPipeline} 800w, ${wingmanPipeline} 1600w`}
                width={800}
                height={500}
                placeholder={wingmanPipeline}
                alt="Multimodal input processing pipeline"
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        {/* Personas & Tones Section */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectSectionColumns>
              <ProjectTextRow>
                <ProjectSectionHeading>Adaptive Personas & Tones</ProjectSectionHeading>
                <ProjectSectionText>
                  Users can choose from different AI personas like "The Charmer" or "The Intellectual" and set specific tones such as "Confident," "Playful," or "Mysterious."
                  The AI dynamically adjusts its linguistic style to match the user's vibe and dating goals.
                </ProjectSectionText>
              </ProjectTextRow>
              <div className={styles.sidebarImages}>
                <Image
                  className={styles.sidebarImage}
                  srcSet={`${wingmanAdaptivePersonas} 900w, ${wingmanAdaptivePersonasLarge} 1800w`}
                  width={900}
                  height={560}
                  placeholder={wingmanAdaptivePersonasPlaceholder}
                  alt="Persona selection and tone configuration"
                  sizes={`(max-width: ${media.mobile}px) 100vw, 55vw`}
                />
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Target Profile Section */}
        <ProjectSection>
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <Image
                srcSet={`${wingmanTargetProfile} 900w, ${wingmanTargetProfileLarge} 1800w`}
                width={900}
                height={560}
                placeholder={wingmanTargetProfilePlaceholder}
                alt="Target profile details and context"
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 60vw, 50vw`}
              />
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Target Profile Context</ProjectSectionHeading>
              <ProjectSectionText>
                The backend maintains "Target Profiles" where users can store specific details about the person they are talking to—likes, preferences, and key mentions.
                This context is injected into the AI's prompt to provide highly personalized and effective coaching.
              </ProjectSectionText>
              <div className={styles.profileSummary}>
                <div className={styles.profileDetail}>
                  <strong>Preferences:</strong> Movie nights, Sushi, Hiking
                </div>
                <div className={styles.profileDetail}>
                  <strong>Key Mentions:</strong> "She loves traveling to Japan."
                </div>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Dashboard Section */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Real-time Dashboard</ProjectSectionHeading>
              <ProjectSectionText>
                Django Channels and WebSockets provide real-time interaction for chat sessions.
                The system syncs messages instantly across devices, while Redis acts as the broker for fast task dispatching.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${wingmanRealtimeDashboard} 1280w, ${wingmanRealtimeDashboardLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={wingmanRealtimeDashboardPlaceholder}
              alt="Real-time AI assistant dashboard"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* Outcome Section - Using the background requested by user */}
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={`${wingmanBackground} 1280w, ${wingmanBackgroundLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={wingmanBackgroundPlaceholder}
              alt="Background visual for the Wingman outcome"
              sizes="100vw"
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Outcome</ProjectSectionHeading>
              <ProjectSectionText>
                The result is a client-ready storytelling backend that combines generative media, orchestration, and realtime feedback into a single production system.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                icon="chevron-right"
                href="https://github.com/kaisarfardin6620"
              >
                View GitHub
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
