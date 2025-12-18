import { useState, useEffect } from 'react';
import svgPaths from './imports/svg-6sovak61ez';
import imgAdobeExpressFile31 from './assets/7c9a00e9efa8391de0b58d2b871dc3c31b986dce.png';
//import imgAdobeExpressFile31 from "figma:asset/7c9a00e9efa8391de0b58d2b871dc3c31b986dce.png";

function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About me' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contacts', label: 'Contacts' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1f1f1f]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-['Poppins:Regular',_sans-serif] text-[18px] transition-colors duration-200 ${
                  activeSection === item.id ? 'text-[#f8f7f9]' : 'text-[#f8f7f9]/70 hover:text-[#f8f7f9]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            <div className="h-11 w-px bg-[#f8f7f9]" />
            <div className="flex gap-6">
              <SocialIcon type="instagram" />
              <SocialIcon type="twitter" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function SocialIcon({ type }: { type: 'instagram' | 'twitter' }) {
  const getPath = () => {
    if (type === 'instagram') {
      return (
        <>
          <path
            d={svgPaths.p4fdb300}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p39557800}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M17.5 6.5H17.51"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </>
      );
    } else {
      return (
        <path
          d={svgPaths.p3350a500}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      );
    }
  };

  return (
    <button className="text-[#f8f7f9] hover:text-[#f8f7f9]/80 transition-colors duration-200">
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
        {getPath()}
      </svg>
    </button>
  );
}

