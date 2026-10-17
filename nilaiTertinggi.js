// data nilai siswa
let studentsScore = [
  { name: "Jek", score: 90 },
  { name: "Udin", score: 80 },
  { name: "Zidan", score: 100 },
  { name : "Jey", score: 85 },
];

// urutkan nilai dari tertinggi ke terendah
studentsScore.sort((a, b) => b.score - a.score);

// tampilkan semua siswa berdasarkan urutan nilai
for (let i = 0; i < studentsScore.length; i++) {
  console.log("Peringkat " + (i + 1));
  console.log("Nama  : " + studentsScore[i].name);
  console.log("Nilai : " + studentsScore[i].score);
  console.log("----------------");
}
