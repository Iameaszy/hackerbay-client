import initStoryshots from '@storybook/addon-storyshots';
describe('add', () => {
  it('to add two numbers', () => {
    expect(2 + 2).toBe(4);
  });
});

initStoryshots();
