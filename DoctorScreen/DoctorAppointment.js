import React, {useState} from 'react';
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import { ListItem} from 'react-native-elements';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FAB } from 'react-native-paper';

const DoctorAppointment = ({ navigation }) => {
    const list=[
        {
            Date:'10-Feb-2021',
            Name:'Nadia Mayee'
        },
        {
            Date:'23-Nov-2021',
            Name:'Affan Mark'
        },
        {
            Date:'24-DEC-2021',
            Name:'Masree madu'
        },
        {
            Date:'23-Nov-2021',
            Name:'Affan Mark'
        },{
            Date:'23-Nov-2021',
            Name:'Affan Mark'
        },{
            Date:'23-Nov-2021',
            Name:'Affan Mark'
        },
        {
            Date:'23-Nov-2021',
            Name:'Affan Mark'
        },{
            Date:'23-Nov-2021',
            Name:'Affan Mark'
        },
        {
            Date:'23-Nov-2021',
            Name:'Affan Mark'
        },
        {
            Date:'23-Nov-2021',
            Name:'Affan Mark'
        },
        {
            Date:'23-Nov-2021',
            Name:'Affan Mark'
        },
    ]

    return(
        <View>
            <ScrollView style={styles.ScrollView}>
                {
                    list.map((l,i) => (
                        <ListItem key={i} bottomDivider>
                            <MaterialCommunityIcon name="calendar-month-outline" color='black' size={30}/>
                            <ListItem.Content >
                                <ListItem.Title>{l.Date}</ListItem.Title>
                                <ListItem.Subtitle>{l.Name}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))
                } 
            </ScrollView>
         <FAB
            style={styles.fab}
            large
            backgroundcolor="#d2691e"
           icon="plus"
            onPress={() => navigation.navigate('AddApointment')}
        />
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
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
        
      },
      ScrollView:{
          margin: 1,
      }
});
export default DoctorAppointment;