import { useState } from "react";
import { skills } from "../assets/data";

const filters = [
  { key: "all", label: "الكل" },
  { key: "programming", label: "البرمجة" },
  { key: "design", label: "التصاميم" },
];

function Skills() {
  const [isActive, setIsActive] = useState("all");
  const [selectedId, setSelectedId] = useState(skills.design.items[0].id);

  const visibleSkill =
    isActive === "all"
      ? [...skills.design.items, ...skills.programming.items]
      : skills[isActive].items;

  const selected =
    visibleSkill.find((s) => s.id === selectedId) || visibleSkill[0];

  const handleFilter = (key) => {
    setIsActive(key);
    const list =
      key === "all"
        ? [...skills.design.items, ...skills.programming.items]
        : skills[key].items;
    setSelectedId(list[0].id);
  };

  return (
    <div id="skills" className="w-full min-h-fit bg-[#0d0d0d] p-6 sm:p-16 font-kufam text-[#f7ede2]">
      <div className="flex flex-col sm:flex-row sm:items-center w-full gap-4 sm:gap-0">
        <h1 className='shrink-0 w-full sm:w-1/5 list-item list-[square] list-inside'>
          المهارات
        </h1>

        <div className="flex">
          {filters.map((filter, index) => (
            <div key={filter.key} className="flex items-center text-center">
              {index !== 0 && <p className="cursor-default">/</p>}
              <button
                className={`cursor-pointer px-4 sm:px-6 transition-opacity ${
                  isActive === filter.key ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleFilter(filter.key)}
              >
                {filter.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 mt-8 sm:mt-12">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <img
            key={selected.id}
            src={selected.image}
            alt={selected.name}
            loading="lazy"
            decoding="async"
            width="448"
            height="448"
            className="w-full max-w-xs sm:max-w-md aspect-square object-contain"
          />
          <div className="flex flex-row flex-wrap justify-center gap-1 mt-2">
            {visibleSkill.map((skill) => (
              <img
                key={skill.name}
                className={`w-10 sm:w-16 h-auto aspect-square object-contain ${
                  selected.id === skill.id ? "grayscale-0" : "grayscale-100"
                }`}
                src={skill.image}
                alt={skill.name}
                loading="lazy"
                decoding="async"
                width="64"
                height="64"
              />
            ))}
          </div>
        </div>

        <ul className="w-full md:w-1/2 flex flex-col gap-3 sm:gap-4">
          {visibleSkill.map((skill) => (
            <li key={skill.id}>
              <button
                onClick={() => setSelectedId(skill.id)}
                onMouseEnter={() => setSelectedId(skill.id)}
                className={`cursor-pointer text-[clamp(1.5rem,6vw,2.25rem)] transition-opacity ${
                  selected.id === skill.id ? "opacity-100" : "opacity-40"
                }`}
              >
                {skill.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
