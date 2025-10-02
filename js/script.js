// -----------------------------
// JS Constants
// -----------------------------
const colorPalette = {
  happy: ["#F1E7E7","#E69DB8","#FFD0C7","#FFFECE"],
  sad: ["#222831","#393E46","#948979","#DFD0B8"],
  angry: ["#3E0703","#660B05","#8C1007","#FFF0C4"],
  fear: ["#2f2323","#332424","#331e1e","#3c0000"],
  disgust: ["#08CB00","#253900","#000000","#EEEEEE"],
  neutral: ["#819A91","#A7C1A8","#D1D8BE","#EEEFE0"]
};

const shortStories = {
  happy: `Aarav woke up to the sound of birds singing outside his window. The golden rays of the morning sun spilled across his desk, catching on the pages of a half-finished sketch. He stretched, feeling light, as though the world had been painted in brighter colors overnight. Today, nothing seemed ordinary. On his way to the park, the breeze carried the sweet smell of flowers and roasted corn from the vendor at the corner. Children chased each other on the grass, their laughter echoing like music. Aarav bought a balloon for no reason at all and smiled at how silly yet freeing it felt to carry something so small. He sat under a tree, sketching the world around him. Every detail felt alive—the rustling leaves, the distant sound of someone playing the flute, the warmth of the sun on his face. Happiness didn’t come from something grand; it came from this—quiet moments filled with life’s simplest joys.`,

  sad: `Mira sat by the window as the rain streaked down the glass, blurring the world outside. Each drop felt like it carried her sorrow, sliding downward until it disappeared, only to be replaced by another. She held an old photograph, the edges worn from years of handling. The smiling face in the picture looked back at her—a memory, not reality. The room was quiet except for the steady rhythm of the rain, and in that silence, she could almost hear his laughter again. It was strange how absence could fill a space more completely than presence. Mira rested her head against the cold windowpane, eyes heavy with tears she refused to let fall. Life moved on outside, cars rushing by, people with umbrellas darting across the street, unaware of her stillness. She wondered if the ache in her chest would ever fade, or if she had learned to live with a hollow she could not name. Sometimes sadness wasn’t loud; sometimes it whispered, and stayed.`,

  angry: `Ravi slammed the notebook shut, the sound cracking through the empty room. His thoughts had been running in circles for hours, each one heavier than the last. The injustice of it all gnawed at him, sharp and merciless. How could they not see? How could they treat his efforts as if they meant nothing? His hands trembled, fists tightening until his knuckles turned white. The clock ticked too loudly, the air felt too still, and even the smallest sound seemed to mock him. He paced, each step a beat to the storm raging in his chest. Memories replayed in jagged fragments—words spoken too carelessly, promises broken too easily. His throat burned with things he wanted to shout, but silence swallowed them whole. Anger was not just fire; it was a cage that made the world smaller, darker. He stopped, chest heaving, and realized his reflection in the window looked like a stranger—eyes lit with fury, jaw clenched with unspoken words.`,

  fear: `Ananya stood at the end of the hallway, the light above flickering. The house was quiet—too quiet. She told herself it was just the wind, just the pipes, just her imagination. But the sound came again: a creak, soft and deliberate, like someone testing the floorboards. Her breath caught, and her heart thudded against her ribs. Every shadow stretched too far, every corner seemed darker than it should be. She reached for her phone, but the screen stayed black; the battery had died hours ago. The silence pressed down on her ears until the faint hum of the refrigerator in the kitchen sounded like a roar. She forced herself to move, each step heavy with dread, her mind painting images of what might be waiting in the darkness. The hallway seemed to stretch longer with each step, the door at the end pulling her closer. She whispered, "It’s nothing, it’s nothing," but her voice shook. Then, just as she reached the door handle, the sound came again—this time, right behind her.`,

  disgust: `Karan pulled open the old fridge door, and the smell hit him instantly—thick, sour, and unbearable. He staggered back, hand clamped over his mouth, but it was too late. The stench clung to him, filling his lungs and making his stomach churn. He braced himself and leaned in again, determined to find the source. At first, he thought it was just spilled milk or forgotten leftovers, but then he saw it: a container shoved at the very back, lid half-open. Its contents had transformed into something unrecognizable, a bubbling mess of green and gray that seemed almost alive. Maggots writhed at the edges, pale and grotesque against the dark rot. Karan’s gag reflex took over, and he barely made it to the sink in time. The taste of bile burned his throat. He slammed the fridge shut, eyes watering, and swore never again to put off cleaning. Yet even as he scrubbed his hands raw, the smell lingered in his nose, in his memory, refusing to let him go.`,

  neutral: `Ishaan sat at the café, a cup of tea steaming in front of him. Around him, the world moved at a steady rhythm—conversations rising and falling, the barista calling out names, the hum of traffic outside blending into the background. He didn’t feel particularly happy or sad, just... present. The tea tasted exactly as it always did, slightly sweet, slightly bitter. He tapped his fingers idly on the table, watching as sunlight shifted across the floor in slow patterns. The couple by the window leaned close, sharing something he couldn’t hear. A group of students laughed over notes, their energy filling the room. It was life, unremarkable yet complete. He opened a book but didn’t read, letting the words blur as his thoughts wandered nowhere in particular. Neutrality wasn’t emptiness, he realized—it was balance. A moment where nothing demanded too much, and nothing hurt too deeply. Just breathing, just existing, letting the world turn as it always had.`
};


