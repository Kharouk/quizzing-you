<script>
  import { fade } from 'svelte/transition';
  import Question from './Question.svelte';
  import Modal from './Modal.svelte';

  export let title;
  let activeQuestion = 0;
  let tally = 0;
  let isModalOpen = false;

  let quiz;
  let quizId;

  // IDs for Quiz API:
  const COMPUTERS_ID = 18;
  const TV_ID = 14;
  const CELEBS_ID = 26;
  const SPORTS_ID = 21;
  const MOVIES_ID = 11;
  const GENERAL_ID = 9;

  function resetData() {
    tally = 0;
    isModalOpen = false;
    activeQuestion = 0;
  }

  function chooseQuizType(qId) {
    quizId = qId;
  }

  function updateTally() {
    tally += 1;
  }

  function handleNextQuestion() {
    activeQuestion += 1;
  }

  function startQuiz(difficulty) {
    resetData();
    quiz = getQuiz(difficulty);
    quizId = '';
  }

  // reactive statement -> monitoring game state
  $: if (activeQuestion > 9) {
    // trigger modal to complete the game
    isModalOpen = true;
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
    <button on:click={() => chooseQuizType(SPORTS_ID)}>Sports</button>
    <button on:click={() => chooseQuizType(MOVIES_ID)}>Movies</button>
    <button on:click={() => chooseQuizType(GENERAL_ID)}
      >General Knowledge</button
    >
  {/if}

  {#if quizId}
    <h2>Choose your difficulty:</h2>
    <button on:click={() => startQuiz('')}>Mixed</button>
    <button on:click={() => startQuiz('easy')}>Easy</button>
    <button on:click={() => startQuiz('medium')}>Medium</button>
    <button on:click={() => startQuiz('hard')}>Hard</button>
  {/if}

  {#if quiz}
    <section>
      <h2>Total Score: {tally}</h2>
      <div>
        {#await quiz}
          <p>loading...</p>
        {:then { results }}
          {#each results as question, idx}
            {#if idx == activeQuestion}
              <div out:fade={{ duration: 200 }} in:fade={{ delay: 200 }}>
                <Question {question} {updateTally} {handleNextQuestion} />
              </div>
            {/if}
          {/each}
        {/await}
      </div>
    </section>
  {/if}
</div>

{#if isModalOpen}
  <Modal hasPassed={tally / 10 > 0.6}>
    <h2>You've completed <em>the quiz!</em></h2>
    <p>Your score is {tally} out of 10.</p>
    <p>{tally / 10 > 0.6 ? 'You passed!' : 'You FAILED 💀'}</p>
    <button on:click={resetData}>Play again</button>
  </Modal>
{/if}

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
