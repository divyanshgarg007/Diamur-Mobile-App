import React, {useState} from 'react';
import { StyleSheet, ScrollView, View } from "react-native";
import { Text, Icon, Divider } from 'react-native-elements'

const Comp = (props) => {

const navigation = useNavigation(); 
const [open, setOpen] = useState(false)

return(
<View style={{flex: 1}}>
	<ScrollView style={{flex: 1}}> 
		<View>
			<SearchBar
		        placeholder="search"
		        onChangeText={updateSearch}
		        value={search}
		    />
		</View>

		<View>
			<View><Text >Assortiment</Text></View>
			<Divider orientation="horizontal" />
		</View>

		<View>
			<View><Text style={{color: open ? 'red' : 'black' }}>Toepassing</Text></View>
			<View>
				<Icon
				  name={open ? 'ios-chevron-down' : 'ios-chevron-forward'}
				  type='Ionicons'
				  color='white'
				  onPress={() => console.log('hello')} />
			</View>
			{
				opn1 ? 
				<View>
					<CheckBox title='Beton 1' checked={state.checked} />
					<CheckBox title='Beton 2' checked={state.checked} />
					<CheckBox title='Beton 3' checked={state.checked} />
				</View>
				: null
			}
			<Divider orientation="horizontal" />
		</View>

		<View>
			<View><Text style={{color: open ? 'red' : 'black' }}>Productfamilie</Text></View>
			<View>
				<Icon
				  name={open ? 'ios-chevron-down' : 'ios-chevron-forward'}
				  type='Ionicons'
				  color='white'
				  onPress={() => console.log('hello')} />
			</View>
			<Divider orientation="horizontal" />
		</View>

		<View>
			<View><Text style={{color: open ? 'red' : 'black' }}>Productgroep</Text></View>
			<View>
				<Icon
				  name={open ? 'ios-chevron-down' : 'ios-chevron-forward'}
				  type='Ionicons'
				  color='white'
				  onPress={() => console.log('hello')} />
			</View>
			<Divider orientation="horizontal" />
		</View>

		<View>
			<View><Text style={{color: open ? 'red' : 'black' }}>Verpakking</Text></View>
			<View>
				<Icon
				  name={open ? 'ios-chevron-down' : 'ios-chevron-forward'}
				  type='Ionicons'
				  color='white'
				  onPress={() => console.log('hello')} />
			</View>
			<Divider orientation="horizontal" />
		</View>

	</ScrollView>
		
</View> 
)}

const styles = StyleSheet.create({
  footerIcon: {
    color: "#393939",
    fontSize: normalize(30),
    borderRadius: 50,
    marginLeft: normalize(10),
  },
})

export default Comp