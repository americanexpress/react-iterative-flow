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
import Reduce from '../../src/components/Reduce';

export default { title: 'Reduce' };

const testComp = ({ value }) => (<p>{value}</p>);
const data = [1,2,3,4,5]

export const Default = () => (
<Reduce 
data={data}
render={testComp}
function={(acc, current) => acc + current }
initialVal={0}
/>
);

export const withError = () => (
  <Reduce 
  data="Not an Array"
  render={testComp}
  />
);
