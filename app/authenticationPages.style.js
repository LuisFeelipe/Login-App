import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxxLarge,
    color: COLORS.default
  },

  button_PRIMARY: {
    backgroundColor: COLORS.primary,
    marginVertical: 10
  },

  text_PRIMARY: {
    color: COLORS.white,
    fontSize: SIZES.large
  },  

  button_SECONDARY: {
    backgroundColor: COLORS.transparent
  },

  text_SECONDARY: {
    color: COLORS.default,
    fontSize: SIZES.large
  },

  link: {
    fontFamily: FONT.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.primary
  },

  longText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.default,
    marginVertical: 15
  }
})

export default styles;