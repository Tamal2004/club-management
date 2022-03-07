import { createGlobalStyle } from 'styled-components';

import rootStyle from './rootStyle';
import normalizeStyle from './normalizeStyle';

const GlobalStyle = createGlobalStyle`
  ${normalizeStyle}
  ${rootStyle}
`;

export { GlobalStyle };
