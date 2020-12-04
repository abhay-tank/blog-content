// <div class="article-img col-2">
//   <img src="./images/travel.gif" alt="travel-banner-image" />
// </div>
const createBlogImage = ({ blogImg, blogImgAlt }) => {
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("article-img");
  let blogImage = document.createElement("img");
  blogImage.setAttribute("src", blogImg);
  blogImage.setAttribute("alt", blogImgAlt);
  imageContainer.appendChild(blogImage);
  return imageContainer;
};

// <div class="article-content">
//   <h1>blogTitleText</h1>
//   <h4>blogAuthorDetailsText</h4>
//   <h3>
//      blogContentText
//   </h3>
// </div>
const createBlogContent = ({
  blogTitleText,
  blogAuthorDetailsText,
  blogContentText,
}) => {
  let contentContainer = document.createElement("div");
  contentContainer.classList.add("article-content");
  let blogTitle = document.createElement("h1");
  blogTitle.innerHTML = blogTitleText;
  let blogAuthor = document.createElement("h4");
  blogAuthor.innerHTML = blogAuthorDetailsText;
  let blogContent = document.createElement("h3");
  blogContent.innerHTML = blogContentText;
  contentContainer.appendChild(blogTitle);
  contentContainer.appendChild(blogAuthor);
  contentContainer.appendChild(blogContent);
  return contentContainer;
};

// <article id="articleID" class="article row"></article>
const createBlog = (article) => {
  // Empty existing Blog
  let articleSection = document.getElementById("articles-section");
  if (articleSection.hasChildNodes()) {
    articleSection.querySelectorAll("*").forEach((node) => {
      node.remove();
    });
  }
  let articleDiv = document.createElement("article");
  articleDiv.id = article.id.$oid;
  articleDiv.classList.add("article", "row");
  articleDiv.appendChild(
    createBlogImage({
      blogImg: article.blogImg,
      blogImgAlt: article.blogImgAlt,
    })
  );
  articleDiv.appendChild(
    createBlogContent({
      blogTitleText: article.blogTitle,
      blogAuthorDetailsText: article.blogAuthor + ` - ` + article.blogCreatedAt,
      blogContentText: article.blogContent,
    })
  );
  articleSection.appendChild(articleDiv);
};

// This file will create following Markup

// <article id="articleID" class="article row">
//    <div class="article-img col-2">
//      <img src="./images/travel.gif" alt="travel-banner-image" />
//    </div>
//    <div class="article-content">
//      <h1>blogTitleText</h1>
//      <h4>blogAuthorDetailsText</h4>
//      <h3>
//          blogContentText
//      </h3>
//    </div>
// </article>

export { createBlog };
