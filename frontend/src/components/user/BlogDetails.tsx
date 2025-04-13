import DOMPurify from 'dompurify';

const placeholderData = {
  title: "What is Lorem Ipsum?",
  author: "Charles Osango",
  authorImage:
    "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg",
  date: "April 13, 2025",
  coverImage:
    "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg",
  content: `
        <p>
          <h2>Where <p><em>This is the initial content of the editor.</em></p> </a></p> does it come from?</h2> Contrary to popular belief, Lorem Ipsum is
          not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, <strong>consectetur</strong>, from a
          Lorem Ipsum passage, and <code>npm install</code> going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32. The standard chunk of
          Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
          Malorum" by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the <a href="#>1914</a> translation by H.
          Rackham.
        </p>
      `,
};

const BlogDetails = () => {
  // In a real app, you might want to sanitize the HTML content before using dangerouslySetInnerHTML
  // You could use a library like DOMPurify for this purpose
    // Sanitize the HTML content
    const sanitizedContent = DOMPurify.sanitize(placeholderData.content, {
        ADD_ATTR: ['target'], // Allow target attribute for links
        ADD_TAGS: ['iframe'], // Add any additional tags your editor uses
      });

  return (
    <article className='p-4 max-w-3xl mx-auto'>
      <header className='mb-8'>
        <h1 className='text-3xl font-bold mb-4'>{placeholderData.title}</h1>

        <div className='flex items-center gap-3 mb-4'>
          <img
            src={placeholderData.authorImage}
            alt={`${placeholderData.author}'s profile`}
            className='w-10 h-10 rounded-full object-cover'
            width={40}
            height={40}
            loading='lazy'
          />
          <div>
            <p className='font-semibold'>{placeholderData.author}</p>
            <p className='text-sm text-gray-500'>{placeholderData.date}</p>
          </div>
        </div>

        <img
          src={placeholderData.coverImage}
          alt={`Cover for ${placeholderData.title}`}
          className='w-full h-auto rounded-xl mb-6 shadow-lg'
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
