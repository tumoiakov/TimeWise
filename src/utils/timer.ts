export const timerBtnStateData = {
  inactive: ["home.startBtn"],
  paused: ["home.resumeBtn", "home.stopBtn"],
  active: ["home.pauseBtn", "home.stopBtn"],
};

export type TimerBtnState = "inactive" | "paused" | "active";
