
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Portfolio1() {
  return (
    <main className="bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 bg-white shadow z-50">
        <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">Sathyajith N B</h1>
          <ul className="flex gap-6 font-medium">
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Sathyajith 👋</h2>
        <p className="text-lg mb-6">Full Stack Web Developer (React + Node + Firebase)</p>
        <div className="flex justify-center gap-4">
          {/* <a href="https://github.com/Sathyajith94" target="_blank" rel="noopener noreferrer">
            <Button><FaGithub className="mr-2" /> GitHub</Button>
          </a>
          <a href="https://linkedin.com/in/sathyajith94" target="_blank" rel="noopener noreferrer">
            <Button variant="outline"><FaLinkedin className="mr-2" /> LinkedIn</Button>
          </a> */}
          <a href="https://github.com/Sathyajith94" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
              <FaGithub className="mr-2" /> GitHub
            </button>
          </a>
          <a href="https://linkedin.com/in/sathyajith94" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded hover:bg-gray-100">
              <FaLinkedin className="mr-2" /> LinkedIn
            </button>
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard title="Handing Over Checklist" tech="React, Firebase, Express.js" role="Backend & UI Planning" />
          <ProjectCard title="CRM Module" tech="TypeScript, Chakra UI, Firebase" role="API Development" />
          <ProjectCard title="HRMS" tech="React, Firebase" role="Backend Lead & UI Contributor" />
          <ProjectCard title="Material Requisition System" tech="React, Firebase" role="Full Stack Developer" />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 bg-gray-100 px-6">
        <h3 className="text-3xl font-semibold text-center mb-6">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4 text-center">
          {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express.js', 'Firebase', 'MongoDB', 'Tailwind CSS'].map(skill => (
            <div className="px-4 py-2 bg-white rounded shadow" key={skill}>{skill}</div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6 text-center">Experience</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-bold">Sidharth Foundations – Junior Software Engineer (Jan 2023 – Present)</h4>
            <ul className="list-disc list-inside">
              <li>Built 10+ internal full-stack web apps (Engineering, HR, CRM, etc.)</li>
              <li>Managed both frontend and backend, using React, Firebase, Node.js</li>
              <li>Led development on backend logic, structure, and APIs</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold">S4Carlisle Publishing – Compositor (Apr 2016 – Nov 2016)</h4>
            <p>Handled content formatting and typesetting for academic publications.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-gray-50 text-center">
        <h3 className="text-3xl font-semibold mb-4">Contact</h3>
        <p className="mb-4">Feel free to reach out via email or connect on LinkedIn!</p>
        <p className="mb-2">📧 sathyajith74@gmail.com</p>
        <p>📍 Chennai, Tamil Nadu</p>
      </section>
    </main>
  );
}

function ProjectCard1({ title, tech, role }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-sm mb-1"><strong>Tech:</strong> {tech}</p>
      <p className="text-sm"><strong>Role:</strong> {role}</p>
    </div>
  );
}



export default function Portfolio() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 bg-white shadow z-50">
        <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold tracking-tight">Sathyajith N B</h1>
          <ul className="flex gap-6 font-medium text-sm">
            <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-600 transition">Skills</a></li>
            <li><a href="#experience" className="hover:text-blue-600 transition">Experience</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-white to-gray-100">
        <h2 className="text-5xl font-extrabold mb-4 text-gray-900">
          Hi, I'm <span className="text-blue-600">Sathyajith</span> 👋
        </h2>
        <p className="text-xl text-gray-700 mb-6">Full Stack Developer – React, Node.js, Firebase</p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/Sathyajith94" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
              <FaGithub /> GitHub
            </button>
          </a>
          <a href="https://linkedin.com/in/sathyajith94" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 border border-gray-600 text-gray-800 px-5 py-2 rounded-full hover:bg-gray-100 transition">
              <FaLinkedin /> LinkedIn
            </button>
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-6 max-w-5xl mx-auto animate-fade-in">
        <h3 className="text-3xl font-semibold mb-8 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard title="Handing Over Checklist" tech="React, Firebase, Express.js" role="Backend & UI Planning" />
          <ProjectCard title="CRM Module" tech="TypeScript, Chakra UI, Firebase" role="API Development" />
          <ProjectCard title="HRMS" tech="React, Firebase" role="Backend Lead & UI Contributor" />
          <ProjectCard title="Material Requisition System" tech="React, Firebase" role="Full Stack Developer" />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 bg-gray-100 px-6 animate-fade-in">
        <h3 className="text-3xl font-semibold text-center mb-6">Skills</h3>
        <div className="flex flex-wrap justify-center gap-3 text-center">
          {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express.js', 'Firebase', 'MongoDB', 'Tailwind CSS'].map(skill => (
            <span key={skill} className="px-4 py-2 bg-white border border-gray-200 rounded-full shadow text-sm font-medium text-gray-700">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 px-6 max-w-4xl mx-auto animate-fade-in">
        <h3 className="text-3xl font-semibold mb-6 text-center">Experience</h3>
        <div className="space-y-6 text-gray-800">
          <div>
            <h4 className="text-lg font-semibold">
              Sidharth Foundations <span className="text-sm text-gray-500">– Junior Software Engineer</span>
            </h4>
            <p className="text-sm text-gray-500 mb-1">Jan 2023 – Present</p>
            <ul className="list-disc list-inside text-sm leading-relaxed">
              <li>Developed and maintained 10+ internal web applications across Engineering, HR, and CRM teams.</li>
              <li>Worked across the stack with React, Firebase, Node.js & Express.js.</li>
              <li>Led API design and backend architecture for multiple modules.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">
              S4Carlisle Publishing <span className="text-sm text-gray-500">– Compositor</span>
            </h4>
            <p className="text-sm text-gray-500 mb-1">Apr 2016 – Nov 2016</p>
            <p className="text-sm">Handled academic content formatting, layout structuring, and typesetting for scholarly publications.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-gray-50 text-center animate-fade-in">
        <h3 className="text-3xl font-semibold mb-4">Contact</h3>
        <p className="mb-4 text-gray-700">Feel free to reach out via email or connect on LinkedIn!</p>
        <p className="mb-2 font-medium">📧 sathyajith74@gmail.com</p>
        <p className="text-gray-600">📍 Chennai, Tamil Nadu</p>
      </section>
    </main>
  );
}

function ProjectCard({ title, tech, role }) {
  return (
    <div className="bg-white shadow hover:shadow-lg transition rounded-xl p-6 border border-gray-100">
      <h4 className="text-xl font-semibold text-blue-700 mb-2">{title}</h4>
      <p className="text-sm text-gray-600 mb-1"><strong>Tech:</strong> {tech}</p>
      <p className="text-sm text-gray-600"><strong>Role:</strong> {role}</p>
    </div>
  );
}
