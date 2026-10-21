function setupFilters() {
    const container = document.getElementById("filter-buttons");
    const categories = ["Visa alla"].concat(
        Array.from(new Set(recipes.map(function (r) { return r.category; })))
    );

    categories.forEach(function (category) {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        btn.textContent = category;
        if (category === "Visa alla") btn.classList.add("active");

        btn.addEventListener("click", function () {
            document.querySelectorAll(".filter-btn").forEach(function (b) {
                b.classList.remove("active");
            });
            btn.classList.add("active");

            const filtered = category === "Visa alla"
                ? recipes
                : recipes.filter(function (r) { return r.category === category; });
            renderRecipes(filtered);
        });

        container.appendChild(btn);
    });
}

document.addEventListener("DOMContentLoaded", setupFilters);