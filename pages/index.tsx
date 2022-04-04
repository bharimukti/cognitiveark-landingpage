import type { NextPage } from "next";
import Head from "next/head";
import Divider from "./../components/Divider";
import Email from "../components/icons/Email";
import Instagram from "../components/icons/Instagram";
import Nav from "./../components/Nav";
import Whatsapp from "../components/icons/Whatsapp";

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <div
        id="content"
        className="h-screen overflow-y-auto bg-black text-white font-sans max-w-screen-3xl mx-auto border-gray-800 3xl:border-l 3xl:border-r"
      >
        <Head>
          <title>
            CognitiveArk &mdash; Interdimensional interactive comic NFT
          </title>
          <meta
            name="description"
            content="Experience NFT as the multi-dimensional storyline of the future"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        </Head>

        <Nav />
        <section id="titleSection" className="relative">
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-b from-transparent to-black"></div>
          <div className="relative container px-4 sm:px-0 max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-lg mx-auto">
            <div className="py-48 sm:py-24 sm:min-h-screen flex flex-col items-center justify-center">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl 2xl:text-8xl text-center font-display">
                The Cognitive Ark
              </h1>
              <p className="text-lg sm:text-2xl text-center mb-1">
                Interdimensional interactive comic NFT
              </p>
              <p className="text-lg sm:text-2xl text-center font-bold text-secondary">
                Experience NFT as the multi-dimensional storyline of the future
              </p>
            </div>
          </div>
        </section>
        <section id="middleSection" className="relative">
          <section>
            <div className="container px-4 sm:px-0 max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-lg mx-auto sm:py-12 flex flex-col items-center">
              <Divider />
              <p className="sm:text-xl text-center uppercase">
                <strong className="text-primary">We Are The Ark</strong> -
                Bridging The Community Of Art Culture And Tradition
                <br />
                With The Fast Paced Technology World
                <br />
                Let&apos;s Write Our Story Together
              </p>
              <Divider />
            </div>
          </section>
          <section className="py-32 sm:py-60 xl:py-0 xl:h-screen flex items-center">
            <div className="container px-4 sm:px-0 max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-lg mx-auto flex flex-col items-end">
              <h2 className="sm:text-right font-display text-2xl sm:text-4xl xl:text-5xl mb-2">
                Explore The Unknown
                <br />
                <span className="text-primary">
                  Terraform The NFT-Community
                </span>
              </h2>
              <p className="sm:text-right sm:text-xl max-w-prose">
                We are exploring new frontiers of creative ideas and
                implementing these infinite possibilities to reshape the NFT art
                landscape. We are making our mark on the NFT-Space, building a
                new world of values with the collective community.
              </p>
            </div>
          </section>
          <div className="absolute inset-x-0 -mt-20 sm:-mt-32 lg:-mt-44 xl:-mt-64 select-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/cables.png" alt="" />
          </div>
          <section className="py-32 sm:py-60 xl:py-0 xl:h-screen flex items-center relative">
            <div className="container px-4 sm:px-0 max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-lg mx-auto flex flex-col">
              <h2 className="text-right sm:text-left font-display text-2xl sm:text-4xl xl:text-5xl mb-2">
                Because <span className="text-primary">Everything Is Art</span>
                <br />
                In Our Eyes.
              </h2>
              <p className="text-right sm:text-left sm:text-xl max-w-prose">
                Art is all about perspective. The CognitiveArk Lab culture
                welcomes these manifold of different perspectives as input,
                downloading them all into our core generator of vision, and
                synthesizing them all into a valuable piece of art. We are
                actively shaping the creative future of the art community beyond
                known worlds.
              </p>
            </div>
          </section>
          <section>
            <div className="container px-4 sm:px-0 max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-lg mx-auto sm:py-12 flex flex-col items-center">
              <Divider />
              <p className="sm:text-xl text-center uppercase mb-4">
                &quot;Logic will get you from A to B. Imagination will take you
                everywhere.&quot;
              </p>
              <p className="sm:text-xl text-center uppercase">
                <strong className="text-secondary">- Albert Einstein -</strong>
              </p>
              <Divider />
            </div>
          </section>
        </section>
        <section id="teamSection" className="relative">
          <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-t from-transparent to-black"></div>
          <div className="relative container px-4 sm:px-0 max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-lg mx-auto pt-24 pb-24 sm:pb-32 2xl:pb-60">
            <h2 className="font-display text-3xl sm:text-5xl text-center mb-12 sm:mb-24 text-primary">
              Team
            </h2>
            <div className="flex flex-wrap">
              {[
                "Efacsen",
                "Putripadalarang",
                "Nowhereman",
                "Mudikersjawa",
                "Haulerkonj",
                "Kvlj",
              ].map((teamMember) => {
                return (
                  <div className="w-1/2 sm:w-1/3" key={teamMember}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/assets/images/team-${teamMember.toLocaleLowerCase()}.png`}
                      alt={teamMember}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <footer>
            <div className="container px-4 sm:px-0 max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-lg mx-auto py-6">
              <div className="flex justify-center sm:justify-end text-primary space-x-6">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-100 ease-in-out"
                >
                  <Instagram />
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-100 ease-in-out"
                >
                  <Whatsapp />
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-100 ease-in-out"
                >
                  <Email />
                </a>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Home;
