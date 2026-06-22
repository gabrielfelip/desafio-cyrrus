export const CHILDREN = [
  {
    id: 1,
    name: 'Lucas',
    birthDate: '2022-01-10'
  },
  {
    id: 2,
    name: 'Maria',
    birthDate: '2019-05-20'
  },
  {
    id: 3,
    name: 'João',
    birthDate: '2020-08-15'
  }
];

export const VACCINES = [
  { id: 1, name: 'BCG', recommendedAgeMonths: 0 },
  { id: 2, name: 'Hepatite B', recommendedAgeMonths: 0 },
  { id: 3, name: 'Tríplice Viral', recommendedAgeMonths: 12 },
  { id: 4, name: 'Influenza', recommendedAgeMonths: 6 },
  { id: 5, name: 'Poliomielite', recommendedAgeMonths: 2 }
];

export const VACCINATIONS = [
  // Lucas
  {
    childId: 1,
    vaccineId: 1,
    applied: true,
    applicationDate: '2022-01-11',
    scheduledDate: '2022-01-10'
  },
  {
    childId: 1,
    vaccineId: 3,
    applied: false,
    scheduledDate: '2023-01-10'
  },
  {
    childId: 1,
    vaccineId: 5,
    applied: false,
    scheduledDate: '2023-03-10'
  },

  // Maria
  {
    childId: 2,
    vaccineId: 2,
    applied: true,
    applicationDate: '2019-05-21',
    scheduledDate: '2019-05-20'
  },
  {
    childId: 2,
    vaccineId: 4,
    applied: false,
    scheduledDate: '2024-01-10'
  },

  // João
  {
    childId: 3,
    vaccineId: 1,
    applied: true,
    applicationDate: '2020-08-16',
    scheduledDate: '2020-08-15'
  },
  {
    childId: 3,
    vaccineId: 3,
    applied: false,
    scheduledDate: '2024-02-10'
  }
];