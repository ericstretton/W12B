function handleFunction() {
    getData();
  }

  function getData() {
    var description = document.getElementById("activityDescription");
    description.style.display = "block";
    fetch("https://www.boredapi.com/api/activity")
      .then(response => response.json())
      .then(data => {
        var activity = document.getElementById("activity");
        activity.innerText = data.activity;
      });
  }
