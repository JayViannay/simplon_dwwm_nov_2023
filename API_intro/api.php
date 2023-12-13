<?php

// Simule une base de données simple
$database = [
    ['id' => 1, 'nom' => 'Produit 1', 'prix' => 10.99],
    ['id' => 2, 'nom' => 'Produit 2', 'prix' => 19.99],
    ['id' => 3, 'nom' => 'Produit 3', 'prix' => 5.99],
];

// Obtenir tous les produits
function getAllProduits() {
    global $database;
    return ['products' => array_values($database)];
}

// Obtenir un produit par ID
function getProduitById($id) {
    global $database;
    return isset($database[$id]) ? $database[$id] : null;
}

// Gérer les requêtes
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Endpoint pour obtenir tous les produits
    if ($_GET['action'] === 'getAllProduits') {
        $result = getAllProduits();
    }
    // Endpoint pour obtenir un produit par ID
    elseif ($_GET['action'] === 'getProduitById' && isset($_GET['id'])) {
        $id = intval($_GET['id']);
        $result = getProduitById($id);
    }
}

// Répondre en format JSON
header('Content-Type: application/json');
echo json_encode($result);
