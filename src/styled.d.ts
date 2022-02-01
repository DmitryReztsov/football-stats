import 'styled-components';

import {ILightTheme} from 'interfaces/styled';

declare module 'styled-components' {
  export interface DefaultTheme extends ILightTheme {
  }
}