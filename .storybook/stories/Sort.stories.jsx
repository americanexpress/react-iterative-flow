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
import Sort from '../../src/components/Sort';

export default { title: 'Sort' };

const testComp = ({ name, age, value }) => (
  <div>
    <div>{name ? `Name: ${name}` : value}</div> 
    <div>{age && `Age: ${age}`}</div>
    <br />
  </div>
  );
  
  const data = [
    { name: 'Josh', age: 24 }, 
    { name: 'Bob', age: 25 }, 
    { name: 'Jim', age: 28 },
    { name: 'Greg', age: 20 }, 
    { name: 'Phillip', age: 19 },
    { age: 27 }
]

export const ageAscending = () => (
  <Sort 
  data={data}
  function={(a, b) => a.age - b.age}
  render={testComp}
  keyParam="name"
  />
);

  export const ageDescending = () => (
    <Sort 
    data={data}
    function={(a, b) => b.age - a.age}
    render={testComp}
    keyParam="name"
    />
);

export const noSortCondition = () => (
  <Sort 
  data={data}
  render={testComp}
  keyParam="name"
  />
);

export const withError = () => (
  <Sort 
  data="Not an Array"
  render={testComp}
  />
);
