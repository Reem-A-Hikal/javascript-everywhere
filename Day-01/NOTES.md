# Day 01 Notes

## JavaScript Runtime

### What is Node.js, and how is it different from a browser?

Node.js is a runtime environment that allows JavaScript code to run outside a web browser. It is built on the V8 JavaScript engine, the same engine used by Google Chrome.

Unlike a browser, Node.js provides APIs for working with the file system, networks, and other system resources. This makes it useful for building server-side applications, APIs, and command-line tools. Browsers, on the other hand, provide web APIs such as the DOM and `window` for working with web pages.

### What is npm used for?

npm (Node Package Manager) is the default package manager for Node.js. It is used to install, update, and remove packages, as well as manage project dependencies through `package.json`.

## Git and GitHub

### Git vs. GitHub

Git is a distributed version-control system used to track code changes, create branches, and collaborate on projects. GitHub is a web-based platform that hosts Git repositories and adds features such as pull requests, issue tracking, and code review.

### Git commands

| Command                   | Purpose                                                                  |
| ------------------------- | ------------------------------------------------------------------------ |
| `git init`                | Initializes a Git repository in the current directory.                   |
| `git status`              | Shows changed, staged, and untracked files.                              |
| `git add <file>`          | Stages a file for the next commit. Use `git add .` to stage all changes. |
| `git commit -m "message"` | Saves staged changes with a descriptive message.                         |
| `git log`                 | Displays the commit history.                                             |
| `git push`                | Uploads local commits to a remote repository.                            |

## JavaScript Fundamentals

### When should you use `let` instead of `const`?

Use `let` when a variable must be reassigned. Use `const` by default when the variable binding should not be reassigned.

```js
let score = 0;
score = 10;

const name = "Alex";
```

`const` prevents reassignment of the variable, but objects and arrays declared with `const` can still be mutated.

### What does `typeof []` return?

`typeof []` returns `"object"`. Arrays are specialized objects in JavaScript, not primitive values. The same broad result also applies to `null` because of a historical language quirk; use `Array.isArray(value)` to check whether a value is an array.

```js
Array.isArray([]); // true
```

### `===` vs. `==`

`===` checks both value and type without implicit type conversion. `==` may convert types before comparing, which can produce surprising results. Prefer `===` for predictable comparisons.

```js
5 === "5"; // false
5 == "5"; // true
```

### When should you use `while` instead of `for`?

Use `while` when the number of iterations is not known beforehand and the loop should continue until a condition changes. Use `for` when initialization, a condition, and an update are clear and compact.

```js
let input = "";
while (input !== "quit") {
  input = getInput();
}
```

why the `node_modules` folder never goes on GitHub?
the `node_modules` folder contains all the installed dependencies for a Node.js project. It can be very large and is not necessary to include in version control because it can be regenerated using the `package.json` and `package-lock.json` files. Instead, developers use `.gitignore` to exclude `node_modules` from being tracked by Git, ensuring that only the essential project files are shared on GitHub.

describe each field in the `package.json` file:

- `name`: The name of the package.
- `version`: The version of the package.
- `description`: A brief description of the package.
- `main`: The main entry point of the package.
- `scripts`: A set of commands that can be run to perform various tasks.
- `keywords`: An array of keywords that describe the package.
- `author`: The author of the package.
- `license`: The license under which the package is distributed.
- `dependencies`: A list of packages that this package depends on.
- `devDependencies`: A list of packages that are only needed for development purposes.

