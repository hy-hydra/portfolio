import { Skill } from "@/common/types/types";

type SkillSet = {
  field: string;
  skills: Skill[];
};

const SKILL_SETS: SkillSet[] = [
  {
    field: "skills",
    skills: [
      { title: "Figma", iconName: "figma", href: "https://www.figma.com/" },
      {
        title: "HTML",
        iconName: "html",
        href: "https://html.spec.whatwg.org/multipage/",
      },
      { title: "CSS", iconName: "css", href: "https://www.w3.org/Style/CSS/" },
      { title: "Less", iconName: "less", href: "https://lesscss.org/" },
      { title: "Sass", iconName: "sass", href: "https://sass-lang.com/" },
      {
        title: "Tailwindcss",
        iconName: "tailwindcss",
        href: "https://tailwindcss.com/",
      },
      {
        title: "JavaScript",
        iconName: "js",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/",
      },
      {
        title: "TypeScript",
        iconName: "typescript",
        href: "https://www.typescriptlang.org/",
      },

      { title: "React", iconName: "react", href: "https://react.dev/" },
      { title: "Next.js", iconName: "nextjs", href: "https://nextjs.org/" },
      { title: "Redux", iconName: "redux", href: "https://redux.js.org/" },
      { title: "Vue", iconName: "vue", href: "https://vuejs.org/" },
      { title: "Nuxt.js", iconName: "nuxtjs", href: "https://nuxt.com/" },
      { title: "Pinia", iconName: "pinia", href: "https://pinia.vuejs.org/" },
      { title: "Ant Design", iconName: "antd", href: "https://ant.design/" },
      { title: "Material UI", iconName: "mui", href: "https://mui.com/" },
      {
        title: "Naive UI",
        iconName: "naive",
        href: "https://www.naiveui.com/en-US/os-theme",
      },
      {
        title: "Vuetify",
        iconName: "vuetify",
        href: "https://vuetifyjs.com/en/",
      },
      {
        title: "Chakra UI",
        iconName: "chakra",
        href: "https://v2.chakra-ui.com/",
      },
      { title: "Gulp", iconName: "gulp", href: "https://gulpjs.com/" },
      {
        title: "Java",
        iconName: "java",
        href: "https://spring.io/projects/spring-boot",
      },
      { title: "Php", iconName: "php", href: "https://www.php.net/" },
      {
        title: "Node",
        iconName: "node",
        href: "https://nodejs.org/docs/latest/api/",
      },
      { title: "Python", iconName: "python", href: "https://www.python.org/" },
      {
        title: "Laravel",
        iconName: "laravel",
        href: "https://laravel.com/docs/11.x",
      },
      {
        title: "Django",
        iconName: "django",
        href: "https://docs.djangoproject.com/en/5.0/",
      },
      { title: "MySQL", iconName: "mysql", href: "https://dev.mysql.com/doc/" },
      {
        title: "PostgreSQL",
        iconName: "postgresql",
        href: "https://www.postgresqltutorial.com/",
      },
      {
        title: "MongoDB",
        iconName: "mongodb",
        href: "https://www.geeksforgeeks.org/mongodb-tutorial/",
      },
      {
        title: "Firebase",
        iconName: "firebase",
        href: "https://firebase.google.com/docs/",
      },
      {
        title: "Supabase",
        iconName: "supabase",
        href: "https://supabase.com/docs",
      },
      {
        title: "GraphQL",
        iconName: "graphql",
        href: "https://graphql.org/learn/",
      },
      {
        title: "Apollo",
        iconName: "apollo",
        href: "https://www.apollographql.com/docs/",
      },
      {
        title: "Docker",
        iconName: "docker",
        href: "https://docs.docker.com/guides/",
      },
      {
        title: "Redis",
        iconName: "redis",
        href: "https://redis.io/docs/latest/develop/get-started/document-database/",
      },
      {
        title: "Prisma",
        iconName: "prisma",
        href: "https://www.prisma.io/docs",
      },
      {
        title: "Blockchain",
        iconName: "blockchain",
        href: "https://docs.substrate.io/",
      },
      {
        title: "Web3.js",
        iconName: "web3",
        href: "https://web3js.readthedocs.io/en/v1.10.0/",
      },
      {
        title: "Ethereum",
        iconName: "ethereum",
        href: "https://ethereum.org/en/developers/docs/",
      },
      { title: "Solana", iconName: "solana", href: "https://solana.com/docs" },
      {
        title: "Polygon",
        iconName: "polygon",
        href: "https://polygon.readthedocs.io/en/latest/Getting-Started.html",
      },
      { title: "Jest", iconName: "jest", href: "https://jestjs.io/" },
      {
        title: "Cypress",
        iconName: "cypress",
        href: "https://www.cypress.io/",
      },
      { title: "Mocha", iconName: "mocha", href: "https://mochajs.org/" },
      { title: "AWS", iconName: "aws", href: "https://docs.aws.amazon.com/" },
      { title: "EC2", iconName: "ec2", href: "https://docs.aws.amazon.com/" },
      {
        title: "S3 Bucket",
        iconName: "s3",
        href: "https://docs.aws.amazon.com/",
      },
      {
        title: "Git",
        iconName: "git",
        href: "https://git-scm.com/docs/gittutorial",
      },
      {
        title: "Jira",
        iconName: "jira",
        href: "https://jira.com/",
      },
      { title: "Trello", iconName: "trello", href: "https://trello.com/" },
      { title: "Notion", iconName: "notion", href: "https://www.notion.so/" },
      { title: "Asana", iconName: "asana", href: "https://asana.com/" },
    ],
  },
];

const useConst = () => {
  return {
    SKILL_SETS,
  };
};

export default useConst;
