export type Locale = 'pt' | 'en';

const translations = {
  pt: {
    navbar: {
      items: [
        { label: 'Sobre', href: '#about' },
        { label: 'Habilidades', href: '#skills' },
        { label: 'Experiência', href: '#experience' },
        { label: 'Formação', href: '#education' },
        { label: 'Projetos', href: '#projects' },
        { label: 'Contato', href: '#contact' },
      ],
      langToggle: 'EN',
    },
    hero: {
      locationBadge: 'Rio de Janeiro, Brasil',
      roleBadge: 'Software Engineer',
      subtitle: 'Software Engineer & Especialista em Backend',
      description:
        'Engenheiro de Software na PGE-RJ, especializado em backend de alta performance e na construção de sistemas confiáveis, observáveis e escaláveis com IA.',
      highlights: [
        'Engenharia de backend para produção real',
        'Operacionalização de IA com foco em escala',
        'Arquiteturas robustas com Go, Python e TypeScript',
        'Especialista em sistemas backend de alta performance',
      ],
      stats: [
        { value: '3+', label: 'Anos de Experiência' },
        { value: '24/7', label: 'Foco em Performance' },
        { value: 'Brasil', label: 'Rio de Janeiro' },
      ],
      available: 'Disponível para oportunidades',
      btnProjects: 'Ver Projetos',
      btnContact: 'Fale comigo',
    },
    about: {
      title: 'Sobre Mim',
      description:
        'Engenheiro de Software com foco em backend de alta performance e na criação de sistemas com IA. Atualmente na PGE-RJ, conectando Engenharia de Software sólida com o poder da Inteligência Artificial moderna.',
      features: [
        {
          title: 'Backend & Engenharia de Software',
          description:
            'Arquitetura de sistemas backend robustos e escaláveis com Go, Python e Node.js, com foco em mantenabilidade, observabilidade e alta qualidade de engenharia.',
        },
        {
          title: 'Operações de IA',
          description:
            'Especialista em operacionalizar Inteligência Artificial — transformando modelos experimentais em produtos de software confiáveis e prontos para produção.',
        },
        {
          title: 'Performance & Escalabilidade',
          description:
            'Implementação de serviços de alta performance com Go, Python e Node.js, garantindo eficiência sob carga real.',
        },
        {
          title: 'Impacto no Negócio',
          description:
            'Comprometido com a entrega de soluções que geram valor real, com foco em resultados mensurados e alinhamento estratégico.',
        },
        {
          title: 'Colaboração & Liderança Técnica',
          description:
            'Experiência em equipes multidisciplinares, mentoria técnica, revisão de código e disseminação de boas práticas de engenharia.',
        },
        {
          title: 'Aprendizado Contínuo',
          description:
            'Estudante na USP (Engenharia de Software) e certificado pela University of Michigan, sempre evoluindo com as melhores práticas do mercado.',
        },
      ],
    },
    skills: {
      title: 'Habilidades & Tecnologias',
      description: 'Stack técnico orientado a sistemas de backend, IA e infraestrutura em nuvem',
      categories: [
        {
          title: 'Backend & Sistemas',
          skills: ['Go (Golang)', 'Python', 'Node.js', 'TypeScript', 'JavaScript', 'REST APIs', 'Express.js', 'GraphQL'],
        },
        {
          title: 'Frontend',
          skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3', 'Framer Motion', 'Three.js', 'Responsive Design', 'Bootstrap CSS'],
        },
        {
          title: 'IA & Dados',
          skills: ['TensorFlow', 'Pandas', 'Operações de IA', 'Machine Learning', 'Pipelines de Dados', 'Análise de Dados'],
        },
        {
          title: 'DevOps & Infraestrutura',
          skills: ['Docker', 'Linux', 'AWS', 'GCP', 'CI/CD', 'Git', 'GitHub', 'Postman'],
        },
        {
          title: 'Banco de Dados',
          skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
        },
        {
          title: 'Soft Skills',
          skills: ['Liderança Técnica', 'Comunicação', 'Resolução de Problemas', 'Pensamento Crítico', 'Trabalho em Equipe', 'Gestão de Projetos'],
        },
      ],
    },
    experience: {
      title: 'Experiência Profissional',
      description: 'Do setor público à indústria de tecnologia, construindo sistemas reais',
      items: [
        {
          title: 'Engenheiro de Software',
          company: 'PGE-RJ — Procuradoria-Geral do Estado do Rio de Janeiro',
          period: '2024 — Presente',
          description:
            'Atuação na ponte entre Engenharia de Software tradicional e Inteligência Artificial moderna. Responsável por operacionalizar modelos de IA, transformando soluções experimentais em sistemas de produção confiáveis, escaláveis e de alta performance.',
          achievements: [
            'Operacionalização de modelos de IA em ambiente de produção estatal',
            'Desenvolvimento de serviços backend de alta performance com Go e Python',
            'Implementação de pipelines de dados e integração com infraestrutura cloud (AWS/GCP)',
            'Containerização e orquestração de serviços com Docker e Linux',
            'Arquitetura de sistemas escaláveis orientados a domínio',
          ],
        },
        {
          title: 'Engenheiro de Software',
          company: 'LogicAI Solutions',
          period: '2023 — 2024',
          description:
            'Desenvolvimento de produtos de software completos, desde sistemas de gerenciamento educacional até plataformas web institucionais. Liderança técnica em projetos de ponta a ponta com TypeScript, React e Node.js.',
          achievements: [
            'Desenvolvimento do TeacherApp — plataforma de gerenciamento de estudantes',
            'Criação do site institucional da LogicAI Solutions com TypeScript',
            'Implementação de arquiteturas REST e integração com banco de dados relacional',
            'Contribuição com mais de 93% dos commits no repositório principal do produto',
            'Aplicação de metodologias ágeis com Scrum e Kanban',
          ],
        },
      ],
    },
    education: {
      title: 'Formação & Certificações',
      description: 'Formação acadêmica sólida e certificações internacionais',
      certificationsLabel: 'Certificações',
      items: [
        {
          degree: 'Engenharia de Software',
          institution: 'Universidade de São Paulo (USP)',
          period: '2024 — Em andamento',
          description:
            'Graduação com ênfase em arquitetura de sistemas, engenharia de software avançada, inteligência artificial e metodologias de desenvolvimento de software em larga escala.',
          highlights: [
            'Arquitetura e Design de Sistemas',
            'Engenharia de Software Avançada',
            'Inteligência Artificial & Aprendizado de Máquina',
            'Banco de Dados e Modelagem',
            'Metodologias Ágeis (Scrum, Kanban)',
          ],
        },
      ],
      certifications: [
        { title: 'University of Michigan — Certified', institution: 'Coursera / University of Michigan', year: '2024' },
        { title: 'React — The Complete Guide', institution: 'Udemy', year: '2023' },
        { title: 'Node.js: Desenvolvedor Backend', institution: 'Udemy', year: '2023' },
      ],
    },
    projects: {
      title: 'Projetos em Destaque',
      description: 'Projetos reais de código aberto que desenvolvi',
      codeLabel: 'Código',
      demoLabel: 'Demo',
      items: [
        {
          title: 'Luna-Chat',
          description: 'Chatbot criado em memória de Luna, minha melhor amiga. Construído com Python, demonstrando técnicas de NLP e integração com modelos de IA conversacional.',
          tags: ['Python', 'IA', 'NLP', 'Chatbot'],
          github: 'https://github.com/FelippeTN/Luna-Chat',
          demo: '',
        },
        {
          title: 'LogicAI Solutions Website',
          description: 'Site institucional da LogicAI Solutions. Desenvolvido com TypeScript e React, design moderno e responsivo.',
          tags: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
          github: 'https://github.com/FelippeTN/LogicAI-Solutions-Website',
          demo: 'https://github.com/FelippeTN/LogicAI-Solutions-Website',
        },
        {
          title: 'TeacherApp',
          description: 'Plataforma completa de gerenciamento de estudantes para educadores. Controle de turmas, notas, frequência e comunicação.',
          tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
          github: 'https://github.com/FelippeTN/TeacherApp',
          demo: '',
        },
        {
          title: 'Aggregare School',
          description: 'Sistema de gestão escolar completo com módulos para administração de alunos, professores, disciplinas e relatórios.',
          tags: ['TypeScript', 'React', 'REST API', 'PostgreSQL'],
          github: 'https://github.com/FelippeTN/Aggregare-school',
          demo: '',
        },
        {
          title: 'Dev Portfolio 3D',
          description: 'Este portfólio — construído com React, Three.js e Framer Motion. Campo estelar 3D interativo e animações fluidas.',
          tags: ['React', 'Three.js', 'Framer Motion', 'TypeScript'],
          github: 'https://github.com/FelippeTN/FelippeTN-Dev-Portfolio',
          demo: '',
        },
        {
          title: 'myteacher',
          description: 'Plataforma educacional para a LogicAI Solutions, com gestão de alunos, conteúdos e acompanhamento de progresso.',
          tags: ['TypeScript', 'React', 'Node.js', 'API REST'],
          github: 'https://github.com/LogicAI-Solutions/myteacher',
          demo: '',
        },
      ],
    },
    contact: {
      title: 'Vamos Conversar?',
      description:
        'Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto desafiador ou uma posição que faça sentido, entre em contato.',
      btnWhatsapp: 'Chamar no WhatsApp',
      footer: 'Feito com',
      footerStack: 'React, Three.js & Framer Motion',
    },
  },

  // ─────────────────────────── ENGLISH ───────────────────────────
  en: {
    navbar: {
      items: [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'Education', href: '#education' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ],
      langToggle: 'PT',
    },
    hero: {
      locationBadge: 'Rio de Janeiro, Brazil',
      roleBadge: 'Software Engineer',
      subtitle: 'Software Engineer & Backend Specialist',
      description:
        'Software Engineer at PGE-RJ, specialized in high-performance backend systems and building reliable, observable, and scalable production systems with AI.',
      highlights: [
        'Backend engineering for real-world production',
        'AI operationalization focused on scale',
        'Robust architectures with Go, Python & TypeScript',
        'Specialist in high-performance backend systems',
      ],
      stats: [
        { value: '3+', label: 'Years of Experience' },
        { value: '24/7', label: 'Performance Focus' },
        { value: 'BR', label: 'Rio de Janeiro' },
      ],
      available: 'Available for opportunities',
      btnProjects: 'View Projects',
      btnContact: 'Get in Touch',
    },
    about: {
      title: 'About Me',
      description:
        'Software Engineer focused on high-performance backend systems and building production-grade systems with AI. Currently at PGE-RJ, combining solid Software Engineering with the power of modern Artificial Intelligence.',
      features: [
        {
          title: 'Backend & Software Engineering',
          description:
            'Architecture of robust and scalable backend production systems with Go, Python and Node.js, focusing on maintainability, observability and high-quality engineering.',
        },
        {
          title: 'AI Operations',
          description:
            'Specialist in operationalizing AI — turning experimental models into reliable, production-ready software products.',
        },
        {
          title: 'Performance & Scalability',
          description:
            'High-performance services with Go, Python and Node.js, ensuring efficiency under real-world load.',
        },
        {
          title: 'Business Impact',
          description:
            'Committed to delivering solutions that generate real value, with measured results and strategic alignment.',
        },
        {
          title: 'Collaboration & Technical Leadership',
          description:
            'Experience in multidisciplinary teams, technical mentorship, code review and dissemination of engineering best practices.',
        },
        {
          title: 'Continuous Learning',
          description:
            'Computer Science student at USP and certified by the University of Michigan, always evolving with the best market practices.',
        },
      ],
    },
    skills: {
      title: 'Skills & Technologies',
      description: 'Technical stack focused on backend systems, AI and cloud infrastructure',
      categories: [
        {
          title: 'Backend & Systems',
          skills: ['Go (Golang)', 'Python', 'Node.js', 'TypeScript', 'JavaScript', 'REST APIs', 'Express.js', 'GraphQL'],
        },
        {
          title: 'Frontend',
          skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3', 'Framer Motion', 'Three.js', 'Responsive Design', 'Bootstrap CSS'],
        },
        {
          title: 'AI & Data',
          skills: ['TensorFlow', 'Pandas', 'AI Operations', 'Machine Learning', 'Data Pipelines', 'Data Analysis'],
        },
        {
          title: 'DevOps & Infrastructure',
          skills: ['Docker', 'Linux', 'AWS', 'GCP', 'CI/CD', 'Git', 'GitHub', 'Postman'],
        },
        {
          title: 'Databases',
          skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
        },
        {
          title: 'Soft Skills',
          skills: ['Technical Leadership', 'Communication', 'Problem Solving', 'Critical Thinking', 'Teamwork', 'Project Management'],
        },
      ],
    },
    experience: {
      title: 'Professional Experience',
      description: 'From the public sector to the tech industry, building real systems',
      items: [
        {
          title: 'Software Engineer',
          company: 'PGE-RJ — Attorney General of the State of Rio de Janeiro',
          period: '2024 — Present',
          description:
            'Acting at the intersection of traditional Software Engineering and modern Artificial Intelligence. Responsible for operationalizing AI models, turning experimental solutions into reliable, scalable and high-performance production systems.',
          achievements: [
            'Operationalization of AI models in a state production environment',
            'Development of high-performance backend services with Go and Python',
            'Data pipeline implementation and integration with cloud infrastructure (AWS/GCP)',
            'Containerization and service orchestration with Docker and Linux',
            'Architecture of scalable domain-driven systems',
          ],
        },
        {
          title: 'Software Engineer',
          company: 'LogicAI Solutions',
          period: '2023 — 2024',
          description:
            'Full-stack software product development, from educational management systems to institutional web platforms. Technical leadership in end-to-end projects using TypeScript, React and Node.js.',
          achievements: [
            'Development of TeacherApp — student management platform',
            'Creation of the LogicAI Solutions institutional website with TypeScript',
            'Implementation of REST architectures and relational database integration',
            'Contributed more than 93% of commits to the main product repository',
            'Application of agile methodologies with Scrum and Kanban',
          ],
        },
      ],
    },
    education: {
      title: 'Education & Certifications',
      description: 'Solid academic background and international certifications',
      certificationsLabel: 'Certifications',
      items: [
        {
          degree: 'Software Engineering',
          institution: 'University of São Paulo (USP)',
          period: '2024 — In progress',
          description:
            'Undergraduate program with emphasis on systems architecture, advanced software engineering, artificial intelligence, and large-scale software development methodologies.',
          highlights: [
            'Systems Architecture & Design',
            'Advanced Software Engineering',
            'Artificial Intelligence & Machine Learning',
            'Databases & Modeling',
            'Agile Methodologies (Scrum, Kanban)',
          ],
        },
      ],
      certifications: [
        { title: 'University of Michigan — Certified', institution: 'Coursera / University of Michigan', year: '2024' },
        { title: 'React — The Complete Guide', institution: 'Udemy', year: '2023' },
        { title: 'Node.js: Backend Developer', institution: 'Udemy', year: '2023' },
      ],
    },
    projects: {
      title: 'Featured Projects',
      description: 'Real open-source projects I have built',
      codeLabel: 'Code',
      demoLabel: 'Demo',
      items: [
        {
          title: 'Luna-Chat',
          description:
            'Chatbot created in memory of Luna, my best friend. Built with Python, showcasing NLP techniques and integration with conversational AI models.',
          tags: ['Python', 'AI', 'NLP', 'Chatbot'],
          github: 'https://github.com/FelippeTN/Luna-Chat',
          demo: '',
        },
        {
          title: 'LogicAI Solutions Website',
          description: 'Institutional website for LogicAI Solutions. Developed with TypeScript and React, modern and responsive design.',
          tags: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
          github: 'https://github.com/FelippeTN/LogicAI-Solutions-Website',
          demo: 'https://github.com/FelippeTN/LogicAI-Solutions-Website',
        },
        {
          title: 'TeacherApp',
          description:
            'Complete student management platform for educators. Class, grade, attendance and communication management.',
          tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
          github: 'https://github.com/FelippeTN/TeacherApp',
          demo: '',
        },
        {
          title: 'Aggregare School',
          description:
            'Full school management system with modules for student, teacher, subject, and report administration.',
          tags: ['TypeScript', 'React', 'REST API', 'PostgreSQL'],
          github: 'https://github.com/FelippeTN/Aggregare-school',
          demo: '',
        },
        {
          title: 'Dev Portfolio 3D',
          description:
            'This portfolio — built with React, Three.js and Framer Motion. Interactive 3D star field and fluid animations.',
          tags: ['React', 'Three.js', 'Framer Motion', 'TypeScript'],
          github: 'https://github.com/FelippeTN/FelippeTN-Dev-Portfolio',
          demo: '',
        },
        {
          title: 'myteacher',
          description:
            'Educational platform for LogicAI Solutions, with student management, content and progress tracking.',
          tags: ['TypeScript', 'React', 'Node.js', 'REST API'],
          github: 'https://github.com/LogicAI-Solutions/myteacher',
          demo: '',
        },
      ],
    },
    contact: {
      title: "Let's Talk?",
      description:
        "I'm always open to new opportunities and collaborations. If you have a challenging project or a role that makes sense, reach out.",
      btnWhatsapp: 'Chat on WhatsApp',
      footer: 'Made with',
      footerStack: 'React, Three.js & Framer Motion',
    },
  },
} as const;

export default translations;
