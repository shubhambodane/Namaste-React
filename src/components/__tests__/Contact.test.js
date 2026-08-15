import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

// render --> query --> assert

describe('Test Contact Component', () => {
  it('Should load contact us component', () => {
    render(<Contact />);
    1;

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    ` `;
  });

  it('Should load button inside Contact component', () => {
    render(<Contact />);
    const button = screen.getByText('Submit');
    expect(button).toBeInTheDocument();
  });

  test('should have 3 input boxes inside contact component', () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole('textbox');
    expect(inputBoxes.length).toBe(3);
  });
});
