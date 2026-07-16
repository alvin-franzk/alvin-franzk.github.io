
let lastPercentage = -1;
let celebrationTriggered = false;

function updateWorkdayCountdown() {
    const now = new Date();

    const startTime = new Date();
    startTime.setHours(8, 30, 0, 0);

    const endTime = new Date();
    endTime.setHours(17, 30, 0, 0);

    const timerElement = document.getElementById("workdayTimer");
    const progressBar = document.getElementById("workdayProgress");
    const progressText = document.getElementById("progressText");

    // Before shift
    if (now < startTime) {
        timerElement.textContent = "☕ Workday hasn't started yet.";
        progressBar.style.width = "0%";
        progressText.textContent = "0% Complete";
        return;
    }

    // After shift
    if (now >= endTime) {
        timerElement.textContent = "🎉 You're free! FREE AT LAST!";
        progressBar.style.width = "100%";
        progressText.textContent = "100% Complete";

        if (!celebrationTriggered) {
            celebrationTriggered = true;

            // Change image
            document.getElementById("rabbit").src = "smile.jpg";

            // Launch confetti
            launchConfetti();
        }

        return;
    }

    const diff = endTime - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60));

    timerElement.textContent =
        `${hours}h ${minutes}m`;

    // Progress calculation
    const totalWorkday = endTime - startTime;
    const elapsed = now - startTime;
    const percent = (elapsed / totalWorkday) * 100;

    progressBar.style.width = `${percent}%`;
    progressText.textContent =
        `${percent.toFixed(1)}%`;
    
    if (percent < 33.3) {
        progressBar.style.background = "#ef4444"; // red
    } else if (percent < 66.6) {
        progressBar.style.background = "#f59e0b"; // orange
    } else {
        progressBar.style.background = "#22c55e"; // green
    // ADD IF STATEMENT THAT MAKES 67 MOTION IF ITS 67%
    }
    // animation shenanigans
    const currentPercentage = Number(percent.toFixed(1));

    if (currentPercentage !== lastPercentage) {
        lastPercentage = currentPercentage;

        const rabbit = document.getElementById("rabbit");

        rabbit.classList.remove("hop");
        void rabbit.offsetWidth; // force reflow
        rabbit.classList.add("hop");
    }
}

function launchConfetti() {
    const duration = 10000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval);
            return;
        }

        confetti({
            particleCount: 20,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 20,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

    }, 250);
}

updateWorkdayCountdown();
setInterval(updateWorkdayCountdown, 1000);
