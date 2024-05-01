export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

const theme = {
  colors: {
    main: '#383434',
    default_white: '#fff',
  }
}

export default theme