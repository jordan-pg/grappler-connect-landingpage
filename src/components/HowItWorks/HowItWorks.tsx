import styles from "./HowItWorks.module.css";
import { Container, Row, Col } from "react-bootstrap";

const HowItWorks = () => {
  return (
    <section className={styles.howItWorksSection} id="howitworks">
      <Container className={styles.content}>
        <h2 className={styles.heading}>How It Works</h2>
        <p className={styles.subtext}>
          At Grappler Connect, we simplify the journey to elite training with a streamlined, intuitive process:
        </p>

        <Row className={styles.row}>
          {steps.map((step, index) => (
            <Col xs={10} key={index} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p style={{ margin: 0 }}>{step.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const steps = [
  {
    number: "1",
    title: "Sign Up",
    description: "Create your free account and build your profile in minutes."
  },
  {
    number: "2",
    title: "Explore & Connect",
    description: "Browse detailed coach profiles, view their services, and send a connection request."
  },
  {
    number: "3",
    title: "Schedule Sessions",
    description: "Book personalized training services through our integrated, secure scheduling tool."
  },
  {
    number: "4",
    title: "Train & Grow",
    description: "Engage in one-on-one coaching, track your progress, and receive tailored feedback to elevate your skills."
  },
  {
    number: "5",
    title: "Feedback & Improvement",
    description: "After each session, share your experience and benefit from performance insights, ensuring continuous growth."
  }
];

export default HowItWorks;
