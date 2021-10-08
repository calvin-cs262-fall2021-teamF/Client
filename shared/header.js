import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import AboutScreen from "../pages/about/About";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import { Alert } from 'react-alert';

export default function Header({ navigation }) {
    return (
      <View>
        <Button
          onPress={() => alert('Hakuna Matata')}
          icon={
            <Icon
              name='bars'
              size={20}
              color='#110000'
            />
          }
          type='clear'/>
      </View>
    );
};
