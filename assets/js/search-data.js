// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Papers and essays in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of cool projects in science and engineering.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-watney-robotics",
          title: 'watney robotics',
          description: "autonomous physical infrastructure",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-fold-fold-fold",
          title: '🦾 fold,fold,fold!',
          description: "dynamic duo working night shifts",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-hydroponics",
          title: '🍓 hydroponics',
          description: "set up vertical farming @ Berkeley",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-monte-carlo",
          title: '🏅 monte carlo',
          description: "Monte Carlo simulation of somatic twist in ancient marine worms",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-decussation",
          title: '🥇 decussation',
          description: "why do vertebrates have decussated cortocospinal tracts?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-cliffhanger-v2",
          title: '🥇 cliffhanger v2',
          description: "dynamically stable mechanical mountain climbing aid by design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-️-cliffhanger",
          title: '🧗‍♂️ cliffhanger',
          description: "dynamically stable mechanical mountain climbing aid by design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-rocket-fuel",
          title: '🚀 rocket fuel',
          description: "homemade rocket fuel with kitchen chemistry (i.e., kno3 + sugar etc.)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-️-go-kart-go",
          title: '🏎️ go kart go!',
          description: "test driving my eldest brother&#39;s creation from a young age",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
