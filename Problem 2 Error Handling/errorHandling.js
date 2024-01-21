// Problem 2: Error Handling
// Design a function that fetches data from an API endpoint. Implement proper error handling to handle various HTTP status codes and network failures.
// Log appropriate messages for each type of error encountered.

async function fetchDataFromAPI(apiEndpoint) {
  try {
    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      switch (response.status) {
        case 400:
          throw new Error("Bad Request: The request is invalid.");
        case 401:
          throw new Error("Unauthorized: Authentication is required.");
        case 403:
          throw new Error(
            "Forbidden: You do not have permission to access the resource."
          );
        case 404:
          throw new Error("Not Found: The requested resource is not found.");
        default:
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts/1";

fetchDataFromAPI(apiEndpoint)
  .then((data) => {
    console.log("Data from API:", data);
  })
  .catch((error) => {
    console.error("Fetch Data Error:", error.message);
  });
