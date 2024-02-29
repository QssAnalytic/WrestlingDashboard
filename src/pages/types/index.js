const decisionTypes = {
  WinDecision: "win_decision",
  LoseDecision: "lose_decision",
};

const PlaceTypes = {
  GoldPlace: "gold_place",
  SilverPlace: "silver_place",
  BronzePlace: "bronze_place",
};

const MedalTypes = {
  Gold: "Gold",
  Silver: "Silver",
  Bronze: "Bronze",
};

const PointTypes = {
  Gained: "gained",
  Skipped: "skipped",
};

const MetricActions = [
  { data: "Takedown Score" },
  { data: "Defence Score" },
  { data: "Offense Score" },
  { data: "Durability Score" },
];

export { decisionTypes, MedalTypes, PlaceTypes, PointTypes,MetricActions };
