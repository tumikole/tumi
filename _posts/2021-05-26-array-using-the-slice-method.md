---
Layout:
Title: "Return Part of an Array Using the slice Method"
Date: "2021-05-26"
---

## Return Part of an Array Using the slice Method

The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.

If start is undefined, slice starts from the index 0.

If start is greater than the index range of the sequence, an empty array is returned

Zero-based index before which to end extraction. slice extracts up to but not including end. For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).

A negative index can be used, indicating an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.

If end is omitted, slice extracts through the end of the sequence (arr.length).

If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).

Return value
A new array containing the extracted elements.

slice does not alter the original array. It returns a shallow copy of elements from the original array. Elements of the original array are copied into the returned array as follows:

For object slice copies object references into the new array. Both the original and new array refer to the same object. If an object changes, the changes are visible to both the new and original arrays.
For strings, numbers and booleans (not String, Number and Boolean objects), slice copies the values into the new array. Changes to the string, number, or boolean in one array do not affect the other array.
If a new element is added to either array, the other array is not affected.