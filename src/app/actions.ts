'use server'

const BASE_PATH = process.env.API_BASE_PATH
const API_KEY = process.env.API_KEY

export async function getHolidays(year: number) {
  try {
    const months = Array.from({length: 12}, (_, i) => String(i + 1).padStart(2, '0'));
    const promises = months.map(month => 
      fetch(`${BASE_PATH}/getRestDeInfo?solYear=${year}&solMonth=${month}&serviceKey=${API_KEY}&_type=json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          '_type': 'json'
        }
      }).then(res => res.json())
    );
    
    const results = await Promise.all(promises);
    return results.flatMap(result => 
      result.response.body.items.item || []
    );
  } catch (error) {
    console.error('Error in server action:', error);
    throw new Error('Failed to fetch holidays');
  }
} 