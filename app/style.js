import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    sceneHeader: {
        backgroundColor: "#222222"
    },
    sceneSubHeader: {
        height: 60,
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        paddingLeft: 5
    },
    listItem: {
        height: 50,
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        paddingLeft: 5,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    smallText: {
        fontSize: 12
    }
});