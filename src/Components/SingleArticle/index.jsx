import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article';

class SingleArticleContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      article: null,
      loading: true,
    };
  }
  async UNSAFE_componentWillMount(){
    //console.log(this.props)
    const article = await this.props.getArticle(this.props.match.params.slugs)
    this.setState({article})
  }

  render() {
    return (
      <div>
        {/* {
          !this.state.loading &&
          <Article
            article={this.state.article}
          />
        }
        {
          this.state.loading &&
          <p className="text-center">LOADING ...</p>
        } */}
        <Article article={this.state.article}/>
      </div>
    );
  }
}

SingleArticleContainer.propTypes = {
  getArticle: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      slugs: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    created_at: PropTypes.string.isRequired,
  })).isRequired,
};

export default SingleArticleContainer;