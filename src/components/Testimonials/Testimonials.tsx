import Image from "next/image";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote: "I’ve always longed to reach passionate athletes beyond my local circle. This platform promises to break down those barriers, giving me the opportunity to mentor driven talent from every corner of the globe. I’m excited to see how these new connections will transform my coaching journey—and theirs.",
    name: "Coach Joey",
    role: "Brown Belt in Jiu-jitsu",
    image: "/joey.png",
  },
  {
    quote: "I haven’t even had my first session yet, but the promise of connecting with top-tier coaches is already fueling my ambition. This platform feels like the breakthrough I’ve been waiting for.",
    name: "Matt",
    role: "Aspiring Grappler",
    image: "/matt.png",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection} id="testimonials">
      {testimonials.map((testimonial, index) => (
        <div key={index} className={styles.testimonialCard}>
          <div className={styles.quoteIcon}>❝</div>
          <p className={styles.quoteText}>{testimonial.quote}</p>
          <div className={styles.profile}>
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={40}
              height={40}
              className={styles.profileImage}
              unoptimized
            />
            <div>
              <h4 className={styles.name}>{testimonial.name}</h4>
              <p className={styles.role}>{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
