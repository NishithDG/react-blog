// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// const Article = ({ article }) => ((
//   <article className="mt-90">
//     <header className="text-center mb-40">
//       <h3>
//         <Link to={`article/${article.slug}`}>{article.title}</Link>
//       </h3>
//       <div className="link-color-default fs-12">
//         <a href="#">{article.category.name}</a>,
//         <time>{(new Date(article.created_at)).toDateString()}</time>
//       </div>
//     </header>
//     <a href="blog-single.html">
//       <img className="rounded" src={article.imageUrl} alt="..." />
//     </a>
//     <div className="card-block">
//       <p className="text-center mt-40">
//         <Link className="btn btn-primary btn-round" to={`article/${article.slug}`}>Read more</Link>
//       </p>
//     </div>
//   </article>
// ));

// Article.propTypes = {
//   article: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     slug:PropTypes.isRequired,
//     category: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//     }).isRequired,
//     created_at: PropTypes.string.isRequired,
//   }).isRequired,
 
// };

// export default Article;

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Article=({article})=>{
    return (
      <article className="mt-90">
        
        <header className="text-center mb-40">
          <h3>
            <Link to={`/article/${article.id}`}>
              {article.title}
            </Link>
          </h3>
          <div className="link-color-default fs-12">
            
            <a href="$">{article.category.name}</a>,<time>May 13, 2017</time>
          </div>
        </header>
        <a href="blog-single.html">
          <img className="rounded" src={article.imageUrl} alt="..." />
        </a>
        <div className="card-block">
          <p className="text-justify">
            Together. Great. So good was saying, that cant first let called air
            divide stars male isnt i. Herb third let may fourth divide. Greater
            gathering land youll i their beast have. Shed form sea it wherein
            fowl, spirit creeping living. Likeness creepeth you hath heaven.
            Likeness, moveth fruitful behold. Open evening a air us behold.
            Saying above moving second a subdue likeness after also second.
          </p>
          <p className="text-center mt-40">
            <Link className="btn btn-primary btn-round" to={`/article/${article.id}`}>
              Read more
            </Link>
          </p>
        </div>
      </article>
    );
}
Article.propTypes = {
  article: PropTypes.shape({
    id:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    slug:PropTypes.isRequired,
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
 
};


export default Article