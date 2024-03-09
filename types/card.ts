export interface Appear {
  anime: string;
  manga: string;
}

export interface Skill {
  name: string;
  description: string;
}

export interface Card {
  name: string;
  description: string;
  skills: Skill[];
  appears: {
    captured: Appear;
    transformed: Appear;
  };
}
