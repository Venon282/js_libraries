import { math } from "../math";

test('Positif', () => {
    expect(math.modf(3.5)).toEqual([3.0, 0.5])
 })

 test('Negatif', () => {
    expect(math.modf(-3.5)).toEqual([-3.0, 0.5])
 })

 test('Neutre', () => {
    expect(math.modf(0.0)).toEqual([0.0, 0.0])
 })

 test('Positif Integer', () => {
    expect(math.modf(3)).toEqual([3.0, 0.0])
 })

 test('Negatif Integer', () => {
    expect(math.modf(-3)).toEqual([-3.0, 0.0])
 })

 test('Neutre Integer', () => {
    expect(math.modf(0)).toEqual([0.0, 0.0])
 })

 test('Positif String', () => {
    expect(math.modf('3.5')).toEqual([3.0, 0.5])
 })

 test('Negatif String', () => {
    expect(math.modf('-3.5')).toEqual([-3.0, 0.5])
 })

 test('Neutre String', () => {
    expect(math.modf('0.0')).toEqual([0.0, 0.0])
 })
