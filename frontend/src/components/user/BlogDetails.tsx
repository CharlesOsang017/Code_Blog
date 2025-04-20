import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import axios from "axios";
import { useParams } from "react-router-dom";

type BlogDetails = {
  _id: string;
  title: string;
  author: { username: string; profileImg: string };
  createdAt: string; 
  thumbnail: string;
  description: string;
};

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: blogDetails,
    isPending,
    isError,
    error,
  } = useQuery<BlogDetails>({
    queryKey: ["blogDetails", id],
    enabled: !!id,
    queryFn: async () => {
      const response = await axios.get(`/api/blogs/blog-details/${id}`);
      return response.data;
    },
  });
  console.log("blog Details", blogDetails);

  if (isPending) return <p className='text-center py-8'>Loading blog...</p>;
  if (isError || !blogDetails)
    return <p className='text-center py-8 text-red-500'>{error.message}</p>;

const sanitizedContent = DOMPurify.sanitize(blogDetails.description, {
  ADD_ATTR: [
    "target",
    "src",
    "allow",
    "allowfullscreen",
    "frameborder",
    "loading",
    "alt",
    "title",
    "width",
    "height",
    "class",
    "style",
    "href",
    "rel",
    "id",
    "name",
    "type",
    "value",
    "aria-label",
    "tabindex"
  ],
  ADD_TAGS: [
    "iframe",
    "img",
    "video",
    "source",
    "picture",
    "figure",
    "figcaption",
    "section",
    "article",
    "header",
    "footer",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "span",
    "div",
    "p",
    "a",
    "strong",
    "em",
    "ul",
    "ol",
    "li",
    "br",
    "hr",
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "blockquote",
    "code",
    "pre"
  ]
});


  return (
    <article className='p-4 max-w-3xl mx-auto'>
      <header className='mb-8'>
        <h1 className='text-3xl font-bold mb-4'>{blogDetails.title}</h1>

        <div className='flex items-center gap-3 mb-4'>
          <img
            src={blogDetails.author.profileImg}
            alt={`${blogDetails.author}'s profile`}
            className='w-10 h-10 rounded-full object-cover'
            width={40}
            height={40}
            loading='lazy'
          />
          <div>
            <p className='font-semibold'>{blogDetails.author.username}</p>
            <p className='text-sm text-gray-500'>
              {new Date(blogDetails.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <img
          src={blogDetails.thumbnail}
          alt={`Cover for ${blogDetails.title}`}
          className='w-full h-auto rounded-xl mb-6 mt-4'
          loading='lazy'
        />
      </header>

      <div
        className='prose max-w-none'
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
    </article>
  );
};

export default BlogDetails;
