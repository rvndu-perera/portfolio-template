import { type WorkItem } from '../types';
import projectOneImage from '../assets/images/project-1.jpg';
import projectTwoImage from '../assets/images/project-2.jpg';
import projectThreeImage from '../assets/images/project-3.jpg';
import projectFourImage from '../assets/images/project-4.jpg';

export const workData: WorkItem[] = [
  { title: 'Project One', category: 'Web Design', description: 'A short description of this project goes here.', image: projectOneImage },
  { title: 'Project Two', category: 'UI/UX Design', description: 'A short description of this project goes here.', image: projectTwoImage },
  { title: 'Project Three', category: 'Branding', description: 'A short description of this project goes here.', image: projectThreeImage },
  { title: 'Project Four', category: 'Mobile App', description: 'A short description of this project goes here.', image: projectFourImage },
];