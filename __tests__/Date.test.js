import { date } from "../date";

const my_date = new Date(2024,2,1,9,8,6,28)

test('All in date', () => {
    expect(date.format(my_date,'yyyy_YYYY_yy_YY-MMMM*MMM.MMaMwDD:D_dddd_ddd_dd_d_HH_H_hh_h_mm_m_SS_S_sss_ss_s'))
        .toBe("2024_2024_24_24-March*Mar.03a3w01:1_Friday_Fri_5_5_09_9_09_9_08_8_06_6_028_28_28")
 })

 test('getMonthName', () => {
    expect(date.getMonthName(my_date.getMonth())).toBe("March")
  })

  test('getMonthName3', () => {
    expect(date.getMonthName3(my_date.getMonth())).toBe("Mar")
  })

  test('getDayName', () => {
    expect(date.getDayName(my_date.getDay())).toBe("Friday")
  })

  test('getDayName3', () => {
    expect(date.getDayName3(my_date.getDay())).toBe("Fri")
  })
