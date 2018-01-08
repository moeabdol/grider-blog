import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  static get propTypes() {
    return {
      fetchPosts: PropTypes.func
    };
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
