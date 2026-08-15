import { render, screen } from '@testing-library/react';
import RestaurantCard, { withPromotedLabel } from '../RestaurantCard';
import MOCK_DATA from '../../mocks/';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Test RestaurantCard Component', () => {
  it('Should render restaurant card component with props data', () => {
    render(
      <BrowserRouter>
        <RestaurantCard {...MOCK_DATA} />
      </BrowserRouter>,
    );

    const name = screen.getByText('Test Restaurant');
    expect(name).toBeInTheDocument();
  });

  it('should render RestaurantCard component with Promoted Label', () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    render(
      <BrowserRouter>
        <RestaurantCardPromoted {...MOCK_DATA} />
      </BrowserRouter>,
    );

    const promotedLabel = screen.getByText('Promoted');
    expect(promotedLabel).toBeInTheDocument();
  });
});
