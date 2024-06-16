import { Card } from "@/components/card/card";
import styles from "./styles.module.scss";

const Works = () => {
  return (
    <section className={styles.works}>
      <div className={styles.container}>
        <h1 className={styles.title}>Archive</h1>

        <ul className={styles.list}>
          <li>
            <Card
              img="/img/projects/longstory.svg"
              title="Long Story Short"
              description="Long Story Short E-Commerce Site."
              href="https://longstory.sh/newsroom/about/"
              githubUrl="https://github.com/hy-hydra/LSS-consumer"
              topics={[
                "nextjs",
                "typescript",
                "mui",
                "django",
                "python",
                "aws",
                "s3",
              ]}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Works;
