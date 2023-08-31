const handleCategory = async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    // console.log(data)

    const categoryContainer = document.getElementById('category-container')

    data.data.forEach(element => {
        console.log(element.category)
        const div = document.createElement('div');
        div.innerHTML= `
            <button class="btn">${element.category}</button>
        `
        categoryContainer.appendChild(div)
    });
    
}

handleCategory()