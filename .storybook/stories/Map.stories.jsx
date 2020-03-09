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
import Map from '../../src/components/Map';

export default { title: 'Map' };

const testComp = ({ name, age, value }) => (
  <div>
    <div>{name ? `Name: ${name}` : value}</div> 
    <div>{age && `Age: ${age}`}</div>
    <br />
  </div>
  );

  const testCompArr = ({ value }) => (
    <div>
      <div>{value}</div> 
    </div>
  );   

  const data = [
    { name: 'Greg', age: 20 }, 
    { name: 'Josh', age: 25 }, 
    { name: 'Bob', age: 25 }, 
    { name: 'Jim', age: 25 },
    { name: 'Phillip' },
    { age: 27 },
    2,
    'string'
]

export const Default = () => (
<Map 
data={data}
render={testComp}
keyParam="name"
/>
);

export const ArrayOnly = () => (
  <Map 
  data={[1,2,3,4]}
  render={testCompArr}
  />
);

export const withError = () => (
  <Map 
  data="Not an Array"
  render={testComp}
  />
);
