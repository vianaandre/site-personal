/* import project from '../../assets/NavBarProject.svg'
import process from '../../assets/NavBarProcess.svg'
import about from '../../assets/NavBarAbout.svg'
import skills from '../../assets/NavBarSkills.svg'
import contact from '../../assets/NavBarContact.svg' */

import { LinksProps } from '../../types/types';


type LinkIconProps = { href: string, icon: string, alt: string }

export const links: Array<LinksProps> = [
  {
    href: '#project',
    title: 'Projetos'
  },
  {
    href: '#process',
    title: 'Processo'
  },
  {
    href: '#about',
    title: 'Sobre'
  },
  {
    href: '#skills',
    title: 'Habilidades'
  },
  {
    href: '#Contact',
    title: 'Contato'
  }
];


export const linksIcon: Array<LinkIconProps> = [
  {
    href: '#project',
    icon: '/assets/NavBarProject.svg',
    alt: 'Ícone de Projeto'
  },
  {
    href: '#process',
    icon: '/assets/NavBarProcess.svg',
    alt: 'Ícone de Processo'
  },
  {
    href: '#about',
    icon: '/assets/NavBarAbout.svg',
    alt: 'Ícone Sobre'
  },
  {
    href: '#skills',
    icon: '/assets/NavBarSkills.svg',
    alt: 'Ícone de Habilidades'
  },
  {
    href: '#Contact',
    icon: '/assets/NavBarContact.svg',
    alt: 'Ícone de Contato'
  }
]


