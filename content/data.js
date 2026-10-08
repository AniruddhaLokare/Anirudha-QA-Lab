window.PORTFOLIO_DATA = {
  profile: {
    name: "ANIRUDDHA LOKARE",
    role: "QA AUTOMATION ENGINEER",
    tagline: "Building reliable automation from UI to API to CI/CD.",
    intro: "QA Automation Engineer with 5 years of hands-on experience across enterprise banking and telecom applications, focused on scalable automation, early defect detection and reliable release validation.",
    availability: "OPEN TO QA AUTOMATION OPPORTUNITIES",
    location: "Pune, India",
    yearsExperience: "5+",
    email: "lokareanirudha@gmail.com",
    linkedin: "https://www.linkedin.com/in/aniruddhalokare/",
    github: "https://github.com/AniruddhaLokare",
    resume: "Aniruddha_Lokare_Resume.pdf"
  },

  heroSkills: ["PLAYWRIGHT + TYPESCRIPT", "SELENIUM + JAVA", "API AUTOMATION", "CI/CD"],

  skills: {
    "Automation Tools": ["Playwright (TS/JS)", "Selenium (Java)", "HP-UFT (VBScript)"],
    "Frameworks": ["Page Object Model", "BDD", "Cucumber", "Data-Driven Testing"],
    "Languages": ["TypeScript", "JavaScript", "Java", "VBScript", "Shell Scripting", "SQL"],
    "CI/CD & DevOps": ["Jenkins", "Azure DevOps Pipelines", "GitHub Actions", "Git"],
    "Test Management": ["Azure Test Plans", "JIRA", "HP ALM"],
    "Reporting & Tools": ["Allure Reports", "Control-M", "VS Code", "UNIX Commands"]
  },

  stats: [
    { value: "5+", label: "Years QA Automation" },
    { value: "115+", label: "Automated Test Cases" },
    { value: "100+", label: "UFT / VBScript Tests" },
    { value: "30%", label: "Lower Framework Maintenance" }
  ],

  achievements: [
    "Architected a Playwright + TypeScript POM framework from scratch across 3+ modules, reducing script maintenance by approximately 30%.",
    "Delivered 115+ automated test cases across Shell, Java-Selenium and end-to-end automation.",
    "Built API test scripts using Postman and Playwright API automation to extend coverage beyond the UI.",
    "Integrated automated suites with Jenkins and Azure DevOps for continuous validation and faster defect detection.",
    "Configured Allure Reports and Azure Test Plans for test-health and sprint-quality visibility.",
    "Developed 100+ HP-UFT/VBScript tests while consistently delivering 3+ new automated cases per sprint."
  ],

  experience: [
    {
      role: "Automation Test Engineer",
      company: "Accenture",
      period: "Jan 2023 – Present",
      domain: "Banking / Enterprise Applications",
      tools: ["Playwright", "TypeScript", "Selenium", "Java", "Azure DevOps", "Jenkins", "Git"],
      highlights: [
        "Designed Playwright + TypeScript automation using a maintainable Page Object Model framework.",
        "Built and maintained 25+ end-to-end Playwright cases and 50+ Java-Selenium regression scripts.",
        "Integrated automated execution with Jenkins, GitHub Actions and Azure DevOps pipelines.",
        "Created Azure Test Plans and automated test runs aligned with Agile sprint delivery.",
        "Developed 40+ Shell-script test cases for backend validation and configured Allure reporting.",
        "Performed SQL database validation and Playwright API automation for endpoints, response codes and data integrity.",
        "Configured Control-M schedules for automated report-generation and validation workflows."
      ]
    },
    {
      role: "Automation Test Engineer",
      company: "Accenture",
      period: "Aug 2021 – Dec 2022",
      domain: "Telecom Services",
      tools: ["HP-UFT", "VBScript", "Jenkins", "ALM", "Cucumber"],
      highlights: [
        "Developed, maintained and executed 100+ HP-UFT/VBScript automated tests across multiple sprints.",
        "Performed Regression, PLT, Unit and End-to-End testing.",
        "Created reusable VBScript functions and libraries to reduce duplication and improve execution control.",
        "Managed Cucumber/BDD test data through Excel and CSV for data-driven workflows.",
        "Used ALM for defect tracking and Jenkins for unattended overnight automation execution.",
        "Collaborated with developers throughout Agile ceremonies to resolve blockers and support sprint delivery."
      ]
    }
  ],

  // Edit, add, or remove case studies here. Each step has a label and description.
  caseStudies: [
  {
   title:'Playwright + TypeScript POM Framework',sub:'Enterprise banking / application automation',
   intro:'A maintainable automation foundation created from scratch across 3+ modules.',
   steps:[
    ['CHALLENGE','Scale UI automation across multiple modules without creating difficult-to-maintain scripts.'],
    ['APPROACH','Use reusable Playwright + TypeScript automation with a Page Object Model structure.'],
    ['ARCHITECTURE','Separate page behavior and test flow so common actions can be reused across scenarios.'],
    ['VALIDATION','Build end-to-end checks while extending validation through API and database testing where required.'],
    ['CI/CD','Integrate execution with Jenkins, Azure DevOps and GitHub Actions for continuous validation.'],
    ['IMPACT','Reduced script-maintenance effort by approximately 30% across the framework.']
   ],impact:['3+ modules','Playwright + TypeScript','POM','~30% lower maintenance']
  },
  {
   title:'Enterprise Regression Automation',sub:'UI regression and end-to-end validation',
   intro:'A combined Playwright and Selenium automation approach supporting repeatable release validation.',
   steps:[
    ['CHALLENGE','Provide dependable regression coverage across enterprise application workflows.'],
    ['APPROACH','Automate critical end-to-end and regression scenarios using the right UI automation stack.'],
    ['AUTOMATION','Maintain 25+ Playwright E2E cases alongside 50+ Java-Selenium regression scripts.'],
    ['QUALITY','Align automated runs with sprint testing and release-validation activities.'],
    ['CI/CD','Execute suites through Jenkins / pipeline workflows and publish test-health information.'],
    ['IMPACT','Delivered broad reusable UI automation coverage with faster repeatable validation.']
   ],impact:['25+ Playwright E2E','50+ Selenium scripts','Jenkins','Allure']
  },
  {
   title:'API, SQL & Backend Quality Validation',sub:'Beyond-the-UI quality engineering',
   intro:'Extended automated validation into services, databases and backend operational workflows.',
   steps:[
    ['CHALLENGE','UI checks alone cannot verify service responses, stored data and backend processing.'],
    ['APPROACH','Combine Playwright API automation, Postman, SQL and Shell-based validation.'],
    ['API','Validate endpoints, response codes and expected service behavior.'],
    ['DATA','Use SQL checks to verify database values and data integrity behind application flows.'],
    ['BACKEND','Use Shell automation and Control-M scheduled workflows for backend/report validation.'],
    ['IMPACT','Expanded automated quality coverage beyond browser-level testing.']
   ],impact:['Playwright API','Postman','SQL','40+ Shell tests']
  },
  {
   title:'Telecom UFT Automation Suite',sub:'Enterprise telecom regression automation',
   intro:'A reusable UFT/VBScript suite supporting regression, E2E and unattended execution.',
   steps:[
    ['CHALLENGE','Maintain repeatable automation across multiple telecom workflows and sprint releases.'],
    ['APPROACH','Build reusable HP-UFT/VBScript tests, functions and libraries.'],
    ['DATA','Drive Cucumber/BDD scenarios using external Excel and CSV test data.'],
    ['DEFECTS','Track and collaborate on identified defects using ALM and Agile workflows.'],
    ['CI/CD','Use Jenkins for unattended / overnight automated execution.'],
    ['IMPACT','Developed and maintained 100+ UFT tests while delivering 3+ new automated cases per sprint.']
   ],impact:['100+ UFT tests','3+ cases / sprint','VBScript','Jenkins + ALM']
  }
 ],

  projects: [
    {
      title: "Playwright POM Automation Framework",
      stack: ["Playwright", "TypeScript", "POM", "Azure DevOps"],
      description: "Scalable automation framework created from scratch across 3+ modules with reusable page objects and CI/CD execution.",
      result: "~30% reduction in script-maintenance effort."
    },
    {
      title: "Enterprise Regression Automation",
      stack: ["Selenium", "Java", "Playwright", "Jenkins"],
      description: "Combined UI regression coverage using Playwright end-to-end tests and Java-Selenium regression suites.",
      result: "25+ Playwright E2E cases and 50+ Java-Selenium regression scripts."
    },
    {
      title: "Backend & API Quality Validation",
      stack: ["Playwright API", "Postman", "SQL", "Shell"],
      description: "API, database and backend validation covering endpoints, response codes, data integrity and operational workflows.",
      result: "Expanded automated coverage beyond UI testing."
    },
    {
      title: "Telecom UFT Automation Suite",
      stack: ["HP-UFT", "VBScript", "Cucumber", "ALM", "Jenkins"],
      description: "Reusable automated regression suite supporting data-driven testing and unattended execution.",
      result: "100+ UFT tests with 3+ new automated cases delivered per sprint."
    }
  ],

  education: [
    { qualification: "Bachelor of Information Technology", year: "2021", institute: "DKTE Society's Textile & Engineering Institute, Ichalkaranji", result: "CGPA 7.9" },
    { qualification: "Diploma in Computer Science", year: "2018", institute: "Sharad Institute of Technology Polytechnic, Yadrav", result: "80%" }
  ],

  framework: ["TEST SCENARIOS", "PAGE OBJECT MODEL", "PLAYWRIGHT / SELENIUM", "API + SQL VALIDATION", "TEST DATA", "CI/CD PIPELINE", "ALLURE REPORT"],
  pipeline: ["GIT PUSH","BUILD","UI TESTS","API TESTS","REGRESSION","ALLURE REPORT","PASS"],
  bugLifecycle: ["FOUND","ANALYZE","REPRODUCE","LOG","FIX","RETEST","REGRESSION","CLOSED"],
  portfolioTests: ["Portfolio loads","Navigation works","Skills render","Projects render","Resume link available","Contact links available"]
};
