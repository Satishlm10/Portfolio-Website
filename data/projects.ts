export const projects = [
  {
    id: 1,
    title: "TechBrain.ai WebApp Testing",
    description:
      "A learning platform developed by Chulo Solutions. TechBrain ai contains course, login form, quizes, and many other features which were tested to verify and validate proper functioning of the application.",
    image: "/techbrain.PNG?height=400&width=600",
    technologies: ["Python","Selenium","Automation"],
    liveUrl: "https://techbrain.ai/",
    githubUrl: "https://github.com/Satishlm10/QA_Intern_Automation_Script",
    featured: true,
  },
  {
    id: 2,
    title: "EmployeeMs WebApp Testing",
    description:
      "A Employee Leave Management developed by Chulo Solutions. Tested, verified and validated the functions of the system.",
    image: "/employeems.PNG?height=400&width=600",
    technologies: ["Python","Selenium","Automation"],
    liveUrl: "https://namespace-team.github.io/ems-web/login",
    githubUrl: "https://github.com/Satishlm10/QA_Intern_Automation_Script",
    featured: true,
  },
  {
    id: 3,
    title: "Api Demos",
    description:
      "Demo android application with various functionalities. Menu, Dropmenu, Buttons, Radio Buttons, Checkboxes, Gestures, Animations and many more.",
    image: "/apidemos.png?height=400&width=600",
    technologies: ["JavaScript","MochaJs","Appium","Automation"],
    githubUrl: "https://github.com/Satishlm10/Appium-Testing",
    featured: false,
  },
  {
    id: 4,
    title: "MYDEMOAPP",
    description:
      "Demo android application developed by SauceLabs with various functionalities. Login, Gesture, Biometric, QR Scanner, Product Catalog, Checkout Forms and many more",
    image: "/mydemoapp.png?height=400&width=600",
    technologies: ["JavaScript","MochaJs","Appium","Automation"],
    githubUrl: "https://github.com/Satishlm10/MyDemoApp_AppiumTesting",
    featured: true,
  },
  {
    id: 5,
    title: "Trello Api Testing",
    description:
      "Trello Api testing, creating boards, cards, lists and labels.",
    image: "/trello.png?height=400&width=600",
    technologies: ["JavaScript","Postman","Automation"],
    githubUrl: "https://github.com/Satishlm10/Trello-Api---Postman-Api-Testing",
    featured: true,
  },
  
]

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured)
}

