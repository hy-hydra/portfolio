import { PC } from "@/components/pc/pc";
import styles from "./styles.module.scss";

const Intro = () => {
  return (
    <section id="home" className={styles.intro}>
      <PC className={styles.pc} />

      <div className={styles.description}>
        <h1 className={styles.title}>
          Hello there! 👋
          <br />
          I&apos;m <span>Yang Yi Ming</span>
        </h1>

        <p className={styles.text}>
          I&apos;m a fullstack developer from Singapore, and this is my small
          portfolio website. Thank you for visiting, and I hope you enjoy
          exploring my portfolio.
        </p>
        <p className={styles.text}>
          Please{" "}
          <a
            href="/resume.pdf"
            download="YangYiMing's Resume.pdf"
            style={{
              cursor: "pointer",
              color: "var(--color-accent)",
            }}
          >
            download
          </a>{" "}
          my resume here.
        </p>
      </div>
    </section>
  );
};

export { Intro };
