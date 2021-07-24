import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    title: 'Welcome to Great Canadian Quiz Show.',
  },
});

export default app;
