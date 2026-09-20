# Day 02 — NOTES

## const vs let (and why const still lets me push)

`let` = the _binding_ can be reassigned. `const` = the binding is locked, so I can't point the variable at something else.

But `const arr = []` doesn't freeze the array itself - it just freezes the name. So `arr.push(5)` works fine, and `arr = [5]` throws. Same with objects. `const` protects the _label_, not the _contents_.

## The 7 primitive types

- `string` — text, `"hello"`
- `number` — all numbers, integers and decimals, plus `NaN` and `Infinity`
- `boolean` — `true` / `false`
- `undefined` — declared but never given a value
- `null` — set to "nothing"
- `symbol` — unique, unguessable key
- `bigint` — huge integers, written with an `n` at the end

## Why `typeof null` is `"object"`

It's a bug from 1995 that never got fixed because too much old code depends on it. In the first JS engine, values were tagged with a type code and `null`'s tag was `000` - the same tag objects got. So `typeof null` lies.

## The 8 falsy values

`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`

Everything else is truthy => including `[]`, `{}`, `"0"`, and `"false"`.

## `===` vs `==`

`===` compares type _and_ value. `==` converts first, which is where the bugs live.

```js
0 === "0"; // false — number and string are different types
0 == "0"; // true  — the string is converted to a number first
```

## `??` vs `||`

- `||` returns the fallback for **any** falsy value, including `0`, `""`, and `false`.
- `??` returns the fallback only when the value is `null` or `undefined`.

So if `0`, `""`, or `false` is a valid value, use `??` so it is not replaced accidentally:

```js
const score = userScore ?? 0; // keeps 0
const enabled = savedSetting ?? true; // keeps false
```

Use `||` only when every falsy value should mean "use the fallback":

```js
const displayName = userName || "Anonymous"; // replaces "" too
```

## The five loops — when I reach for each

- `for` — when I need the index, or a counter that goes up by something other than 1.
- `for...of` — when I just want each value out of an array, cleanly.
- `for...in` — when I want the keys of an object.
- `while` — when I don't know how many times I'll loop; I stop on a condition.
- `do...while` — same as `while`, but it always runs the body at least once.

## break vs continue

`break` exits the loop completely.
`continue` skips the rest of _this_ iteration and jumps to the next one.

In `report.js`, `continue` is what skips invalid students without killing the whole loop — `break` there would have thrown away everyone after the first bad record.

## The bug I hit today
