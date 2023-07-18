export interface CountryStatus {
  name: string;
  flag: string;
  status: "correct" | "skipped";
}

export interface Country {
  name: string;
  flag: string;
}
