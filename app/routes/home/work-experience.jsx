import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { List, ListItem } from '~/components/list';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import styles from './work-experience.module.css';

const experiences = [
  {
    role: 'Jr AI Developer',
    company: 'SparkTech Agency, Dhaka',
    period: 'Aug 2025 — Present',
    highlights: [
      'Architected modular monolith backends using Django 5 and FastAPI for multiple production AI platforms.',
      'Built high-concurrency Celery pipelines using Gevent and Prefork worker split for reliable multimodal processing.',
      'Implemented Hybrid KG-RAG with Neo4j + Pinecone and NLI-based claim verification to reduce hallucinations.',
      'Delivered secure JWT + OTP authentication flows with throttling and breach-check validation.',
    ],
  },
  {
    role: 'Trainee AI Developer',
    company: 'SparkTech Agency, Dhaka',
    period: 'May 2025 — Aug 2025',
    highlights: [
      'Developed computer vision and NLP proof-of-concepts using MediaPipe and Python notebooks.',
      'Containerized research and development workflows with Docker for consistent environments.',
      'Researched and implemented context-window strategies for early LLM assistant prototypes.',
    ],
  },
];

const ExperienceContent = ({ visible, titleId }) => (
  <Fragment>
    <div className={styles.header}>
      <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
        <DecoderText text="Work experience" start={visible} delay={300} />
      </Heading>
      <Text className={styles.description} data-visible={visible} size="l" as="p">
        Building production AI systems across backend architecture, multimodal pipelines,
        and reliability-focused platform engineering.
      </Text>
    </div>

    <div className={styles.timeline}>
      {experiences.map(item => (
        <section className={styles.card} key={`${item.role}-${item.period}`}>
          <Heading className={styles.cardTitle} level={5} as="h3" align="auto">
            {item.role}
          </Heading>
          <Text className={styles.meta} secondary>
            {item.company}
          </Text>
          <Text className={styles.period} secondary>
            {item.period}
          </Text>
          <List>
            {item.highlights.map(highlight => (
              <ListItem key={highlight}>{highlight}</ListItem>
            ))}
          </List>
        </section>
      ))}
    </div>
  </Fragment>
);

export const WorkExperience = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.experience}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.tag} aria-hidden>
              <Divider notchWidth="64px" notchHeight="8px" collapsed={!visible} />
              <div className={styles.tagText} data-visible={visible}>
                Career journey
              </div>
            </div>
            <ExperienceContent visible={visible} titleId={titleId} />
          </div>
        )}
      </Transition>
    </Section>
  );
};
