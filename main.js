// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const randomNum = () => {
  let num = Math.floor(Math.random() * 1000);
  return num;
}

// console.log(returnRandBase());
// console.log(mockUpStrand());

const pAequorFactory = (num, array) => {
  return {
    specimenNum: num,
    dna: array,
    mutate() {
      const indexToBeMutated = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();

      while (this.dna[indexToBeMutated] === newBase) {
        newBase = returnRandBase();
      }

      this.dna[indexToBeMutated] = newBase;

      return this.dna;
    },
  }
}

const newMonster = pAequorFactory(randomNum(), mockUpStrand())
console.log(newMonster);

