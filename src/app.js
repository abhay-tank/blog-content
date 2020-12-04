import { createBlog } from "./helper/updateBlogUI.js";
import { updateRelatedLinks } from "./helper/updateRelatedLinksUI.js";
import { fetchData } from "./services/fetchData.js";
// Blog Promise
let blogArticles;
// Blog Data Schema
// id | blogAuthor | blogContent | blogTitle | blogImg | blogImgAlt | blogCreatedAt
//  blog id in form of mongoid therefore syntax blogArticles[0].id.$oid

const loadBlog = (blogID) => {
  blogArticles.then((blogs) => {
    let currBlog = blogs.find((blog) => blog.id.$oid == blogID);
    createBlog(currBlog);
    updateRelatedLinks(blogs.filter((blog) => blog != currBlog));
  });
};

window.onload = () => {
  blogArticles = fetchData();
  blogArticles.then((data) => {
    loadBlog(data[0].id.$oid);
    document.getElementById("loadingDiv").style.display = "none";
  });
};
window.loadBlog = loadBlog;
