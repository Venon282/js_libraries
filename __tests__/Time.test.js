import { time } from "../time";

test('milliToSec', () => {
    expect(time.milliToSec(4772)).toEqual(4.772)
})

test('milliToMin', () => {
    expect(time.milliToMin(60000)).toEqual(1)
})

test('milliToHours', () => {
    expect(time.milliToHours(3600000)).toEqual(1)
})

test('milliToDays', () => {
    expect(time.milliToDays(86400000)).toEqual(1)
})

test('secToMilli', () => {
    expect(time.secToMilli(86400)).toEqual(86400000)
})

test('secToMin', () => {
    expect(time.secToMin(86400)).toEqual(1440)
})

test('secToHours', () => {
    expect(time.secToHours(86400)).toEqual(24)
})

test('secToDays', () => {
    expect(time.secToDays(86400000)).toEqual(1000)
})

test('minToMilli', () => {
    expect(time.minToMilli(1)).toEqual(60000)
})

test('minToSec', () => {
    expect(time.minToSec(1)).toEqual(60)
})

test('minToHours', () => {
    expect(time.minToHours(60)).toEqual(1)
})

test('minToDays', () => {
    expect(time.minToDays(1440)).toEqual(1)
})

test('hourToMilli', () => {
    expect(time.hourToMilli(0.1)).toEqual(360000)
})

test('hourToSec', () => {
    expect(time.hourToSec(1440)).toEqual(5184000)
})

test('hourToMin', () => {
    expect(time.hourToMin(1440)).toEqual(86400)
})

test('hourToDays', () => {
    expect(time.hourToDays(1440)).toEqual(60)
})

test('dayToMilli', () => {
    expect(Math.round(time.dayToMilli(0.01))).toEqual(864000)
})

test('dayToSec', () => {
    expect(Math.round(time.dayToSec(0.01))).toEqual(864)
})

test('dayToMin', () => {
    expect(time.dayToMin(1)).toEqual(1440)
})

test('dayToHours', () => {
    expect(time.dayToHours(1)).toEqual(24)
})

test('secToTime', () => {
    expect(time.secToTime(time.dayToSec(1)+time.hourToSec(1)+time.minToSec(1)+1)).toEqual({"d":1,"h":1,"m":1,"s":1,"ms":0})
})
