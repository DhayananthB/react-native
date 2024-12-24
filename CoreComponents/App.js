import { View, Text,Image, ImageBackground } from "react-native";
const logoImage = require('./assets/adaptive-icon.png');

export default function App() {
  return <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    
    <View style={{ width: 200, height: 200, backgroundColor: "lightblue" }}></View>
    <View style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}></View>
    <Text><Text style={{ color: "red" }}>Dhayananth</Text> B</Text>

    {/* <Image source={logoImage} style={{ width: 300, height: 300 }} />
    <Image source={{uri : "https://picsum.photos/300"}} style={{ width: 300, height: 300 }} /> */}
<ImageBackground source={logoImage} style={{flex:1}}>
  <Text>Inside Image Background</Text>
</ImageBackground>

  </View>;
}