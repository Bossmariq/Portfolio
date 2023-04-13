export const boxVariant1 = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      stiffness: 300,
      duration: 1,
      delay: 0,
    },
  },
  hidden: { opacity: 0, x: "-50vw" },
};
export const boxVariant2 = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 1.5,
      delay: 0.7,
    },
  },
  hidden: { opacity: 0, y: "20vw" },
};
