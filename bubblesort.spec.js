describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('make sure it was sorted correctly', function() {
    let input = [1,3,2,5,4];
    spyOn(window, 'swap').and.callThrough();
    expect(bubbleSort(input)).toEqual([1,2,3,4,5]);
    expect(swap.calls.count()).toEqual(2)
  });
  it('sorts a backwards array', function(){
    expect( bubbleSort([5,4,3,2,1])).toEqual( [1,2,3,4,5])
});
});
