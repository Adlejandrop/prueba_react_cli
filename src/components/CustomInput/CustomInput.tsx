import {TextInput} from 'react-native';

const CustomInput = ({
  handleChangeText,
}: {
  handleChangeText: (e: string) => void;
}) => <TextInput onChangeText={handleChangeText} />;

export default CustomInput;
