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
    },{
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
      name: "Hyab Gifts and market",
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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };


  return (
    <div className="flex flex-row-reverse mx-32 py-20 h-full" style={{ backgroundColor:'#f0f0f0' }}>
      <div className="basis-1/6 mx-4 flex items-center ">
        {/* List of projects */}
        <div className="project-list flex flex-col space-y-2">
          <h1 className='text-5xl font-bold text-orange-300' >Projects</h1>
          {projectList.map((project, index) => (
            <button
              key={index}
              onClick={() => handleProjectClick(project)}
              className={`project-item text-xl text-white px-10 rounded-sm ${selectedProject && selectedProject.name == project.name ? 'text-zinc-800' : 'text-zinc-600'}`}
              
            >
              {project.name}
            </button>
          ))}
        </div>
      </div>
      <div className="basis-5/6 w-full">
        {/* Project details */}
        <div fill={fill}>
          {selectedProject ? (
            <div>
              <h2 className='text-5xl font-bold text-zinc-900' >{selectedProject.name}</h2>

              <div className='my-4 space-y-4' >
                <div>
                  <p className='text-zinc-800 text-base leading-relaxed' >{selectedProject.description}</p>
                  <div className='flex justify-between' >
                    <div>

                      <a href={selectedProject.websiteLink} rel="noopener noreferrer">
                        <MdPreview className='w-10 h-10' />
                      </a>
                    </div>
                    <div>

                      <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                         <FiGithub className='w-10 h-10'/> 
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
