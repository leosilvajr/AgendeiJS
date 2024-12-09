import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";

function Button(props){

    function TesteClick(){
        Alert.alert("Clicou no Botão");
    }

    return <TouchableOpacity onPress={TesteClick} style={styles.btn}>
        <Text style={styles.text} >{props.text}</Text>
    </TouchableOpacity>
}

export default Button;