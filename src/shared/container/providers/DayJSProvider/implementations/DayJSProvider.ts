import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { IDayJSProvider } from '../IDayJSProvider'

dayjs.extend(utc)

export default class DayJSProvider implements IDayJSProvider {
  addHours(hours: number): Date {
    return dayjs().add(hours, 'hour').toDate()
  }
}
