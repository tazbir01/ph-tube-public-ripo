const handleCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    // console.log(data)

    const categoryContainer = document.getElementById('category-container')

    data.data.forEach(element => {
        // console.log(element.category_id)
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
    console.log(data.data)

    
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = ""
    data.data.forEach((element) => {
        // console.log(element.authors[0].profile_name)
        const div = document.createElement('div')
        div.innerHTML = `
                <div class="card rounded-lg bg-base-100 ">
                    <figure><img class="rounded-lg w-72 h-44" src="${element.thumbnail}" alt="" /></figure>
                    <div class="my-5">
                        <div class="flex gap-2">
                            <div>
                                <img class="w-10 h-10 rounded-full" src="${element.authors[0].profile_picture}">
                            </div>
                            <div>
                                <h2 class="card-title font-bold">${element.title}</h2>
                                <p class="font-medium text-slate-600">${element.authors[0].profile_name} 
                                    <span>${element.authors[0].verified? "<img class='inline' src='./icons/verified-icon.svg'>" :""}</span>
                                </p>
                                
                                <p class="font-medium text-slate-600">${element.others.views} views</p>
                            </div>
                        </div>
                    </div>
                </div>
        `
        cardContainer.appendChild(div)
    })
}

handleCategory()
handleCard(1000)

const blogButton =()=>{
    window.location.href = "blog.html"
}