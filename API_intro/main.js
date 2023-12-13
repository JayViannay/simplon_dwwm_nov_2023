// Fonction pour effectuer une requête GET à l'API
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Fonction pour afficher la liste des produits dans la page
function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.nom} - Prix : ${product.prix} €`;
        productList.appendChild(listItem);
    });
}

// Charger tous les produits au chargement de la page
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const data = await fetchData('api.php?action=getAllProduits');
        displayProducts(data.products);
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données :', error);
    }
});