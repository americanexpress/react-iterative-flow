# react-iterative-flow

Components intended to simplify iterating data sets in the React world.

This project is Storybook enabled for an easier understanding of how the components can be implemented

<div id="top">

## Components:

<ul>
<li><a href="#Map">Map</a></li>
<li><a href="#Filter">Filter</a></li>
<li><a href="#Sort">Sort</a></li>
<li><a href="#Reduce">Reduce</a></li>
<li><a href="#Find">Find</a></li>
</ul>

<div id="Map"/>

## `Map`

## How to use

| Prop       | Type      | Required/Default   | Description                                                                           |
| ---------- | --------- | ------------------ | ------------------------------------------------------------------------------------- |
| data       | `array`   | `no` / `[]`        | Data set to be iterated over. If it is not an array, an error will be thrown.         |
| keyParam   | `element` | `no` / `value`     | Key associated with a particular property in your data set. Should be unique.         |
| render     | `element` | `no` / `Fragment`  | JSX element to be rendered                                                            |
| extraProps | `any`     | `no` / `undefined` | Any other props passed down that will also be passed over to your rendered components |

```js
import React from 'react';
import { Map } from 'react-iterative-flow';
import MyRenderComponent from '../MyRenderComponent';

// const MyRenderComponent = ({ name, age, className }) => (
//   <div className={className}>
//     <div>
//      Name: {name}
//     </div>
//     <div>
//      Age: {age}
//     </div>
//   </div>
// );

const MyComponent = () => {
  const data = [
    { name: 'Greg', age: 20 },
    { name: 'Josh', age: 25 },
    { name: 'Bob', age: 25 },
    { name: 'Jim', age: 25 },
    { name: 'Phillip' },
    { age: 27 }
  ];

  return (
    <Map
      data={data}
      render={MyRenderComponent}
      keyParam='name'
      className='render-component'
    />
  );
};

export default MyComponent;
```

<a href="#top">Back to Top</a>
<br />

<div id="Filter"/>

## `Filter`

## How to use

| Prop       | Type       | Required/Default    | Description                                                                                             |
| ---------- | ---------- | ------------------- | ------------------------------------------------------------------------------------------------------- |
| data       | `array`    | `no` / `[]`         | Data set to be iterated over. If it is not an array, an error will be thrown.                           |
| keyParam   | `element`  | `no` / `value`      | Key associated with a particular property in your data set. Should be unique.                           |
| render     | `element`  | `no` / `Fragment`   | JSX element to be rendered                                                                              |
| function   | `function` | `no` / `() => true` | Function used to filter through the data set. Will return every piece of data if no function is passed. |
| extraProps | `any`      | `no` / `undefined`  | Any other props passed down that will also be passed over to your rendered components                   |

```js
import React from 'react';
import { Filter } from 'react-iterative-flow';
import MyRenderComponent from '../MyRenderComponent'

  // const MyRenderComponent = ({ name, age, className }) => (
  //   <div className={className}>
  //     <div>
  //      Name: {name}
  //     </div>
  //     <div>
  //      Age: {age}
  //     </div>
  //   </div>
  // );

const MyComponent = () => {

  const data = [
    { name: 'Greg', age: 20 },
    { name: 'Josh', age: 25 },
    { name: 'Bob', age: 25 },
    { name: 'Jim', age: 25 },
    { name: 'Phillip' },
    { age: 27 }
    ]

return (
  <Filter
    data={data}
    render={MyRenderComponent}
    function={val => val.age > 20}
  />
);

export default MyComponent;
```

<a href="#top">Back to Top</a>
<br />

<div id="Sort"/>

## `Sort`

## How to use

| Prop       | Type       | Required/Default    | Description                                                                                 |
| ---------- | ---------- | ------------------- | ------------------------------------------------------------------------------------------- |
| data       | `array`    | `no` / `[]`         | Data set to be iterated over. If it is not an array, an error will be thrown.               |
| keyParam   | `element`  | `no` / `value`      | Key associated with a particular property in your data set. Should be unique.               |
| render     | `element`  | `no` / `Fragment`   | JSX element to be rendered                                                                  |
| function   | `function` | `no` / `() => true` | Function used to sort the data set. Will return the unsorted list if no function is passed. |
| extraProps | `any`      | `no` / `undefined`  | Any other props passed down that will also be passed over to your rendered components       |

