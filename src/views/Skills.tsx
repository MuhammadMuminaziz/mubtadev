export default function Skills() {
  return (
    <>
      <div
        className="w-full md:max-w-3xl lg:max-w-6xl mx-auto px-5 text-white my-40 lg:my-40"
        id="skills"
        data-aos="fade-up"
      >
        <div className="text-slate-200 font-semibold text-center text-2xl mb-7">
          Skills
        </div>
        <div className="flex gap-10 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3">
            <h1 className="text-center font-semibold mb-2">Frontend</h1>
            <p className="text-slate-300 text-center">
              For frontend development, I am proficient in HTML, CSS,
              JavaScript, TypeScript, and React. These skills enable me to build
              responsive and interactive user interfaces.
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <h1 className="text-center font-semibold mb-2">Backend</h1>
            <p className="text-slate-300 text-center">
              In backend development, I have experience with Java, Node.js, PHP,
              and frameworks such as CodeIgniter, Laravel, Express.js, and
              Spring Boot. With these skills, I can develop and manage robust
              and scalable servers, APIs, and application logic.
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <h1 className="text-center font-semibold mb-2">Tools</h1>
            <p className="text-slate-300 text-center">
              Additionally, I am familiar with various tools and databases,
              including Git for version control, and databases such as MySQL,
              PostgreSQL, and MongoDB. These skills support effective
              development, collaboration, and data management in my projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
