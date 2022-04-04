import type { NextPage } from "next";
import Head from "next/head";
import Divider from "./../components/Divider";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Head>
        <title>Cognitiveark</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed top-0 inset-x-0 z-10">
        <div className="container max-w-screen-lg mx-auto">
          <nav className="flex justify-end font-display">
            <ul className="flex items-center space-x-8 py-4">
              <li>Home</li>
              <li>About Us</li>
              <li>Roadmap</li>
              <li>Disclaimer</li>
              <li>Team</li>
            </ul>
          </nav>
        </div>
      </div>
      <section className="min-h-screen">
        <div className="relative container max-w-screen-lg mx-auto">
          <div className="py-24 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-7xl text-center font-display">
              The Cognitive Ark
            </h1>
            <p className="text-xl text-center mb-1">
              Interdimensional interactive comic NFT
            </p>
            <p className="text-xl text-center font-bold">
              Experience NFT as the multi-dimensional storyline of the future
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container max-w-screen-lg mx-auto py-12 flex flex-col items-center">
          <Divider />
          <p className="text-xl text-center uppercase">
            <strong>We Are The Ark</strong> - Bridging The Community Of Art
            Culture And Tradition
            <br />
            With The Fast Paced Technology World
            <br />
            Let&apos;s Write Our Story Together
          </p>
          <Divider />
        </div>
      </section>
      <section className="min-h-screen flex items-center">
        <div className="container max-w-screen-lg mx-auto flex flex-col items-end">
          <h2 className="text-right font-display text-5xl mb-2">
            Explore The Unknown
            <br />
            Terraform The NFT-Community
          </h2>
          <p className="text-right text-xl max-w-prose">
            We are exploring new frontiers of creative ideas and implementing
            these infinite possibilities to reshape the NFT art landscape. We
            are making our mark on the NFT-Space, building a new world of values
            with the collective community.
          </p>
        </div>
      </section>
      <section className="min-h-screen flex items-center">
        <div className="container max-w-screen-lg mx-auto flex flex-col">
          <h2 className="font-display text-5xl mb-2">
            Because Everything Is Art
            <br />
            In Our Eyes.
          </h2>
          <p className="text-xl max-w-prose">
            All is all about perspective. The CognitiveArk Lab culture welcomes
            these manifold of different perspectives as input, downloading them
            all into our core generator of vision, and synthesizing them all
            into a valuable piece of art. We are actively shaping the creative
            future of the art community beyond known worlds.
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
            <strong>- Albert Einstein -</strong>
          </p>
          <Divider />
        </div>
      </section>
    </div>
  );
};

export default Home;
