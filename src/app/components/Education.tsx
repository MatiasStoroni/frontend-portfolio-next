/** @format */

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { PiCertificateLight } from "react-icons/pi";
const education = [
    {
        title: "Bachelor's Degree in Information Systems",
        year: "2025",
        description: "Studied software development, project management, networking, and cybersecurity.",
        resources: [
            {
                type: "repository",
                label: "View GitHub Repository",
                url: "https://github.com/MatiasStoroni/Benkynote",
                icon: FaGithub,
            },
        ],
        project: {
            title: "🎓 Final Thesis: Academic Assistance Platform",
            summary:
                "Designed to improve academic performance and reduce stress, this web app was built using Java (backend), Next.js (frontend), and MySQL (database), all containerized with Docker. It features Auth0-based secure login and a Python AI model for automating class transcription and exam simulation. The development process followed an agile, iterative methodology with defined roles, sprints, and working prototypes.",
            tech: ["Java", "Next.js", "MySQL", "Docker", "Auth0", "Python", "AI"],
        },
    },
    {
        title: "Cybersecurity Essentials - Cisco Networking Academy",
        year: "2025",
        description:
            "Comprehensive intermediate-level course offered by Cisco Networking Academy, designed to build a strong foundation in cybersecurity principles and practices. The curriculum covers a wide range of topics including cryptography, network and endpoint security, access control models, firewalls, VPNs, and security policies. It places strong emphasis on hands-on learning through interactive labs and real-world scenarios using Cisco Packet Tracer and virtual environments. Learners gain experience in threat analysis, secure system design, and risk mitigation strategies. This course also prepares students for further certification paths such as CompTIA Security+ and CCST Cybersecurity.",
        resources: [
            {
                type: "certificate",
                label: "View Certificate",
                url: "https://www.credly.com/badges/92ddc5d4-40ec-4c9d-b078-108f5948202a/public_url",
                icon: PiCertificateLight,
            },
        ],
    },
    {
        title: "Introduction to Cybersecurity - Cisco Networking Academy",
        year: "2025",
        description:
            "Comprehensive foundational course exploring core cybersecurity concepts, including threat landscape, attack types, cryptography, and principles of network and data protection. Offered by Cisco Networking Academy, this program also covers risk management, security policies, and career pathways in cybersecurity. Ideal for beginners aiming to understand how to protect digital assets in a connected world.",
        resources: [
            {
                type: "certificate",
                label: "View Certificate",
                url: "https://www.credly.com/badges/22c6a16a-7dba-41e4-bb88-77d62ac10f13/public_url",
                icon: PiCertificateLight,
            },
        ],
    },
    {
        title: "Full Stack Developer Course – #YoProgramo",
        year: "2022",
        description:
            "Intensive government-backed course covering frontend (Angular), backend (Spring Boot), databases (MySQL), and deployment (Firebase, Heroku).",
        resources: [
            {
                type: "certificate",
                label: "View Certificate",
                url: "https://drive.google.com/file/d/182tF3LZYyrkjjUZvbhaWxmtb815YN7KU/view?usp=sharing",
                icon: PiCertificateLight,
            },
        ],
    },
];

export default function Education() {
    return (
        <section id="education" className="scroll-mt-16 bg-slate-900 text-white py-16 px-4 sm:px-8 md:px-12">
            <div className="max-w-screen-md mx-auto">
                <h2 className="text-3xl text-center font-bold text-orange-700">Education</h2>

                <div className="relative mt-5">
                    {/* Vertical line */}
                    <div className="absolute left-4 top-0 h-full w-px bg-orange-600 opacity-30" />

                    <div className="space-y-12 pl-10">
                        {education.map((item, index) => (
                            <div key={index} className="relative group">
                                <div className="bg-slate-800 p-5 rounded-lg border border-white/10 shadow-md hover:shadow-lg transition-all">
                                    <p className="text-sm text-teal-400 mb-1">{item.year}</p>
                                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                    <p className="text-sm text-slate-300 leading-relaxed mt-2">{item.description}</p>

                                    {/* Project details */}
                                    {item.project && (
                                        <div className="mt-4 text-sm text-slate-300">
                                            <p className="font-semibold text-slate-100">{item.project.title}</p>
                                            <p className="mt-1">{item.project.summary}</p>

                                            {/* Tech badges */}
                                            <div className="flex flex-wrap gap-2 mt-3 text-xs">
                                                {item.project.tech?.map((tech) => (
                                                    <span key={tech} className="bg-slate-700 text-slate-200 px-2 py-1 rounded-md border border-slate-600">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Optional resources */}
                                    {item.resources && (
                                        <div className="mt-4 flex flex-wrap gap-4">
                                            {item.resources.map((res, i) => (
                                                <Link
                                                    key={i}
                                                    href={res.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-orange-600 hover:text-orange-400 underline underline-offset-2 text-sm flex items-center gap-1"
                                                >
                                                    {res.icon && <res.icon className="w-5 h-5 text-white" />}
                                                    {res.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
