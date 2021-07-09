const allProjects = [
  {
    title: "Spotifu",
    description:
      "Spotifu plataforma de música, escoge la playlist que quieras y disfruta de su contenido. Cada canción es especial y te hara vibrar segundo a segundo.",
    background: "background-project/spotifu.png",
    gif: "gif/spotifu.gif",
    linkProject: "https://github.com/RivaldoEsteban/Spotifu-react",
    linkRepo: "https://rivaldoesteban.github.io/Spotifu-react/",
    id: "project-1",
  },
  {
    title: "Block Master",
    description:
      "Block Master plataforma que te muestra las peliculas disponibles, puedes filtrar por nombre , mejor puntuadas y menos puntuadas.",
    background: "background-project/block-master.png",
    gif: "gif/block-master.gif",
    linkProject: "https://rivaldoesteban.github.io/Block-Master-react/",
    linkRepo: "https://github.com/RivaldoEsteban/Block-Master-react",
    id: "project-2",
  },
  {
    title: "Flags World",
    description:
      "Busca el país de tu preferencia y ve cuanta gente vive alli! Descubre en que continente se encuentra y cual es su capital.",
    background: "background-project/flag-world.png",
    gif: "gif/flag-world.gif",
    linkProject: "https://rivaldoesteban.github.io/flags-project-react/",
    linkRepo: "https://github.com/RivaldoEsteban/flags-project-react",
    id: "project-3",
  },
  {
    title: "Marvol",
    description:
      "Marvol te trae lo mejor de los comics para que los disfrutes. Ten una breve descripcion del comic y quienes lo crearon. ",
    background: "background-project/marvol.png",
    gif: "gif/marvol.gif",
    linkProject: "https://github.com/RivaldoEsteban/marvol-react",
    linkRepo: "https://rivaldoesteban.github.io/marvol-react/",
    id: "project-4",
  },
  {
    title: "Rick and Morty",
    description:
      "Rick y Morty es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim. ",
    background: "background-project/rick-and-morty.png",
    gif: "gif/rick-and-morty.gif",
    linkProject: "https://rivaldoesteban.github.io/rick-and-morty-react/",
    linkRepo: "https://github.com/RivaldoEsteban/rick-and-morty-react",
    id: "project-5",
  },
  {
    title: "Cuenta regresiva",
    description:
      "Temporizador de cuenta regresiva en vivo, pon la fecha futura y espera a que el tiempo se completa, este proyecto fue creado para aprender a usar new Datee",
    background: "background-project/countdown.png",
    gif: "gif/countdown.gif",
    linkProject:
      "https://rivaldoesteban.github.io/countdown-component/index.html",
    linkRepo: "https://github.com/RivaldoEsteban/countdown-component",
    id: "project-6",
  },
  {
    title: "Sidebar",
    description:
      "El sidebar es un componente comun en una página web y con este proyecto se trato de simular lo mas posible la animacion y las redirecciones ",
    background: "background-project/sidebar.png",
    gif: "gif/sidebar.gif",
    linkProject:
      "https://rivaldoesteban.github.io/sidebar-component/index.html",
    linkRepo: "https://github.com/RivaldoEsteban/sidebar-component",
    id: "project-7",
  },
  {
    title: "Reproductor de video",
    description:
      "Con este proyecto se logro aprender a usar los metodos de video, y logre pausar, reproducir,adelantar,retroceder y una barra del tiempo actual del video funcional.",
    background: "background-project/video.png",
    gif: "gif/video.gif",
    linkProject: "https://rivaldoesteban.github.io/video-componnet/index.html",
    linkRepo: "https://github.com/RivaldoEsteban/video-componnet",
    id: "project-8",
  },
  {
    title: "Hero component",
    description:
      "El hero en un proyecto es importante porque es la forma de implementar imágenes y textos atractivos para el usuario. ",
    background: "background-project/hero.png",
    gif: "gif/hero.gif",
    linkProject: "https://rivaldoesteban.github.io/hero-component/index.html",
    linkRepo: "https://github.com/RivaldoEsteban/hero-component",
    id: "project-9",
  },
  {
    title: "Calculadora",
    description:
      "Este proyecto me sirvio para ser mas logico y replicar las acciones dee una calculadora. Haz tus operaciones.",
    background: "background-project/calculator.png",
    gif: "gif/calculator.gif",
    linkProject:
      "https://rivaldoesteban.github.io/calculator-component/index.html",
    linkRepo: "https://github.com/RivaldoEsteban/calculator-component",
    id: "project-10",
  },
  {
    title: "Calec",
    description:
      "Calel es su centro de programación de reuniones de manera profesional y eficiente y elimina el problema del intercambio de correos electrónicos para que pueda dedicar más tiempo a su trabajo.",
    background: "background-project/calel.png",
    gif: "gif/calel.gif",
    linkProject: "https://rivaldoesteban.github.io/Project-Calel/",
    linkRepo: "https://github.com/RivaldoEsteban/Project-Calel",
    id: "project-11",
  },
  {
    title: "Striped",
    description:
      "Millones de empresas de todos los tamaños, desde nuevas empresas hasta grandes empresas, utilizan el software y las API de Stripe para aceptar pagos, enviar pagos y administrar sus negocios en línea.",
    background: "background-project/striped.png",
    gif: "gif/striped.gif",
    linkProject: "https://rivaldoesteban.github.io/project-striped/index.html",
    linkRepo: "https://github.com/RivaldoEsteban/project-striped",
    id: "project-12",
  },
  {
    title: "Skyline",
    description:
      "El primer editor completamente potenciado por inteligencia artificial. Mas posibilidades , menos rutinas y sin barreras de aprendisaje.",
    background: "background-project/skyline.png",
    gif: "gif/skyline.gif",
    linkProject: "https://rivaldoesteban.github.io/project-skyline/index.html",
    linkRepo: "https://github.com/RivaldoEsteban/project-skyline",
    id: "project-12",
  },
  {
    title: "Nemium",
    description:
      "Este proyecto lo realice tomando el curso : Curso ensencial de HTML Y CSS de  https://leonidasesteban.com/aprender/html-css-fundamentos, practicando estructura y buenas practicas",
    background: "background-project/nemium.png",
    gif: "gif/nemium.gif",
    linkProject: "https://rivaldoesteban.github.io/Project-Nemium/nemiumA.html",
    linkRepo: "https://github.com/RivaldoEsteban/Project-Nemium",
    id: "project-13",
  },
];

export default allProjects;
