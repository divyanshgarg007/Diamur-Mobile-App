import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Picker, TextInput } from "react-native";
import { Text, Button } from 'react-native-elements'

const Comp = (props) => {

	const navigation = useNavigation();
	const [open, setOpen] = useState(false)

	return (
		<View style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<View>
					<View><Text h1>Stel uw vraag aan Diamur</Text></View>
					<View>
						<Text>Onderwerp</Text>
						<Picker
							selectedValue={selectedValue}
							style={{ height: 50, width: 150 }}
							onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
							<Picker.Item label="Maak uw keuze" value="Maak uw keuze" />
							<Picker.Item label="JavaScript" value="js" />
						</Picker>
					</View>
					<View>
						<TextInput
							editable
							maxLength={40}
							value="Uw boodschap"
						/>
					</View>
					<View>
						<Button title="Verzenden" />
					</View>
					<View>
						<Button title="Terug naar de veel gestelde vragen" />
					</View>
				</View>
			</ScrollView>
		</View>
	)
}

export default Comp