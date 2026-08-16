export const company = {
  name: "EHT EnergieHeizTechnik GmbH",
  short: "EnergieHeizTechnik",
  street: "Ehlbeek 2",
  city: "30938 Burgwedel",
  country: "Deutschland",
  email: "info@energieheiztechnik.de",
  hrb: "HRB 226240",
  court: "Amtsgericht Hannover",
  ceo: "Maximilian Struckmann",
  vat: "DE453124536",
  url: "https://energieheiztechnik.de",
};

export const partners = [
  { name: "Huawei", note: "Wechselrichter & Energiemanagement" },
  { name: "Sungrow", note: "Wechselrichter" },
  { name: "AlphaESS", note: "Stromspeicher" },
  { name: "BYD", note: "Batteriesysteme" },
];

export type ProductKey = "photovoltaik" | "stromspeicher" | "waermepumpe" | "wallbox";
