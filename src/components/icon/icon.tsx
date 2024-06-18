import { FC, SVGProps } from "react";

import { IconName } from "@/common/types/types";
import { cn } from "@/helpers/helpers";
import styles from "./styles.module.scss";

import ArrowUp from "@/../public/img/icons/arrow-up.svg";
import Code from "@/../public/img/icons/code.svg";
import ExternalLink from "@/../public/img/icons/external-link.svg";
import Figma from "@/../public/img/icons/figma.svg";
import Github from "@/../public/img/icons/github.svg";
import Gulp from "@/../public/img/icons/gulp.svg";
import LinkedIn from "@/../public/img/icons/linkedin.svg";
import Location from "@/../public/img/icons/location.svg";
import Mail from "@/../public/img/icons/mail.svg";
import Rocket from "@/../public/img/icons/rocket.svg";
import Skype from "@/../public/img/icons/skype.svg";
import Telegram from "@/../public/img/icons/tg.svg";
import Jinja from "@/../public/img/icons/jinja.svg";
import Linkify from "@/../public/img/icons/linkify.svg";
import SimpleBar from "@/../public/img/icons/simple-bar.svg";
import Pusher from "@/../public/img/icons/pusher.svg";
import Upstash from "@/../public/img/icons/upstash.svg";
import Gsap from "@/../public/img/icons/gsap.svg";
import Codepen from "@/../public/img/icons/codepen.svg";
import Stripe from "@/../public/img/icons/stripe.svg";
import Whatsapp from "@/../public/img/icons/whatsapp.svg";
import Discord from "@/../public/img/icons/discord.svg";
import HTML from "@/../public/img/icons/html.svg";
import CSS from "@/../public/img/icons/css.svg";
import Less from "@/../public/img/icons/less.svg";
import Sass from "@/../public/img/icons/sass.svg";
import Tailwindcss from "@/../public/img/icons/tailwindcss.svg";
import JS from "@/../public/img/icons/js.svg";
import TypeScript from "@/../public/img/icons/typescript.svg";
import React from "@/../public/img/icons/react.svg";
import NextJs from "@/../public/img/icons/nextjs.svg";
import Vue from "@/../public/img/icons/vue.svg";
import Nuxtjs from "@/../public/img/icons/nuxtjs.svg";
import Redux from "@/../public/img/icons/redux.svg";
import Pinia from "@/../public/img/icons/pinia.svg";
import Php from "@/../public/img/icons/php.svg";
import Chakra from "@/../public/img/icons/chakra.svg";
import Antd from "@/../public/img/icons/antd.svg";
import Mui from "@/../public/img/icons/mui.svg";
import Vuetify from "@/../public/img/icons/vuetify.svg";
import Naive from "@/../public/img/icons/naive.svg";
import Java from "@/../public/img/icons/java.svg";
import Node from "@/../public/img/icons/node.svg";
import Python from "@/../public/img/icons/python.svg";
import Laravel from "@/../public/img/icons/laravel.svg";
import Django from "@/../public/img/icons/django.svg";
import Mysql from "@/../public/img/icons/mysql.svg";
import Postgresql from "@/../public/img/icons/postgresql.svg";
import Mongodb from "@/../public/img/icons/mongodb.svg";
import Firebase from "@/../public/img/icons/firebase.svg";
import Supabase from "@/../public/img/icons/supabase.svg";
import GoogleMaps from "@/../public/img/icons/google-maps.svg";
import RapidApi from "@/../public/img/icons/rapid-api.svg";
import Redis from "@/../public/img/icons/redis.svg";
import Prisma from "@/../public/img/icons/prisma.svg";
import Graphql from "@/../public/img/icons/graphql.svg";
import Apollo from "@/../public/img/icons/apollo.svg";
import Docker from "@/../public/img/icons/docker.svg";
import Blockchain from "@/../public/img/icons/blockchain.svg";
import Web3 from "@/../public/img/icons/web3.svg";
import Aws from "@/../public/img/icons/aws.svg";
// import Aws2 from "@/../public/img/icons/aws2.svg";
import Ec2 from "@/../public/img/icons/ec2.svg";
import S3 from "@/../public/img/icons/s3.svg";
import Solidity from "@/../public/img/icons/solidity.svg";
import Ethereum from "@/../public/img/icons/ethereum.svg";
import Solana from "@/../public/img/icons/solana.svg";
import Polygon from "@/../public/img/icons/polygon.svg";
import Git from "@/../public/img/icons/git.svg";
import Jira from "@/../public/img/icons/jira.svg";
import Trello from "@/../public/img/icons/trello.svg";
import Notion from "@/../public/img/icons/notion.svg";
import Asana from "@/../public/img/icons/asana.svg";
import Jest from "@/../public/img/icons/jest.svg";
import Cypress from "@/../public/img/icons/cypress.svg";
import Mocha from "@/../public/img/icons/mocha.svg";
import Webpack from "@/../public/img/icons/webpack.svg";
import Vite from "@/../public/img/icons/vite.svg";

const icons: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  figma: Figma,
  html: HTML,
  css: CSS,
  sass: Sass,
  less: Less,
  tailwindcss: Tailwindcss,
  js: JS,
  typescript: TypeScript,

  react: React,
  nextjs: NextJs,
  redux: Redux,
  vue: Vue,
  nuxtjs: Nuxtjs,
  pinia: Pinia,
  antd: Antd,
  mui: Mui,
  naive: Naive,
  vuetify: Vuetify,
  chakra: Chakra,
  gulp: Gulp,
  webpack: Webpack,
  vite: Vite,

  java: Java,
  php: Php,
  node: Node,
  python: Python,
  laravel: Laravel,
  django: Django,
  mysql: Mysql,
  postgresql: Postgresql,
  mongodb: Mongodb,
  firebase: Firebase,
  supabase: Supabase,
  graphql: Graphql,
  apollo: Apollo,
  docker: Docker,
  redis: Redis,
  prisma: Prisma,

  blockchain: Blockchain,
  web3: Web3,
  solidity: Solidity,
  ethereum: Ethereum,
  solana: Solana,
  polygon: Polygon,

  aws: Aws,
  ec2: Ec2,
  s3: S3,

  git: Git,
  jira: Jira,
  trello: Trello,
  notion: Notion,
  asana: Asana,

  jest: Jest,
  cypress: Cypress,
  mocha: Mocha,

  "google-maps": GoogleMaps,
  jinja: Jinja,
  "rapid-api": RapidApi,

  linkify: Linkify,
  "simple-bar": SimpleBar,
  pusher: Pusher,
  upstash: Upstash,
  externalLink: ExternalLink,
  arrowUp: ArrowUp,
  code: Code,
  "green-sock": Gsap,
  codepen: Codepen,

  stripe: Stripe,
  rocket: Rocket,
  mail: Mail,
  linkedIn: LinkedIn,
  location: Location,
  github: Github,
  skype: Skype,
  telegram: Telegram,
  whatsapp: Whatsapp,
  discord: Discord,
};

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number | string;
};

const Icon: FC<Props> = ({ name, size = 24, className, ...rest }) => {
  const SVG = icons[name];

  return (
    <SVG
      className={cn(styles.icon, className)}
      width={size}
      height={size}
      {...rest}
    />
  );
};

export { Icon };
