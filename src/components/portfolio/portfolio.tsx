import Link from "next/link";

import { Card } from "@/components/card/card";
import styles from "./styles.module.scss";

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2 className={styles.title}>
        <span>My</span> Works
      </h2>

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
      <Link className={styles.btn} href="/works">
        See more
      </Link>
    </section>
  );
};

export { Portfolio };
