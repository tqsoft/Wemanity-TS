import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });
});


describe('GildedRose Class Constructor', () => {
  it('should initialize items array', () => {
      const testItems = [new Item('Test Item', 10, 20), new Item('Another Test Item', 5, 30)];
      const gildedRose = new GildedRose(testItems);
      expect(gildedRose.items.length).toBe(2);
      expect(gildedRose.items).toEqual(testItems);
  });
});