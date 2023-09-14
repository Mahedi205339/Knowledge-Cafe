import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({ blog ,handleAddToBookmark ,handleMarkAsRead}) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='w-4/5 mx-auto mb-6 md:mb-12 lg:mb-20 my-3'>
            <img className='w-full mb-3 md:mb-5 lg:mb-8' src={cover} alt={`Cover picture of the title${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                    onClick={()=>handleAddToBookmark(blog)}
                        className='ml-5 text-red-400 text-2xl'>
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h2 className='text-4xl font-semibold'>{title}</h2>
            <p className='mt-5 lg:mt-10 text-gray-500'>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a></span>)
                }
            </p>
            <button className='text-purple-600 font-bold underline mt-4' onClick={()=> handleMarkAsRead(reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    handleAddToBookmark :PropTypes.func ,
    blog: PropTypes.object.isRequired,
    handleMarkAsRead : PropTypes.func

}

export default Blog;