import React from 'react';
import App from '../../App';
import {render, fireEvent, act, wait} from '@testing-library/react-native';

describe('Account Component', () => {
  it('It should render components without error', async () => {
    const {queryByTestId} = render(<App />);
    expect(queryByTestId('view_container')).toBeTruthy();
    expect(queryByTestId('text_label')).toBeTruthy();
  });
});
