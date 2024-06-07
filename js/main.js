async function dissplayData() {
    let x = await fetch('http://127.0.0.1:8000/recipes/');
    let f = x.json();
    return f;
}


async function display(category) {
    let filteredRecipes;
    if (category === '') {
        filteredRecipes = await dissplayData();
    } else {
        let recipes = await dissplayData();
        filteredRecipes = recipes.filter(recipe => recipe.category === category);
    }

    let rec = document.getElementById('foodRecip');
    rec.innerHTML = '';

    filteredRecipes.forEach(recipe => {
        const cartona = document.createElement('div');
        cartona.classList.add('col-md-4', 'my-3');
        cartona.innerHTML = `
            <div class="card mx-auto" style="width: 18rem;">
                <img src="${recipe.image_url}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${recipe.title}</h5>
                    <p class="card-text">${recipe.description}</p>
                    <a href="${recipe.video_url}" class="btn btn-primary" target="_blank">Go Video</a>
                </div>
            </div>
        `;
        rec.appendChild(cartona);
    });
}

        
document.getElementById('all').addEventListener('click', (e) => {
            e.preventDefault()
            display('')
        } );
document.getElementById('Breakfast').addEventListener('click', (e) => {
             e.preventDefault()
              display('Breakfast')
        } );
document.getElementById('Lunch').addEventListener('click', (e) => {
            e.preventDefault()
            display('Lunch')
        });
document.getElementById('Dinner').addEventListener('click', (e) => {
             e.preventDefault()
            display('Dinner')
});
        

document.getElementById('Desserts').addEventListener('click', (e) => {
    e.preventDefault();
    display('Desserts');
})
display('');