// RentCastAPI.js
export const getRentListingsByCity = async (location, radius, bathrooms, bedrooms) => {
    const url = `'https://api.rentcast.io/v1/listings/rental/long-term?city=${location}&radius=${radius}&propertyType=Apartment&bedrooms=${bedrooms}&bathrooms=${bathrooms}&status=Active&limit=1'`;
  
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-Api-Key': 'f8bed8d23ea943b385702a6bee0ff2f9'
      }
    };
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        console.log(`Error fetching data: ${response.statusText}`);
        return [];
      }
  
      const data = await response.json();
      console.log('Fetched data:', data);
      return data; // Return the fetched data
    } catch (error) {
      console.error("Error fetching rental listings:", error);
      return [];
    }
  };
  