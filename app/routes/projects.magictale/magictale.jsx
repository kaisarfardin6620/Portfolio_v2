import magictaleBackground from '~/assets/volkihar-background.jpg';
import magictaleBackgroundLarge from '~/assets/volkihar-background-large.jpg';
import magictaleBackgroundPlaceholder from '~/assets/volkihar-background-placeholder.jpg';
import magictaleBanner from '~/assets/magictale-banner.png';
import magictalePipeline from '~/assets/magictale-pipeline.png';
import magictaleProgress from '~/assets/magictale-progress.png';
import magictaleStory from '~/assets/magictale-story.png';
import magictaleEnderal from '~/assets/volkihar-enderal.jpg';
import magictaleEnderalLarge from '~/assets/volkihar-enderal-large.jpg';
import magictaleEnderalPlaceholder from '~/assets/volkihar-enderal-placeholder.jpg';
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
import styles from './magictale.module.css';

const title = 'MagicTale AI Backend';
const description =
  'An AI-powered storytelling platform for children that generates personalized stories, DALL-E 3 cover art, and ElevenLabs voice narration through an async Celery pipeline with real-time WebSocket progress updates.';
const roles = ['GPT-4o', 'DALL-E 3', 'ElevenLabs', 'Celery', 'Django Channels', 'Docker'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export function MagicTale() {
  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --primary: oklch(87.71% 0.084 85.29);
              --accent: oklch(87.71% 0.084 85.29);
            }
            [data-theme='light'] {
              --primary: oklch(52.25% 0.121 81.53);
              --accent: oklch(52.25% 0.121 81.53);
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${magictaleBackground} 1280w, ${magictaleBackgroundLarge} 1920w`}
          width={1280}
          height={720}
          placeholder={magictaleBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="View repository"
          url="https://github.com/kaisarfardin6620/magictale"
          roles={roles}
        />

        {/* Hero — App Interface */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${magictaleBanner} 800w, ${magictaleBanner} 1920w`}
              width={800}
              height={500}
              placeholder={magictaleBanner}
              alt="MagicTale AI storytelling app interface"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* What it does */}
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Personalized stories for every child</ProjectSectionHeading>
            <ProjectSectionText>
              MagicTale lets parents describe their child — name, age, favorite animal, favorite
              color — and choose a theme and art style. The platform then generates a complete,
              unique story tailored to that child, complete with a vivid cover illustration and
              professional voice narration.
            </ProjectSectionText>
            <ProjectSectionText>
              Because generation takes time, everything runs asynchronously. The API immediately
              returns a 202 Accepted response while Celery handles the heavy work in the
              background, keeping the mobile experience fast and responsive.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        {/* Pipeline Diagram */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Four-stage generation pipeline</ProjectSectionHeading>
              <ProjectSectionText>
                Story creation is orchestrated as a Celery chain with four discrete stages.
                Each stage runs only after the previous one succeeds, ensuring clean error
                boundaries and reliable retries across the full generation workflow.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${magictalePipeline} 1280w, ${magictalePipeline} 2560w`}
              width={1280}
              height={640}
              placeholder={magictalePipeline}
              alt="MagicTale four-stage AI generation pipeline: GPT-4o, DALL-E 3, ElevenLabs, Push Notification"
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* Realtime Progress */}
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.textSection}>
              <ProjectSectionHeading>Real-time WebSocket progress</ProjectSectionHeading>
              <ProjectSectionText>
                Django Channels and Daphne expose a WebSocket endpoint at
                <code> /ws/ai/stories/&#123;id&#125;/</code>. As Celery tasks complete each
                stage, they push live progress events — including a percentage and status
                message — directly to the connected client.
              </ProjectSectionText>
              <ProjectSectionText>
                The WebSocket connection is secured by JWT token validation and strict
                ownership checks, ensuring users can only subscribe to their own story
                generation sessions.
              </ProjectSectionText>
            </div>
            <div>
              <Image
                srcSet={`${magictaleProgress} 480w, ${magictaleProgress} 960w`}
                width={480}
                height={720}
                placeholder={magictaleProgress}
                alt="Real-time story generation progress screen with live WebSocket updates"
                sizes={`(max-width: ${media.mobile}px) 300px, 440px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        {/* Story Output */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Complete multimodal output</ProjectSectionHeading>
              <ProjectSectionText>
                Each completed story includes GPT-4o generated narrative text, a DALL-E 3
                cover illustration rendered in the chosen art style (Pixar, watercolor,
                storybook, etc.), and per-page ElevenLabs audio narration stitched into a
                final audio track and uploaded to cloud storage.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${magictaleStory} 800w, ${magictaleStory} 1600w`}
              width={800}
              height={600}
              placeholder={magictaleStory}
              alt="Completed MagicTale story output with cover art and audio player"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* Auth & Subscriptions */}
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Auth, subscriptions &amp; notifications</ProjectSectionHeading>
            <ProjectSectionText>
              The platform supports Email/Password, Google OAuth2, and Apple Sign-In via
              SimpleJWT and social auth adapters. Subscription state is managed through
              RevenueCat webhooks — syncing entitlements in real time when a purchase or
              cancellation event is received.
            </ProjectSectionText>
            <ProjectSectionText>
              Firebase Cloud Messaging (FCM) sends push notifications on story completion,
              password resets, and profile events. Passwords are validated against the
              Have I Been Pwned API on registration to enforce security from the first request.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        {/* Outcome — keep the volkihar enderal background the user liked */}
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={`${magictaleEnderal} 1280w, ${magictaleEnderalLarge} 1920w`}
              width={1280}
              height={720}
              placeholder={magictaleEnderalPlaceholder}
              alt="Background visual for the MagicTale backend outcome"
              sizes="100vw"
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Outcome</ProjectSectionHeading>
              <ProjectSectionText>
                The result is a client-ready storytelling backend that combines generative
                media, orchestration, and realtime feedback into a single production system.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                icon="chevron-right"
                href="https://github.com/kaisarfardin6620/magictale"
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
}
