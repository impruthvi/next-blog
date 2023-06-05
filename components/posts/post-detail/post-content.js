import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const PostContent = (props) => {
  const DUMMY_POST = {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  };

  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
    
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.excerpt}
    </article>
  );
};

export default PostContent;