<script>
  export let title;
  let subtitle = 'Be wary of the challenge.';

  const questions = {
    1: {
      question: 'What colour is the sky today?',
      options: ['Blue', 'Gray', 'Slightly Pink', 'Apocalyptic Red'],
      correctAnswer: 1,
    },
  };

  let result = '';

  function pickAnswer(answer) {
    console.log(answer);
    result =
      answer === questions[1].options[questions[1].correctAnswer]
        ? 'Correct!'
        : 'Wrong answer bud.';
  }
</script>

<div>
  <h1>{title}</h1>
  <h3>{subtitle}</h3>
  <section>
    <div>
      <h4>Question 1</h4>
      <p>{questions[1].question}</p>
      <button on:click={() => pickAnswer('Blue')}>Blue</button>
      <button on:click={() => pickAnswer('Gray')}>Gray</button>
      <button on:click={() => pickAnswer('Slightly Pink')}>
        Slightly Pink
      </button>
      <button on:click={() => pickAnswer('Apocalyptic Red')}>
        Apocalyptic Red
      </button>
      <h4>Answer: {result}</h4>
    </div>
  </section>
</div>

<style>
  :root {
    --color-primary: #bb33ee;
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
