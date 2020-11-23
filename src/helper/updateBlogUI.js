let createBlogImage = ({ blogImg, blogImgAlt }) => {
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("article-img");
  let blogImage = document.createElement("img");
  blogImage.setAttribute("src", blogImg);
  blogImage.setAttribute("alt", blogImgAlt);
  imageContainer.appendChild(blogImage);
  return imageContainer;
};

let createBlogContent = ({
  blogTitleText,
  blogAuthorDetailsText,
  blogContentText,
}) => {
  console.log(blogContentText);
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

let createBlog = (article) => {
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
      blogAuthorDetailsText:
        article.blogAuthor + ` ${new Date(article.blogCreatedAt)}`,
      blogContentText: article.blogContent,
    })
  );
  return articleDiv;
};

export { createBlog };
