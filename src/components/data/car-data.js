export const carBrandModels = {
  Suzuki: [
    "Alto",
    "Cultus",
    "Swift",
    "Wagon R",
    "Bolan",
    "Khyber",
    "Baleno",
    "Liana",
    "Margalla",
  ],
  Toyota: [
    "Corolla",
    "Yaris",
    "Corolla Cross",
    "Hilux",
    "Fortuner",
    "Prado",
    "Land Cruiser",
    "Aqua",
    "Prius",
  ],
  Honda: [
    "City",
    "Civic",
    "BR-V",
    "HR-V",
    "Accord",
    "Fit",
    "Insight",
    "Freed",
  ],
  Hyundai: [
    "Elantra",
    "Sonata",
    "Tucson",
    "Santa Fe",
    "Palisade",
    "Santro",
    "Accent",
  ],
  KIA: [
    "Picanto",
    "Sportage",
    "Sportage L",
    "Stonic",
    "Sorento",
    "Carnival",
    "Cerato",
  ],
  Changan: [
    "Alsvin",
    "Karvaan",
    "Oshan X7",
    "CX70T",
    "CS35 Plus",
    "CS75 Plus",
    "M9",
  ],
  MG: [
    "HS",
    "ZS",
    "ZS EV",
    "5",
    "5 EV",
    "Cyberster",
    "Extender",
  ],
};

export const carBrands = Object.keys(carBrandModels);

export const manufacturingYears = Array.from(
  { length: new Date().getFullYear() - 1989 },
  (_, index) => `${new Date().getFullYear() - index}`
);