```js
import React from 'react';
import { Sort } from 'react-iterative-flow';
import MyRenderComponent from '../MyRenderComponent'

  // const MyComponent = ({ name, age, className }) => (
  //   <div className={className}>
  //     <div>
  //      Name: {name}
  //     </div>
  //     <div>
  //      Age: {age}
  //     </div>
  //   </div>
  // );

const MyComponent = () => {

  const data = [
    { name: 'Josh', age: 24 },
    { name: 'Bob', age: 25 },
    { name: 'Jim', age: 28 },
    { name: 'Greg', age: 20 },
    { name: 'Phillip', age: 19 },
    { age: 27 }
]

return (
  <Sort
    data={data}
    render={MyRenderComponent}
    function={(a, b) => a.age - b.age}
    keyParam="name"
  />
);

export default MyComponent;
```

<a href="#top">Back to Top</a>
<br />

<div id="Reduce"/>

## `Reduce`

## How to use

| Prop       | Type       | Required/Default    | Description                                                                               |
| ---------- | ---------- | ------------------- | ----------------------------------------------------------------------------------------- |
| data       | `array`    | `no` / `[]`         | Data set to be iterated over. If it is not an array, an error will be thrown.             |
| keyParam   | `element`  | `no` / `value`      | Key associated with a particular property in your data set. Should be unique.             |
| render     | `element`  | `no` / `Fragment`   | JSX element to be rendered                                                                |
| function   | `function` | `no` / `() => true` | Function used to reduce the data set. Will just return the data if no function is passed. |
| initialVal | `any`      | `no` / `''`         | Initial value passed to reduce function.                                                  |
| extraProps | `any`      | `no` / `undefined`  | Any other props passed down that will also be passed over to your rendered components     |

```js
import React from 'react';
import { Reduce } from 'react-iterative-flow';
import MyRenderComponent from '../MyRenderComponent'

  // const MyRenderComponent = ({ name, age, className }) => (
  //   <div className={className}>
  //     <div>
  //      Name: {name}
  //     </div>
  //     <div>
  //      Age: {age}
  //     </div>
  //   </div>
  // );

const MyComponent = () => {

const data = [1,2,3,4,5]

return (
  <Reduce
    data={data}
    render={MyRenderComponent}
    function={(acc, current) => acc + current}
    initialVal={0}
  />
);

export default MyComponent;
```

<a href="#top">Back to Top</a>
<br />

<div id="Find"/>

## `Find`

## How to use

| Prop       | Type       | Required/Default    | Description                                                                                           |
| ---------- | ---------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| data       | `array`    | `no` / `[]`         | Data set to be iterated over. If it is not an array, an error will be thrown.                         |
| render     | `element`  | `no` / `Fragment`   | JSX element to be rendered                                                                            |
| function   | `function` | `no` / `() => true` | Function used to find the piece of data in a set. Will just return the data if no function is passed. |
| extraProps | `any`      | `no` / `undefined`  | Any other props passed down that will also be passed over to your rendered components                 |

```js
import React from 'react';
import { Find } from 'react-iterative-flow';
import MyRenderComponent from '../MyRenderComponent'

  // const MyRenderComponent = ({ name, age, className }) => (
  //   <div className={className}>
  //     <div>
  //      Name: {name}
  //     </div>
  //     <div>
  //      Age: {age}
  //     </div>
  //   </div>
  // );

const MyComponent = () => {

const data = [
  { name: 'Greg', age: 20 },
  { name: 'Josh', age: 25 },
  { name: 'Bob', age: 25 },
  { name: 'Jim', age: 25 },
  { name: 'Phillip' },
];

return (
  <Find
    data={data}
    render={MyRenderComponent}
    function={acc => acc.name === 'Jim'}
  />
);

export default MyComponent;
```

<a href="#top">Back to Top</a>
<br />

## Contributing

We welcome Your interest in the American Express Open Source Community on Github. Any Contributor to
any Open Source Project managed by the American Express Open Source Community must accept and sign
an Agreement indicating agreement to the terms below. Except for the rights granted in this
Agreement to American Express and to recipients of software distributed by American Express, You
reserve all right, title, and interest, if any, in and to Your Contributions. Please
[fill out the Agreement](https://cla-assistant.io/americanexpress/react-iterative-flow).

## License

Any contributions made under this project will be governed by the
[Apache License 2.0](./LICENSE.txt).

## Code of Conduct

This project adheres to the [American Express Community Guidelines](./CODE_OF_CONDUCT.md). By
participating, you are expected to honor these guidelines.
