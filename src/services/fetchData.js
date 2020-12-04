const blogAPIURL = "https://my.api.mockaroo.com/feather.json?key=6d5dc7d0";
const fetchData = async () => {
  try {
    let response = await fetch(blogAPIURL);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export { fetchData };
