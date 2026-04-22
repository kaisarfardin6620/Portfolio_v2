import wingmanTexture2Large from '~/assets/wingman-home-preview-2-large.jpg';
import wingmanTexture2Placeholder from '~/assets/wingman-home-preview-2-placeholder.jpg';
import wingmanTexture2 from '~/assets/wingman-home-preview-2.jpg';
import wingmanTextureLarge from '~/assets/wingman-home-preview-1-large.jpg';
import wingmanTexturePlaceholder from '~/assets/wingman-home-preview-1-placeholder.jpg';
import wingmanTexture from '~/assets/wingman-home-preview-1.jpg';
import magictaleTextureLarge from '~/assets/magictale-home-large.png';
import magictaleTexturePlaceholder from '~/assets/magictale-home-placeholder.png';
import magictaleTexture from '~/assets/magictale-home.png';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { Skills } from './skills';
import { WorkExperience } from './work-experience';
import { Education } from './education';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'AI Developer + Backend Engineer',
    description: `Portfolio of ${config.name} â€” building production-grade LLM systems, multimodal AI pipelines, and scalable backend platforms.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const details = useRef();
  const experience = useRef();
  const skills = useRef();
  const education = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();

  useEffect(() => {
    const sections = [
      intro,
      details,
      experience,
      skills,
      education,
      projectOne,
      projectTwo,
      projectThree,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <WorkExperience
        sectionRef={experience}
        visible={visibleSections.includes(experience.current)}
        id="experience"
      />
      <Skills
        sectionRef={skills}
        visible={visibleSections.includes(skills.current)}
        id="skills"
      />
      <Education
        sectionRef={education}
        visible={visibleSections.includes(education.current)}
        id="education"
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Explainable Hybrid KG-RAG Assistant"
        description="A production-ready RAG architecture combining vector search, knowledge graphs, and NLI-based claim verification"
        buttonText="View project"
        buttonLink="/projects/xai"
        model={{
          type: 'laptop',
          alt: 'AI assistant interface and architecture overview',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Wingman: Multimodal AI Coaching System"
        description="Real-time coaching assistant with text, image, and audio workflows powered by OpenAI Vision and Whisper"
        buttonText="View project"
        buttonLink="/projects/wingman"
        model={{
          type: 'phone',
          alt: 'Multimodal coaching assistant interface',
          textures: [
            {
              srcSet: `${wingmanTexture} 375w, ${wingmanTextureLarge} 750w`,
              placeholder: wingmanTexturePlaceholder,
            },
            {
              srcSet: `${wingmanTexture2} 375w, ${wingmanTexture2Large} 750w`,
              placeholder: wingmanTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="MagicTale AI Backend"
        description="An asynchronous storytelling pipeline combining GPT-4o, image generation, voice synthesis, and live progress updates"
        buttonText="View project"
        buttonLink="/projects/magictale"
        model={{
          type: 'laptop',
          alt: 'MagicTale AI storytelling dashboard',
          textures: [
            {
              srcSet: `${magictaleTexture} 800w, ${magictaleTextureLarge} 1920w`,
              placeholder: magictaleTexturePlaceholder,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
};

