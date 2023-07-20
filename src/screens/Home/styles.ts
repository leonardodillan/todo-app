import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
        color: '#4EA8DE',
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 25,
        textAlign: 'center'
    },
    titleIcon: {
      color: '#5E60CE',
        fontSize: 29,
        fontWeight: 'bold',
        marginTop: 25,
        marginRight: 7
    },
    titleMarked: {
      color: '#5E60CE'
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },
    buttonText: {
      color: '#fff',
      fontSize: 24
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#1E6F9F',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42
    },
    listEmptyText: {
        color: '#808080',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 30
    },
    listEmptyTextTwo: {
        color: '#808080',
        fontSize: 15,
        textAlign: 'center'
    },
    score: {
      width: '100%',
      flexDirection: 'row',
      marginBottom: 35,
      justifyContent: 'center',
      alignItems: 'center'
    },
    scoreLeft: {
      flexDirection: 'row',
      width: '50%',
      textAlign: 'center'
    },
    scoreRight: {
      flexDirection: 'row',
      width: '50%',
      textAlign: 'center',
      paddingLeft: 47
    },
    scoreCreate: {
      color: '#fff',
      fontWeight: 'bold'
    },
    scoreConcluded: {
      color: '#fff',
      fontWeight: 'bold'
    },
    scoreResult: {
      backgroundColor: '#333333',
      borderRadius: 50,
      width: 28,
      height: 18,
      marginLeft: 10,
    },
    scoreText: {
      color: '#FFF',
      fontWeight: 'bold',
      textAlign: 'center'
    }
});