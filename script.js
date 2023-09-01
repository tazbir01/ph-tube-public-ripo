const handleCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    // console.log(data)

    const categoryContainer = document.getElementById('category-container')

    data.data.forEach(element => {
        // console.log(element.category)
        const div = document.createElement('div');
        div.innerHTML = `
            <button onclick="handleCard('${element.category_id}')" class="bg-slate-200 p-2 rounded font-semibold hover:bg-red-500 hover:text-white">${element.category}</button>
        `
        categoryContainer.appendChild(div)
    });
}

const handleCard = async (categoryId) => {
    // console.log(categoryId)
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json()
    console.log(data)

    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = ""
    data.data.forEach((element) => {
        console.log(element.thumbnail)
        const div = document.createElement('div')
        div.innerHTML = `
                <div class="card bg-base-100 shadow-xl">
                <figure><img src="${element.thumbnail}" alt="" /></figure>
                    <div class="card-body">
                    <h2 class="card-title">${element.title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
                </div>
                </div>
        `
        cardContainer.appendChild(div)
    })
}

handleCategory()