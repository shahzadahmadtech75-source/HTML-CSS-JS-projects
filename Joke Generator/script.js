// STEP 1: Select the input box where the joke will be shown
let jokeInput = document.getElementById("jokeinput");

// STEP 2: Create an array full of jokes
// You can add or remove jokes anytime
// 😂 50 Hilarious Jokes Array with Emojis
const jokes = [
  "Why don’t scientists trust atoms? Because they make up everything! ⚛️😂",
  "Why did the chicken join a band? Because it had the drumsticks! 🐔🥁",
  "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾🏆",
  "Why don’t programmers like nature? It has too many bugs! 🐛💻",
  "Why did the math book look sad? Because it had too many problems! 📚😢",
  "Why did the coffee file a police report? It got mugged! ☕🚓",
  "Why don’t eggs tell jokes? They’d crack each other up! 🥚😂",
  "What do you call fake spaghetti? An impasta! 🍝🤣",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one! ⛳👖",
  "Why did the bicycle fall over? Because it was two-tired! 🚲😴",
  "What did the ocean say to the beach? Nothing, it just waved! 🌊👋",
  "Why can’t your nose be 12 inches long? Because then it would be a foot! 👃🦶",
  "Why did the cookie go to the hospital? Because it felt crummy! 🍪🏥",
  "Why did the orange stop? Because it ran out of juice! 🍊🥤",
  "Why did the chicken join the band? Because it had drumsticks! 🐓🥁",
  "Why did the skeleton go to the party alone? He had no body to go with! 💀🎉",
  "Why was the math lecture so long? The professor kept going off on a tangent! ➗📝",
  "Why do cows have hooves instead of feet? Because they lactose! 🐄🥛",
  "What do you call a bear with no teeth? A gummy bear! 🐻🍬",
  "Why did the computer go to the doctor? It had a virus! 💻🤒",
  "What do you call a sleeping bull? A bulldozer! 🐂💤",
  "Why did the music teacher go to jail? She got caught with too many sharp objects! 🎼🚔",
  "Why did the banker switch careers? He lost interest! 💰😅",
  "Why did the man put his money in the blender? He wanted to make some liquid assets! 💵🍹",
  "Why did the kid bring a ladder to school? To go to high school! 🪜🏫",
  "Why did the teddy bear say no to dessert? Because it was stuffed! 🧸🍰",
  "Why did the grape stop in the middle of the road? It ran out of juice! 🍇🛣️",
  "Why did the cow go to outer space? To see the moooon! 🐄🌕",
  "Why did the chicken sit on an egg? To hatch a plan! 🐣💡",
  "Why was six afraid of seven? Because seven eight nine! 6️⃣7️⃣8️⃣😂",
  "Why did the skeleton not fight? He didn’t have the guts! 💀🥊",
  "Why did the jellybean go to school? To become a smartie! 🍬🎓",
  "Why did the pencil go to the principal’s office? It was being a little sketchy! ✏️🏫",
  "Why did the cookie cry? Because his mom was a wafer too long! 🍪😭",
  "Why do ducks have feathers? To cover their butt quacks! 🦆🍑",
  "Why did the computer sit at the corner? It needed to process something! 💻🔲",
  "Why did the farmer ride his horse to town? Because it was too heavy to carry! 🐴🏙️",
  "Why was the broom late? It swept in! 🧹⏰",
  "Why did the vampire brush his teeth? To prevent bat breath! 🧛🦷",
  "Why did the cow sit under the tree? To get a moo-dy shade! 🐄🌳",
  "Why did the chicken cross the playground? To get to the other slide! 🐔🏞️",
  "Why was the stadium so cool? It was filled with fans! 🏟️❄️",
  "What do you call a pile of cats? A meowtain! 🐱⛰️",
  "Why did the banana go to the doctor? Because it wasn’t peeling well! 🍌🏥",
  "Why did the scarecrow get promoted? Because he was outstanding in his field! 🌾🏆",
  "What did one volcano say to the other? I lava you! 🌋❤️",
  "Why was the computer cold? It left its Windows open! 💻🪟🥶",
  "Why can’t you give Elsa a balloon? Because she’ll let it go! ❄️🎈",
  "Why did the dinosaur cross the road? Because the chicken wasn’t born yet! 🦖🐔",
  "Why did the grape stop rolling? It ran out of juice! 🍇😂",
  "Why did the fish blush? Because it saw the ocean’s bottom! 🐟😳"
];


// STEP 3: Function that gives us one random joke from the array
function getRandomJoke() {
  // Generate a random number from 0 to jokes.length-1
  let randomIndex = Math.floor(Math.random() * jokes.length);

  // Return the joke found at that random index
  return jokes[randomIndex];
}

// STEP 4: When user focuses (clicks) on input box, show a random joke
jokeInput.addEventListener("focus", function () {
  // Put a random joke inside the input value
  jokeInput.value = getRandomJoke();
});

// OPTIONAL EXTRA:
// STEP 5: If user clicks the box again, new joke appears
jokeInput.addEventListener("click", function () {
  jokeInput.value = getRandomJoke();
});
