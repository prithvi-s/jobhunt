export const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Seattle, WA",
    description: "We are looking for a skilled Frontend Developer with experience in React and modern CSS. You will be building responsive user interfaces for our core platform."
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataCloud Inc",
    location: "New York, NY",
    description: "Join our backend team to build scalable microservices using Node.js and PostgreSQL. Experience with cloud infrastructure is a plus."
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    company: "Startup Hub",
    location: "San Francisco, CA",
    description: "Exciting opportunity for a Full Stack Engineer to work on greenfield projects. You'll be working across the stack with React, Node, and MongoDB."
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "Remote",
    description: "We need a talented UI/UX Designer to help shape the user experience of our upcoming mobile applications. Figma expertise required."
  },
  {
    id: 5,
    title: "Product Manager",
    company: "FinTech Global",
    location: "London, UK",
    description: "Seeking an experienced Product Manager to lead the development of our new payment gateway. Agile experience is essential."
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "CloudScale",
    location: "Seattle, WA",
    description: "Looking for a DevOps Engineer to improve our CI/CD pipelines and manage our AWS infrastructure using Terraform."
  },
  {
    id: 7,
    title: "Data Scientist",
    company: "Analytics Pros",
    location: "Boston, MA",
    description: "Join us as a Data Scientist to build predictive models using Python, scikit-learn, and TensorFlow. A background in statistics is preferred."
  },
  {
    id: 8,
    title: "Software Engineer",
    company: "BigCorp",
    location: "Austin, TX",
    description: "Generalist Software Engineer needed to maintain legacy systems and help migrate them to a modern cloud-based architecture."
  },
  {
    id: 9,
    title: "Mobile Developer",
    company: "AppWorks",
    location: "Remote",
    description: "We are hiring a Mobile Developer with React Native experience to build cross-platform apps for our retail clients."
  },
  {
    id: 10,
    title: "Security Analyst",
    company: "SecureNet",
    location: "Washington, DC",
    description: "Seeking a Security Analyst to monitor our networks, perform vulnerability assessments, and respond to incidents."
  },
  {
    id: 11,
    title: "Marketing Specialist",
    company: "Growth Hacking LLC",
    location: "New York, NY",
    description: "Creative Marketing Specialist needed to drive our social media campaigns and manage SEO/SEM initiatives."
  },
  {
    id: 12,
    title: "Sales Representative",
    company: "SellItAll",
    location: "Chicago, IL",
    description: "Energetic Sales Representative to expand our client base in the Midwest region. Great communication skills are a must."
  },
  {
    id: 13,
    title: "Customer Support Lead",
    company: "HelpDesk Solutions",
    location: "Remote",
    description: "Looking for a Customer Support Lead to manage a team of remote agents and improve our ticket resolution metrics."
  },
  {
    id: 14,
    title: "HR Business Partner",
    company: "People First",
    location: "San Francisco, CA",
    description: "HR Business Partner needed to align our people strategy with business objectives and oversee talent acquisition."
  },
  {
    id: 15,
    title: "Financial Analyst",
    company: "Wealth Management Partners",
    location: "Boston, MA",
    description: "Analytical Financial Analyst to help with budgeting, forecasting, and creating financial models for our portfolio companies."
  }
];

export const uniqueLocations = [...new Set(mockJobs.map(job => job.location))].sort();
