import {
  ScrollView,
  Button,
  View,
  Modal,
  StatusBar,
  Text,
  Image,
  ImageBackground,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
const logoImage = require("./assets/adaptive-icon.png");

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ActivityIndicator/>

      <ActivityIndicator size={"large"}/>
      <ActivityIndicator size={"large"} color={"midnightblue"}/>




      {/* <StatusBar backgroundColor="lightgreen" barStyle="light-content"/>
       */}
      
      
      {/* <Button
        title="press"
        onPress={() => setModalVisible(true)}
        color="yellow"
      />
      <Modal
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}

      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal Content</Text>
          <Button title="Close Modal" onPress={() => setModalVisible(false)} />
        </View>
      </Modal> */}

      {/* <Pressable onPress={() => console.log("Image Pressed")}>
      <Image source={logoImage} style={{ width: 300, height: 300 }} />
      <Text>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

      </Text>
     </Pressable> */}


    </View>
  );
}

// export default function App() {
//   return (
//     <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>

//       <ScrollView><Image source={logoImage} style={{ width: 300, height: 300 }} />
//         <Text>
//           Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

//           The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

//         </Text>
//         <Image source={logoImage} style={{ width: 300, height: 300 }} />

//       </ScrollView>

//       {/* <View style={{ width: 200, height: 200, backgroundColor: "lightblue" }}></View>
//     <View style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}></View>
//     <Text><Text style={{ color: "red" }}>Dhayananth</Text> B</Text>

//     <Image source={logoImage} style={{ width: 300, height: 300 }} />
//     <Image source={{ uri: "https://picsum.photos/300" }} style={{ width: 300, height: 300 }} />
//     <ImageBackground source={logoImage} style={{ flex: 1 }}>
//       <Text>Inside Image Background</Text>
//     </ImageBackground> */}

//     </View>);
// }
