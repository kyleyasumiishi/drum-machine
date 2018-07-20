// Drums Sounds
import Heater1 from "./sounds/Heater-1.mp3";
import Heater2 from "./sounds/Heater-2.mp3";
import Heater3 from "./sounds/Heater-3.mp3";
import Heater4 from "./sounds/Heater-4_1.mp3";
import Clap from "./sounds/Heater-6.mp3";
import OpenHH from "./sounds/Dsc_Oh.mp3";
import KickNHat from "./sounds/Kick_n_Hat.mp3";
import Kick from "./sounds/RP4_KICK_1.mp3";
import ClosedHH from "./sounds/Cev_H2.mp3";

// Piano Sounds
import Chord1 from "./sounds/Chord_1.mp3";
import Chord2 from "./sounds/Chord_2.mp3";
import Chord3 from "./sounds/Chord_3.mp3";
import Shaker from "./sounds/Give_us_a_light.mp3";
import PunchyKick from "./sounds/punchy_kick_1.mp3";
import SideStick from "./sounds/side_stick_1.mp3";

export const DRUMS = {
  instrument: "drums",
  Q: {
    display: "Heater 1",
    id: "heater-1",
    src: Heater1
  },
  W: {
    display: "Heater 2",
    id: "heater-2",
    src: Heater2
  },
  E: {
    display: "Heater 3",
    id: "heater-3",
    src: Heater3
  },
  A: {
    display: "Heater 4",
    id: "heater-4",
    src: Heater4
  },
  S: {
    display: "Clap",
    id: "clap",
    src: Clap
  },
  D: {
    display: "Open HH",
    id: "open-hh",
    src: OpenHH
  },
  Z: {
    display: "Kick n' Hat",
    id: "kick-hat",
    src: KickNHat
  },
  X: {
    display: "Kick",
    id: "kick",
    src: Kick
  },
  C: {
    display: "Closed HH",
    id: "closed-hh",
    src: ClosedHH
  }
};

export const PIANO = {
  instrument: "piano",
  Q: {
    display: "Chord 1",
    id: "chord-1",
    src: Chord1
  },
  W: {
    display: "Chord 2",
    id: "chord-2",
    src: Chord2
  },
  E: {
    display: "Chord 3",
    id: "chord-3",
    src: Chord3
  },
  A: {
    display: "Shaker",
    id: "shaker",
    src: Shaker
  },
  S: {
    display: "Open HH",
    id: "open-hh",
    src: OpenHH
  },
  D: {
    display: "Closed HH",
    id: "closed-hh",
    src: ClosedHH
  },
  Z: {
    display: "Punchy Kick",
    id: "punchy-kick",
    src: PunchyKick
  },
  X: {
    display: "Side Stick",
    id: "side-stick",
    src: SideStick
  },
  C: {
    display: "Snare",
    id: "snare",
    src: Kick
  }
};

// TODO: Replace src with ukulele sounds
export const UKULELE = {
  instrument: "ukulele",
  Q: {
    display: "Heater 1",
    id: "heater-1",
    src: Heater1
  },
  W: {
    display: "Heater 2",
    id: "heater-2",
    src: Heater2
  },
  E: {
    display: "Heater 3",
    id: "heater-3",
    src: Heater3
  },
  A: {
    display: "Heater 4",
    id: "heater-4",
    src: Heater4
  },
  S: {
    display: "Clap",
    id: "clap",
    src: Clap
  },
  D: {
    display: "Open HH",
    id: "open-hh",
    src: OpenHH
  },
  Z: {
    display: "Kick n' Hat",
    id: "kick-hat",
    src: KickNHat
  },
  X: {
    display: "Kick",
    id: "kick",
    src: Kick
  },
  C: {
    display: "Closed HH",
    id: "closed-hh",
    src: ClosedHH
  }
};
