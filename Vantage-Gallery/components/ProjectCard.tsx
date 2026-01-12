
import React from 'react';
import { Project } from '../types.ts';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="relative group cursor-pointer overflow-hidden aspect-[16/11] bg-black border border-zinc-900 rounded-sm"
      onClick={onClick}
    >
      <img 
        src={project.imageUrl} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-1000" />
      
      <div className="absolute inset-0 p-10 flex flex-col justify-end">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-1000 ease-[0.16, 1, 0.3, 1]">
          <div className="flex items-center space-x-6 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
             <div className="w-10 h-px bg-red-600" />
             <span className="text-[10px] uppercase tracking-[0.5em] text-red-600 font-bold">{project.category}</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif italic mb-4 tracking-tight text-white group-hover:text-zinc-100 transition-colors duration-700">{project.title}</h3>
          
          <div className="flex justify-between items-center overflow-hidden h-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-100 transform translate-y-6 group-hover:translate-y-0 font-bold">
              {project.client} &mdash; {project.year}
            </p>
            <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.5em] text-white font-bold opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-200 transform translate-x-8 group-hover:translate-x-0">
               <span>View Case</span>
               <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
               </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/5 transition-all duration-1000 m-4" />
    </div>
  );
};

export default ProjectCard;
