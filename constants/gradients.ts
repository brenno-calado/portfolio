export type SkyGradient = {
  start: string;
  end: string;
  gradient: string;
};

export const SKY_GRADIENTS: Record<string, SkyGradient> = {
  DAWN: {
    start: "rgb(87, 73, 135)",
    end: "rgb(201, 140, 131)",
    gradient: "linear-gradient(to bottom, rgb(87, 73, 135) 0%, rgb(201, 140, 131) 100%)",
  },
  SUNRISE: {
    start: "rgb(98, 139, 222)",
    end: "rgb(230, 220, 130)",
    gradient: "linear-gradient(to bottom, rgb(98, 139, 222) 0%, rgb(230, 220, 130) 100%)",
  },
  MORNING: {
    start: "rgb(97, 165, 242)",
    end: "rgb(148, 207, 255)",
    gradient: "linear-gradient(to bottom, rgb(97, 165, 242) 0%, rgb(148, 207, 255) 100%)",
  },
  MIDDAY: {
    start: "rgb(135, 206, 235)",
    end: "rgb(0,191,255)",
    gradient: "linear-gradient(to bottom, rgb(135, 206, 235) 0%, rgb(0,191,255) 100%)",
  },
  AFTERNOON: {
    start: "rgb(62, 131, 214)",
    end: "rgb(125, 189, 232)",
    gradient: "linear-gradient(to bottom, rgb(62, 131, 214) 0%, rgb(125, 189, 232) 100%)",
  },
  SUNSET: {
    start: "rgb(128, 82, 121)",
    end: "rgb(232, 168, 65)",
    gradient: "linear-gradient(to bottom, rgb(128, 82, 121) 0%, rgb(232, 168, 65) 100%)",
  },
  DUSK: {
    start: "rgb(56, 67, 143)",
    end: "rgb(232, 132, 65)",
    gradient: "linear-gradient(to bottom, rgb(56, 67, 143) 0%, rgb(232, 132, 65) 100%)",
  },
  NIGHT: {
    start: "rgb(30, 30, 40)",
    end: "rgb(30, 60, 110)",
    gradient: "linear-gradient(to bottom, rgb(30, 30, 40) 0%, rgb(30, 60, 110) 100%)",
  },
};
