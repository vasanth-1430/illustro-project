const pollOptions = ["HTML", "CSS", "Javascript", "React JS", "Python"];
let votes = JSON.parse(localStorage.getItem("votes")) || {
  HTML: 0,
  CSS: 0,
  Javascript: 0,
  "React JS": 0,
  Python: 0,
};

function renderPoll() {
  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);
  pollOptions.forEach((option) => {
    const percent = totalVotes ? Math.round((votes[option] / totalVotes) * 100) : 0;
    document.getElementById(`${option}-percent`).innerText = `${percent}%`;
    document.getElementById(`${option}-bar`).style.width = `${percent}%`;
  });
  document.getElementById("total-votes").innerText = `Total Votes: ${totalVotes}`;
}

function vote(option) {
  votes[option]++;
  localStorage.setItem("votes", JSON.stringify(votes));
  renderPoll();
}

window.onload = () => {
  renderPoll();
  pollOptions.forEach((option) => {
    document.getElementById(`vote-${option}`).onclick = () => vote(option);
  });
};
