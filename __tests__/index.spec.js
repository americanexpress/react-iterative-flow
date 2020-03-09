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

import Map from '../src/components/Map';
import Filter from '../src/components/Filter';
import Reduce from '../src/components/Reduce';
import Sort from '../src/components/Sort';
import Find from '../src/components/Find';
import ModuleContainer from '../src';

describe('index', () => {
  it('Should export Map', () => {
    expect(ModuleContainer.Map).toEqual(Map);
  });
  it('Should export Filter', () => {
    expect(ModuleContainer.Filter).toEqual(Filter);
  });
  it('Should export Reduce', () => {
    expect(ModuleContainer.Reduce).toEqual(Reduce);
  });
  it('Should export Sort', () => {
    expect(ModuleContainer.Sort).toEqual(Sort);
  });
  it('Should export Find', () => {
    expect(ModuleContainer.Find).toEqual(Find);
  });
});
