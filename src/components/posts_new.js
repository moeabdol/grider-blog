import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  static get propTypes() {
    return {
      handleSubmit: PropTypes.func,
      createPost: PropTypes.func,
      history: PropTypes.object
    };
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        {touched ? error : ''}
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title"
          label="Title"
          component={this.renderField} />
        <Field name="categories"
          label="Categories"
          component={this.renderField} />
        <Field name="content"
          label="Content"
          component={this.renderField} />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.title) errors.title = 'Enter a title!';
  if (!values.categories) errors.categories = 'Choose a category!';
  if (!values.content) errors.content = 'Enter content!';

  return errors;
};

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
