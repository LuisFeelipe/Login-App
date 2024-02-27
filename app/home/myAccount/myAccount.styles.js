import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
  title: {
    fontSize: SIZES.medium,
    fontFamily: FONT.semiBold
  },

  subtitle: {
    fontSize: SIZES.xSmall,
    fontFamily: FONT.regular,
    marginTop: 3,
  },  

  nameText: {
    fontSize: SIZES.large,
    fontFamily: FONT.semiBold,
  },

  username: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    marginTop: 2,
  },

  editText: {
    fontSize: SIZES.small,
    fontFamily: FONT.semiBold,
  },

  labelText: {
    fontSize: SIZES.small,
    fontFamily: FONT.semiBold,
    marginStart: 3,
  },

  disabledButton: {
    backgroundColor: COLORS.transparent,
  },

  disabledText: {
    color: COLORS.default,
    fontSize: SIZES.large,
    fontFamily: FONT.bold
  },

  enabledButton: {
    backgroundColor: COLORS.primary,
  },

  enabledText: {
    color: COLORS.white,
    fontSize: SIZES.large,
    fontFamily: FONT.bold
  },
});

export default styles;