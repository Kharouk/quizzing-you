<script>
  import Question from './Question.svelte';
  export let title;
  let activeQuestion = 0;
  let quizId;

  // IDs for Quiz API:
  const COMPUTERS_ID = 18;
  const TV_ID = 14;
  const CELEBS_ID = 26;

  let tally = 0;

  function updateTally() {
    tally += 1;
  }

  let quiz;

  function chooseQuizType(qId) {
    quizId = qId;
  }

  function handleClick(difficulty) {
    quiz = getQuiz(difficulty);
    quizId = '';
  }

  function handleNextQuestion() {
    activeQuestion += 1;
  }

  async function getQuiz(difficulty) {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${quizId}&type=multiple&difficulty=${difficulty}`
    );
    const quiz = await res.json();
    console.log(quiz.results);
    return quiz;
  }
</script>

<div>
  <h1>{title}</h1>
  {#if !quiz}
    <h2>Choose your category:</h2>
    <button on:click={() => chooseQuizType(COMPUTERS_ID)}>Computers</button>
    <button on:click={() => chooseQuizType(TV_ID)}>TV Shows</button>
    <button on:click={() => chooseQuizType(CELEBS_ID)}>Celebs</button>
  {/if}

  {#if quizId}
    <h2>Choose your difficulty:</h2>
    <button on:click={() => handleClick('')}>Mixed</button>
    <button on:click={() => handleClick('easy')}>Easy</button>
    <button on:click={() => handleClick('medium')}>Medium</button>
    <button on:click={() => handleClick('hard')}>Hard</button>
  {/if}

  <section>
    {#if quiz}
      <h2>Total Score: {tally}</h2>
      <div>
        {#await quiz}
          <p>loading...</p>
        {:then { results }}
          {#each results as question, idx}
            {#if idx == activeQuestion}
              <Question {question} {updateTally} {handleNextQuestion} />
            {/if}
          {/each}
        {/await}
      </div>
    {/if}
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
