let students = [
  "Alexandre Va",
  "Alexandre Ve",
  "Antoine",
  "Bastien",
  "Carole",
  "Dorian",
  "Elisabeth",
  "Elodie",
  "Justin",
  "Justine F",
  "Justine L",
  "Kimi",
  "Layla",
  "Lidwine",
  "Lucas",
  "Marie",
  "Mathias",
  "Okly",
  "Pierre",
  "Robin",
  "Rosalie",
  "Stéphane",
  "Tim",
  "Thomas",
  "Valentin",
  "Virginie",
];

let randStudents = [];
n = rand();

function rand() {
  let max = students.length;
  return Math.floor(Math.random() * max);
}

function pickLearner(inputAr, n) {
  for (i = 1; i < n; i++) {
    inputAr.push(students[i]);
  }
  console.log(inputAr);
}

pickLearner(randStudents, n);
