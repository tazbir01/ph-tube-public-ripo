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
    // console.log(data.data[0].others.views.sort())

    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = ""

    const emptyContainer = document.getElementById('empty-container')
    emptyContainer.innerHTML = ""


    if (data.data.length === 0) {
        const div = document.createElement('div')

        div.innerHTML = `
            <div class="flex justify-center">
                <div>
                    <div class="flex justify-center">
                        <img src="./icons/icon.png">
                    </div>
                    <p class="text-2xl font-bold">Oops!! Sorry, There is no content here</p>
                </div>
            </div>
        `
        emptyContainer.appendChild(div)
    }
    else {
        data.data.forEach((element) => {
            console.log(element.others.posted_date)

            const seconds = `${element.others.posted_date}`
            const minutes = Math.floor(seconds / 60)
            const hours = Math.floor(minutes / 60)
            const remainingMinutes = minutes % 60
            console.log(remainingMinutes)
            console.log(`${hours} hours ${remainingMinutes}minutes`)
            

            const div = document.createElement('div')
            div.innerHTML = `
                    <div class="card rounded-lg bg-base-100 ">
                        <figure class="relative">
                            <img class="rounded-lg w-72 h-44 z-0" src="${element.thumbnail}" alt="" />
                            <p id="date" class="bg-zinc-900 text-white rounded absolute right-6 bottom-3 z-10 px-2">
                            ${hours} hrs ${remainingMinutes} min ago
                            </p>
                        </figure>
                        <div class="my-5 mx-2">
                            <div class="flex gap-2">
                                <div>
                                    <img class="w-10 h-10 rounded-full" src="${element.authors[0].profile_picture}">
                                </div>
                                <div>
                                    <h2 class="card-title font-bold">${element.title}</h2>
                                    <p class="font-medium text-slate-600">${element.authors[0].profile_name} 
                                        <span>${element.authors[0].verified ? "<img class='inline' src='./icons/verified-icon.svg'>" : ""}</span>
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

}

handleCategory()
handleCard(1000)

const blogButton = () => {
    window.location.href = "blog.html"
}

