const solution = require('./script');

describe('Validation', () => {
    test('Validation', () => {
        expect(solution(870)).toEqual(870)
    })

    test('Validation', () => {
        expect(solution(37770)).toEqual(37770)
    })

    test('Validation', () => {
        expect(solution(10)).toEqual(23)
    })
})