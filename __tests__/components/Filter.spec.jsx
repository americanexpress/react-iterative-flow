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
import Filter from '../../src/components/Filter';

const TestComponent = () => (<div />);

describe('Filter', () => {
  it('successfully filters the array of objects and returns a mapped component for each that meet the condition', () => {
    const renderedComp = shallow(
      <Filter
        data={[{ name: 'Bob', age: 30 }, { age: 20 }]}
        function={val => val.age > 25}
        render={TestComponent}
        className="test"
        keyParam="name"
      />
    );
    expect(renderedComp).toHaveLength(1);
  });

  it('successfully filters the array of numbers and returns a mapped component for each that meet the condition', () => {
    const renderedComp = shallow(
      <Filter
        data={[1, 2, 3, 4]}
        function={val => val > 2}
        render={TestComponent}
        className="test"
        keyParam="name"
      />
    );
    expect(renderedComp).toHaveLength(2);
  });

  it('Iterates through every item and returns a mapped component for each', () => {
    const renderedComp = shallow(
      <Filter
        data={[{ name: 'Bob', age: 30 }, { age: 20 }]}
        render={TestComponent}
        className="test"
        keyParam="name"
      />
    );
    expect(renderedComp).toHaveLength(2);
  });

  it('throws the error when the iterable is not an array', () => {
    expect(() => shallow(
      <Filter
        data="Not an array"
        render={TestComponent}
        className="test"
      />
    )).toThrow(TypeError);
  });
});
