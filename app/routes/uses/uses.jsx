import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
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
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'Technologies and infrastructure I use to build production AI systems',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A practical breakdown of the AI, backend, and infrastructure stack I use in daily engineering work."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Generative AI + LLMs</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://platform.openai.com/docs/overview">OpenAI APIs</Link>{' '}
                    (GPT-4o and Vision) for multimodal assistants and reasoning workflows.
                  </ListItem>
                  <ListItem>
                    <Link href="https://platform.openai.com/docs/guides/speech-to-text">
                      Whisper
                    </Link>{' '}
                    for speech transcription and{' '}
                    <Link href="https://elevenlabs.io/">ElevenLabs</Link> for TTS pipelines.
                  </ListItem>
                  <ListItem>
                    Hybrid RAG pipelines combining vector retrieval, graph traversal, and
                    NLI-based claim verification to improve answer reliability.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Backend Engineering</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.djangoproject.com/">Django 5</Link>, DRF, and{' '}
                    <Link href="https://fastapi.tiangolo.com/">FastAPI</Link> for API
                    architecture and production backend systems.
                  </ListItem>
                  <ListItem>
                    <Link href="https://docs.celeryq.dev/">Celery</Link> +{' '}
                    <Link href="https://redis.io/">Redis</Link> for high-concurrency task
                    orchestration and low-latency processing.
                  </ListItem>
                  <ListItem>
                    <Link href="https://neo4j.com/">Neo4j</Link> and{' '}
                    <Link href="https://www.pinecone.io/">Pinecone</Link> as the core data
                    layer for hybrid retrieval and graph reasoning.
                  </ListItem>
                  <ListItem>
                    OpenCV, MediaPipe, Trimesh, NumPy, and Pandas for CV and geometric
                    analytics workflows.
                  </ListItem>
                  <ListItem>
                    Python-first development with secure authentication (JWT/OAuth/OTP),
                    throttling, and standardized API contracts.
                  </ListItem>
                  <ListItem>
                    WebSockets and real-time event flows with Django Channels for
                    responsive AI application UX.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Infrastructure</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Containers</TableHeadCell>
                    <TableCell>Docker + Docker Compose</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Runtime servers</TableHeadCell>
                    <TableCell>Nginx, Uvicorn, Gunicorn</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Queues</TableHeadCell>
                    <TableCell>Celery worker split (Gevent + Prefork)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Data stores</TableHeadCell>
                    <TableCell>PostgreSQL, MongoDB, Redis, S3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Realtime transport</TableHeadCell>
                    <TableCell>WebSockets via Django Channels</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Notifications</TableHeadCell>
                    <TableCell>Firebase Cloud Messaging (FCM)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Dev workflow</TableHeadCell>
                    <TableCell>Git, CI/CD, production Linux deployments</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitoring focus</TableHeadCell>
                    <TableCell>Availability, latency, and error-bound API behavior</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
