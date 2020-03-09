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
import React from 'react';
import Find from '../../src/components/Find';

export default { title: 'Find' };

const testComp = ({ value }) => <p>{value}</p>;
const ObjTestComp = ({ key, name, age }) => (
  <div>
    <div key={key}>Name: {name}</div>
    <div>Age: {age}</div>
    <br />
  </div>
);

const data = [1, 2, 3, 4, 5];
const objectData = [
  { name: 'Greg', age: 20 },
  { name: 'Josh', age: 25 },
  { name: 'Bob', age: 25 },
  { name: 'Jim', age: 25 },
  { name: 'Phillip' },
  { age: 27 },
  2,
  'string',
];
export const Default = () => (
  <Find data={data} render={testComp} function={acc => acc === 2} />
);

export const Object = () => (
  <Find
    data={objectData}
    render={ObjTestComp}
    function={acc => acc.name && acc.name === 'Jim'}
  />
);
export const withError = () => <Find data="Not an Array" render={testComp} />;
