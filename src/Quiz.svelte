<script>
  export let subtitle = 'Be wary of the challenge.';
  import Calculator from './Calculator.svelte';
  let inputText = 0;
</script>

<div>
  <h2>Welcome to the Great British Sweat Quiz!</h2>
  <h3>{subtitle}</h3>
  <section>
    <h4>Your salary is ${inputText}</h4>
    <input bind:value={inputText} type="text" />
    <hr />
    <Calculator />
  </section>
</div>
