const motivationalMessages = [
    "One day closer to the finish line.",
    "You've survived 100% of your toughest days so far.",
    "Small progress is still progress.",
    "Future you is counting on today's effort.",
    "Keep going. The countdown is working in your favor.",
    "Every workday completed is one less workday remaining.",
    "Remember why you started.",
    "The time will pass anyway—make it count.",
    "Consistency beats motivation.",
    "Stay focused. Freedom is approaching.",
    "You are stronger than this temporary struggle.",
    "Your next chapter is getting closer every day.",
    "One shift at a time.",
    "Keep your eyes on the destination.",
    "Even bad days move the countdown forward.",
    "Progress isn't always visible, but it's happening.",
    "The finish line gets closer every midnight.",
    "Trust the process.",
    "Today's effort becomes tomorrow's opportunity.",
    "You got this."
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