import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks ,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2">
            <div className='my-4'>
                <h3 className='text-2xl text-center'>
                    Reading Time :{readingTime} min
                </h3>
            </div>
            <h2 className="text-3xl text-center ">Bookmarks :{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;