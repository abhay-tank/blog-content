let articles = [
  {
    id: 123,
    headerImageURL: "./images/expense.gif",
    headerImageAlt: "image",
    blogTitle: "Hello World",
    blogAuthor: "Alberto Gimeno Mar 16, 2016·4 min read",
    blogContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod nostrum quia molestias et, soluta adipisci fugit autem labore voluptate modi fugiat voluptas, itaque minus debitis dolor est necessitatibus facere suscipit, iusto consectetur! Quis delectus laborum deleniti ratione illo dolor provident commodi dicta aperiam, voluptatibus iste molestiae quia? Molestiae neque veritatis dignissimos laborum aliquam dolores quo, similique libero minima vel in dicta qui ducimus cum, ab quia. Laborum itaque nostrum qui nam ducimus dignissimos? Quidem modi, eius ipsum provident animi unde ad obcaecati doloribus corrupti voluptates iure pariatur odio cum dolores maiores porro. Minima repellat atque sapiente quod tenetur laudantium quo, impedit labore molestias voluptatibus sunt animi ullam et eos enim, ex reiciendis veritatis iure quia suscipit eum dolorum vero fugit sint! Aperiam modi amet incidunt quos? Praesentium, pariatur mollitia? Earum consectetur aspernatur sunt qui error optio autem aliquam rem, inventore itaque enim praesentium, dicta eum, hic ducimus et saepe omnis accusamus adipisci odit cumque pariatur ex dolorum incidunt. Delectus placeat itaque exercitationem modi inventore similique nisi molestias eos quos et non, cum saepe ducimus, est cumque libero recusandae corrupti temporibus numquam? Voluptas exercitationem beatae quae rem placeat, sapiente voluptates necessitatibus eos eligendi inventore maxime accusantium obcaecati excepturi, molestias perspiciatis esse delectus dolorum ea? Fugit quaerat eligendi similique odit sint nulla ullam suscipit numquam quas, soluta nobis delectus. Sed error dolorem expedita sint magnam aut. Velit sequi temporibus deserunt blanditiis recusandae fugiat voluptatibus praesentium, libero sint optio porro doloribus corporis iste, qui cumque est aliquam voluptas odit! Ratione quam nihil officiis excepturi tenetur omnis nesciunt, laborum cum ipsam, voluptas officia culpa vel quae eveniet non. Quia sit aperiam obcaecati facere sint, at ut quo repellendus quas, tenetur amet delectus veniam fugiat expedita deserunt nihil odit qui cum accusantium neque voluptas voluptatum ex. Magni odio quasi minus ratione excepturi alias, sed rem ipsam, eligendi veritatis quas numquam vero eum assumenda impedit quidem earum quis possimus accusantium distinctio sint soluta quo. Vel quaerat omnis neque rem obcaecati numquam dolores nemo accusantium repudiandae assumenda eius, adipisci deleniti veritatis qui id soluta quis tenetur, nihil beatae ex dicta accusamus cumque? Eos a labore qui! Eos deleniti ipsam laudantium harum. Architecto animi ex eius rem aliquam rerum? Et nihil expedita ullam libero excepturi dignissimos praesentium nam dolores odit, recusandae impedit culpa fugit consectetur maiores, quas quibusdam repellat unde cum exercitationem assumenda explicabo beatae obcaecati laboriosam? Atque nobis quasi possimus? Veritatis tenetur voluptates voluptatum nostrum ducimus nam, placeat eligendi vitae rerum consequuntur illum repudiandae ratione praesentium sint, voluptatibus laborum? Iure repellat necessitatibus laboriosam odio, odit harum facilis alias ex, ea corporis eligendi sequi maiores hic architecto aperiam omnis totam, non eveniet repudiandae ipsam! Ut, omnis laborum dolores soluta ipsum, repudiandae reiciendis tempore earum et necessitatibus assumenda eos sapiente quaerat unde natus, maiores ullam. Magnam esse atque, quidem quod et assumenda similique sed excepturi quos commodi, vero doloremque nulla eum dolor consequuntur nobis accusamus, beatae ratione unde. Eaque sunt officiis, ab, repellat nihil debitis eum, at aliquid modi incidunt atque nobis totam assumenda ipsum minima voluptatem quidem.",
  },
];
let createBlogImage = () => {
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("article-img");
  let blogImage = document.createElement("img");
  blogImage.setAttribute("src", articles[0].headerImageURL);
  blogImage.setAttribute("alt", articles[0].headerImageAlt);
  imageContainer.appendChild(blogImage);
  return imageContainer;
};

let createBlogContent = () => {
  let contentContainer = document.createElement("div");
  contentContainer.classList.add("article-content");
  let blogTitle = document.createElement("h1");
  blogTitle.innerHTML = articles[0].blogTitle;
  let blogAuthor = document.createElement("h4");
  blogAuthor.innerHTML = articles[0].blogAuthor;
  let blogContent = document.createElement("h3");
  blogContent.innerHTML = articles[0].blogContent;
  contentContainer.appendChild(blogTitle);
  contentContainer.appendChild(blogAuthor);
  contentContainer.appendChild(blogContent);
  return contentContainer;
};

let createBlog = () => {
  let articleDiv = document.createElement("article");
  articleDiv.id = articles[0].id;
  articleDiv.classList.add("article", "row");
  articleDiv.appendChild(createBlogImage());
  articleDiv.appendChild(createBlogContent());
  document.getElementById("articles-section").appendChild(articleDiv);
};

createBlog();
