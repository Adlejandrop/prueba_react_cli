import {Text, View} from 'react-native';
import CustomInput from '../components/CustomInput/CustomInput';
import {useState} from 'react';
import validateTextInput from './utils';

const WelcomeScreen = () => {
  const [showGreeting, setShowGreeting] = useState<string>('');

  const handleChangeText = (e: string) => {
    const isValidText = validateTextInput(e);
    if (isValidText) {
      setShowGreeting(e);
      return;
    }
    setShowGreeting('');
  };

  return (
    <View>
      <Text>hola</Text>
      <View>
        <CustomInput handleChangeText={handleChangeText} />
        <Text>{showGreeting}</Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;
