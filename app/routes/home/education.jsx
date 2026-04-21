import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import styles from './education.module.css';

const education = [
  {
    degree: 'MSc in Data Science & Analytics',
    institute: 'East West University',
    period: 'Jan 2026 — Present (Expected Apr 2027)',
  },
  {
    degree: 'BSc in Computer Science & Engineering',
    institute: 'Bangladesh University of Business & Technology',
    period: '2019 — 2024',
  },
];

const EducationContent = ({ visible, titleId }) => (
  <Fragment>
    <div className={styles.header}>
      <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
        <DecoderText text="Education" start={visible} delay={300} />
      </Heading>
      <Text className={styles.description} data-visible={visible} size="l" as="p">
        Academic foundation focused on computer science, data science, and applied AI.
      </Text>
    </div>

    <div className={styles.grid}>
      {education.map(item => (
        <section className={styles.card} key={`${item.degree}-${item.institute}`}>
          <Heading className={styles.cardTitle} level={5} as="h3" align="auto">
            {item.degree}
          </Heading>
          <Text className={styles.meta} secondary>
            {item.institute}
          </Text>
          <Text className={styles.period} secondary>
            {item.period}
          </Text>
        </section>
      ))}
    </div>
  </Fragment>
);

export const Education = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.education}
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
                Academic background
              </div>
            </div>
            <EducationContent visible={visible} titleId={titleId} />
          </div>
        )}
      </Transition>
    </Section>
  );
};
