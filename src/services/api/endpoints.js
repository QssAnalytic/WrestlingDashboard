const filterEndpoints = {
  countries: `filters/countries/`,
  fighters: (country_name) => `filters/fighters/${country_name}/`,
  years: (wrestler_id) => `filters/years/${wrestler_id}/`,
};

export {filterEndpoints}