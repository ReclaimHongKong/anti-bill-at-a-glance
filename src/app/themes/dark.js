const dark = {
  color: {
    white: "#ffffff",
    black: "#000000",
    primary: "#f9df34",
    alert: "#eb2b3a",
    background: "#120706"
  },
  fontSize: {
    xxs: 8,
    xs: 12,
    s: 16,
    m: 20,
    l: 28,
    xl: 40
  },
  spacing: {
    xxs: 1,
    xs: 2,
    s: 4,
    m: 8,
    l: 16,
    xl: 32
  }
}
dark.text = {
  primary: dark.color.primary,
  secondary: dark.color.white,
  alternative: dark.color.alert,
  inverse: dark.color.black
}

export default dark;