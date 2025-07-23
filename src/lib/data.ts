export const toga = [
  {
    id: 1,
    name: "Lidah Buaya (Aloe Vera)",
    latinName: "Aloe vera",
    image: "/img/aloe_vera.jpg",
    description:
      "Tanaman sukulen dengan daun tebal berisi gel yang kaya akan nutrisi dan senyawa bioaktif.",
    detailedDescription:
      "Lidah buaya adalah tanaman sukulen yang telah digunakan selama ribuan tahun untuk berbagai keperluan medis dan kosmetik. Tanaman ini mengandung lebih dari 75 senyawa aktif termasuk vitamin, mineral, enzim, dan asam amino. Gel yang terdapat dalam daun lidah buaya memiliki sifat anti-inflamasi, antibakteri, dan penyembuhan luka yang luar biasa.",
    uses: [
      "Penyembuhan luka",
      "Perawatan kulit",
      "Anti-inflamasi",
      "Pencernaan",
    ],
    activeCompounds: [
      "Aloin",
      "Emodin",
      "Aloe-emodin",
      "Barbaloin",
      "Isobarbaloin",
    ],
    preparation: [
      "Potong daun lidah buaya dan ambil gelnya",
      "Oleskan gel langsung pada kulit untuk luka atau iritasi",
      "Untuk konsumsi, campurkan gel dengan air atau jus buah",
      "Simpan gel di kulkas untuk efek menyejukkan",
    ],
    precautions: [
      "Jangan konsumsi berlebihan karena dapat menyebabkan diare",
      "Hindari penggunaan pada luka terbuka yang dalam",
      "Konsultasi dokter jika hamil atau menyusui",
    ],
    origin: "Afrika Utara, Mediterania",
    family: "Asphodelaceae",
  },
  {
    id: 2,
    name: "Kunyit",
    latinName: "Curcuma longa",
    image: "/img/kunyit.jpg",
    description:
      "Tanaman rimpang dengan warna kuning oranye khas yang sering digunakan sebagai bumbu dan obat tradisional.",
    detailedDescription:
      "Kunyit adalah tanaman herbal yang berasal dari Asia Selatan dan telah digunakan selama ribuan tahun dalam pengobatan tradisional dan kuliner. Rimpangnya mengandung senyawa aktif utama bernama kurkumin, yang dikenal memiliki sifat antioksidan, anti-inflamasi, dan antimikroba. Kunyit banyak digunakan untuk meningkatkan kesehatan pencernaan, mengurangi peradangan, dan sebagai pewarna alami.",
    uses: [
      "Meredakan peradangan",
      "Meningkatkan sistem pencernaan",
      "Mengobati luka ringan",
      "Menurunkan risiko penyakit kronis",
    ],
    activeCompounds: [
      "Kurkumin",
      "Demetoksikurkumin",
      "Bisdemetoksikurkumin",
      "Zingiberen",
      "Turmeron",
    ],
    preparation: [
      "Cuci dan kupas rimpang kunyit",
      "Parut atau potong kecil lalu rebus untuk dijadikan jamu",
      "Campurkan bubuk kunyit dalam masakan atau minuman hangat",
      "Gunakan kunyit segar sebagai masker wajah alami",
    ],
    precautions: [
      "Konsumsi berlebihan dapat menyebabkan gangguan lambung",
      "Hindari jika memiliki batu empedu tanpa konsultasi dokter",
      "Bisa menyebabkan noda pada kulit dan pakaian",
      "Konsultasi terlebih dahulu jika sedang hamil atau menyusui",
    ],
    origin: "Asia Selatan (India dan sekitarnya)",
    family: "Zingiberaceae",
  },
  {
    id: 3,
    name: "Nilam",
    latinName: "Pogostemon cablin",
    image: "/img/nilam.jpg",
    description:
      "Tanaman aromatik penghasil minyak atsiri yang dikenal dalam industri parfum dan pengobatan tradisional.",
    detailedDescription:
      "Nilam adalah tanaman tropis yang terkenal sebagai sumber utama minyak nilam (patchouli oil), yang digunakan luas dalam industri parfum, aromaterapi, dan pengobatan tradisional. Daun nilam mengandung senyawa patchouli alcohol yang memiliki aroma khas dan sifat antimikroba, anti-inflamasi, serta penenang. Di Indonesia, nilam merupakan komoditas ekspor unggulan dalam sektor minyak atsiri.",
    uses: [
      "Bahan dasar parfum dan aromaterapi",
      "Mengatasi stres dan kecemasan",
      "Mengobati masalah kulit ringan",
      "Sebagai anti-serangga alami",
    ],
    activeCompounds: [
      "Patchouli alcohol",
      "Alpha-guaiene",
      "Beta-caryophyllene",
      "Seychellene",
      "Norpatchoulenol",
    ],
    preparation: [
      "Petik daun nilam yang telah tua",
      "Keringkan di tempat teduh hingga kadar air menurun",
      "Ekstrak daun menggunakan metode penyulingan uap",
      "Minyak hasil penyulingan bisa digunakan langsung atau dicampur",
    ],
    precautions: [
      "Minyak nilam pekat dapat menyebabkan iritasi kulit jika tidak diencerkan",
      "Hindari penggunaan berlebihan pada anak-anak",
      "Konsultasikan dengan ahli aromaterapi sebelum penggunaan topikal",
      "Simpan minyak di tempat sejuk dan gelap agar tidak mudah teroksidasi",
    ],
    origin: "Asia Tenggara (termasuk Indonesia)",
    family: "Lamiaceae",
  },
];

export function getPlantById(id: number) {
  return toga.find((plant) => plant.id === id);
}

export function getAllPlants() {
  return toga;
}
