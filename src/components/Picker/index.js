import { Picker } from '@react-native-picker/picker';

export function PickerItem(){
    return(
        <Picker>
            <Picker.Item value="BTC" key={0} label="BTC" />
        </Picker>
    )
}