import { CommonActions } from '@react-navigation/native';

export default class NavigationUtil {
    resetNavToHome(props) {
        //pass in the props of the component to use for navigation
        props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Drawer' }],
            }),
        );
    }

    goToMenuView(props) {
        props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Drawer' }],
            }),
        );
    }
}
