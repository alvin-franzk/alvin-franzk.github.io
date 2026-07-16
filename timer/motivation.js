const motivationalMessages = [
    
"🏁 One day closer to the finish line.",
    "💪 You've survived 100% of your toughest days so far.",
    "📈 Small progress is still progress.",
    "🛠️ Future you is counting on today's effort.",
    "⏳ Keep going. The countdown is working in your favor.",
    "✅ Every workday completed is one less workday remaining.",
    "🎯 Remember why you started.",
    "⏰ The time will pass anyway—make it count.",
    "🔥 Consistency beats motivation.",
    "🦅 Stay focused. Freedom is approaching.",
    "⚔️ You are stronger than this temporary struggle.",
    "🚪 Your next chapter is getting closer every day.",
    "👣 One shift at a time.",
    "🧭 Keep your eyes on the destination.",
    "🌧️ Even bad days move the countdown forward.",
    "🌱 Progress isn't always visible, but it's happening.",
    "🌙 The finish line gets closer every midnight.",
    "🤝 Trust the process.",
    "🚀 Today's effort becomes tomorrow's opportunity.",
    "😎 You got this.",
    "🕷️ Keep moving. Heroes don't quit when things get difficult.",
    "🏗️ You don't need perfect conditions to make progress.",
    "☀️ Do the best you can with the day you've been given.",
    "🏆 Even on the hardest days, showing up is a victory.",
    "🌆 The city isn't saved in a day. Neither is your future.",
    "🦸 A hero is just someone who keeps going when it's easier to stop.",
    "🎓 Every challenge is training for what's next.",
    "🎭 The mask isn't what makes the hero. It's the choices.",
    "💥 You're stronger than yesterday's version of yourself.",
    "📚 Responsibility isn't always fun, but it builds character.",
    "🕸️ The grind won't last forever. Keep swinging forward.",
    "⛰️ Bad days happen. Keep climbing anyway.",
    "🏅 Sometimes surviving the day is the win.",
    "🌃 Keep your head up. The skyline looks better from higher up.",
    "➡️ You can't control every setback, but you can control your next step.",
    "💡 With great responsibility comes great growth.",
    "🧱 The future is built one ordinary day at a time.",
    "🗽 Every completed shift is another step toward freedom.",
    "😴 Heroes get tired too—just don't stay down.",
    "📊 The countdown is proof you're making progress.",
    "⚡ One more workday defeated.",
    "🌤️ Today's problems are temporary. Your goals aren't.",
    "⌚ The clock is on your side.",
    "📍 You are closer than you were yesterday.",
    "📚 A little progress every day becomes a lot of progress.",
    "🛣️ There is no traffic on the extra mile.",
    "💙 Trust yourself. You've made it this far already.",
    "🏔️ The struggle is temporary. The achievement lasts.",
    "🕷️ Keep swinging. The destination is getting closer.",
    "📣 Your future self is cheering for you right now.",
    "✔️ The hardest part is often showing up. You already did that.",
    "🦹 No villain has ever defeated a hero who refused to quit.",
    "🎮 Every workday completed reduces the boss battle ahead.",
    "💯 You've survived all of your worst days so far.",
    "🎬 Your next adventure is loading...",
    "🎯 One shift. One day. One step. That's how victories happen.",
    "🔄 You don't need motivation every day. You need consistency.",
    "🛡️ Heroes aren't fearless. They act despite fear.",
    "🏖️ Freedom is approaching one workday at a time.",
    "💙 Always be kind. You never know what battle someone is fighting.",
    "🤝 Kindness costs nothing but can mean everything.",
    "🌟 Be the reason someone believes there is still good in the world.",
    "😊 A small act of kindness can change someone's entire day.",
    "💛 Leave every person a little better than you found them.",
    "🕊️ Kindness is a strength, not a weakness.",
    "🌱 The kindness you give today may bloom tomorrow.",
    "☀️ Be the sunshine in someone's cloudy day.",
    "❤️ In a world where you can be anything, be kind.",
    "🤗 Everyone is carrying something heavy. Be gentle.",
    "🌈 Kind words can brighten even the darkest day.",
    "🫶 Treat others with the compassion you hope to receive.",
    "💐 Kindness is the language everyone understands.",
    "✨ Your kindness may be remembered long after your words are forgotten.",
    "🤍 Be kind even when no one is watching.",
    "🌍 The world needs more kind hearts and fewer harsh words.",
    "🫂 Sometimes the greatest thing you can offer is understanding.",
    "🎁 Kindness is a gift that benefits both the giver and receiver.",
    "💫 Never underestimate the impact of a simple act of kindness.",
    "🌻 Choose kindness, especially when it's difficult.",
    "🦸 A real hero lifts others up.",
    "🕷️ Strength is important. Using it to help others is what matters.",
    "🛡️ The strongest people are often the kindest.",
    "💙 Being a good person is its own superpower.",
    "🌟 The world already has enough critics. Be an encourager.",
    "🤝 Help whenever you can. That's what heroes do.",
    "⚡ A kind heart leaves a bigger legacy than a loud voice.",
    "🏙️ You don't have to save the city today. Just help one person.",
    "🕊️ Compassion is courage in action.",
    "🌅 Make someone's day a little easier if you can.",
    "☕ Be kind to the coworker who seems stressed.",
    "🎧 Be patient. Someone's worst day may be hidden behind a smile.",
    "📞 The person on the other side of the conversation is human too.",
    "💼 Professionalism is important. Kindness makes it memorable.",
    "🌱 Every interaction is a chance to leave positivity behind.",
    "🤗 A little empathy goes a long way.",
    "💙 People may forget what you did, but they'll remember how you made them feel.",
    "🌟 Kindness is never wasted.",
    "✨ Make kindness your default setting.",
    "🫶 Be the person you needed when things were hard."
];

function updateMotivation() {
    const motivation = document.getElementById("motivation");
    const randomIndex = Math.floor(
        Math.random() * motivationalMessages.length
    );

    
// Remove animation class
    motivation.classList.remove("fade-in");

    // Force browser reflow
    void motivation.offsetWidth;

    // Update text
    motivation.textContent =
        motivationalMessages[randomIndex];

    // Re-add animation class
    motivation.classList.add("fade-in");

    //document.getElementById("motivation").innerHTML =
        //`<strong>${motivationalMessages[randomIndex]}</strong>`;
}


function scheduleNextMotivation() {
    const minDelay = 45000; // 45 sec
    const maxDelay = 90000; // 90 sec

    const randomDelay =
        Math.floor(Math.random() * (maxDelay - minDelay + 1))
        + minDelay;

    setTimeout(() => {
        updateMotivation();
        scheduleNextMotivation();
    }, randomDelay);
}

// Initial message
updateMotivation();

// Start random scheduling
scheduleNextMotivation();
