import { EXPERIENCE } from "../constants";

const Experience = () => {
  return (
    <main>
      <div className="pb-4 mx-10">
        <h2 className="my-20 text-center text-4xl md:text-5xl text-gray-800 font-bold">Experience</h2>
        <div>
          {EXPERIENCE.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-slate-700">
                  {experience.year}
                </p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4"> </div>

            </div>

          ))}
        </div>

    </div>
    </main>
  
  )
  
}

export default Experience;