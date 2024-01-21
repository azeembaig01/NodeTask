// Problem 1: Asynchronous Operations
// Create a function that takes in an array of URLs and downloads the contents from each URL using asynchronous methods.
// Once all downloads are complete, return an array with the downloaded contents in the same order as the URLs.

async function downloadContents(urls) {
  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));

    const contents = await Promise.all(
      responses.map(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.text();
      })
    );

    return contents;
  } catch (error) {
    throw new Error(`Error downloading contents: ${error.message}`);
  }
}

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

downloadContents(urls)
  .then((contents) => {
    console.log("Downloaded contents:", contents);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
