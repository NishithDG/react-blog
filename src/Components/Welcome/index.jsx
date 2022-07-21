

import React from "react";
import PropTypes from 'prop-types'
import Articles from "./Articles";
import { useEffect } from "react";



class Welcome extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       articles:[],
    }
  }

  async UNSAFE_componentWillMount(){
    const articles = await this.props.getArticles()
    this.setState({articles})
  }

  handlePagination=async(url)=>{
    const articles = await this.props.getArticles(url)
    this.setState({articles})
  }

  render(){
    return(
      <Articles 
      articles={this.state.articles}
      nextUrl={this.state.articles.next_page_url}
      prevUrl={this.state.articles.prev_page_url}
      handlePagination={this.handlePagination}
      />
    )
  }


}
Welcome.propTypes={
  getArticles:PropTypes.func.isRequired,
//  / setArticles:PropTypes.func.isRequired
}

export default Welcome;