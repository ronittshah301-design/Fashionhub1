function productLinks(products){
  return products.map(([name,url]) => `<a href="${url}" target="_blank" rel="noreferrer sponsored">${name}</a>`).join('');
}
function card(outfit, featured=false){
  const first = outfit.products?.[0]?.[1] || '#';
  return `<article class="${featured?'featured-card':'look-card'}">
    <a class="card-img" href="${first}" target="_blank" rel="noreferrer sponsored">
      <img src="${outfit.image}" alt="${outfit.title}">
      <span class="badge">${outfit.badge}</span>
    </a>
    <div class="card-body">
      <h3>${outfit.title}</h3>
      <p>${outfit.copy}</p>
      <p class="price">${outfit.price} <span>•</span> ${outfit.saves}</p>
      <div class="products">${productLinks(outfit.products)}</div>
      <a class="shop-btn" href="${first}" target="_blank" rel="noreferrer sponsored">Shop This Look</a>
    </div>
  </article>`;
}
function category(title, i){
  return `<a href="#looks" class="category-card"><figure><img src="images/cat-${i+1}.jpg" alt="${title}"></figure><h3>${title}</h3></a>`;
}
document.getElementById('countBubble').textContent = outfits.length;
document.getElementById('categoryGrid').innerHTML = categories.map(category).join('');
document.getElementById('featuredGrid').innerHTML = outfits.slice(0,2).map(o=>card(o,true)).join('');
document.getElementById('lookGrid').innerHTML = outfits.slice(2).map(o=>card(o,false)).join('');
