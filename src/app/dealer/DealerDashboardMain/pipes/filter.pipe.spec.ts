
import { ComponentFixture, fakeAsync } from '@angular/core/testing';
import { FilterPipe } from './filter.pipe';



describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  let fixture: ComponentFixture<FilterPipe>;
  let component: FilterPipe;

  it('expect Order returns Order', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform("Order","")).toEqual("Order");
  })
  

});
  describe('ArrayFilterPipe', () => {
    const pipe = new FilterPipe();

    const dummyData = [
        { id: 1, name: 'Order' },
        { id: 2, name: 'Return' },
    ];

    it('the keyword "Return" should return 0 results', () => {
        expect(pipe.transform(dummyData,'Return').length).toEqual(0);
    });



});


