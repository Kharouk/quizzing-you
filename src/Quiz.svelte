<script>
  export let title;

  const questions = [
    {
      question: 'What colour is the sky today?',
      options: ['Blue', 'Gray', 'Slightly Pink', 'Apocalyptic Red'],
      correctAnswer: 1,
    },
    {
      question: 'Favourite Coffee to buy at the Local Cafe?',
      options: [
        'Cold Brew',
        'Mother Fucker',
        'Double Express',
        'Apocalyptic Wow',
      ],
      correctAnswer: 0,
    },
    {
      question: 'Favourite Platform to learn?',
      options: ["O'Reilly", 'AlgoExpert', 'BigMachine', 'Udemy'],
      correctAnswer: 0,
    },
  ];

  let answers = [];

  function pickAnswer(answer, questionNumber) {
    answers[questionNumber] =
      answer ===
      questions[questionNumber].options[questions[questionNumber].correctAnswer]
        ? 'Nice one eh!'
        : 'Wrong answer bud.';
  }
</script>

<div>
  <h1>{title}</h1>
  <section>
    <div>
      {#each questions as question, idx}
        <h4>Question {idx}</h4>
        <p>{question.question}</p>
        {#each question.options as option}
          <button on:click={() => pickAnswer(option, idx)}>{option}</button>
        {/each}
        {#if answers[idx]}
          <h4>{answers[idx]}</h4>
        {/if}
      {/each}
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
