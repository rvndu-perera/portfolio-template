import { FiLayout, FiCode, FiSmartphone, FiPenTool } from 'react-icons/fi';
import { type ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    icon: FiLayout,
    title: 'UI/UX Design',
    description: 'Designing clean, user-centered interfaces that balance aesthetics with usability.',
  },
  {
    icon: FiCode,
    title: 'Frontend Development',
    description: 'Building fast, responsive websites with React, TypeScript and Tailwind CSS.',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile App UI',
    description: 'Crafting intuitive mobile experiences with React Native.',
  },
  {
    icon: FiPenTool,
    title: 'Branding & Marketing',
    description: 'Creating visual identities and marketing assets that tell a brand story.',
  },
];