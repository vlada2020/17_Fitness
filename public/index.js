// init function runs with index.html; if search undefined, get last workout; if there is a workout set search url search to ?id+ + workout_id; else set id continue-btn class to d-none
init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}