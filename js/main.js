function renderRecipes(list) {
    const grid = document.getElementById("recipe-grid");
    grid.innerHTML = "";

    list.forEach(function (recipe) {
        const card = document.createElement("article");
        card.className = "recipe-card";
        card.dataset.id = recipe.id;
        card.innerHTML =
            '<img src="' + recipe.image + '" alt="' + recipe.name + '">' +
            '<div class="card-body">' +
            '<span class="tag">' + recipe.category + '</span>' +
            '<h3>' + recipe.name + '</h3>' +
            '<p>' + recipe.description + '</p>' +
            '<p class="time">⏱ ' + recipe.time + '</p>' +
            '</div>';
        grid.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    renderRecipes(recipes);
});

function openModal(recipe) {
    document.getElementById("modal-image").src = recipe.image;
    document.getElementById("modal-image").alt = recipe.name;
    document.getElementById("modal-tag").textContent = recipe.category;
    document.getElementById("modal-title").textContent = recipe.name;
    document.getElementById("modal-time").textContent = "⏱ " + recipe.time;

    const ingredients = document.getElementById("modal-ingredients");
    ingredients.innerHTML = "";
    recipe.ingredients.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item;
        ingredients.appendChild(li);
    });

    const instructions = document.getElementById("modal-instructions");
    instructions.innerHTML = "";
    recipe.instructions.forEach(function (step) {
        const li = document.createElement("li");
        li.textContent = step;
        instructions.appendChild(li);
    });

    document.getElementById("modal").classList.add("open");
}

function closeModal() {
    document.getElementById("modal").classList.remove("open");
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("recipe-grid").addEventListener("click", function (e) {
        const card = e.target.closest(".recipe-card");
        if (!card) return;
        const recipe = recipes.find(function (r) { return r.id === Number(card.dataset.id); });
        if (recipe) openModal(recipe);
    });

    document.getElementById("modal-close").addEventListener("click", closeModal);

    document.getElementById("modal").addEventListener("click", function (e) {
        if (e.target.id === "modal") closeModal();
    });
});