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
import { shallow } from 'enzyme';
import Sort from '../../src/components/Sort';

const TestComponent = () => (<div />);

describe('Sort', () => {
  it('successfully sorts the array of objects to the passed component', () => {
    const renderedComp = shallow(
      <Sort
        data={[{ name: 'Bob', age: 30 }, { age: 28 }]}
        render={TestComponent}
        function={(a, b) => b.age - a.age}
        className="test"
        keyParam="name"
      />
    );
    expect(renderedComp).toHaveLength(2);
  });

  it('successfully sorts the array of integers to the passed component', () => {
    const renderedComp = shallow(
      <Sort
        data={[1, 2, 3, 4]}
        render={TestComponent}
        function={(a, b) => a - b}
        className="test"
      />
    );
    expect(renderedComp).toHaveLength(4);
  });

  it('does not sort the data if no sort function is passed', () => {
    const renderedComp = shallow(
      <Sort
        data={[1, 2, 3, 4]}
        render={TestComponent}
        className="test"
      />
    );
    expect(renderedComp).toHaveLength(4);
  });

  it('throws the error when the iterable is not an array', () => {
    expect(() => shallow(
      <Sort
        data="Not an array"
        render={TestComponent}
        className="test"
      />
    )).toThrow(TypeError);
  });
});
