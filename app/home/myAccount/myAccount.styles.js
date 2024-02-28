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

  accordHeader: {
    padding: 16,
    backgroundColor: 'white',
    color: 'black',
    flex: 1,
    flexDirection: 'row',
  },

  accordTitle: {
    fontSize: 18,
    fontFamily: FONT.semiBold
  },

  accordBody: {
    paddingTop: 2,
    width: '100%',
    paddingHorizontal: 16,
    alignSelf: 'center'
  },

  text: {
    fontSize: 12,
    fontFamily: FONT.semiBold,
    alignSelf: 'flex-end',
    textAlign: 'right'
  },

  price: {
    fontFamily: FONT.semiBold,
    fontSize: SIZES.xSmall,
    textAlign: 'right'
  },

  customInput: {
    width: '100%',
    color: COLORS.default,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    textAlignVertical: 'top'
  },

  button_PRIMARY: {
    backgroundColor: COLORS.primary,
  },

  text_PRIMARY: {
    color: COLORS.white,
    fontSize: SIZES.large
  }, 

  paragraph: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular
  }
});

export default styles;