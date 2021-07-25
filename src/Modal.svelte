<script>
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';
  import { supabase } from './supabaseClient';

  const dispatch = createEventDispatcher();
  export let hasPassed = false;
  export let score;

  const CATEGORIES = {
    18: 'Computers',
    14: 'Television',
    26: 'Celebs',
    21: 'Sports',
    11: 'Film',
    9: 'General',
  };

  let name;
  const createNewScore = async () => {
    const { tally, quizCategory } = score;

    const { data, error } = await supabase.from('highscores').insert([
      {
        name,
        score: tally,
        category: CATEGORIES[quizCategory],
      },
    ]);

    if (error) throw error;
  };
</script>

<div
  class="modal-bg"
  class:hasPassed
  in:fly={{ y: 100, duration: 1000 }}
  out:fly={{ y: -200, duration: 200 }}
>
  <div class="modal">
    <button
      on:click={() => {
        dispatch('close');
      }}
    >
      Close
    </button>
    <div>
      <h3>Want to record your score?</h3>
      <form on:submit|preventDefault={createNewScore}>
        <input bind:value={name} />
        <button
          type="submit"
          on:click={() => {
            dispatch('close');
          }}>Submit</button
        >
      </form>
    </div>
    <slot />
  </div>
</div>

<style>
  .modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 0, 0, 0.1);
  }

  .hasPassed {
    background: rgba(0, 255, 0, 0.2);
  }

  .modal {
    display: grid;
    margin-top: 5vh;
    background: #fff;
    border-radius: 20px;
    padding: 15px;
  }
</style>