function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[905px] h-[897px]">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1417 1409">
              <defs>
                <filter id="blur" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="128" />
                </filter>
              </defs>
              <ellipse
                cx="708.5"
                cy="704.5"
                rx="452.5"
                ry="448.5"
                fill="#f8f7f9"
                filter="url(#blur)"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9]">
              HI, I'M BRAN
            </h2>
            <h1 className="font-['Poppins:Bold',_sans-serif] text-[64px] lg:text-[96px] leading-[0.9] text-[#f8f7f9]">
              I'M AI CLOUD<br />AUTOMATION<br />ENGINEER
            </h1>
          </div>
          
          <button 
            onClick={scrollToProjects}
            className="group border-2 border-[#f8f7f9] px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-[#f8f7f9] hover:text-[#1f1f1f]"
          >
            <span className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] group-hover:text-[#1f1f1f] transition-colors duration-300">
              VIEW MY PROJECTS
            </span>
          </button>
        </div>

        {/* Right content - Profile image */}
        <div className="relative">
          <div
            className="w-full h-[600px] lg:h-[800px] bg-cover bg-center bg-no-repeat rounded-lg"
            style={{ backgroundImage: `url('${imgAdobeExpressFile31}')` }}
          />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[96px] text-[#f8f7f9] mb-12">
          About me
        </h2>
        
        <div className="max-w-4xl">
          <p className="font-['Poppins:Regular',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5] mb-8">
            I'm a deep‑learning engineer who works both on the models themselves and on how they run on GPUs. On the model side, I design and train neural networks and LLM‑based systems in PyTorch and TensorFlow, handle data pipelines and feature engineering, and iterate on architectures, loss functions, and evaluation metrics to hit concrete accuracy and robustness goals. 
          <p className="font-['Poppins:Regular',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
            On the GPU side, I care about how those models actually execute: choosing precisions, exploiting tensor cores, tuning batch sizes and sequence lengths, and working with CUDA‑level libraries and tooling to keep throughput high and latency low. This dual focus—models plus CUDA‑aware performance—lets me ship AI systems that are not only smart on paper but also efficient and affordable to run in real production environments.
          </p>
          </p>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] mb-8">
            EDUCATION
          </h3>
          <div className="max-w-4xl">
            <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-2">
              Master of Science in Computer Science
            </h4>
            <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-2">
              Bachelor of Science in Electrical Engineering
            </h4>
            <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
              Specialized in Artificial Intelligence and Cloud Computing with focus on distributed systems, machine learning operations (MLOps), and cloud-native architectures. Completed advanced coursework in neural networks, deep learning, and infrastructure automation.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-16">
          <h3 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] mb-8">
            EXPERIENCE
          </h3>
          <div className="space-y-12">
            <ExperienceItem
              title="Principal AI & GPU Engineer – aiHQ"
              period="2025 — current"
              description="Lead design and implementation of LLM‑driven agent systems where multiple specialized models collaborate to complete complex tasks. Own end‑to‑end pipelines from data collection and labeling through model training, evaluation, and deployment. Train and fine‑tune transformer and LLM models in PyTorch and TensorFlow for retrieval, routing, and tool selection, experimenting with architectures, loss functions, and decoding strategies to maximize task success rates. Optimize inference on NVIDIA GPUs by combining quantization, tensor‑core‑aware batching, and concurrency tuning, cutting per‑request GPU time while preserving answer quality. Profile and debug GPU performance using CUDA‑level libraries and profilers, inspecting kernels, memory usage, and compute occupancy to identify bottlenecks in attention blocks, matmuls, and data‑movement kernels."
            />
            <ExperienceItem
              title="CLOUD DEVOPS ENGINEER"
              period="2020 — 2022"
              description="Managed multi-cloud environments across AWS, Azure, and hybrid, ensuring high availability and disaster recovery capabilities. Implemented containerization strategies using Docker and Kubernetes for microservices architecture. Developed automation scripts and tools for infrastructure provisioning, monitoring, and incident response. Integrated AI-driven monitoring and predictive analytics to proactively identify and resolve system issues."
            />
            <ExperienceItem
              title="AUTOMATION ENGINEER"
              period="2018 — 2020"
              description="Designed and deployed automated testing frameworks and continuous integration pipelines. Created Python-based automation tools for infrastructure management and configuration. Collaborated with development teams to implement DevOps best practices and automated deployment strategies. Reduced manual intervention in deployment processes by 70% through comprehensive automation solutions."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ title, period, description }: { title: string; period: string; description: string }) {
  return (
    <div className="max-w-4xl">
      <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-1">
        {title}
      </h4>
      <p className="font-['Poppins:ExtraLight',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-3">
        {period}
      </p>
      <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
        {description}
      </p>
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "AI-Powered Cloud Cost Optimization Platform",
      period: "2023 — current",
      description: "Developed an intelligent platform that uses machine learning algorithms to analyze cloud resource usage patterns and automatically optimize costs. Integrated with AWS, Azure, and GCP to provide real-time cost recommendations and automated resource rightsizing. Achieved average cost reduction of 35% for enterprise clients."
    },
    {
      title: "Kubernetes Auto-Scaling with Predictive Analytics",
      period: "2023 — 2024",
      description: "Built a sophisticated auto-scaling system for Kubernetes clusters using predictive ML models to forecast traffic patterns. Implemented custom metrics and horizontal pod autoscaling (HPA) with AI-driven predictions, resulting in improved application performance and reduced infrastructure costs."
    },
    {
      title: "Multi-Cloud Infrastructure Automation Framework",
      period: "2022 — 2023",
      description: "Created a comprehensive IaC framework using Terraform and Python to automate infrastructure provisioning across multiple cloud providers. Implemented policy-as-code for security compliance and automated drift detection. Reduced infrastructure deployment time from days to hours."
    },
    {
      title: "AI-Driven Log Analysis and Incident Response System",
      period: "2022 — 2023",
      description: "Designed an intelligent log aggregation and analysis system using machine learning to detect anomalies and predict potential incidents. Integrated with Elasticsearch, Kibana, and custom ML models to provide automated incident classification and response recommendations."
    },
    {
      title: "Serverless MLOps Pipeline on AWS",
      period: "2021 — 2022",
      description: "Architected and implemented a fully serverless MLOps pipeline using AWS Lambda, SageMaker, and Step Functions. Automated model training, validation, deployment, and monitoring workflows. Enabled data science teams to deploy models to production 5x faster."
    },
    {
      title: "Cloud Security Automation Suite",
      period: "2021 — 2022",
      description: "Developed automated security compliance tools for cloud infrastructure, including vulnerability scanning, security group auditing, and automated remediation. Implemented continuous security monitoring using AWS Security Hub, GuardDuty, and custom Python automation."
    },
    {
      title: "Infrastructure Monitoring and Observability Platform",
      period: "2020 — 2021",
      description: "Built a comprehensive monitoring solution using Prometheus, Grafana, and custom exporters for cloud infrastructure. Implemented distributed tracing and application performance monitoring (APM) across microservices architecture. Reduced mean time to resolution (MTTR) by 60%."
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[96px] text-[#f8f7f9] mb-12">
          Projects
        </h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              period={project.period}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectItem({ title, period, description }: { title: string; period: string; description: string }) {
  return (
    <div className="max-w-4xl relative">
      <div className="pl-8 relative">
        <div className="absolute left-[-9px] top-[12px] w-[15px] h-[15px] bg-white/80 rounded-full backdrop-blur-sm" 
             style={{ filter: 'blur(0.5px)' }} />
        <h3 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-1">
          {title}
        </h3>
        <p className="font-['Poppins:ExtraLight',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-3">
          {period}
        </p>
        <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
          {description}
        </p>
      </div>
    </div>
  );
}

function CertificationsSection() {
  const certifications = [
    {
      title: "AWS CERTIFIED SOLUTIONS ARCHITECT - PROFESSIONAL",
      year: "2023",
      organization: "Amazon Web Services"
    },
    {
      title: "GOOGLE CLOUD PROFESSIONAL CLOUD ARCHITECT",
      year: "2023",
      organization: "Google Cloud"
    },
    {
      title: "CERTIFIED KUBERNETES ADMINISTRATOR (CKA)",
      year: "2022",
      organization: "Cloud Native Computing Foundation"
    },
    {
      title: "MICROSOFT AZURE SOLUTIONS ARCHITECT EXPERT",
      year: "2022",
      organization: "Microsoft"
    },
    {
      title: "TERRAFORM ASSOCIATE CERTIFICATION",
      year: "2021",
      organization: "HashiCorp"
    },
    {
      title: "AWS CERTIFIED MACHINE LEARNING - SPECIALTY",
      year: "2021",
      organization: "Amazon Web Services"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[96px] text-[#f8f7f9] mb-12">
          Certifications
        </h2>
        
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div key={index} className="max-w-4xl relative">
              <div className="pl-8 relative">
                <div className="absolute left-[-9px] top-[12px] w-[15px] h-[15px] bg-white/80 rounded-full backdrop-blur-sm" 
                     style={{ filter: 'blur(0.5px)' }} />
                <h3 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-1">
                  {cert.title}
                </h3>
                <p className="font-['Poppins:ExtraLight',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-2">
                  {cert.year}
                </p>
                <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
                  {cert.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactsSection() {
  return (
    <section id="contacts" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[96px] text-[#f8f7f9] mb-12">
          Contacts
        </h2>
        
        <div className="space-y-4 max-w-4xl">
          <div>
            <span className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              Email - 
            </span>
            <span className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              bran.kop@aihq.sh
            </span>
          </div>
          <div>
            <span className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              LinkedIn - 
            </span>
            <span className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              linkedin.com/in/kopbran
            </span>
          </div>
          <div>
            <span className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              GitHub - 
            </span>
            <span className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
              github.com/bkoprivica
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-[#1f1f1f] min-h-screen text-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactsSection />
      </main>
    </div>
  );
}
