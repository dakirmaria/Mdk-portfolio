export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm{" "}
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-200 border-solid border-4 border-green-600 relative inline-block">
              <span class="relative text-gray-900"> Maria.</span>
            </span>
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>

          <p className="mb-8 leading-relaxed">
            A software engineer who is passionate about Web development and
            technologies. Continuously learning anything interested in or has an
            impact on engineering!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="shadow rounded-full max-w-full h-auto align-middle border-none"
            alt="Maria"
            src="./coding.png"
          />
        </div>
      </div>
    </section>
  );
}
