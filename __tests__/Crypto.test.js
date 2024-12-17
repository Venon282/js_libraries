import { crypto } from "../crypto";

test('getRandomBase64: random', (nb=300) => {
    let randoms = new Set()
    for(let i=0;i<nb;i++)
        randoms.add(crypto.getRandomBase64String(6))
    expect(randoms.size).toBe(nb)
})

test('getRandomBase64: length', (size=6) => {
    let base64 = crypto.getRandomBase64String(size)
    expect(base64.length).toBe(size)
})
