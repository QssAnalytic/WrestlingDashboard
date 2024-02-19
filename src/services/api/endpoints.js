const filterEndpoints = {
  countries: `filters/countries/`,
  fighters: (country_name) => `filters/fighters/${country_name}/`,
  years: (wrestler_id) => `filters/years/${wrestler_id}/`,
  allYears: `filters/years/`,

  
};

const rightFrameEndpoints = {
  medals: (fighter_id, year) => `section-right/medal-filter/?fighter_id=${fighter_id}&year=${year}`,
  // medals: (fighter_id, year) => `section-right/medal-filter/?fighter_id=${fighter_id}&year=${[2018,2019,2020,2021,2022,2023].join(",")}`,
  fights: (fighter_id, year) => `section-right/get-fight-count/?fighter_id=${fighter_id}&year=${year}`,
  points: (fighter_id, year) => `section-right/get-total-point/?fighter_id=${fighter_id}&year=${year}`,
  decisions: (fighter_id, year) => `section-right/get-decisions/?fighter_id=${fighter_id}&year=${year}`,
}


export { filterEndpoints, rightFrameEndpoints } 