import { StyleSheet } from 'react-native'
import Contants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Contants.statusBarHeight + 20
    },
    header : {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 24

    },
    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: "bold",
        marginBottom: 6,
    },
    incidentValue: {
        marginTop: 2,
        fontSize: 15,
        color: '#737380'
    },
    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },
    heroTitle: {
        fontWeight: "bold",
        fontSize: 20,
        color: '#13131a',
        lineHeight: 20,
    },
    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    },  
    actions: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-between"
    }, 
    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        fontSize: 15,
        color: '#fff',
        fontWeight: "bold"
    }

})