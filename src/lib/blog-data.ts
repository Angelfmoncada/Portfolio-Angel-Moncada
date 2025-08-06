export interface BlogPost {
  id: number;
  title: string;
  content: string;
  category: string;
  author: string;
  date: string;
  src: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Desarrollo Full-Stack con React y Node.js",
    content: "# Desarrollo Full-Stack Moderno\n\nEn este artículo exploramos las mejores prácticas para desarrollar aplicaciones full-stack utilizando React en el frontend y Node.js en el backend.\n\n## Tecnologías Clave\n\n- **React**: Para interfaces de usuario dinámicas\n- **Node.js**: Para el backend escalable\n- **TypeScript**: Para tipado estático\n- **MongoDB**: Para base de datos NoSQL",
    category: "Desarrollo Web",
    author: "Ángel Moncada",
    date: "2024-01-15",
    src: "/api/placeholder/600/400",
    tags: ["Web Development", "React", "Node.js", "Full Stack"]
  },
  {
    id: 2,
    title: "Optimización de Performance en React",
    content: "# Optimización de Performance\n\nLa optimización de performance es crucial para crear aplicaciones React que ofrezcan una excelente experiencia de usuario.\n\n## Técnicas Principales\n\n- **React.memo**: Para evitar re-renders innecesarios\n- **useMemo y useCallback**: Para memoización\n- **Code Splitting**: Para cargar código bajo demanda\n- **Lazy Loading**: Para componentes y rutas",
    category: "Performance",
    author: "Ángel Moncada",
    date: "2024-01-10",
    src: "/api/placeholder/600/400",
    tags: ["React", "Performance", "Optimization"]
  },
  {
    id: 3,
    title: "Arquitectura de Microservicios",
    content: "# Microservicios con Node.js\n\nLos microservicios permiten crear aplicaciones escalables y mantenibles dividiendo la funcionalidad en servicios independientes.\n\n## Beneficios\n\n- **Escalabilidad independiente**\n- **Tecnologías diversas**\n- **Despliegue independiente**\n- **Tolerancia a fallos**",
    category: "Arquitectura",
    author: "Ángel Moncada",
    date: "2024-01-05",
    src: "/api/placeholder/600/400",
    tags: ["Architecture", "Microservices", "Node.js"]
  }
];