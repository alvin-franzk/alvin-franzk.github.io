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
    "🏖️ Freedom is approaching one workday at a time."
];

function updateMotivation() {
    const randomIndex = Math.floor(
        Math.random() * motivationalMessages.length
    );

    document.getElementById("motivation").textContent =
        motivationalMessages[randomIndex];
}

// Initial message
updateMotivation();

// New message every minute
setInterval(updateMotivation, 60000);