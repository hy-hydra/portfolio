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
          <li>
            <Card
              img="/img/projects/business-landing.png"
              title="Business Landing Page"
              description="Business Landing Page Using React + Vite."
              href="https://business-landing-vite.vercel.app/"
              githubUrl="https://github.com/hy-hydra/business-landing-vite"
              topics={["react", "vite"]}
            />
          </li>
          <li>
            <Card
              img="/img/projects/tv-shows.png"
              title="TV & Movie Shows"
              description="This is a app where users can view Movies and TV shows."
              href="https://cinefic.netlify.app/movies/now-playing"
              githubUrl="https://github.com/hy-hydra/tv-shows"
              topics={["react"]}
            />
          </li>
          <li>
            <Card
              img="/img/projects/ai-website.png"
              title="AI Website"
              description="Build Something amazing with GPT-3 OpenAI."
              href="https://gpt3-goke.vercel.app/"
              githubUrl="https://github.com/hy-hydra/AI-website"
              topics={["react"]}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Works;
