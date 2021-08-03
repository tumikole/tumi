---
Layout:
Title: "Front End Development Libraries 'Recap'"
Date: "2021-08-02"
---


# Front End Development Libraries

# Mixin

In object-oriented programming languages, a mixin is a class that contains methods for use by other classes without having to be the parent class of those other classes.

# Use @if and @else @for to Add Logic To Your Styles

## @if

The @if rule is written @if <expression> {}, and it controls whether or not its block gets evaluated. The expression usually returns either true or false—if the expression returns true, the block is evaluated, and if the expression returns false it’s not.

## @else

An @if rule can optionally be followed by an @else rule, written @else { }. This rule’s block is evaluated if the @if expression returns false.

## @for

#### The @for rule

 written @for variable from expression to expression {

 }
  or @for variable from expression through expression {

  }
  counts up or down from one number to another and evaluates a block for each number in between. Each number along the way is assigned to the given variable name. If to is used, the final number is excluded, if through is used, it's included.