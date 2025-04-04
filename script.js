<!-- JavaScript File: script.js -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll(".roadmap-item").forEach(item => {
            item.addEventListener("click", function(event) {
                event.preventDefault();
                window.location.href = this.getAttribute("href");
            });
        });
    });
</script>
document.addEventListener("DOMContentLoaded", function () {
    const roadmapsContainer = document.getElementById("roadmaps-container");
    const roadmapsLink = document.getElementById("roadmaps-link");

    roadmapsLink.addEventListener("click", function (event) {
        event.preventDefault();
        roadmapsContainer.style.display =
            roadmapsContainer.style.display === "none" ? "block" : "none";
    });
});
