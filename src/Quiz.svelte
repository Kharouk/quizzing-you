<script>
  import Question from './Question.svelte';
  export let title;

  let tally = 0;

  function updateTally() {
    tally += 1;
  }

  let quiz = getQuiz();

  function handleClick() {
    quiz = getQuiz();
  }

  async function getQuiz() {
    const res = await fetch(
      'https://opentdb.com/api.php?amount=10&category=18&type=multiple'
    );
    const quiz = await res.json();
    console.log(quiz);
    return quiz;
  }
</script>

<div>
  <h1>{title}</h1>
  <section>
    <div>
      {#await quiz}
        <p>loading...</p>
      {:then { results }}
        {#each results as question}
          <Question {question} {updateTally} />
        {/each}
      {/await}
    </div>

    <button on:click={() => handleClick()}>Next Question</button>
    <p>Total Score: {tally}</p>
  </section>
</div>

<style>
  :root {
    --color-primary: #e82042;
  }

  h1 {
    color: var(--color-primary);
    text-transform: uppercase;
    font-size: clamp(2rem, -0.875rem + 8.333vw, 3.5rem);
    font-weight: 100;
    overflow-wrap: break-word;
    hyphens: auto;
  }
</style>
