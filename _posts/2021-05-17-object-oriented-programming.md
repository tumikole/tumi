---
Layout:
Title: "Object Oriented Programming"
Date: "2021-05-17"
---
## Override Inherited Methods

### Can inherited methods be overridden?

A derived class has the ability to redefine, or override, an inherited method, replacing the inherited method by one that is specifically designed for the derived class. The derived class may want to inherit many of the base class's methods because these methods are suited to the behavior of the derived class.

### Which method should be overridden?

Instance methods can be overridden only if they are inherited by the subclass. A method declared final cannot be overridden. A method declared static cannot be overridden but can be re-declared. If a method cannot be inherited, then it cannot be overridden.


## Use of IIFE to Create a Module

An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module

ex:

function glideMixin(obj){
    obj.glide = function(){
        console.log("Gliding on the water");
    };    
}

function flyMixin(obj){
    obj.fly = function(){
        console.log("Flying Woohoo");
    };
}

How we group this two mixin in a module using IIFE.

ex:

let motionModule = (function(){
    return {
        glideMixin: function(obj){
            obj.glide = function(){
                console.log("Gliding on the water");
            };
        },
        flyMixin: function(obj){
            obj.fly = function(){
                console.log("Flying Woohoo");
            };
        }
    }
})();