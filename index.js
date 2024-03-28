const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const animalNames = {
  cow: 'Bessie',
  sheep: 'Dolly',
  pig: 'Babe',
  chicken: 'Little'
};

const { cow, sheep, pig, chicken } = animalNames;

const animalSounds = {
  moo: 'Bessie',
  baa: 'Dolly',
  oink: 'Babe',
  cluck: 'Little'
};

const { moo: cowSound, baa: sheepSound, oink: pigSound, cluck: chickenSound } = animalSounds;

const [blackAndWhite, black, pink] = ["cow", "sheep", "pig"];

const [red, orange, yellow, green, blue, indg = "indigo", violet] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const indigo = indg;
const [r, o, y, g, b, i, v] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const { muppetName, color, song, job, partner } = muppet;
const { song2, song4 } = nestedMuppet.album.theMuppetMovie;
const { nestedJob, nestedPartner } = nestedMuppet;
