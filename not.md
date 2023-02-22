- [js type](#js-type)

### demo

<details>
<summary>
  <h3>What is ? (Click Me)</h3>
</summary>
<br >

```js

```

</details>

<details>
<summary>
  <h3> What is Javascript map? (Click Me)</h3>
</summary>
<br >

- In JavaScript, the map() method is used to create a new array from an existing array by transforming each element of the original array. The map() method takes a callback function as an argument, which is applied to each element of the original array. The callback function should return a new value that will be used as the corresponding element of the new array.

- The syntax for using the map() method is as follows:

```js
const newArray = originalArray.map(callbackFunction);
```

- Here, originalArray is the array you want to transform, and callbackFunction is the function that will transform each element of the original array. The map() method will return a new array, newArray, which will contain the transformed elements.

- For example, let's say we have an array of numbers that we want to double:

```js
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

- In this example, the map() method is used to create a new array, doubledNumbers, by multiplying each element of the numbers array by 2. The resulting array, doubledNumbers, will contain the transformed elements [2, 4, 6, 8, 10].

The map() method is a useful tool for transforming arrays and is commonly used in JavaScript applications.

</details>

<details>
<summary>
  <h3>What is class ? (Click Me)</h3>
</summary>
<br >

- ক্লাস একটি টেমপ্লেট যা একটি অবজেক্ট তৈরি করতে ব্যবহৃত হয়। একটি ক্লাস শুরু করতে হলে, আমাদের ক্লাস ডিফিনেশন লিখতে হবে। এরপর ক্লাস এর নাম লিখে তৈরি করতে হবে। ক্লাস এর নাম এবং অন্য ক্লাস প্রপার্টি গুলো সব সময় প্রথম অক্ষর বড় হয়।

- কনসট্রাক্টর হল ক্লাস থেকে অবজেক্ট তৈরি করার সময় কল হওয়া একটি স্পেশাল মেথড। কনসট্রাক্টর ব্যবহার করে আমরা ক্লাস থেকে অবজেক্ট তৈরি করতে পারি।

- মেথড হল ক্লাসের ফাংশন। ক্লাস এর মেথড সব সময় ক্লাসের অবজেক্টের সাথে কল হতে হয়।

- ক্লাস থেকে অবজেক্ট তৈরি করার জন্য new অপারেটর ব্যবহার করা হয়। new অপারেটর এর মাধ্যমে অবজেক্ট তৈরি করা হয়।

- উদাহরণ :

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person('John', 30);
const person2

```

```js
class Instructor {
  name;
  designation = " We Couse Instructor";
  team = "Web Team";
  location;

  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  startSuportSession(time) {
    ` start the support session at ${time}`;
  }

  createQuiz(module) {
    console.log(` Please create quiz for module ${module} `);
  }
}
```

</details>

<details>
<summary>
  <h3> What is Javascript map? (Click Me)</h3>
</summary>
<br >
