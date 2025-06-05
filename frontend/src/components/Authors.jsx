import { FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";
import './Authors.css';
import {Link} from 'react-router-dom';

const Authors = ({ authors, setAuthors }) => {
  return (
    <div className="authors-container">
      
      <div className="authors-list">
        {authors.map(author => (
          <div className="author-card" key={author._id}>
            <div className="author-image-wrapper">
              {author.profilePhoto ? (
                <img className="author-image" src={author.profilePhoto} alt="Profile" />
              ) : (
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="err" className="author-image" />
              )}
            </div>
            <div className="author-info">
              <div className="author-name">
                {author.firstName} {author.lastName}
              </div>
              <div className="author-role">
                 {author.title}
              </div>
              <div className="author-links">
                {author?.linkedIn &&

                  <Link to={author?.linkedIn? author?.linkedIn: "" }><FaLinkedinIn /></Link>
                }
                <br />
                {
                  author?.twitter && <Link to={ author?.twitter?author.twitter:"" }><FaTwitterSquare /></Link>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;