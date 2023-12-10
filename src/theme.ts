import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  textStyles: {
    headerText: {
      color: "#FFCB9A",
      fontSize: "2em",
      fontWeight: "bold",
      fontFamily: `"helvetica", sans-serif`,
    },
    bodyText: {
      fontSize: "1em",
      fontWeight: "regular",
      fontFamily: `sans-serif`,
    },
  },

  components: {
    Button: {
      baseStyle: {
        bg: "#0F6466",
        color: "#FFCB9A",
      },
      variants: {
        first: {
          bg: "#0F6466",
          color: "#FFCB9A",
          height: "2.5rem",
          width: "8rem",
        },
        second: {
          bg: "#FFCB9A",
          color: "#0F6466",
          height: "2.5rem",
          width: "8rem",
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "#2C3532",
        color: "F2E3D5",
        margin: 0,
        minW: "320px",
        minH: "100vh",
        paddingBottom: "200px",
      },
      header: {
        margin: 1,
      },
    },
  },
});
