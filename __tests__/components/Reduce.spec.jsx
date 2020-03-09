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
import Reduce from '../../src/components/Reduce';

const TestComponent = () => (<div />);

describe('Reduce', () => {
  it('successfully reduces the data set depending on the function passed', () => {
    const renderedComp = shallow(
      <Reduce
        data={[20, 21, 22, 23, 24, 25]}
        render={TestComponent}
        className="test"
        function={(acc, current) => acc + current}
        initialVal={0}
      />
    );
    expect(renderedComp).toHaveLength(1);
  });

  it('uses the default prop for function when no function is passed', () => {
    const renderedComp = shallow(
      <Reduce
        data={[20, 21, 22, 23, 24, 25]}
        render={TestComponent}
        className="test"
      />
    );
    expect(renderedComp).toHaveLength(1);
  });

  it('throws the error when the iterable is not an array', () => {
    expect(() => shallow(
      <Reduce
        data="Not an array"
        render={TestComponent}
        className="test"
        function={(acc, current) => acc + current}
      />
    )).toThrow(TypeError);
  });
});
