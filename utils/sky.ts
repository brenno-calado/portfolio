import { SKY_GRADIENTS, SkyGradient } from "../constants/gradients";

export const timeToGradient = (timestamp: number): SkyGradient => {
  const date = new Date(timestamp);
  const hour = date.getHours();

  switch (true) {
    case hour >= 4 && hour < 5:
      return SKY_GRADIENTS.DAWN;
    case hour >= 5 && hour < 6:
      return SKY_GRADIENTS.SUNRISE;
    case hour >= 7 && hour < 10:
      return SKY_GRADIENTS.MORNING;
    case hour >= 10 && hour < 13:
      return SKY_GRADIENTS.MIDDAY;
    case hour >= 13 && hour < 16:
      return SKY_GRADIENTS.AFTERNOON;
    case hour >= 16 && hour < 17:
      return SKY_GRADIENTS.SUNSET;
    case hour >= 17 && hour < 18:
      return SKY_GRADIENTS.DUSK;
    default:
      return SKY_GRADIENTS.NIGHT;
  }
};
