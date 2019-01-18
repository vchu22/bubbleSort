describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('make sure it correctly sorted', function() {
    let input = [3, 2, 7, 8, 1, 4, 9];
    expect(bubbleSort(input)).toEqual([1, 2, 3, 4, 7, 8, 9]);
  });
});