const moodFonts = {
  happy: { fontFamily:"Milkyway", fontFile:"fonts/Milkyway DEMO.ttf", fontWeight:"bold", color:"#000000" },
  sad: { fontFamily:"Alkia", fontFile:"fonts/Alkia.ttf", fontWeight:"normal", color:"#ffffffff" },
  fear: { fontFamily:"WaenRonta", fontFile:"fonts/Waen Ronta Trial.ttf", fontWeight:"bold", color:"#ffffff" },
  disgust: { fontFamily:"Quadran-Regular", fontFile:"fonts/Quadran-Regular.otf", fontWeight:"normal", color:"#ffffff" },
  angry: { fontFamily:"NeueRemanGt-HeavySemiCond", fontFile:"fonts/NeueRemanGt-HeavySemiCond.otf", fontWeight:"900", color:"#ffffff" },
  neutral: { fontFamily:"Quano", fontFile:"fonts/Quano DEMO.otf", fontWeight:"normal", color:"#ffffff" }
};

const moodEmojis = {
  happy: { alt: "😊", webp: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.webp", gif: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.gif" },
  sad: { alt: "😢", webp: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f622/512.webp", gif: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f622/512.gif" },
  angry: { alt: "😠", webp: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f620/512.webp", gif: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f620/512.gif" },
  fear: { alt: "😱", webp: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f631/512.webp", gif: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f631/512.gif" },
  disgust: { alt: "🤢", webp: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f922/512.webp", gif: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f922/512.gif" },
  neutral: { alt: "😐", webp: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f610/512.webp", gif: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f610/512.gif" }
};

const moodKeywords = {
  happy:["delighted","happy","joyful","cheerful","ecstatic"], 
  sad:["sad","depressed","melancholy","blue","sorrowful"], 
  angry:["angry","furious","frustrated"], 
  fear:["fear","anxiety","panic","nervous"], 
  disgust:["disgust","nauseated","repulsed"], 
  neutral:["neutral","normal","calm"]
};

// -----------------------------
// Helpers
// -----------------------------
function detectMood(text){
  const words = text.toLowerCase().split(/\W+/);
  for(let word of words){
    switch(true){
      case moodKeywords.sad.includes(word): return "sad";       // check sad first
      case moodKeywords.happy.includes(word): return "happy";
      case moodKeywords.angry.includes(word): return "angry";
      case moodKeywords.fear.includes(word): return "fear";
      case moodKeywords.disgust.includes(word): return "disgust";
      case moodKeywords.neutral.includes(word): return "neutral";
    }
  }
  return "neutral"; // default
}

function capitalize(str){ return str[0].toUpperCase()+str.slice(1); }

function loadFonts(){ 
  for(const m in moodFonts){
    const f=moodFonts[m];
    document.head.insertAdjacentHTML("beforeend",
      `<style>@font-face{font-family:'${f.fontFamily}';src:url('${f.fontFile}') format('${f.fontFile.endsWith(".otf")?"opentype":"truetype"}');font-weight:${f.fontWeight};}</style>`);
  }
}

