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


  function handleGroupFunction() {
    getGroupData();
  }

  const selectPart = document.querySelector('#participantSelect');

  function getGroupData() {
    var groupDescription = document.getElementById("groupActivityDescription");
    groupDescription.style.display = "block";
    
    fetch("http://www.boredapi.com/api/activity?participants=2")
      .then(response => response.json())
      .then(data => {
        var activity = document.getElementById("groupActivity");
        activity.innerText = data.activity;
      });
  }

