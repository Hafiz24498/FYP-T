import React, {useState} from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ScrollView} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/Ionicons';

const PatientList = ({ navigation }) => {
    const list=[
        {
            Name:'Nadia Mayee',
            avatar:'../Images/Doctorlogo.png'
        },
        {
            Name:'Affan Mark',
            avatar:'../Images/Doctorlogo.png'
        },
        {
            Name:'Masree madu',
            avatar:'../Images/Doctorlogo.png'
        }
    ]

    const rightbar =() =>{
        return(
        <TouchableOpacity 
                onPress={() => navigation.navigate('AddPatient')}>
                <Icon name="md-person-add-sharp" size={23}/>
            </TouchableOpacity>
        );
    }
    return(
        <View>
        <View>
            <ScrollView>
                {
                    list.map((l,i) => (
                        <ListItem key={i} bottomDivider
                        onPress={() => navigation.navigate('PatientInfo')}
                        >
                            <Avatar source={{uri:l.avatar}}/>
                            <ListItem.Content>
                                <ListItem.Title>{l.Name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </ScrollView>
        </View>
        </View>
    );

}

const styles = StyleSheet.create({
    HeaderBox:{
        backgroundColor:'#d2691e',
        height: 230,
        //margin: 5,
        //borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    HeaderText:{
        fontWeight: 'bold',
        fontSize: 38,
        paddingTop: 60,
        color: 'white'
    }
});
export default PatientList;