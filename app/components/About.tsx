const About = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-primary">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Sai, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am a Software Engineering graduate with 4 years of experience working as a Full Stack Software Engineer. I have a proven ability to design and implement robust backend applications, leveraging Python, Java and NodeJS. Additionally, I am active open-source contributor, fostering a commitment to continuous learning and collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;