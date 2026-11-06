import { type IconType } from 'react-icons';


export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: IconType;
  title: string;
  description: string;
}

export interface WorkItem {
  title: string;
  category: string;
  description: string;
}