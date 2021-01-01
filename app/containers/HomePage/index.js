/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Counter from 'components/Counter';
import Button from 'components/Button';
import Text from 'components/Text';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { makeSelectCounter, makeSelectData } from './selectors';
import {
  incrementCounter,
  decrementCounter,
  getDummyData,
  getPost,
} from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'HomePage';

function HomePage(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div style={{ margin: '5%' }}>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Counter Application" />
      </Helmet>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Counter count={props.counter} />
      <Button buttonName="Increment" onClick={props.handleIncrement} />{' '}
      <Button buttonName="Decrement" onClick={props.handleDecrement} />
      <br />
      <br />
      <button type="button" onClick={props.handleData}>
        Fetch
      </button>
      <Text data={props.data} />
      <Formik
        initialValues={{
          title: '',
          post: '',
          userId: '',
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(10, 'Must be less than 15')
            .min(2, 'Must be more than 2 characters')
            .required('Required'),
          post: Yup.string()
            .max(15, 'Must be less than 15')
            .min(4, 'Must be more than 4 characters')
            .required('Required'),
          userId: Yup.string()
            .max(4, 'Must be less than 15')
            .min(2, 'Must be more than 2 characters')
            .required('Required'),
        })}
        onSubmit={(values, actions) => {
          props.handlePost(values);
          actions.setSubmitting(false);
        }}
      >
        {formik => (
          <Form>
            <label htmlFor="title">Title</label>
            <br />
            <Field name="title" type="text" />
            <br />
            <ErrorMessage name="title" />
            <br />
            <br />
            <label htmlFor="post">Post</label>
            <br />
            <Field name="post" type="text" />
            <br />
            <ErrorMessage name="post" />
            <br />
            <br />
            <label htmlFor="userId">UserID</label>
            <br />
            <Field name="userId" type="text" />
            <br />
            <ErrorMessage name="userId" />
            <br />
            <br />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

HomePage.propTypes = {
  counter: PropTypes.number,
  data: PropTypes.object,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
  handleData: PropTypes.func,
  handlePost: PropTypes.func,
};

const mapStateToProps = createSelector(
  makeSelectCounter(),
  makeSelectData(),
  (counter, data) => ({
    counter,
    data,
  }),
);

function mapDispatchToProps(dispatch) {
  return {
    handleIncrement: () => dispatch(incrementCounter()),
    handleDecrement: () => dispatch(decrementCounter()),
    handleData: () => dispatch(getDummyData()),
    handlePost: values => dispatch(getPost(values)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
