import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="bg-black text-white min-h-screen py-32">
        <div className="container px-6 mx-auto space-y-6">
          <h1 className="text-6xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Richard George
            </span>
          </h1>
          <div className="w-full lg:max-w-xl text-xl space-y-5">
            <p>
              I&apos;m a web developer from Bristol, UK. I&apos;m currently
              working on turning this site into a blog containing useful
              snippets and guides for React and TypeScript.
            </p>
            <p>
              You can{" "}
              <a
                href="https://twitter.com/richjg_"
                className="underline text-green-400 font-semibold transition duration-75 hover:opacity-75"
                target="_blank"
                rel="noreferrer"
              >
                follow me on Twitter
              </a>{" "}
              for updates
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
