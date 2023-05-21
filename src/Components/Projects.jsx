import React, { useState } from 'react';
import { a } from '@react-spring/web';
import { MdPreview } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

function Projects({ fill }) {

  const projectList = [
    {
      name: "Gdev Webbuilder",
      desktopView: "/WebbuilderDesktop.png",
      mobileView: '/index.jpg',
      performanceScore: '92',
      description: "Ethiopiaye is a social network for Ethiopian people around the world. The platform allows users to connect with each other, share posts, photos, and videos, and discover events and businesses related to Ethiopian culture. The project aims to promote Ethiopian culture and create a global community of Ethiopians. The development process of Ethiopiaye involved creating a React application that integrates with a Firebase backend. The backend manages the user authentication, data storage, and real-time updates, while the React app manages the user interface and interactions.",
      developmentTechnology: "React, Firebase",
      githubLink: "",
      websiteLink: "https://ethiopiaye.netlify.app/"
    }, {
      name: "Gnote",
      desktopView: "/WatchDesktop.jpg",
      mobileView: '/WatchPhone.jpg',
      performanceScore: '92',
      description: "Watch Config is a 3D watch customizer that allows users to customize and preview a watch in real-time. Users can choose the watch model, color, material, and other specifications to see how the watch will look like before they buy it. The project uses Three.js to create the 3D models and the customizer interface. The development process of Watch Config involved creating a React application that integrates with a Three.js customizer module. The customizer module handles the 3D model creation and manipulation based on user inputs, while the React app manages the state and user interface components.",
      developmentTechnology: "React, Three.js, WebGL",
      githubLink: "",
      websiteLink: "watchconfig.vercel.app/"
    },
    {
      name: "Hyab Gifts",
      desktopView: "/WatchDesktop.jpg",
      mobileView: '/WatchPhone.jpg',
      performanceScore: '92',
      description: "Watch Config is a 3D watch customizer that allows users to customize and preview a watch in real-time. Users can choose the watch model, color, material, and other specifications to see how the watch will look like before they buy it. The project uses Three.js to create the 3D models and the customizer interface. The development process of Watch Config involved creating a React application that integrates with a Three.js customizer module. The customizer module handles the 3D model creation and manipulation based on user inputs, while the React app manages the state and user interface components.",
      developmentTechnology: "React, Three.js, WebGL",
      githubLink: "",
      websiteLink: "watchconfig.vercel.app/"
    },
    {
      name: "Watch Config",
      desktopView: "/WatchDesktop.jpg",
      mobileView: '/WatchPhone.jpg',
      performanceScore: '92',
      description: "Watch Config is a 3D watch customizer that allows users to customize and preview a watch in real-time. Users can choose the watch model, color, material, and other specifications to see how the watch will look like before they buy it. The project uses Three.js to create the 3D models and the customizer interface. The development process of Watch Config involved creating a React application that integrates with a Three.js customizer module. The customizer module handles the 3D model creation and manipulation based on user inputs, while the React app manages the state and user interface components.",
      developmentTechnology: "React, Three.js, WebGL",
      githubLink: "",
      websiteLink: "watchconfig.vercel.app/"
    }, {
      name: "Ethiopiaye",
      desktopView: "/EthiopiaDesktop.jpg",
      mobileView: '/index.jpg',
      performanceScore: '92',
      description: "Ethiopiaye is a social network for Ethiopian people around the world. The platform allows users to connect with each other, share posts, photos, and videos, and discover events and businesses related to Ethiopian culture. The project aims to promote Ethiopian culture and create a global community of Ethiopians. The development process of Ethiopiaye involved creating a React application that integrates with a Firebase backend. The backend manages the user authentication, data storage, and real-time updates, while the React app manages the user interface and interactions.",
      developmentTechnology: "React, Firebase",
      githubLink: "",
      websiteLink: "https://ethiopiaye.netlify.app/"
    },
  ]

  const [selectedProject, setSelectedProject] = useState(projectList[0]);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleProjectClick = (project) => {
    setIsLoading(true); // Set loading state to true
    setSelectedProject(project);
    // Simulate delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false after the delay
    }, 1000);
  };


  return (
    <div className="flex flex-col md:flex-row-reverse mx-4 md:mx-32 md:py-20 h-full" style={{ backgroundColor: '#f0f0f0' }}>
      <div className="basis-1/6 mx-4 flex items-center md:bg-zinc-900">
        {/* List of projects */}
        <div className="project-list flex md:flex-col space-y-2">
      <h1 className='text-2xl md:text-5xl font-bold text-orange-300 ml-4'>Projects</h1>
      <div className="dropdown sm:hidden">
        <select
          value={selectedProject ? selectedProject.name : ''}
          onChange={(e) => {
            const projectName = e.target.value;
            const selected = projectList.find((project) => project.name === projectName);
            handleProjectClick(selected);
          }}
          className="project-select projectbuttton border-b border-orange-400 text-base text-white px-10 rounded-sm"
        >
          {projectList.map((project, index) => (
            <option key={index} value={project.name}>
              {project.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden md:flex flex-col space-y-2">
        {projectList.map((project, index) => (
          <button
            key={index}
            onClick={() => handleProjectClick(project)}
            className={`projectbuttton border-b border-zinc-700 text-xl text-white px-10 rounded-sm ${selectedProject && selectedProject.name === project.name ? 'text-zinc-300' : 'text-zinc-500'}`}
          >
            {project.name}
          </button>
        ))}
      </div>
    </div>
      </div>
      <div className="basis-5/6 w-full">
        {/* Project details */}
        <div fill={fill}>
          {isLoading ? ( // Display loading bar while loading
            <div className="flex justify-center items-center h-[90vh]">

              <div className='loading' ></div>
              {/* Add animation or progress indicator here */}
            </div>
          ) : selectedProject ? (
            <div>
              <h2 className='text-2xl md:text-5xl font-bold text-zinc-900' >{selectedProject.name}</h2>

              <div className='my-4 space-y-4' >
                <div>
                  <p className='text-zinc-800 text-sm md:text-base leading-relaxed' >{selectedProject.description}</p>
                  <div className='flex justify-between' >
                    <div>

                      <a href={selectedProject.websiteLink} rel="noopener noreferrer">
                        <MdPreview className='w-10 h-10' />
                      </a>
                    </div>
                    <div>

                      <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                        <FiGithub className='w-10 h-10' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='flex space-x-4 mt-4' >
                  <div>
                    <img src={selectedProject.mobileView} alt="Mobile View" />
                  </div>

                  <div>
                    <img src={selectedProject.desktopView} alt="Desktop View" />
                  </div>
                </div>
              </div>
              <div>
                <p className='text-orange-400  font-semibold text-xl text-right pr-4' >{selectedProject.developmentTechnology}</p>
              </div>
            </div>
          ) : (
            <div className='w-full h-[90vh]' >
              <h1>
                Please select a project
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