function applyMoodToInfoBoxes(mood) {
  const color = colorPalette[mood][0];
  document.querySelectorAll(".top-bar .info-box").forEach(box => {
    box.style.backgroundColor = color;
  });
}
// -----------------------------
// Gradient Background Animation
// -----------------------------
let gradientInterval;

function startGradientAnimation(mood) {
  const colors = colorPalette[mood];
  if (!colors) return;

  // Pick two random colors for gradient
  function pickTwoRandomColors() {
    const c1 = colors[Math.floor(Math.random() * colors.length)];
    let c2 = colors[Math.floor(Math.random() * colors.length)];
    while (c2 === c1) c2 = colors[Math.floor(Math.random() * colors.length)];
    return [c1, c2];
  }

  // Clear any previous animation
  if (gradientInterval) clearInterval(gradientInterval);

  let [fromColor, toColor] = pickTwoRandomColors();
  let progress = 0; // 0 to 1

  gradientInterval = setInterval(() => {
    // Smooth interpolation between colors
    progress += 0.01; // speed of transition
    if (progress > 1) {
      progress = 0;
      [fromColor, toColor] = pickTwoRandomColors();
    }

    // Apply gradient using linear interpolation
    document.body.style.background = `linear-gradient(135deg, ${fromColor} ${Math.floor(progress*100)}%, ${toColor})`;
  }, 50); // update every 50ms for smooth animation
}

// -----------------------------
// Apply mood, show story & emoji
// -----------------------------
function applyMood(mood){
  const colors = colorPalette[mood],
        font = moodFonts[mood],
        story = shortStories[mood],
        emoji = moodEmojis[mood];

  if(!colors || !font || !story || !emoji) return;

  // Start gradient animation
  startGradientAnimation(mood);

  const input = document.getElementById("moodPrompt");
  if(input){ input.style.backgroundColor = colors[1]; input.style.borderColor = colors[2]; input.style.color = "#fff"; }

  const btn = document.querySelector(".cssbuttons-io-button");
  if(btn){ btn.style.backgroundColor = colors[1]; btn.style.color = "#fff"; }

  const heading = document.getElementById("dynamicHeading");
  if(heading){ heading.style.color = font.color; heading.style.fontWeight = font.fontWeight; heading.style.fontFamily = font.fontFamily; }

  const emojiBox = document.getElementById("moodEmoji");
  if(emojiBox){
    emojiBox.innerHTML = `<picture><source srcset="${emoji.webp}" type="image/webp"><img src="${emoji.gif}" alt="${emoji.alt}" class="emoji-img"></picture>`;
  }

  const storyContainer = document.getElementById("storyContainer");
  const storyBox = document.getElementById("storyLinkBox");
  if(storyContainer) storyContainer.style.backgroundColor = colors[1];
  if(storyBox){
    storyBox.style.backgroundColor = "transparent";
    storyBox.style.fontFamily = font.fontFamily;
    storyBox.style.fontWeight = font.fontWeight;
    storyBox.style.color = font.color;
    storyBox.textContent = "";

    let i = 0;
    clearInterval(storyBox._interval);
    storyBox._interval = setInterval(()=>{
      if(i >= story.length) clearInterval(storyBox._interval);
      else { storyBox.textContent += story[i]; storyBox.scrollTop = storyBox.scrollHeight; i++; }
    }, 20);
  }

  applyMoodToInfoBoxes(mood);
}

// -----------------------------
// Generate story
// -----------------------------
function generateStory(){
  const prompt=document.getElementById("moodPrompt")?.value.trim();
  if(!prompt){ alert("Please describe your mood."); return; }
  const mood = detectMood(prompt);
  const display = document.getElementById("moodDisplay");
  if(display) display.textContent = `Detected Mood: ${capitalize(mood)}`;
  applyMood(mood);
}

// -----------------------------
// Heading animation
// -----------------------------
const headings=[
  "AI Mood Adaptive Story","What Story Fits Your Mood?","Discover Your Mood's Tale",
  "Mood-Driven Stories","Stories That Match Your Mood","Your Mood, Your Story",
  "Feelings to Fiction","Emotional Storytelling","AI-Powered Mood Stories","Unlock Stories with Your Mood"
];
let index = 0;
setInterval(()=>{
  const h = document.getElementById("dynamicHeading");
  if(h){
    h.style.opacity = 0;
    setTimeout(()=>{ index=(index+1)%headings.length; h.textContent = headings[index]; h.style.opacity = 1; }, 800);
  }
}, 2000);

