import { createBlog } from "./helper/updateBlogUI.js";
import { updateRelatedLinks } from "./helper/updateRelatedLinksUI.js";
const blogAPIURL = "https://my.api.mockaroo.com/feather.json?key=6d5dc7d0";
let blogArticles = [];
// Blog Data Schema
// id | blogAuthor | blogContent | blogTitle | blogImg | blogImgAlt | blogCreatedAt
//  blog id in form of mongoid therefore syntax blogArticles[0].id.$oid

// Return New Array without currentBlog
const filterCurrentBlog = (currBlog) =>
  blogArticles.filter((blog) => blog != currBlog);

const loadBlog = (blogID) => {
  let blog = blogArticles.find((blog) => blog.id.$oid == blogID);
  createBlog(blog);
  updateRelatedLinks(filterCurrentBlog(blog));
};

window.onload = () => {
  fetch(blogAPIURL)
    .then(async (data) => {
      blogArticles = await data.json();
      loadBlog(blogArticles[0].id.$oid);
    })
    .catch((Error) => console.error(Error));
};
window.loadBlog = loadBlog;
