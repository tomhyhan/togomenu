type Appetizer = {
  [category: string]: {
    [category: string]: string;
  };
};
type Tempura = {
  [category: string]: {
    [category: string]: string;
  };
};
type Udon = {
  [category: string]: {
    [category: string]: string;
  };
};
type Yaki = {
  [category: string]: {
    [category: string]: string;
  };
};
type Teriyaki = {
  [category: string]: {
    [category: string]: string;
  };
};
type Bento = {
  [category: string]: {
    [category: string]: string;
  };
};
export interface IMenu {
  appetizer: Appetizer;
  tempura: Tempura;
  udon: Udon;
  yaki: Yaki;
  teriyaki: Teriyaki;
  bento: Bento;
}

export const appetizer = {
  "Agedashi Tofu": {
    tofu: "6pc",
  },
  Edamame: {
    edamame: "9oz",
  },
  Gyoza: {
    gyoza: "5pc",
  },
  Takoyaki: {
    takoyaki: "5pc",
  },
  "Appetizer Tempura": {
    beans: "2pc",
    shrimp: "2pc",
    yam: "1pc",
    asparagus: "1pc",
  },
};

export const tempura = {
  Prawn: { prawn: "4pc" },
  Salmon: { salmon: "4pc" },
  "Assorted Tempura": {
    shrimp: "2pc",
    salmon: "1pc",
    unagi: "1pc",
    yam: "2pc",
    bean: "2pc",
    asparagus: "1pc",
    broccolini: "1pc",
  },
  Unagi: { unagi: "5pc" },
};

export const udon = {
  Beef: {
    beef: "2.5oz",
    narutomaki: "1pc",
    broccoli: "1pc",
    "tempura crumbs": "1spoon",
    "green onion": "some",
  },
  Chicken: {
    chicken: "2.5oz",
    narutomaki: "1pc",
    broccoli: "1pc",
    "tempura crumbs": "1spoon",
    "green onion": "some",
  },
  Veggie: {
    tofu: "3pc",
    "spinach gomae": "1.5oz",
    broccoli: "3pc",
    "green onion": "some",
  },
  Seafood: {
    shrimp: "8pc",
    narutomaki: "1pc",
    broccoli: "1pc",
    "green onion": "some",
    tako: "1pc",
    poke: "1pc",
  },
  Tempura: {
    narutomaki: "1pc",
    broccoli: "1pc",
    "green onion": "some",
    "tempura crumbs": "1spoon",
    tempura: "2shrimps,2beans,1yam",
  },
};

export const yaki = {
  Beef: {
    beef: "4.5oz",
    pepper: "some",
    vege: "6.5-7.0oz",
    butter: "1pc",
    udon: "1bag",
    broccoli: "3pc",
    shichimi: "some",
  },
  Chicken: {
    chicken: "4.5oz",
    pepper: "some",
    vege: "6.5-7.0oz",
    butter: "1pc",
    udon: "1bag",
    broccoli: "3pc",
    shichimi: "some",
  },
  Shrimp: {
    shrimp: "14pc",
    pepper: "some",
    vege: "6.5-7.0oz",
    butter: "1pc",
    udon: "1bag",
    broccoli: "3pc",
    shichimi: "some",
  },
};

export const teriyaki = {
  Beef: {
    beef: "4.5oz",
    rice: "6.5oz",
    salad: "1.5oz",
    broccoli: "2pc",
  },
  Chicken: {
    chicken: "4.5oz",
    rice: "6.5oz",
    salad: "1.5oz",
    broccoli: "2pc",
  },
  Tofu: {
    tofu: "8pc",
    rice: "6.5oz",
    salad: "1.5oz",
    broccoli: "2pc",
  },
  Salmon: {
    salmon: "1.5pc",
    rice: "6.5oz",
    salad: "1.5oz",
    broccoli: "2pc",
  },
  Unagi: {
    unagi: "3pc",
    rice: "6.5oz",
    salad: "1.5oz",
    broccoli: "2pc",
  },
};

export const salad = {
  "green salad": {
    broccoli: "3pc",
    salad: "3oz",
  },
  Gomae: {
    spinach: "3oz",
    sauce: "2oz",
  },
  "House Chicken": {
    chicken: "4.5oz",
    salad: "some",
    chimichurri: "1spoon",
    pepper: "some",
  },
  "House Salmon": {
    chicken: "4.5oz",
    salad: "some",
    chimichurri: "1spoon",
    pepper: "some",
  },
  "Sashimi Salad": {
    salad: "some",
    spinach: "some",
  },
};

export const bento = {
  Veggie: {
    tofu: "4pc",
    beans: "11-14beans",
    tempura: "2yams,2beans,1asparagus,1broccolini",
  },
  Beef: {
    beef: "3-3.5oz",
    beans: "11-14beans",
    tempura: "1yam,2beans,2gyoza,1shrimp",
    rice: "4.5oz",
    broccoli: "1pc",
    california: "4pc",
  },
  Chicken: {
    chicken: "3-3.5oz",
    beans: "11-14beans",
    tempura: "1yam,2beans,2gyoza,1shrimp",
    rice: "4.5oz",
    broccoli: "1pc",
    california: "4pc",
  },
  Salmon: {
    salmon: "1pc",
    beans: "11-14beans",
    tempura: "1yam,2beans,2gyoza,1shrimp",
    rice: "4.5oz",
    broccoli: "1pc",
    california: "4pc",
  },
  Unagi: {
    unagi: "2pc",
    beans: "11-14beans",
    tempura: "1yams,2beans,2gyoza,1shrimp",
    rice: "4.5oz",
    broccoli: "1pc",
    california: "4pc",
  },
  "Sashimi&Sushi": {
    tempura: "1yams,2beans,2gyoza,1shrimp",
    gomae: "1oz",
  },
};

export type Category =
  | "appetizer"
  | "tempura"
  | "udon"
  | "yaki"
  | "teriyaki"
  | "bento";
