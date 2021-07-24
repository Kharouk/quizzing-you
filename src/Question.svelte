<script>
  export let question;
  export let updateTally;
  export let handleNextQuestion;

  let isCorrect;
  let hasClicked = false;

  const { correct_answer, incorrect_answers } = question;

  let answers = []
    .concat(correct_answer, incorrect_answers)
    .sort(() => Math.random() - 0.5);

  function pickAnswer(answer) {
    hasClicked = true;
    if (answer === correct_answer) {
      updateTally();
      isCorrect = true;
    } else {
      isCorrect = false;
    }
  }
</script>

<h3>{@html question.question}</h3>

{#each answers as answer}
  <button
    class={hasClicked && 'disable'}
    disabled={hasClicked}
    on:click={() => pickAnswer(answer)}>{@html answer}</button
  >
{/each}

{#if hasClicked}
  <h4 class={isCorrect ? 'correct' : 'incorrect'}>
    {#if isCorrect}
      Good job eh! 🌲
    {:else}
      Sorry, the answer was "{correct_answer}". Next time bud. 🪦
    {/if}
  </h4>
  <button on:click={handleNextQuestion}>Next Question</button>
{/if}

<style>
  .correct {
    color: #00dd99;
  }
  .incorrect {
    color: #ff3300;
  }

  .disable {
    background-color: #eee;
  }
</style>
