<script>
  import { supabase } from './supabaseClient';

  const getData = async () => {
    try {
      let { data: highscores, error } = await supabase
        .from('highscores')
        .select('*')
        .order('date_created', { ascending: false })
        .limit(10);

      if (error) throw error;
      return highscores;
    } catch (error) {
      // add fancy shmancy error handling
      console.log(error);
    }
  };

  const highscores = getData();

  const formatDate = (date) => {
    let format = new Date(date);
    return format.toLocaleDateString('en-gb');
  };
</script>

<div class="wrapper">
  <table>
    {#await highscores}
      <p>Loading Highscores</p>
    {:then data}
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Score</th>
        <th scope="col">Date</th>
        <th scope="col">Category</th>
      </tr>
      {#each data as user}
        <tr>
          <th scope="row">{user.name}</th>
          <td>{user.score}</td>
          <td>{formatDate(user.date_created)}</td>
          <td>{user.category}</td>
        </tr>
      {/each}
    {/await}
    <tr />
  </table>
</div>

<style>
  .wrapper {
    display: grid;
    margin-top: 5rem;
    border: 1px dashed red;
  }
</style>
