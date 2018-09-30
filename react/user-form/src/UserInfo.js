import React from 'react';
import { connect } from 'react-redux';

const UserInfo = ({ name, age, isStudent }) => (
  <div className="row">
    <div className="col-sm-6">
      <samp>
        {isStudent ? 'Student ' : ''}
        {name}
        {' is '}
        {age}
        {' years old.'}
      </samp>
    </div>
  </div>
);

const toProps = ({ name, age, isStudent }) => ({ name, age, isStudent });
export default connect(toProps)(UserInfo);