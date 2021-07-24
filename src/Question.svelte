<script>
  export let question;
  export let updateTally;
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
  <button on:click={() => pickAnswer(answer)}>{@html answer}</button>
{/each}

{#if hasClicked}
  <h4 class={isCorrect ? 'correct' : 'incorrect'}>
    {#if isCorrect}
      Good job eh! 🌲
    {:else}
      Next time bud. 🪦
    {/if}
  </h4>
{/if}

<style>
  .correct {
    color: #00dd99;
  }
  .incorrect {
    color: #ff3300;
  }
</style>
