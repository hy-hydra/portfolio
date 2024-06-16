import Link from "next/link";
import Image from "next/image";
import { useConst } from "@/hooks";
import { Icon } from "@/components/icon/icon";
import styles from "./styles.module.scss";

const About = () => {
  const { SKILL_SETS } = useConst();

  return (
    <section id="about" className={styles.about}>
      <div className={styles.wrapper}>
        <Image
          className={styles.img}
          src="/img/about.png"
          width={550}
          height={320}
          alt="Picture with characters from anime and video games"
        />

        <div className={styles.content}>
          <h2 className={styles.title}>
            About <span>Me</span>
          </h2>
          <p className={styles.text}>
            Greetings! I&apos;m <span>Yang Yi Ming</span>, Dynamic and
            innovative Full Stack Software Developer with over <span>9+</span>{" "}
            years of experience in both <span>frontend</span> and{" "}
            <span>backend</span> development as well as <span>blockchain</span>{" "}
            technologies, specializing in building scalable web applications and
            e-commerce solutions. Expert in utilizing modern technologies such
            as <span>TypeScript</span>, <span>React.js</span>,{" "}
            <span>Vue.js</span>, and <span>Node.js</span>, <span>PHP</span>,{" "}
            <span>Python</span>, with a proven track record in the development
            of crypto backed loan products, web3 gaming, and custom e-commerce
            websites
          </p>
        </div>
      </div>

      <div className={styles.skills}>
        <h3 className={styles.skillsTitle}>Skills</h3>
        <div className={styles.skillSets}>
          {SKILL_SETS.map((skillSet, index) => (
            <ul className={styles.skillsList} key={index}>
              {skillSet.skills.map((skill) => (
                <li key={skill.title}>
                  <Link
                    className={styles.skillsLink}
                    href={skill.href}
                    title={skill.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      aria-label={skill.title + " logo"}
                      name={skill.iconName}
                      size={50}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export { About };
