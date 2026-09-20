import { useState, useEffect } from "react";
import { FaReact, FaJava } from "react-icons/fa";
import {
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";

type Technology = {
  id: string;
  name: string;
  category: string;
  level: string;
  rating: string;
  description: string;
  badge?: string;
  badgeColor?: string;
};

type ToastMessage = {
  message: string;
  type: "add" | "remove";
};

const technologies: Technology[] = [
  {
    id: "react",
    name: "React",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: "4.9",
    description: "A declarative, component-based JavaScript library for building modern user interfaces.",
    badge: "Popular",
    badgeColor: "bg-cyan-50 text-cyan-600",
  },
  {
    id: "vue",
    name: "Vue.js",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: "4.8",
    description: "An approachable, performant, and versatile framework for building web user interfaces.",
    badge: "Versatile",
    badgeColor: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "svelte",
    name: "Svelte",
    category: "Frontend",
    level: "Intermediate",
    rating: "4.8",
    description: "Compiler-enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    badge: "Fast",
    badgeColor: "bg-orange-50 text-orange-600",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    level: "Intermediate",
    rating: "4.9",
    description: "The React framework for full-stack web applications with hybrid static & server rendering.",
    badge: "Essential",
    badgeColor: "bg-indigo-50 text-indigo-600",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    level: "Intermediate",
    rating: "4.8",
    description: "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    badge: "Standard",
    badgeColor: "bg-emerald-50 text-emerald-700",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database",
    level: "Intermediate",
    rating: "4.9",
    description: "A powerful, open-source object-relational database system with proven reliability.",
    badge: "Top SQL",
    badgeColor: "bg-blue-50 text-blue-600",
  },
  {
    id: "redis",
    name: "Redis",
    category: "Database",
    level: "Intermediate",
    rating: "4.8",
    description: "In-memory data structure store used as a high-speed database, cache, and message broker.",
    badge: "Cache",
    badgeColor: "bg-red-50 text-red-600",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Language",
    level: "Beginner-Friendly",
    rating: "4.9",
    description: "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    badge: "Ubiquitous",
    badgeColor: "bg-amber-50 text-amber-700",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Language",
    level: "Intermediate",
    rating: "4.9",
    description: "A strongly typed programming language that builds on JavaScript for robust tooling.",
    badge: "Essential",
    badgeColor: "bg-blue-50 text-blue-700",
  },
  {
    id: "java",
    name: "Java",
    category: "Language",
    level: "Intermediate",
    rating: "4.6",
    description: "A secure, object-oriented programming language designed for portability and scale.",
    badge: "Robust",
    badgeColor: "bg-cyan-50 text-cyan-700",
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "Styling",
    level: "Beginner-Friendly",
    rating: "4.9",
    description: "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
    badge: "Modern",
    badgeColor: "bg-teal-50 text-teal-600",
  },
  {
    id: "docker",
    name: "Docker",
    category: "DevOps",
    level: "Intermediate",
    rating: "4.9",
    description: "A platform designed to build, share, and run containerized applications reliably.",
    badge: "Containers",
    badgeColor: "bg-sky-50 text-sky-600",
  },
];

const renderIcon = (id: string) => {
  const cls = "w-6 h-6";
  switch (id) {
    case "react": return <FaReact className={`${cls} text-[#61DAFB]`} />;
    case "vue": return <SiVuedotjs className={`${cls} text-[#4FC08D]`} />;
    case "svelte": return <SiSvelte className={`${cls} text-[#FF3E00]`} />;
    case "nextjs": return <SiNextdotjs className={`${cls} text-gray-900`} />;
    case "nodejs": return <SiNodedotjs className={`${cls} text-[#339933]`} />;
    case "postgresql": return <SiPostgresql className={`${cls} text-[#4169E1]`} />;
    case "redis": return <SiRedis className={`${cls} text-[#DC382D]`} />;
    case "javascript": return <SiJavascript className={`${cls} text-[#F7DF1E]`} />;
    case "typescript": return <SiTypescript className={`${cls} text-[#3178C6]`} />;
    case "java": return <FaJava className={`${cls} text-[#007396]`} />;
    case "tailwindcss": return <SiTailwindcss className={`${cls} text-[#06B6D4]`} />;
    case "docker": return <SiDocker className={`${cls} text-[#2496ED]`} />;
    default: return <span className="text-xl">⚡</span>;
  }
};

const Technology = () => {
  const [stack, setStack] = useState<Technology[]>([]);
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (toast) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev > 0 ? prev - 2 : 0));
      }, 60);
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [toast]);

  const showToast = (message: string, type: "add" | "remove") => {
    setToast({ message, type });
    setProgress(100);
  };

  const addToStack = (tech: Technology) => {
    if (!stack.some((item) => item.id === tech.id)) {
      setStack((prev) => [...prev, tech]);
      showToast(`${tech.name} added to your stack!`, "add");
    }
  };

  const removeFromStack = (id: string, name: string) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
    showToast(`${name} removed from your stack!`, "remove");
  };

  const removeAll = () => {
    setStack([]);
    showToast("All technologies removed from your stack!", "remove");
  };

  return (
    <section className="relative min-h-screen bg-white py-12">
      {/* Toast Notification positioned Top-Right */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl w-72">
          <div className="flex items-center gap-3 px-4 py-3">
            {toast.type === "add" ? (
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16A34A] text-white">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            ) : (
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0EA5E9] text-white text-xs font-bold italic">
                i
              </div>
            )}
            <span className="flex-1 text-[13px] font-medium text-gray-800">
              {toast.message}
            </span>
            <button
              onClick={() => setToast(null)}
              className="text-gray-400 hover:text-gray-600 text-base"
            >
              ×
            </button>
          </div>
          <div className="h-1 w-full bg-gray-100">
            <div
              className={`h-full transition-all duration-75 ${
                toast.type === "add" ? "bg-[#16A34A]" : "bg-[#0EA5E9]"
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      <div className="mx-auto w-[85%] max-w-7xl">
        <div>
          <h2 className="text-[32px] font-bold leading-tight text-[#111827]">
            Explore the <span className="text-[#d52b9c]">Technologies</span>
          </h2>
          <p className="mt-2 text-[14px] text-gray-400">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="mt-8 flex items-start gap-7">
          <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => {
              const isAdded = stack.some((item) => item.id === tech.id);

              return (
                <div
                  key={tech.id}
                  className="flex flex-col justify-between rounded-[10px] border border-gray-200 bg-white p-5 shadow-[0_1px_4px_rgba(0,0,0,0.03)] transition duration-300 hover:shadow-md"
                >
                  <div>
                    <div className="flex h-8 items-start justify-between">
                      <div className="flex h-6 w-6 items-center justify-center">
                        {renderIcon(tech.id)}
                      </div>

                      {tech.badge && (
                        <span
                          className={`${
                            tech.badgeColor ?? "bg-gray-100 text-gray-600"
                          } rounded-full px-2.5 py-1 text-[10px] font-medium`}
                        >
                          {tech.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-2 text-[18px] font-semibold text-[#111827]">
                      {tech.name}
                    </h3>

                    <p className="mt-2 h-12 overflow-hidden text-[12px] leading-5 text-gray-400">
                      {tech.description}
                    </p>
                  </div>

                  <div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="rounded bg-gray-50 px-2 py-1 text-[10px] text-gray-500">
                        {tech.category}
                      </span>

                      <span className="text-[10px] text-gray-400">
                        {tech.level}
                        <span className="ml-1 text-yellow-400">★</span>
                        <span className="ml-0.5">{tech.rating}</span>
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => addToStack(tech)}
                      disabled={isAdded}
                      className={`mt-3 w-full cursor-pointer rounded-md py-2.5 text-[12px] text-white transition duration-300 ${
                        isAdded
                          ? "cursor-not-allowed bg-gray-400"
                          : "bg-[#0d1320] hover:bg-[#d91b7e]"
                      }`}
                    >
                      {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="sticky top-24 hidden w-60 shrink-0 rounded-[10px] border border-gray-200 bg-white p-5 md:block">
            <h3 className="text-[16px] font-bold text-[#111827]">Your Stack</h3>

            <p className="mt-1.5 text-[10px] text-gray-400">
              {stack.length === 0
                ? "No technologies selected yet."
                : `${stack.length} technologies selected.`}
            </p>

            <div className="mt-4 space-y-2">
              {stack.length === 0 ? (
                <div className="flex h-16 items-center justify-center rounded-md border border-dashed border-gray-200 px-3 text-center">
                  <span className="text-[10px] text-gray-300">
                    Your stack is empty.
                  </span>
                </div>
              ) : (
                stack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-md border border-gray-200 px-2.5 py-2"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <div className="flex h-4 w-4 items-center justify-center">
                        {renderIcon(item.id)}
                      </div>
                      <span className="truncate text-[10px] font-medium text-gray-700">
                        {item.name}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromStack(item.id, item.name)}
                      className="ml-1 cursor-pointer text-[14px] text-gray-400 transition hover:text-red-500"
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>

            {stack.length > 0 && (
              <button
                type="button"
                onClick={removeAll}
                className="mt-4 w-full cursor-pointer rounded-md border border-red-200 py-2 text-[10px] text-red-400 transition hover:bg-red-50"
              >
                Remove All
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;