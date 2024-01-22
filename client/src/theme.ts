
export const tokens = {
    grey: {
      100: "#f0f0f3",
      200: "#e1e2e7",
      300: "#d1d3da",
      400: "#c2c5ce",
      500: "#b3b6c2",
      600: "#8f929b",
      700: "#6b6d74",
      800: "#48494e",
      900: "#242427",
    },
    primary: {
        100: "#e7dbfe",
        200: "#cfb7fd",
        300: "#b692fb",
        400: "#9e6efa",
        500: "#864af9",
        600: "#6b3bc7",
        700: "#502c95",
        800: "#361e64",
        900: "#1b0f32"

    },
    secondary: {
      // yellow
      100: "#fcf0dd",
      200: "#fae1bb",
      300: "#f7d299",
      400: "#f5c377",
      500: "#f2b455",
      600: "#c29044",
      700: "#916c33",
      800: "#614822",
      900: "#302411",
    },
    tertiary: {
      // purple
      500: "#8884d8",
    },
    background: {
      light: "#280274",
      main: "#1C0C5B",
    },
  };
  
  // mui theme settings
  export const themeSettings = {
    palette: {
      primary: {
        ...tokens.primary,
        main: tokens.primary[600],
        light: tokens.primary[400],
      },
      secondary: {
        ...tokens.secondary,
        main: tokens.secondary[300],
      },
      tertiary: {
        ...tokens.tertiary,
      },
      grey: {
        ...tokens.grey,
        main: tokens.grey[300],
      },
      background: {
        default: tokens.background.main,
        light: tokens.background.light,
      },
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 800,
        color: tokens.grey[200],
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 600,
        color: tokens.grey[400],
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        fontWeight: 400,
        color: tokens.grey[400],
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 10,
        color: tokens.grey[400],
      },
    },
  };
  
