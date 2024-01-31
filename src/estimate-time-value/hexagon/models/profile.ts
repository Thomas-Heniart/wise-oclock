export type Profile = {
  name: string | null;
  "60minutesPhoneCallValue": number | null;
  "60minutesEasyTaskValue": number | null;
  monthlyIncome: number | null;
  monthlyWorkedHours: number | null;
  monthlyHoursSpentInTransport: number | null;
  satisfactionThreshold: number | null;
  estimatedTimeValue: number | null;
};

export const estimateProfile = (profile: Profile) => {
  if (!profile["monthlyWorkedHours"]) return null;

  return (
    (profile["satisfactionThreshold"]! +
      profile["60minutesPhoneCallValue"]! +
      profile["60minutesEasyTaskValue"]! +
      profile["monthlyIncome"]! /
        (profile["monthlyWorkedHours"] +
          profile["monthlyHoursSpentInTransport"]!)) /
    4
  );
};
