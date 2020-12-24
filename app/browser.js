// src/mocks/browser.js
import { setupWorker, rest } from 'msw';

// This configures a Service Worker with the given request handlers.
const worker = setupWorker(
  rest.get('/', (_req, res, ctx) => res(ctx.json({ worked: true }))),
);

worker.start();
