<script>
  export let question;
  export let updateTally;
  const { correct_answer, incorrect_answers } = question;

  let answers = []
    .concat(correct_answer, incorrect_answers)
    .sort(() => Math.random() - 0.5);

  function pickAnswer(answer) {
    console.log(answer, correct_answer);
    if (answer === correct_answer) {
      updateTally();
      console.log("that's good mate!");
    } else {
      console.log('oof mate.');
    }
  }
</script>

<h3>{@html question.question}</h3>
{#each answers as answer}
  <button on:click={() => pickAnswer(answer)}>{@html answer}</button>
{/each}