// -----------------------------
// Username Handling
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  loadFonts();

  const usernameInput = document.getElementById("usernameInput");
  const startBtn = document.getElementById("startBtn");
  const greetingBox = document.getElementById("greetingMessage"); // make sure this exists on index.html

  const userName = localStorage.getItem("username");

  // Dynamic greetings array
  const greetings = [
    `Hello ${userName}, how are you feeling today?`,
    `Welcome back, ${userName}! Ready for your story?`,
    `${userName}, let's discover your mood-driven tale!`,
    `Hey ${userName}, what's your mood today?`,
    `Get ready, ${userName}! Your story awaits.`,
    `${userName}, every mood has a story... let's find yours!`
  ];

  if (userName && greetingBox) {
    let index = 0;

    // Initialize first greeting
    greetingBox.textContent = greetings[index];
    greetingBox.style.opacity = 0;
    greetingBox.style.transition = "opacity 1s";

    // Function to cycle greetings
    setInterval(() => {
      // Fade out
      greetingBox.style.opacity = 0;

      setTimeout(() => {
        // Change text and fade in
        index = (index + 1) % greetings.length;
        greetingBox.textContent = greetings[index];
        greetingBox.style.opacity = 1;
      }, 1000); // wait for fade-out to finish
    }, 2000 + 1000); // 2s visible + 1s fade
  }

  if (startBtn && usernameInput) {
    startBtn.addEventListener("click", () => {
      const name = usernameInput.value.trim();
      if (!name) { alert("Please enter your name"); return; }
      localStorage.setItem("username", name);
      window.location.href = "index.html";
    });

    usernameInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") startBtn.click();
    });
  }

  document.querySelector(".cssbuttons-io-button")?.addEventListener("click", generateStory);

  const heading = document.getElementById("dynamicHeading");
  if (heading) {
    heading.addEventListener("click", () => {
      heading.classList.add("clicked");
      setTimeout(() => { heading.classList.remove("clicked"); }, 500);
    });
  }

  if (greetingBox) {
    greetingBox.addEventListener("click", () => {
      greetingBox.classList.add("clicked");
      setTimeout(() => { greetingBox.classList.remove("clicked"); }, 500);
    });
  }
});
// prompt text area enter key to submit
document.addEventListener("DOMContentLoaded", () => {
  const userName = localStorage.getItem("username");
  const moodPrompt = document.getElementById("moodPrompt");

  if (userName && moodPrompt) {
    const promptPlaceholders = [
      `How are you feeling today, ${userName}?`,
      `Share your mood, ${userName}...`,
      `What's on your mind, ${userName}?`,
      `${userName}, describe your emotions...`,
      `Express your current mood, ${userName}`,
      `Tell me a little about your day, ${userName}`
    ];

    let index = 0;
    let placeholderInterval;

    // Initialize first placeholder
    moodPrompt.placeholder = promptPlaceholders[index];

    // Function to start cycling
    function startCycling() {
      placeholderInterval = setInterval(() => {
        moodPrompt.style.transition = "opacity 0.5s";
        moodPrompt.style.opacity = 0;

        setTimeout(() => {
          index = (index + 1) % promptPlaceholders.length;
          moodPrompt.placeholder = promptPlaceholders[index];
          moodPrompt.style.opacity = 1;
        }, 500);
      }, 3000);
    }

    // Start cycling initially
    startCycling();

    // Detect typing → stop cycling
    moodPrompt.addEventListener("input", () => {
      if (moodPrompt.value.trim().length > 0) {
        clearInterval(placeholderInterval);
        moodPrompt.placeholder = ""; // remove placeholder once typing begins
      } else {
        // if cleared, restart cycling
        clearInterval(placeholderInterval);
        index = 0;
        moodPrompt.placeholder = promptPlaceholders[index];
        startCycling();
      }
    });
  }
});

// background color for story box and prompt box
// -----------------------------
// Light Gradient Background Animation
// -----------------------------

// -----------------------------
// Start animation on page load
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  startGlobalGradientAnimation();
});


// -----------------------------