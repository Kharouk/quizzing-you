<script>
  import Quiz from './Quiz.svelte';
  import Scoreboard from './Scoreboard.svelte';
  export let title;
</script>

<main>
  <Quiz {title} />
  <Scoreboard />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  :global(button) {
    margin-right: 1rem;
    margin-left: 1rem;
    padding: 1rem;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    background-color: #e82042;
  }

  :global(button:hover) {
    background-color: #ff3333;
  }

  :global(.hasPassed button) {
    background-color: green;
  }
</style>
