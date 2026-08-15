import { act, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Body from '../Body';
import MOCK_DATA from '../mocks/resListMock.json';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it('Should search restaurant list for burger', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );

  const searchBtn = screen.getByRole('button', { name: 'Search' });

  const cardsBeforeSearch = screen.getAllByTestId('testResCard');

  expect(cardsBeforeSearch.length).toBe(3);

  const searchInput = screen.getByTestId('searchInput');

  fireEvent.change(searchInput, {
    target: {
      value: 'burger',
    },
  });

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId('testResCard');

  expect(cards.length).toBe(1);
});
