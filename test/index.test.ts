import { merge } from '../src/index';

describe('merge', () => {
    it('should merge three sorted arrays', () => {
        const collection1 = [1, 3, 5, 7, 9];
        const collection2 = [2, 4, 6, 8, 10];
        const collection3 = [10, 8, 6, 4, 2];
        const merged = merge(collection1, collection2, collection3);
        expect(merged).toEqual([1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10]);
    });
});
