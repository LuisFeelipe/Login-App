import { TouchableWithoutFeedback, Keyboard } from 'react-native'

const DismissKeyboard = ({ children }) => {
  return(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={true}>
      {children}
    </TouchableWithoutFeedback>
  )
}

export default DismissKeyboard;