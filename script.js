document.addEventListener("DOMContentLoaded", function() {
    const panels = document.querySelectorAll(".comic-panel");
    const nextButtons = document.querySelectorAll(".next-btn");

    let currentScene = 1;
    const totalScenes = panels.length;

    function scrollToScene(sceneId) {
        const sceneElement = document.getElementById(sceneId);
        if (sceneElement) {
            sceneElement.classList.remove("hidden");
            sceneElement.scrollIntoView({ behavior: "smooth" });

            // Hide the button once clicked for that scene
            const btn = document.querySelector(`button[onclick="scrollToScene('${sceneId}')"]`);
            if (btn) {
                btn.classList.add("hidden");
            }
        }
    }

    // Reveal the next scene when the button is clicked
    nextButtons.forEach(button => {
        button.addEventListener("click", function() {
            if (currentScene < totalScenes) {
                const nextSceneId = `scene${currentScene + 1}-content`;
                scrollToScene(nextSceneId);
                currentScene++;
            }
        });
    });

    // Speech bubble animation effect
    const bubbles = document.querySelectorAll(".bubble, .thought-bubble");
    bubbles.forEach(bubble => {
        bubble.addEventListener("mouseover", () => {
            bubble.style.transform = "scale(1.1)";
        });
        bubble.addEventListener("mouseout", () => {
            bubble.style.transform = "scale(1)";
        });
    });

    // Final Page Reveal
    document.getElementById("final-btn").addEventListener("click", function() {
        document.getElementById("final-page").classList.remove("hidden");
        document.getElementById("final-page").scrollIntoView({ behavior: "smooth" });
    });
});
