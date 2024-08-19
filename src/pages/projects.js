import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/keyword-search.png";
import project2 from "../../public/images/projects/lexflow.png";
import project3 from "../../public/images/projects/project-citizen.png";
import project4 from "../../public/images/projects/aclu-archives.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounder-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-9 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg
        lg:w-full
        "
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
          priority
          sizes="(max-width: 768 px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div
        className="w-1/2 flex flex-col items-start justify-between pl-6
      lg:w-full lg:pl-0 lg:pt-6
      "
      >
        <span
          className="text-primary font-medium text-xl dark:text-primaryDark
        xs:text-base
        "
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-4xl font-bold dark:text-light
          sm:text-sm
          "
          >
            {title}
          </h2>
        </Link>
        <p
          className="my-2 font-medium text-dark dark:text-light
        sm:text-sm
        "
        >
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const FeaturedProjectNoGit = ({ type, title, summary, img, link }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounder-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-9 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg
        lg:w-full
        "
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
          priority
          sizes="(max-width: 768 px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div
        className="w-1/2 flex flex-col items-start justify-between pl-6
      lg:w-full lg:pl-0 lg:pt-6
      "
      >
        <span
          className="text-primary font-medium text-xl dark:text-primaryDark
        xs:text-base
        "
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-4xl font-bold dark:text-light
          sm:text-sm
          "
          >
            {title}
          </h2>
        </Link>
        <p
          className="my-2 font-medium text-dark dark:text-light
        sm:text-sm
        "
        >
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      "
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span
          className="text-primary dark:text-primaryDark font-medium text-xl
        lg:text-lg md:text-base
        "
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline
            md:text-base
            "
          >
            Visit
          </Link>
          <Link
            href={github}
            target="_blank"
            className="w-8
          md:w-6
          "
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects - Shriyan Yamali</title>
        <meta
          name="Projects Page for Shriyan Yamali"
          content="Technology, Computer Science, Law, Coding, Web Development, Student, High School, Stanford, UPenn, Github"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Projects"
            className="mb-4
            lg:!text-6xl md:!text-5xl sm:mb-2 sm:!text-4xl xs:!text-2xl
            "
          />

          <div
            className="grid grid-cols-12 gap-24 gap-y-32
          lg:gap-x-8 md:gap-y-24 md:gap sm:gap-x-0
          md:grid-cols-6
          "
          >
            <div className="col-span-12 md:col-span-6">
              <FeaturedProject
                title="Competition Cases Keyword Search"
                img={project1}
                summary="A index where you can search keywords related to return market definitions decided in European Commission competition cases."
                link="https://competitioncaseskeywordsearch.github.io/"
                github="https://github.com/CompetitionCasesKeywordSearch/competitioncaseskeywordsearch.github.io"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="LexFlow"
                img={project2}
                link="https://github.com/ShriyanYamali/LexFlow"
                github="https://github.com/ShriyanYamali/LexFlow"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Project Citizen"
                img={project3}
                link="https://project-citizen-8447054.codehs.me/Home.html"
                github="https://github.com/ShriyanYamali/We-Spy-Days-of-Safer-Highways"
                type="Website"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <FeaturedProjectNoGit
                title="ACLU of Delaware Archives"
                img={project4}
                summary="The ACLU of Delaware Archives preserves the organization's history and ongoing efforts to protect civil liberties in Delaware.
                These archives showcase important legal cases, campaigns, and advocacy efforts the ACLU has worked on, including education
                reform and voting rights. The archives serve as a resource for understanding the impact of the ACLU's work in Delaware over
                the years."
                link="https://www.aclu-de.org/en/archives"
                type="Archival Project"
              />
            </div>
            {/* //TODO: add another featured project */}
            {/* <div className="col-span-12">Featured Project</div> */}
            {/* //TODO: add another project */}
            {/* <div className="col-span-6">Project-4</div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
