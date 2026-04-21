import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { List, ListItem } from '~/components/list';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import styles from './skills.module.css';

const skillGroups = [
  {
    title: 'Generative AI + LLMs',
    items: [
      'OpenAI API (GPT-4o, Vision)',
      'Hybrid RAG (Vector + Knowledge Graph)',
      'Whisper (speech-to-text)',
      'ElevenLabs (text-to-speech)',
      'Agentic workflows and prompt engineering',
      'NLI-based hallucination mitigation',
    ],
  },
  {
    title: 'Backend + Frameworks',
    items: [
      'Python (production-grade)',
      'Django 5 and DRF',
      'FastAPI (async APIs)',
      'Celery task orchestration',
      'Django Channels (WebSockets)',
      'REST API architecture',
    ],
  },
  {
    title: 'Data + Infrastructure',
    items: [
      'Neo4j, Pinecone, Redis',
      'PostgreSQL and MongoDB',
      'NumPy, Pandas, Scikit-Learn',
      'Docker and Docker Compose',
      'Nginx, Uvicorn, Gunicorn',
      'Git and CI/CD deployment workflows',
    ],
  },
];

const SkillsContent = ({ visible, titleId }) => (
  <Fragment>
    <div className={styles.header}>
      <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
        <DecoderText text="Skills" start={visible} delay={300} />
      </Heading>
      <Text className={styles.description} data-visible={visible} size="l" as="p">
        Core technologies I use to build reliable AI products in production.
      </Text>
    </div>

    <div className={styles.grid}>
      {skillGroups.map(group => (
        <section className={styles.card} key={group.title}>
          <Heading className={styles.cardTitle} level={5} as="h3" align="auto">
            {group.title}
          </Heading>
          <List>
            {group.items.map(item => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </section>
      ))}
    </div>
  </Fragment>
);

export const Skills = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.skills}
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
                Technical toolkit
              </div>
            </div>
            <SkillsContent visible={visible} titleId={titleId} />
          </div>
        )}
      </Transition>
    </Section>
  );
};
