import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  title: {
    fontFamily: FONT.regular,
    fontSize: SIZES.xxLarge,
    color: COLORS.default,
  },

  strong: {
    fontFamily: FONT.bold,
  },

  menuText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },

  logoutText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: 'red',
    marginLeft: 36,
  },
  
});

export default styles;