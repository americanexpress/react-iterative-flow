/*
 * Copyright 2020 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

import React, { Fragment } from 'react';
import {
  oneOfType,
  func,
  element,
  arrayOf,
  any,
} from 'prop-types';
import { throwErrorIfInvalid } from '../utils';

const Reduce = ({
  data,
  render: Component,
  function: reduceFunction,
  initialVal,
  ...extraProps
}) => {
  throwErrorIfInvalid(data);
  const finalValue = [...data].reduce(reduceFunction, initialVal);
  return <Component value={finalValue} {...extraProps} />;
};

Reduce.propTypes = {
  data: arrayOf(any),
  render: oneOfType([func, element]),
  function: func,
  initialVal: oneOfType(any),
};

Reduce.defaultProps = {
  data: [],
  render: Fragment,
  function: data => data,
  initialVal: '',
};

export default Reduce;
