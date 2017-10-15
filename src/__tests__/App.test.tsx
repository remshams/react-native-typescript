import RNLocalization from "../__mocks__/RNLocalization";
jest.setMock("react-native-localization", RNLocalization);
import 'react-native';
import * as React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer';


it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  );
});
