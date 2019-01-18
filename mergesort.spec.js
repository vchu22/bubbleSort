describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    // even number of elements
    let input1 = [1, 2, 3, 4, 5, 6];
    expect(split(input1)).toEqual([[1, 2, 3], [4, 5, 6]]);

    // odd number of elements
    let input2 = [1, 2, 3, 4, 5, 6, 7];
    expect(split(input2)).toEqual([[1, 2, 3, 4], [5, 6, 7]]);
  });
});
