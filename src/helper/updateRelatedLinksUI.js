//     <div class="related-articles-card" id="blogID" onclick="loadBlog('blogID')">
//          <h1>relatedBlogTitle</h1>
//     </div>
const updateRelatedLinks = (blogs) => {
  let relatedLinksContainer = document.getElementById(
    "related-articles-container"
  );
  // Empty existing links
  if (relatedLinksContainer.hasChildNodes()) {
    relatedLinksContainer.querySelectorAll("*").forEach((node) => {
      node.remove();
    });
  }
  blogs.forEach((blog) => {
    let relatedLinkCard = document.createElement("div");
    relatedLinkCard.classList.add("related-articles-card");
    relatedLinkCard.id = blog.id.$oid;
    relatedLinkCard.setAttribute("onclick", `loadBlog("${blog.id.$oid}")`);
    let blogTitle = document.createElement("h1");
    blogTitle.innerHTML = blog.blogTitle;
    relatedLinkCard.appendChild(blogTitle);
    relatedLinksContainer.appendChild(relatedLinkCard);
  });
};

export { updateRelatedLinks };
