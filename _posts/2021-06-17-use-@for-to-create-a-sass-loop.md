---
Layout:
Title: "Use @for to Create a Sass Loop"
Date: "2021-06-17"
---
#### (freecodecamp)
The @for directive adds styles in a loop, very similar to a for loop in JavaScript.

@for is used in two ways: "start through end" or "start to end". The main difference is that the "start to end" excludes the end number as part of the count, and "start through end" includes the end number as part of the count.

ex:
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}

## @for control directive

The @for loop directive allows for iteration through a given range of values and executing a certain code within the given range. The benefit of @for loops is the ability to specify the range of values.

ex:

@for $variable from <start-reange> through <end-range>

or

@for $variable from <start-range> to <end-range>


$class-name: span !default;
$start-width: 25%;

@for $var from 1 to 4 {
    .#{$class-name}-#{$var} {
        width: $start-width * $var;
    }
}

## @for loops and functions

@function em($value, $context: 16) {
  @return $value / $context;
}

@function reverse($list) {
   $result: ();

   @for $i from length($list) * -1 through -1 {
      $result: append($result, nth($list, abs($i)));
   }
   @return $result;
}

$list: american virgin delta;
$column: reverse($list);
$length: length($column);

@while $length > 0 {
  .ad-#{nth($column, $length)} {
    font-size: em(10 * $length);
  }
  $length: $length - 1;
}