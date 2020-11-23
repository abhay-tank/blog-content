import { createBlog } from "./helper/updateBlogUI.js";

const blogAPIURL = "https://my.api.mockaroo.com/feather.json?key=6d5dc7d0";

// Blog Data Schema
// id | blogAuthor | blogContent | blogTitle | blogImg | blogImgAlt | blogCreatedAt
//  blog id in form of mongoid therefore syntax blogArticles[0].id.$oid
window.onload = () => {
  fetch(blogAPIURL)
    .then(async (data) => {
      console.log(data);
      let blogArticles = await data.json();
      const articleSection = document.getElementById("articles-section");
      articleSection.appendChild(createBlog(blogArticles[0]));
    })
    .catch((Error) => console.error(Error));
};
