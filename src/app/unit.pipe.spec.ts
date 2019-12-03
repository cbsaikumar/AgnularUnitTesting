import { UnitPipe } from './unit.pipe';

describe('UnitPipe', () => {
  it('create an instance', () => {
    const pipe = new UnitPipe();
    expect(pipe).toBeTruthy();
  });

  it('check pipe output works as expected', () => {
    const pipe = new UnitPipe();
    const output = pipe.transform('Unit Testing');
    expect(output).toEqual('Hello Unit Testing')
  })
});

