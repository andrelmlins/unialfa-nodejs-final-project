import { container } from 'tsyringe'

import { IDayJSProvider } from './IDayJSProvider'
import DayJSProvider from './implementations/DayJSProvider'

container.registerSingleton<IDayJSProvider>(
  'DayJSProvider',
  DayJSProvider
)
