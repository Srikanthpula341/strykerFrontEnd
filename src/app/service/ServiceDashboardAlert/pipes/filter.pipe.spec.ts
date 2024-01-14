import { ComponentFixture, fakeAsync } from '@angular/core/testing';
import { FilterPipe } from './filter.pipe';




describe('FilterPipe', () => {
  // it('create an instance', () => {
  //   const pipe = new FilterPipe();
  //   expect(pipe).toBeTruthy();
  // });

  let fixture: ComponentFixture<FilterPipe>;
  let component: FilterPipe;

  it('expect High returns High', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform("High","")).toEqual("High");
  })
});

describe('ArrayFilterPipe', () => {
  const pipe = new FilterPipe();

  const dummyData = [
      { id: 1, name: 'High' },
      { id: 2, name: 'Very High' }
  ];

  it('the keyword "High " should return 0 results', () => {
      expect(pipe.transform(dummyData,'Higher').length).toEqual(0);
  });



});
