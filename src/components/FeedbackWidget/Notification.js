import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message, total }) => total === 0 && <p>{message}</p>;

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
