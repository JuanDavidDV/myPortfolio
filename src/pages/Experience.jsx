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
                <img width={150} height={100} className="mb-3 rounded" src={experience.image}/>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h3 className="mb-2 font-semibold">{experience.role} -{" "} 
                  <span className="text-sm text-slate-600">
                    {experience.company}  
                  </span>    
                </h3>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.description.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>    
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Experience;