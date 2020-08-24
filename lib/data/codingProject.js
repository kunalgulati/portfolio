/**
 * JSON object containing all coding Project Related Data 
 */
const projectData = [
  {
    title: "Hashtag Post API",
    year: "2020",
    links: {
      demoLink: "https://api-seven-gray.vercel.app/",
      githubLink: "https://github.com/kunalgulati/express-api.git",
      mediumLink: "https://medium.com/@kunalgulati98/concurrent-api-fetching-f1131c0a916b",
    },
    description: `•	Developed an interactive demo website using React and Next.js to visualize the result of API requests \n
    •	Created an API for fetching, combining, and sorting, blog posts associated to multiple input hashtags from a data source, with a constraint that each request to the data source can only fetch data associated to one hashtag \n
    •	Decreased API response time from 778ms to 246ms (average) by using concurrent data fetching for rederiving hashtags associated data from the data source \n
    •	Reduced the response time further to 126ms (average) by implementing caching using Etags and Redis \n
    •	Implemented functions as pure functions and wrote unit test cases for all of the functions and API routes \n`,
    techUtilized: ["react", "js"],
  },
  {
    title: "React WebApp ",
    year: "2020",
    links: {
      demoLink: null,
      githubLink: 'https://github.com/kunalgulati/react-web-app',
      mediumLink: null,
    },
    description: `•	Developed web application using React, Express.js, MongoDB, and GraphQL that allows users to browse and make a bulk purchase from curated inventory list farm produce
    •	Designed a server-side rendering app with Next.js, and Material-UI to have better SEO performance \n
    •	Utilized React hooks and GraphQL queries to eliminate over and under-fetching issues \n
    •	Integrated Auth0 to manage, authenticate and authorize user credentials \n`,
    techUtilized: ["react", "js"],
  },
  {
    title: "Advanced Database Systems Course at SFU",
    year: "Spring 2020",
    links: {
      demoLink: null,
      githubLink: null,
      mediumLink: null,
    },
    description: `• Developed a Buffer_Manager algorithm to track the active DB processes and handles the transfer of data/objects from memory to the persistent memory DB\n
    • Used data structures like Queue, Hashtable, Stack, Skiplist, and C++ built-in locks to develop CRUD, search and DBMS related feature\n
    • Due to class require I cannot put the project in a public repository, but I will be happy to send a copy of the repository via email or private communication channel\n
    `,
    techUtilized: ["Python3", "Linux"],
  },
  {
    title: "A.I. Algortigm (Artificial Intelligence Survey Course at SFU",
    year: "Spring 2020",
    links: {
      demoLink: null,
      githubLink: 'https://github.com/kunalgulati/Aritifical-Intelligence-Algorithms',
      mediumLink: null,
    },
    description: `•	Implemented Pacman search agent in Python3 using DFS, A*, and BFS algorithms to efficiently reach a particular destination and collect food \n
    •	Implemented  Davis–Putnam–Logemann–Loveland (DPLL) algorithm in Python3 for satisfiability problem solver \n
    `,
    techUtilized: ["Python3", "Linux"],
  },
]

module.exports ={
  projectData,
}