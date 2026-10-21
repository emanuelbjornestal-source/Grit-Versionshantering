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