export const API_URL = "http://localhost:3000";

export const getJson = async function(url) {
    const response = await fetch(url);
    const data = await response.json();
    
    return data;
};

export const post = async function(url, data = {}) {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.        
        headers: {
          'Content-Type': 'application/json'          
        },        
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
};