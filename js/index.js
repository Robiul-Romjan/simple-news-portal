const fetchAllNewsCatagory = async () => {
    const url = ` https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayNewsCatagory(data.data.news_category);
};

const displayNewsCatagory = (data) => {
    // console.log(data);
    const newsCatagory = document.getElementById("news-catagory")
    data.map((catagory) => {
        newsCatagory.innerHTML += `
        <li onclick="singleCatagoryAllNews('${catagory.category_id}')" class="single">${catagory.category_name}</li>
        `
    })
};

const singleCatagoryAllNews = async (category_id) => {
    // console.log(category_id)
    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res = await fetch(url);
    const data = await res.json();
    displaySingleCatagoryAllNews(data.data)
};

const displaySingleCatagoryAllNews = (newses) => {
    //  console.log(newses);
     const newsContainer = document.getElementById("news-container");
     newsContainer.innerHTML = ""
     newses.map((news) => {
        // console.log(news)
        newsContainer.innerHTML += `
          
          <div class="col-md-4 mb-3">
          <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.details.slice(0, 200)}.........</p>
            <p class="card-text"><small class="text-muted">Last updated ${news.author.published_date} mins ago</small></p>
          </div>
        </div>
         
        `
     })
};
singleCatagoryAllNews('01')

fetchAllNewsCatagory();