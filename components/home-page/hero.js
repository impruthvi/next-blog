import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/next.png"
          alt="An image showing Alexander"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Pruthvisinh</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
      </p>
    </section>
  );
};

export default Hero;

