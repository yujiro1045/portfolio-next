import { CalendarIcon, BriefcaseIcon } from "lucide-react";
import { experiences } from "../data/experienceItem";

export default function Experiencia() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6 text-neon-pink">Mi Experiencia</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="bg-gradient-card shadow-md rounded-lg p-6">
          <div className="flex items-center mb-4 text-black">
            <BriefcaseIcon className="w-6 h-6 mr-2 text-blue-600" />
            <h2 className="text-xl font-semibold">{exp.title}</h2>
          </div>
          <div className="flex items-center mb-2 text-gray-600">
            <CalendarIcon className="w-4 h-4 mr-2" />
            <span>{exp.period}</span>
          </div>
          <p className="font-medium text-gray-800 mb-2">{exp.company}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {exp.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
