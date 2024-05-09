import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

           <View style={styles.container1}>
           <ScrollView horizontal={true} >
   
      
      <Text style={styles.text30}>section1</Text>
      <Text style={styles.text30}>section2</Text>
      <Text style={styles.text30}>section3</Text>
      <Text style={styles.text30}>section4</Text>
      <Text style={styles.text30}>section5</Text>
      <Text style={styles.text30}>navbar</Text>
      
      <StatusBar style="auto" />

      </ScrollView >
    </View>

    <ScrollView  horizontal={false}>
   
    <View style={styles.container2}>
      <Text style={styles.text2}>IMAGE/VIDEO</Text>
      <StatusBar style="auto" />
    </View> 

    <ScrollView  horizontal={true}>

    <View style={styles.container5}>
      <Text style={styles.text2}>halfs</Text>
      <StatusBar style="auto" />
 
    </View>
    


    <View style={styles.container6}>
   
      <Text style={styles.text6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa eget egestas purus viverra accumsan. Duis at tellus at urna condimentum mattis pellentesque id. Gravida arcu ac tortor dignissim convallis. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Fames ac turpis egestas integer eget. Viverra adipiscing at in tellus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Fringilla urna porttitor rhoncus dolor purus non. Morbi leo urna molestie at elementum. Feugiat vivamus at augue eget arcu dictum varius duis at. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.

Proin sed libero enim sed faucibus turpis in eu. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Viverra justo nec ultrices dui sapien eget mi proin sed. Sed augue lacus viverra vitae congue eu. Pretium nibh ipsum consequat nisl vel. Risus pretium quam vulputate dignissim suspendisse in est ante. Id venenatis a condimentum vitae. Fames ac turpis egestas sed tempus urna et pharetra. Dignissim enim sit amet venenatis urna. Justo donec enim diam vulputate. Aliquam sem fringilla ut morbi tincidunt. Tristique risus nec feugiat in fermentum. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. A lacus vestibulum sed arcu non odio euismod lacinia. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas.</Text>
      <StatusBar style="auto" />
      
    </View>
  
    
    </ScrollView >

    <ScrollView  horizontal={true}>

<View style={styles.container10}>
  <Text style={styles.text2}>third</Text>
  <StatusBar style="auto" />

</View>

<View style={styles.container11}>
  <Text style={styles.text2}>third</Text>
  <StatusBar style="auto" />
</View>
<View style={styles.container12}>
  <Text style={styles.text2}>third</Text>
  <StatusBar style="auto" />


</View>

</ScrollView >
    

<ScrollView  horizontal={true}>

<View style={styles.container13}>
  <Text style={styles.text13}>fourth</Text>
  <StatusBar style="auto" />

</View>

<View style={styles.container14}>
  <Text style={styles.text14}>fourth</Text>
  <StatusBar style="auto" />
</View>
<View style={styles.container15}>
  <Text style={styles.text15}>fourth</Text>
  <StatusBar style="auto" />
  </View>

  <View style={styles.container16}>
  <Text style={styles.text16}>fourth</Text>
  <StatusBar style="auto" />
  
</View>

</ScrollView >

<ScrollView  horizontal={true}>

<View style={styles.container17}>
  <Text style={styles.text2}>fifth</Text>
  <StatusBar style="auto" />

</View>

<View style={styles.container18}>
  <Text style={styles.text2}>fifth</Text>
  <StatusBar style="auto" />
</View>
<View style={styles.container19}>
  <Text style={styles.text2}>fifth</Text>
  <StatusBar style="auto" />
  </View>

  <View style={styles.container20}>
  <Text style={styles.text2}>fifth</Text>
  <StatusBar style="auto" />
</View>

<View style={styles.container21}>
  <Text style={styles.text2}>fifth</Text>
  <StatusBar style="auto" />
</View>


</ScrollView >
    
   
      

{/* 

    <View style={styles.container7}>
      <Text style={styles.text2}>third</Text>
      <StatusBar style="auto" />
  

    </View>

    <View style={styles.container8}>
      <Text style={styles.text2}>third</Text>
      <StatusBar style="auto" />
    </View> */}
</ScrollView>






    <View style={styles.container4}>
      <Text style={styles.text4}>FOOTER</Text>
      <StatusBar style="auto" />
    </View>

    
 

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>






  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: .5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
   
  
 
  
    fontSize: 30,
    color: "white"
  },
    container1: {
    height: 70,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    fontSize: 90,

  },
  text2: {
  
    fontSize: 50,
    color: "orange"
  },

  text30: {
    fontSize: 20,
    color: "orange",
    backgroundColor: "red",
    width:120,
    textAlign:"center",
    justifyContent:"center",
    marginTop:20,
    
  },
  container2: {
   height: 400,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
  },
  text3: {
  
    fontSize: 10,
    color: "white"
  },
  container3: {
   height:60,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
  },
  text4: {
  
    fontSize: 20,
    color: "orange"
  },
  container4: {
   height:100,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    width: 700,


  },
  container5: {
   height:400,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    
    
  },
  container6: {
   height:400,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,

  },
  text6: {
  
    fontSize: 20,
    color: "black"
  
  },
  container9: {
   height:200,
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
  
    

},
container10: {
  height: 280,
   backgroundColor: 'white',
   alignItems: 'center',
   justifyContent: 'center',
   width: 150,
 
 }, 

container11: {
  height: 280,
   backgroundColor: 'gray',
   alignItems: 'center',
   justifyContent: 'center',
   width: 151,
 
 }, 


container12: {
  height: 280,
   backgroundColor: 'violet',
   alignItems: 'center',
   justifyContent: 'center',
   width: 150,
 
 }, 
  
 container13: {
  height: 280,
   backgroundColor: 'indigo',
   alignItems: 'center',
   justifyContent: 'center',
   width: 110,
 
  },
  text13: {
  
    fontSize: 40,
    color: "orange"


   
 }, 

 container14: {
  height: 280,
   backgroundColor: 'navy',
   alignItems: 'center',
   justifyContent: 'center',
   width: 110,
 
  },
  text14: {
  
    fontSize: 40,
    color: "orange"

 }, 

 container15: {
  height: 280,
   backgroundColor: 'gold',
   alignItems: 'center',
   justifyContent: 'center',
   width: 110,
   
  },
  text15: {
  
    fontSize: 40,
    color: "orange"

 }, 

 container16: {
  height: 280,
   backgroundColor: 'tan',
   alignItems: 'center',
   justifyContent: 'center',
   width: 110,
 
  },
  text16: {
  
    fontSize: 40,
    color: "orange"


 }, 

 container17: {
  height: 280,
   backgroundColor: 'aqua',
   alignItems: 'center',
   justifyContent: 'center',
   width: 100,
 
 }, 


 


 
 container18: {
  height: 280,
   backgroundColor: 'lime',
   alignItems: 'center',
   justifyContent: 'center',
   width: 90,

  }, 

  container19: {
   height: 280,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,

  }, 

  container20: {
   height: 280,
    backgroundColor: 'fuchsia',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
 
  }, 

  container21: {
   height: 280,
    backgroundColor: 'olive',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,

 
 
 }, 


});

