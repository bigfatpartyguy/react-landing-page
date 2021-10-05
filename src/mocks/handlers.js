import {rest} from 'msw';
import {cardsData} from '../data';

export const handlers = [
  rest.get('/api/cards', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(cardsData))
  ),
];
