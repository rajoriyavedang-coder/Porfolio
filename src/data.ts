import { EducationItem, SkillCategory, Project, Certification, LeadershipItem } from './types';

export const personalInfo = {
  name: 'Rakhi Tiwari',
  title: 'Python Developer • Machine Learning Enthusiast • Networking Enthusiast',
  description: 'I have hands-on experience working on machine learning and AI-driven projects through academic and personal initiatives. With a strong interest in Python development, artificial intelligence, and computer networking, I enjoy applying technical knowledge to solve real-world challenges while continuously enhancing my skills through practical experience.',
  aspiration: 'To contribute to scalable and impactful technology solutions while continuously advancing my expertise in Python development, machine learning, and computer networking.',
  email: '9370rakhi@gmail.com',
  phone: '+91-9303979370',
  location: 'Indore, Madhya Pradesh, India',
  github: 'https://github.com/rakhiT19',
  linkedin: 'https://linkedin.com/in/rakhi-tiwari-aaa302319',
  resumeUrl: '#', // Handled via interactive modal or direct simulated download in UI
};

export const education: EducationItem = {
  institution: 'Medi-Caps University, Indore',
  degree: 'Bachelor of Technology in Computer Science Engineering',
  expectedGraduation: 'Expected Graduation: June 2027',
  cgpa: '7.2',
  relevantCoursework: [
    'Algorithms',
    'Data Structures',
    'Machine Learning',
    'DBMS',
    'Computer Networks',
    'Operating Systems'
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'C++', level: 'Intermediate' },
      { name: 'SQL', level: 'Intermediate' }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    icon: 'Library',
    skills: [
      { name: 'React.js', level: 'Intermediate' },
      { name: 'FastAPI', level: 'Advanced' },
      { name: 'NumPy', level: 'Advanced' },
      { name: 'Pandas', level: 'Advanced' },
      { name: 'Matplotlib', level: 'Advanced' },
      { name: 'Scikit-learn', level: 'Advanced' }
    ]
  },
  {
    title: 'Machine Learning',
    icon: 'BrainCircuit',
    skills: [
      { name: 'Logistic Regression' },
      { name: 'XGBoost' },
      { name: 'NLP' },
      { name: 'Automated Report Generation' }
    ]
  },
  {
    title: 'Networking',
    icon: 'Network',
    skills: [
      { name: 'TCP/IP' },
      { name: 'DHCP' },
      { name: 'VLANs' },
      { name: 'Routing Protocols' }
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: 'Wrench',
    skills: [
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Google Colab' },
      { name: 'Cisco Packet Tracer' }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'legal-judgment-prediction',
    title: 'Legal Judgment Prediction System',
    description: 'A machine learning system designed to predict consumer case outcomes within the Indian legal system using advanced Natural Language Processing. Integrates multiple models inside an ensemble prediction flow.',
    category: 'ml',
    techStack: ['Python', 'FastAPI', 'NumPy', 'Pandas', 'Scikit-learn', 'NLP', 'LSTM', 'XGBoost'],
    achievements: [
      'Built custom preprocessing and feature engineering pipelines for Indian Consumer Court draft judgments',
      'Configured TF-IDF Vectorization & custom word embedding workflows',
      'Engineered a neural pipeline utilizing Bidirectional LSTM combined with classical classifiers (Logistic Regression, Naive Bayes, XGBoost)',
      'Constructed an ensemble prediction pipeline delivering automated summary draft layout reports',
      'Deployed back-end services with FastAPI and automated system telemetry reports'
    ],
    results: {
      accuracy: '87.5%',
      f1Score: '0.84 Macro',
      featuresCount: 'NyayaAnumana Dataset'
    },
    githubUrl: 'https://github.com/rakhiT19/legal-judgment-predictor',
    steps: [
      {
        title: 'Preprocessing & Feature Engineering',
        description: 'Custom text cleaning, tokenization, and dynamic word embeddings trained directly on custom Indian Consumer Court drafts.'
      },
      {
        title: 'Ensemble Neural Network Pipeline',
        description: 'Blends Bidirectional LSTM networks for context captures with classical models (XGBoost, Logistic Regression) for enhanced robust classification.'
      },
      {
        title: 'API Automation & Metrics Telemetry',
        description: 'Integrated backend inference pipelines with FastAPI to deliver lightning-fast response times and continuous metrics tracking.'
      }
    ]
  },
  {
    id: 'civicops',
    title: 'CiviCops – Crowdsourced Civic Issue Reporter',
    description: 'A comprehensive full-stack civic-tech platform empowering citizens to log geo-tagged local municipal issues with intelligent OCR classification, automated routing, and dynamic resolution tracking.',
    category: 'dev',
    techStack: ['React', 'MongoDB', 'Firebase', 'Google Maps API'],
    achievements: [
      'Developed mobile client with React Native supporting camera integration and offline-first geo-tag logging',
      'Engineered an OCR system for intelligent municipal text identification and categorization',
      'Implemented automated ticket routing protocols dynamically assigning reports to local municipal offices',
      'Created interactive tracking dashboards with live incident maps utilizing Google Maps SDK',
      'Provided secure user management using Firebase Authentication'
    ],
    results: {
      accuracy: 'AI-Sorted',
      f1Score: 'OCR-Categorized',
      featuresCount: 'Real-time Routing'
    },
    
    demoUrl: 'https://surl.li/nplagx ',
    
    features: [
      {
        title: 'Offline-First Geo-Tag Logging',
        description: 'Responsive mobile interface supporting offline cameras logging with precise dynamic coordinate tags.'
      },
      {
        title: 'Automated OCR Ticket Classification',
        description: 'State of the art OCR parsing matching document labels to departments for immediate and accurate civic dispatch.'
      },
      {
        title: 'Live Geospatial Tracking Dashboards',
        description: 'Fully responsive dynamic map layouts built with Google Maps API showcasing logged reports and resolution timelines.'
      }
    ]
  }
];

export const certifications: Certification[] = [
  {
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    certificateUrl: 'https://www.credly.com/org/cisco/badge/introduction-to-networks',
    badgeUrl: 'https://images.credly.com/size/110x110/images/6df10cb5-c0cb-4654-8e10-914949ad5491/itn.png',
    date: '2025'
  },
  {
    name: 'CCNA: Switching, Routing & Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    certificateUrl: 'https://www.credly.com/org/cisco/badge/switching-routing-and-wireless-essentials',
    badgeUrl: 'https://images.credly.com/size/110x110/images/ab536f98-b80c-4860-adb5-39775db27068/srwe.png',
    date: '2025'
  },
  {
    name: 'CCNA: Enterprise Networking, Security and Automation',
    issuer: 'Cisco Networking Academy',
    certificateUrl: 'https://www.credly.com/earner/earned/badge/8d614a11-f408-4e99-98a5-7b1ea75a119f',
    badgeUrl: 'https://images.credly.com/size/110x110/images/c2554694-dfc5-43fb-98e3-53531fb55977/ensa.png',
    date: '2026'
  },
  {
    name: 'Apply AI: Analyze Customer Reviews',
    issuer: 'Google Cloud Training',
    certificateUrl: 'https://www.credly.com/earner/earned/badge/d177f7b0-1e00-4ffc-9542-a25469eaa5ee',
    badgeUrl: 'https://images.credly.com/size/110x110/images/3f191b40-2b15-4ba8-bbec-9d9e45debcfe/google-cloud-badge.png', // Fallback cloud badge icon
    date: '2025'
  },
  {
    name: 'Introduction to Data Science',
    issuer: 'Google Cloud Training',
    certificateUrl: 'https://www.credly.com/earner/earned/badge/d177f7b0-1e00-4ffc-9542-a25469eaa5ee',
    badgeUrl: 'https://images.credly.com/size/110x110/images/3f191b40-2b15-4ba8-bbec-9d9e45debcfe/google-cloud-badge.png', // Fallback cloud badge icon
    date: '2025'
  },
  {
    name: 'Introduction to Modern AI',
    issuer: 'Google Cloud Training',
    certificateUrl: 'https://www.credly.com/earner/earned/badge/d177f7b0-1e00-4ffc-9542-a25469eaa5ee',
    badgeUrl: 'https://images.credly.com/size/110x110/images/3f191b40-2b15-4ba8-bbec-9d9e45debcfe/google-cloud-badge.png', // Fallback cloud badge icon
    date: '2025'
  },
  {
    name: 'Python Essentials 1 & 2',
    issuer: 'Cisco Networking Academy & OpenEDG Python Institute',
    certificateUrl: 'https://www.credly.com/earner/earned/badge/27e32710-4b8a-4a52-9589-759a70f782c1',
    badgeUrl: 'https://images.credly.com/size/110x110/images/1ef3a1b0-73f1-4dbd-8b06-9721759ac58e/pcep-30-01-pcep-certified-entry-level-python-programmer.png',
    date: '2025'
  }
];

export const leadership: LeadershipItem[] = [
  {
    id: 'medicaps-media-club',
    role: 'Executive Member',
    organization: 'Medicaps Media Club',
    duration: '2024–2025',
    activities: [
      'Videography: Captured and structured digital stories, footage, and campus event visual recordings.',
      'Photography: Documented high-profile technical fests, dynamic networking clubs, and guest speaker events.'
    ]
  },
  {
    id: 'e-cell',
    role: 'Executive Member',
    organization: 'Entrepreneurship Cell (E-Cell)',
    duration: '2024–2025',
    activities: [
      'Content Writing: Crafted clean promotional papers, LinkedIn posts, and engaging startup profiles for young innovators.',
      'Event Participation: Contributed in organizing brainstorming chambers, shark-tank simulation rings, and hackathons.'
    ]
  }
];
