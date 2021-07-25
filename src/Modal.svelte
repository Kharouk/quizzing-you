<script>
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';
  export let hasPassed = false;
  const dispatch = createEventDispatcher();
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
