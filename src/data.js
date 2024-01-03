// images
import Logo from '../src/assets/img/header/logo.svg';
import BodyPumpImg from '../src/assets/img/workouts/body-pump.png';
import YogaImg from '../src/assets/img/workouts/yoga.png';
import FullBodyImg from '../src/assets/img/workouts/full-body.png';
import FitnessImg from '../src/assets/img/workouts/fitness.png';
import BattleRopeImg from '../src/assets/img/workouts/battle-rope.png';
import CommunityImg1 from '../src/assets/img/community/img1.png';
import CommunityImg2 from '../src/assets/img/community/img2.png';
import CommunityImg3 from '../src/assets/img/community/img3.png';
import CommunityImg4 from '../src/assets/img/community/img4.png';
import JoinImg from '../src/assets/img/banner/bannerJoin.jpg';
// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';
import PriceIcn from '../src/assets/img/pricing/icons/price.svg';
import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from '../src/assets/img/faq/icons/question-mark.svg';
import spinnig from '../src/assets/img/starke/spinning.jpg'
import funcional from '../src/assets/img/starke/funcional.jpg'
import logoStarke from '../src/assets/img/starke/centro-de-entrenamiento.png'

export const header = {
  logo: Logo,
  //btnLoginText: 'Log in',
 // btnSignupText: 'Sign Up',
};

export const nav = [
  { name: 'Nosotros', href: 'nosotros' },
  { name: 'Servicios', href: 'disciplinas' },
  { name: 'Precios', href: 'precios' },
  { name: 'Profesores', href: 'profesores' },
  { name: 'Preguntas', href: 'preguntas' },
  { name: 'Contacto', href: 'contacto' },
];

export const banner = {
  titlePart1: 'Obten la mejor version de ti',
  titlePart2: '– Starke Fitness.',
  subtitle:
    'Ofrecemos un esáco espacio divertido, amigable y seguro.',
  textBtn: 'Empieza ahora.',
  img: '',
};

export const about = {
  icon: UsersIcn,
  title: 'Nuestro objetivo',
  subtitle1:
    'Nos distinguimos por nuestra atmósfera motivadora, que ayuda a nuestros miembros a alcanzar sus objetivos de acondicionamiento físico individuales.',
  subtitle2:
    'La fuerza de nuestra sincera identidad se utiliza para inspirar a cada persona que pone un pie en nuestros gimnasios a mejorar..',
  link: 'Empieza ahora.',
};

export const workouts = {
  icon: CalendarIcn,
  title: 'Servicios',
  programs: [
    {
      image: spinnig,
      name: 'Entrenamiento Personalizado',
    },
    {
      image: funcional,
      name: 'Funcional',
    },

    {
      image: YogaImg,
      name: 'Yoga',
    },
    {
      image: YogaImg,
      name: 'Consultas Privadas',
    },
  
  
 
   
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Precios de planes',
  plans: [
    {
      name: 'Clase',
      price: '$700',
      list: [
        { name: 'clase de una hora' },
        { name: '1 entrenamiento' },
        { name: 'personal trainer' },
      ],
      delay: 600,
    },
    {
      name: 'Mes',
      price: '$6.000',
      list: [
        { name: 'clases ilimitadas' },
        { name: 'todos las disciplinas' },
        { name: 'Consultas privadas' },
        { name: 'personal trainer' },
        { name: '50% descuentos en bebidas' },
      ],
      delay: 800,
    },
    {
      name: 'Semanal',
      price: '$3.500',
      list: [
        { name: ' 3 clases por demana'},
        { name: 'todos las disciplinas' },
        { name: 'Consultas privadas'  },
        { name: 'personal trainer' },
        { name: '50% descuentos en bebidas' },
      ],
      delay: 1000,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: 'Profesores',
  testimonials: [
    {
      image: CommunityImg1,
      name: 'Matias',
      message:
        'Profesor de funcional',
    },
    {
      image: CommunityImg3,
      name: 'Bruno',
      message:
        'Profesor de spinning',
    },
    {
      image: CommunityImg2,
      name: 'Profesor 3',
      message:
        'Profesor de yoga',
    },
    {
      image: CommunityImg4,
      name: 'Profesor 4',
      message:
        'Otra disciplina',
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: 'Preguntas',
  accordions: [
    {
      question: '¿Que es el entrenamiento funcional?',
      answer:
        'El entrenamiento funcional se trata de ejercicios que imitan movimientos reales, ayudando a fortalecer el cuerpo para tareas cotidianas y deportes, mientras se evitan lesiones',
    },
    {
      question: '¿Qué es el entrenamiento personalizado?',
      answer:
        'El entrenamiento personalizado con programas adaptados individualmente para fortalecer, mejorar la resistencia, aumentar la flexibilidad y alcanzar metas específicas de bienestar físico y mental, según las necesidades y objetivos de cada persona.',
    },
    {
      question: '¿Qué es el yoga?',
      answer:
        'El yoga es una práctica milenaria que combina posturas físicas, respiración y meditación para promover el equilibrio entre cuerpo y mente, mejorando la flexibilidad, fuerza y bienestar general.',
    },
    {
      question: 'Objetivos de entrenamiento',
      answer:
        'El entrenamiento en un gimnasio busca fortalecer la fuerza, mejorar la resistencia, aumentar la flexibilidad y promover el bienestar físico y mental, adaptándose a las metas individuales de cada cliente.',
    },
 

  ],
};

export const join = {
  image: JoinImg,
  title: 'Wanna join & have fun?',
  subtitle:
    'Estamos aqui para que encuentres la mejor version de vos. Nada mas y nada menos.',
  btnText: 'Empieza ahora.',
};

export const footer = {
  logo: logoStarke,
  copyrightText: 'Todos los derechos reservados. StarkeFitness 2023.',
};
