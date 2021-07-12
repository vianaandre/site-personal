const theme = {
  colors: {
    primary: '#2237FF',
    secondary: '#282828',
    tertiary: '#E4E4E4',
    colorText: '#333333',
    white: '#F8F8F8',
    sucess: {
      background: '#ECF0F1',
      colorText: '#038F00'
    },
    error: {
      background: '#E2D0CF',
      colorText: '#C20C00'
    }
  },
  spacing(size: number): string {
    return `${size * 8}px`
  },
  fonts: {
    family: {
      primary: 'Poppins',
      secondary: 'sans-serif',
      tertiary: 'Roboto'
    },
  },
}

export default theme
