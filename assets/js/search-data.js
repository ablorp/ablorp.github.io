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
  },{id: "nav-projects",
          title: "projects",
          description: "My Builder Profile: (1) increasingly ambitious biomechanical engineering projects since 8th grade; (2) founding intern of a robotics startup with $100+ million raised over three rounds; and (3) ongoing quest to solve a 15-year-old computational neuroscience puzzle on OpenWorm 🪱 🔍 👀",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-conferences",
          title: "conferences",
          description: "Conferences and symposiums where I&#39;d present at poster sessions and meet with experts. I was the youngest presenter, in fact the only high-schooler, when I first attended an academic conference, i.e., the 25th International Worm Meeting at UC Davis. I look forward to visiting Kobe, Japan next for the 26th International Worm Meeting to present my current project in computational neuroscience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/conferences/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-openworm",
          title: '🪱 openworm',
          description: "Inducing thermotactic behavior in a digitally simulated C. elegans equipped with thermosensory transducers for an artificially designed aquarium with pre-programmed temperature gradients is a work-in-progress (2026–2027).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-watney",
          title: '🦾 watney',
          description: "founding intern of robotics startup",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-hydroponics",
          title: '🍓 hydroponics',
          description: "setting up a vertical farm in Berkeley (circa 2023), and kickstarted a new robotics journey with my brother",
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
          description: "accruing experience test driving my brother&#39;s creation from a young age",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-training",
          title: '🪱 training 🔍 👀',
          description: "Lookie here... already in motion",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ongoing/";
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
