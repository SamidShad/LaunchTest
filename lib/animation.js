export let full_screen_menu_animation = {
  initial: {
    y: -1500,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
  exit: {
    y: -1500,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export let full_screen_menu_links_animation = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 100,
    transition: {
      duration: 0.5,
      delay: 0.6,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export let webIntroAnimation = {
  initial: {
    y: 0,
  },
  visible: {
    y: -1300,
    transition: {
      duration: 0.5,
      delay: 0.8,
      ease: "easeIn",
    },
  },
};
