document.addEventListener("DOMContentLoaded", () => {
  // First bird
  const bird = document.createElement("img");
  bird.src = "images/bird.png";
  bird.alt = "One Sassy Red Bird";
  bird.id = "flyingBird";
  bird.classList.add("flapping");
  document.body.appendChild(bird);

  // Second bird
  const bird2 = document.createElement("img");
  bird2.src = "images/bird2.png";
  bird2.alt = "Feathered Frenemy";
  bird2.id = "secondBird";
  bird2.classList.add("flapping");
  document.body.appendChild(bird2);

  // Shared chat bubble
  const chat = document.createElement("div");
  chat.id = "birdChat";
  chat.textContent = "Where are my SAAD marks?!";
  document.body.appendChild(chat);

  const quotesBird1 = [
    "Where are my SAAD marks?!",
    "This final project is never-ending.",
    "I submitted that assignment two days ago!",
    "Why does it still say 'pending review'?",
    "Is anyone even grading this?",
    "Red bird is officially over it.",
    "Can someone hand me my degree already?",
  ];

  const quotesBird2 = [
    "Chill, they're probably still on break.",
    "The professor might be binge-watching something.",
    "You expected feedback that fast?",
    "Did you double-check the submission portal?",
    "They’re grading with a crystal ball at this point.",
    "I soared through that last semester.",
    "Just hang on — you’re almost there.",
  ];

  let quoteIndex1 = 0;
  let quoteIndex2 = 0;

  function moveBird(birdEl, speaker = null) {
    const maxX = window.innerWidth - 400;
    const maxY = window.innerHeight - 300;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    birdEl.style.left = newX + "px";
    birdEl.style.top = newY + "px";

    if (speaker === "bird1") {
      let bubbleTop = newY - 100;
      if (bubbleTop < 10) bubbleTop = 10;

      chat.style.left = newX + 200 + "px";
      chat.style.top = bubbleTop + "px";
      chat.textContent = quotesBird1[quoteIndex1];
      quoteIndex1 = (quoteIndex1 + 1) % quotesBird1.length;
    }

    if (speaker === "bird2") {
      let bubbleTop = newY - 100;
      if (bubbleTop < 10) bubbleTop = 10;

      chat.style.left = newX + 200 + "px";
      chat.style.top = bubbleTop + "px";
      chat.textContent = quotesBird2[quoteIndex2];
      quoteIndex2 = (quoteIndex2 + 1) % quotesBird2.length;
    }
  }

  // Move birds at different intervals
  setInterval(() => moveBird(bird, "bird1"), 2500);
  setInterval(() => moveBird(bird2, "bird2"), 3000);

  // Apply styling to both birds
  [bird, bird2].forEach(b => {
    b.style.position = "fixed";
    b.style.width = "400px";
    b.style.zIndex = "1000";
  });

  // Initial positions
  bird.style.left = "100px";
  bird.style.top = "100px";
  bird2.style.left = "300px";
  bird2.style.top = "300px";

  // Chat bubble styling
  chat.style.position = "fixed";
  chat.style.background = "#fff";
  chat.style.padding = "8px 12px";
  chat.style.borderRadius = "12px";
  chat.style.boxShadow = "2px 2px 5px rgba(0,0,0,0.2)";
  chat.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
  chat.style.fontSize = "18px";
  chat.style.color = "#d10000";
  chat.style.zIndex = "1000";
  chat.style.maxWidth = "300px";

  // Start with initial movement
  moveBird(bird, "bird1");
  moveBird(bird2, "bird2");
});
