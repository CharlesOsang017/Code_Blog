import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import axios from 'axios'

type BlogDetails = {
  _id: string,
  title: string,
  profileImg: string,
  date: Date,
  thumbnail: string,
  description: string,
}


const BlogDetails = () => {
  const {id} = useParams()

  const {data: blogDetails, isPending } = useQuery({
    queryKey: ['blogDetails'],
    queryFn: async()=>{
      const response = await axios.get(``)
    }
  })

    const sanitizedContent = DOMPurify.sanitize(placeholderData.content, {
        ADD_ATTR: ['target'], 
        ADD_TAGS: ['iframe'], 
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
