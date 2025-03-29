export const getInitialX = (direction: number) => {
    if (direction === 0 || direction === 3) return 300;
    if (direction === 1 || direction === 2) return -300;
    return 0;
  };
  
  export const cardVariants = {
    initial: (direction: number) => ({
      x: getInitialX(direction),
      opacity: 0,
    }),
    animate: { x: 0, opacity: 1 },
    exit: () => ({
      x: 0,
      opacity: 0.5,
    }),
  };
  