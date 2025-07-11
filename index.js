const farmAnimals = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};

const { moo, neigh, baa, oink, cluck } = farmAnimals;


const animals = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};

const { bessie, dolly, babe, little } = animals;



const animalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};

const { blackAndWhite, black, pink } = animalColors;

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const [red, orange, yellow, green, blue, indigo, violet] = colors;


const [r, o, y, g, b, i, v] = colors;


const [, , , , , indg] = colors;


const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along",
    },
  },
  job: "Host of The Muppet Show",
  partner: "Miss Piggy"
};

const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  job: nestedJob,
  partner: nestedPartner
} = nestedMuppet;


// Object that matches the test expectations
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};

// Destructuring exactly as the test expects
const { muppetName, color, song, job, partner } = muppet;

