import { render, fireEvent } from '@testing-library/vue';
import AButton from '../a-button.vue';

describe('AButton', () => {
  it('render correctly', () => {
    const { getByText, debug } = render(AButton, {
      slots: {
        default: 'blah',
      },
    });

    debug();
  });
});
