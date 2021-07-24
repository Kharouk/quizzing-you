<script>
  export let subtitle = 'Be wary of the challenge.';
  export let title;
</script>

<div>
  <h1>{title}</h1>
  <h3>{subtitle}</h3>
  <section />
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
