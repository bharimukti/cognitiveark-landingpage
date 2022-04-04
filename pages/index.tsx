import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Divider from "./../components/Divider";
import Nav from "./../components/Nav";

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
        <section id="titleSection" className="min-h-screen relative">
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-b from-transparent to-black"></div>
          <div className="relative container max-w-screen-lg mx-auto">
            <div className="py-24 min-h-screen flex flex-col items-center justify-center">
              <h1 className="text-8xl text-center font-display">
                The Cognitive Ark
              </h1>
              <p className="text-2xl text-center mb-1">
                Interdimensional interactive comic NFT
              </p>
              <p className="text-2xl text-center font-bold text-secondary">
                Experience NFT as the multi-dimensional storyline of the future
              </p>
            </div>
          </div>
        </section>
        <section id="middleSection" className="relative">
          <section>
            <div className="container max-w-screen-lg mx-auto py-12 flex flex-col items-center">
              <Divider />
              <p className="text-xl text-center uppercase">
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
          <section className="h-screen flex items-center">
            <div className="container max-w-screen-lg mx-auto flex flex-col items-end">
              <h2 className="text-right font-display text-5xl mb-2">
                Explore The Unknown
                <br />
                <span className="text-primary">
                  Terraform The NFT-Community
                </span>
              </h2>
              <p className="text-right text-xl max-w-prose">
                We are exploring new frontiers of creative ideas and
                implementing these infinite possibilities to reshape the NFT art
                landscape. We are making our mark on the NFT-Space, building a
                new world of values with the collective community.
              </p>
            </div>
          </section>
          <div className="absolute inset-x-0 -mt-64 select-none">
            <Image
              src="/assets/images/cables.png"
              alt=""
              width={2107}
              height={607}
            />
          </div>
          <section className="h-screen flex items-center relative">
            <div className="container max-w-screen-lg mx-auto flex flex-col">
              <h2 className="font-display text-5xl mb-2">
                Because <span className="text-primary">Everything Is Art</span>
                <br />
                In Our Eyes.
              </h2>
              <p className="text-xl max-w-prose">
                All is all about perspective. The CognitiveArk Lab culture
                welcomes these manifold of different perspectives as input,
                downloading them all into our core generator of vision, and
                synthesizing them all into a valuable piece of art. We are
                actively shaping the creative future of the art community beyond
                known worlds.
              </p>
            </div>
          </section>
          <section>
            <div className="container max-w-screen-lg mx-auto py-12 flex flex-col items-center">
              <Divider />
              <p className="text-xl text-center uppercase mb-4">
                &quot;Logic will get you from A to B. Imagination will take you
                everywhere.&quot;
              </p>
              <p className="text-xl text-center uppercase">
                <strong className="text-secondary">- Albert Einstein -</strong>
              </p>
              <Divider />
            </div>
          </section>
        </section>
        <section id="teamSection" className="relative">
          <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-t from-transparent to-black"></div>
          <div className="relative container max-w-screen-lg mx-auto pt-24 pb-60">
            <h2 className="font-display text-5xl text-center mb-24 text-primary">
              Team
            </h2>
            <div className="flex flex-wrap">
              <div className="w-1/3">
                <Image
                  src="/assets/images/team-efacsen.png"
                  alt="Efacsen"
                  height={588}
                  width={581}
                />
              </div>
              <div className="w-1/3">
                <Image
                  src="/assets/images/team-putripadalarang.png"
                  alt="Putripadalarang"
                  height={588}
                  width={581}
                />
              </div>
              <div className="w-1/3">
                <Image
                  src="/assets/images/team-nowhereman.png"
                  alt="Nowhereman"
                  height={588}
                  width={581}
                />
              </div>
              <div className="w-1/3">
                <Image
                  src="/assets/images/team-mudikersjawa.png"
                  alt="Mudikersjawa"
                  height={588}
                  width={581}
                />
              </div>
              <div className="w-1/3">
                <Image
                  src="/assets/images/team-haulerkonj.png"
                  alt="Haulerkonj"
                  height={588}
                  width={581}
                />
              </div>
              <div className="w-1/3">
                <Image
                  src="/assets/images/team-kvlj.png"
                  alt="Kvlj"
                  height={588}
                  width={581}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
