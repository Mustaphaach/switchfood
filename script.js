

// ===== ALL MENU DATA =====
const menuData = {
  burger: [
    { name: "Cheese Burger", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", price: 30, badge: "popular", badgeText: "🔥 Populaire", desc: "Un burger classique avec steak haché, fromage fondu, salade, tomate et sauce maison.", ingredients: [{e:"🥩",n:"Steak Haché"},{e:"🧀",n:"Fromage Fondu"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🧅",n:"Oignon"},{e:"🍞",n:"Pain Brioché"},{e:"🫙",n:"Sauce Maison"},{e:"🥒",n:"Cornichons"}]},
    { name: "Checken Burger", img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80", price: 30, badge: "", badgeText: "", desc: "Filet de poulet croustillant avec salade fraîche, tomate et sauce crémeuse.", ingredients: [{e:"🍗",n:"Poulet Croustillant"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🧅",n:"Oignon"},{e:"🍞",n:"Pain Brioché"},{e:"🫙",n:"Sauce Crémeuse"},{e:"🧄",n:"Ail"},{e:"🥒",n:"Cornichons"}]},
    { name: "Kentucky", img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80", price: 30, badge: "", badgeText: "", desc: "Poulet frit style Kentucky avec épices secrètes, salade et sauce piquante.", ingredients: [{e:"🍗",n:"Poulet Frit"},{e:"🌶️",n:"Épices Secrètes"},{e:"🥬",n:"Salade"},{e:"🍞",n:"Pain Brioché"},{e:"🫙",n:"Sauce Piquante"},{e:"🧅",n:"Oignon"},{e:"🍋",n:"Citron"},{e:"🧄",n:"Ail"}]},
    { name: "Burger Fiche", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80", price: 35, badge: "special", badgeText: "✨ Spécial", desc: "Notre burger signature avec double sauce et garnitures premium.", ingredients: [{e:"🥩",n:"Double Steak"},{e:"🧀",n:"Fromage"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🫙",n:"Sauce Fiche"},{e:"🥒",n:"Cornichons"},{e:"🧅",n:"Oignon Caramélisé"},{e:"🍞",n:"Pain Brioché"}]},
    { name: "Egg's Burger", img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&q=80", price: 35, badge: "", badgeText: "", desc: "Burger avec un œuf frit sur le dessus, steak haché et fromage fondant.", ingredients: [{e:"🍳",n:"Œuf Frit"},{e:"🥩",n:"Steak Haché"},{e:"🧀",n:"Fromage"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🍞",n:"Pain Brioché"},{e:"🫙",n:"Sauce Maison"},{e:"🥒",n:"Cornichons"}]},
    { name: "Double Cheese", img: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=600&q=80", price: 40, badge: "hot", badgeText: "🔥 Hot", desc: "Double steak avec double fromage fondu, sauce spéciale et légumes frais.", ingredients: [{e:"🥩",n:"Double Steak"},{e:"🧀",n:"Double Fromage"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🫙",n:"Sauce Spéciale"},{e:"🥒",n:"Cornichons"},{e:"🧅",n:"Oignon"},{e:"🍞",n:"Pain Brioché"}]},
    { name: "Double Chicken", img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&q=80", price: 40, badge: "", badgeText: "", desc: "Double filet de poulet croustillant, salade, tomate et sauce crémeuse.", ingredients: [{e:"🍗",n:"Double Poulet"},{e:"🧀",n:"Fromage"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🫙",n:"Sauce Crémeuse"},{e:"🥒",n:"Cornichons"},{e:"🧅",n:"Oignon"},{e:"🍞",n:"Pain Brioché"}]},
    { name: "Royal Burger", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80", price: 40, badge: "special", badgeText: "👑 Royal", desc: "Le burger ultime avec triple garniture, fromage premium et sauce royale.", ingredients: [{e:"🥩",n:"Triple Steak"},{e:"🧀",n:"Fromage Premium"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🥒",n:"Cornichons"},{e:"🧅",n:"Oignon Caramélisé"},{e:"🫙",n:"Sauce Royale"},{e:"🍞",n:"Pain Brioché"}]},
    { name: "Menu Enfants", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80", price: 40, badge: "", badgeText: "", desc: "Petit burger adapté aux enfants avec frites et boisson surprise.", ingredients: [{e:"🥩",n:"Petit Steak"},{e:"🧀",n:"Fromage"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🍟",n:"Frites"},{e:"🥤",n:"Boisson"},{e:"🍞",n:"Pain"},{e:"🫙",n:"Ketchup"}]},
  ],
  wrap: [
    { name: "Wrap Poulet", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80", price: 35, badge: "popular", badgeText: "🔥 Populaire", desc: "Wrap au poulet grillé avec salade, tomate, fromage et sauce maison.", ingredients: [{e:"🍗",n:"Poulet Grillé"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🧀",n:"Fromage"},{e:"🫓",n:"Tortilla"},{e:"🫙",n:"Sauce Maison"},{e:"🧅",n:"Oignon"},{e:"🥒",n:"Cornichons"}]},
    { name: "Wrap Comgy", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80", price: 30, badge: "", badgeText: "", desc: "Wrap comgy savoureux avec garnitures fraîches et sauce spéciale.", ingredients: [{e:"🥩",n:"Comgy"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🧀",n:"Fromage"},{e:"🫓",n:"Tortilla"},{e:"🫙",n:"Sauce Spéciale"},{e:"🧅",n:"Oignon"},{e:"🌿",n:"Herbes Fraîches"}]},
    { name: "Wrap Crispy", img: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=600&q=80", price: 35, badge: "hot", badgeText: "🌶️ Crispy", desc: "Poulet croustillant frit, salade fraîche, tomate et sauce crémeuse.", ingredients: [{e:"🍗",n:"Poulet Crispy"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🧀",n:"Fromage"},{e:"🫓",n:"Tortilla"},{e:"🫙",n:"Sauce Crémeuse"},{e:"🌶️",n:"Épices"},{e:"🥒",n:"Cornichons"}]},
    { name: "Wrap Kentucky", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80", price: 35, badge: "", badgeText: "", desc: "Poulet style Kentucky dans une tortilla avec salade et sauce piquante.", ingredients: [{e:"🍗",n:"Poulet Kentucky"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🧀",n:"Fromage"},{e:"🫓",n:"Tortilla"},{e:"🫙",n:"Sauce Piquante"},{e:"🧅",n:"Oignon"},{e:"🌶️",n:"Jalapeños"}]},
  ],
  panini: [
    { name: "Panini Crispy", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80", price: 30, badge: "popular", badgeText: "🔥 Populaire", desc: "Pain panini grillé avec poulet croustillant, fromage fondu et sauce maison.", ingredients: [{e:"🍗",n:"Poulet Crispy"},{e:"🧀",n:"Fromage Fondu"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🥖",n:"Pain Panini"},{e:"🫙",n:"Sauce Maison"},{e:"🧅",n:"Oignon"},{e:"🌿",n:"Herbes"}]},
    { name: "Panini Poulet", img: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=600&q=80", price: 30, badge: "", badgeText: "", desc: "Panini au poulet grillé avec légumes frais et fromage fondant.", ingredients: [{e:"🍗",n:"Poulet Grillé"},{e:"🧀",n:"Fromage"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🥖",n:"Pain Panini"},{e:"🫙",n:"Sauce"},{e:"🧅",n:"Oignon"},{e:"🥒",n:"Cornichons"}]},
    { name: "Panini Charcuterie", img: "https://images.unsplash.com/photo-1600555379765-f8e04bca4dbb?w=600&q=80", price: 30, badge: "", badgeText: "", desc: "Panini garni de charcuterie fine, fromage et légumes frais.", ingredients: [{e:"🥩",n:"Charcuterie"},{e:"🧀",n:"Fromage"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🥖",n:"Pain Panini"},{e:"🫙",n:"Sauce"},{e:"🧅",n:"Oignon"},{e:"🌿",n:"Herbes"}]},
    { name: "Panini Viand Haché", img: "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?w=600&q=80", price: 35, badge: "special", badgeText: "✨ Spécial", desc: "Panini avec viande hachée épicée, fromage fondu et sauce spéciale.", ingredients: [{e:"🥩",n:"Viande Hachée"},{e:"🧀",n:"Fromage Fondu"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🥖",n:"Pain Panini"},{e:"🫙",n:"Sauce Spéciale"},{e:"🧅",n:"Oignon"},{e:"🌶️",n:"Épices"}]},
    { name: "Panini Mix", img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&q=80", price: 35, badge: "", badgeText: "", desc: "Le meilleur des deux — panini mix avec poulet et viande hachée.", ingredients: [{e:"🍗",n:"Poulet"},{e:"🥩",n:"Viande Hachée"},{e:"🧀",n:"Fromage"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🥖",n:"Pain Panini"},{e:"🫙",n:"Sauce Mix"},{e:"🧅",n:"Oignon"}]},
  ],
  tacos: [
    { name: "Tacos Poulet", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80", price: 35, badge: "popular", badgeText: "🔥 Populaire", desc: "Tacos garni de poulet grillé, fromage fondu, salade et sauce blanche.", ingredients: [{e:"🍗",n:"Poulet Grillé"},{e:"🧀",n:"Fromage Fondu"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🫓",n:"Galette"},{e:"🫙",n:"Sauce Blanche"},{e:"🧅",n:"Oignon"},{e:"🌿",n:"Persil"}]},
    { name: "Tacos Comgy", img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80", price: 35, badge: "", badgeText: "", desc: "Tacos comgy savoureux avec sauce maison et légumes frais.", ingredients: [{e:"🥩",n:"Comgy"},{e:"🧀",n:"Fromage"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🫓",n:"Galette"},{e:"🫙",n:"Sauce Maison"},{e:"🧅",n:"Oignon"},{e:"🌿",n:"Herbes"}]},
    { name: "Tacos Nugget", img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80", price: 38, badge: "", badgeText: "", desc: "Tacos aux nuggets croustillants, fromage, salade et sauce dorée.", ingredients: [{e:"🍗",n:"Nuggets"},{e:"🧀",n:"Fromage"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🫓",n:"Galette"},{e:"🫙",n:"Sauce Dorée"},{e:"🧅",n:"Oignon"},{e:"🌿",n:"Herbes"}]},
    { name: "Tacos Mixte", img: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=600&q=80", price: 40, badge: "special", badgeText: "✨ Mixte", desc: "Le meilleur mélange — poulet et viande hachée dans un tacos XXL.", ingredients: [{e:"🍗",n:"Poulet"},{e:"🥩",n:"Viande Hachée"},{e:"🧀",n:"Fromage"},{e:"🥬",n:"Salade"},{e:"🫓",n:"Galette"},{e:"🫙",n:"Sauce Mix"},{e:"🧅",n:"Oignon"},{e:"🌶️",n:"Épices"}]},
    { name: "Cordon Bleu Tacos", img: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=600&q=80", price: 40, badge: "hot", badgeText: "🔥 Hot", desc: "Tacos au cordon bleu croustillant avec sauce crémeuse et fromage fondant.", ingredients: [{e:"🍗",n:"Cordon Bleu"},{e:"🧀",n:"Fromage Fondu"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🫓",n:"Galette"},{e:"🫙",n:"Sauce Crémeuse"},{e:"🧅",n:"Oignon"},{e:"🌿",n:"Herbes"}]},
    { name: "Tacos Spécial", img: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=600&q=80", price: 45, badge: "special", badgeText: "⭐ Spécial", desc: "Notre tacos signature avec une garniture généreuse et sauce secrète.", ingredients: [{e:"🥩",n:"Viande Premium"},{e:"🍗",n:"Poulet"},{e:"🧀",n:"Double Fromage"},{e:"🥬",n:"Salade"},{e:"🫓",n:"Galette"},{e:"🫙",n:"Sauce Secrète"},{e:"🧅",n:"Oignon"},{e:"🌶️",n:"Épices Spéciales"}]},
    { name: "Tacos Crepy", img: "https://images.unsplash.com/photo-1643286286610-0b9d2fd9def8?w=600&q=80", price: 35, badge: "", badgeText: "", desc: "Tacos crepy avec garniture croustillante et sauce maison.", ingredients: [{e:"🍗",n:"Poulet Crepy"},{e:"🧀",n:"Fromage"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🫓",n:"Galette"},{e:"🫙",n:"Sauce Maison"},{e:"🧅",n:"Oignon"},{e:"🌿",n:"Herbes"}]},
  ],
  pizza: [
    { name: "Margherita", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80", price: 25, badge: "", badgeText: "", desc: "Pizza classique avec sauce tomate maison, mozzarella fraîche et basilic.", ingredients: [{e:"🍅",n:"Sauce Tomate"},{e:"🧀",n:"Mozzarella"},{e:"🌿",n:"Basilic Frais"},{e:"🫚",n:"Huile d'Olive"},{e:"🍞",n:"Pâte Fraîche"},{e:"🧂",n:"Sel & Origan"},{e:"🧄",n:"Ail"},{e:"🌿",n:"Herbes"}]},
    { name: "Pizza Poulet", img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80", price: 34, badge: "popular", badgeText: "🔥 Populaire", desc: "Pizza au poulet grillé avec fromage, poivrons et sauce crémeuse.", ingredients: [{e:"🍗",n:"Poulet Grillé"},{e:"🧀",n:"Mozzarella"},{e:"🫑",n:"Poivrons"},{e:"🍅",n:"Sauce Tomate"},{e:"🧅",n:"Oignon"},{e:"🌿",n:"Basilic"},{e:"🍞",n:"Pâte"},{e:"🫚",n:"Huile d'Olive"}]},
    { name: "Pizza Monster", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80", price: 34, badge: "hot", badgeText: "👾 Monster", desc: "Pizza XXL chargée avec triple fromage, viande et légumes.", ingredients: [{e:"🥩",n:"Viande"},{e:"🧀",n:"Triple Fromage"},{e:"🫑",n:"Poivrons"},{e:"🍅",n:"Sauce Tomate"},{e:"🧅",n:"Oignon"},{e:"🌿",n:"Herbes"},{e:"🍞",n:"Pâte Épaisse"},{e:"🌶️",n:"Épices"}]},
    { name: "Viande Haché Pizza", img: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=600&q=80", price: 35, badge: "", badgeText: "", desc: "Pizza à la viande hachée épicée avec fromage fondu et légumes.", ingredients: [{e:"🥩",n:"Viande Hachée"},{e:"🧀",n:"Mozzarella"},{e:"🫑",n:"Poivrons"},{e:"🍅",n:"Sauce Tomate"},{e:"🧅",n:"Oignon"},{e:"🌿",n:"Basilic"},{e:"🌶️",n:"Épices"},{e:"🍞",n:"Pâte"}]},
    { name: "Pizza Végétarienne", img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80", price: 35, badge: "special", badgeText: "🌿 Végé", desc: "Pizza généreuse avec légumes frais de saison, fromage et herbes.", ingredients: [{e:"🧀",n:"Mozzarella"},{e:"🫑",n:"Poivrons"},{e:"🍄",n:"Champignons"},{e:"🫒",n:"Olives"},{e:"🧅",n:"Oignon"},{e:"🍅",n:"Tomates Cerises"},{e:"🌿",n:"Basilic"},{e:"🍞",n:"Pâte"}]},
    { name: "4 Fromages", img: "https://images.unsplash.com/photo-1548369937-47519962c11a?w=600&q=80", price: 40, badge: "special", badgeText: "🧀 4 Fromages", desc: "Quatre fromages fondants sur une pâte croustillante.", ingredients: [{e:"🧀",n:"Mozzarella"},{e:"🧀",n:"Cheddar"},{e:"🧀",n:"Gouda"},{e:"🧀",n:"Fromage Bleu"},{e:"🍅",n:"Sauce Tomate"},{e:"🌿",n:"Basilic"},{e:"🍞",n:"Pâte"},{e:"🫚",n:"Huile d'Olive"}]},
    { name: "Pizza Saison", img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&q=80", price: 50, badge: "", badgeText: "", desc: "Pizza aux légumes frais de saison, champignons et fromage premium.", ingredients: [{e:"🥕",n:"Légumes Saison"},{e:"🍄",n:"Champignons"},{e:"🧀",n:"Fromage Premium"},{e:"🫑",n:"Poivrons"},{e:"🧅",n:"Oignon"},{e:"🍅",n:"Sauce Tomate"},{e:"🌿",n:"Herbes"},{e:"🍞",n:"Pâte"}]},
    { name: "Fruits de Mer", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca55?w=600&q=80", price: 55, badge: "special", badgeText: "🦞 Mer", desc: "Pizza aux fruits de mer frais — crevettes, calamars et fromage.", ingredients: [{e:"🦐",n:"Crevettes"},{e:"🦑",n:"Calamars"},{e:"🧀",n:"Mozzarella"},{e:"🍅",n:"Sauce Tomate"},{e:"🧅",n:"Oignon"},{e:"🌿",n:"Persil"},{e:"🍋",n:"Citron"},{e:"🍞",n:"Pâte"}]},
  ],
  sandwich: [
    { name: "Mega Sandwich", img: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=600&q=80", price: 35, badge: "popular", badgeText: "💪 Mega", desc: "Le sandwich XXL — viande, fromage, légumes et double sauce.", ingredients: [{e:"🥩",n:"Viande"},{e:"🧀",n:"Fromage"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🥖",n:"Pain"},{e:"🫙",n:"Double Sauce"},{e:"🧅",n:"Oignon"},{e:"🥒",n:"Cornichons"}]},
    { name: "Sandwich Poulet", img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80", price: 30, badge: "", badgeText: "", desc: "Sandwich au poulet grillé avec salade, tomate et sauce maison.", ingredients: [{e:"🍗",n:"Poulet Grillé"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🧀",n:"Fromage"},{e:"🥖",n:"Pain"},{e:"🫙",n:"Sauce Maison"},{e:"🧅",n:"Oignon"},{e:"🥒",n:"Cornichons"}]},
    { name: "Viande Haché Sandwich", img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&q=80", price: 35, badge: "", badgeText: "", desc: "Sandwich à la viande hachée épicée avec fromage fondu.", ingredients: [{e:"🥩",n:"Viande Hachée"},{e:"🧀",n:"Fromage Fondu"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🥖",n:"Pain"},{e:"🫙",n:"Sauce"},{e:"🧅",n:"Oignon"},{e:"🌶️",n:"Épices"}]},
    { name: "Mixe Sandwich", img: "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?w=600&q=80", price: 35, badge: "special", badgeText: "✨ Mix", desc: "Poulet et viande hachée dans un sandwich savoureux.", ingredients: [{e:"🍗",n:"Poulet"},{e:"🥩",n:"Viande Hachée"},{e:"🧀",n:"Fromage"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🥖",n:"Pain"},{e:"🫙",n:"Sauce Mix"},{e:"🧅",n:"Oignon"}]},
    { name: "Cordon Bleu Sandwich", img: "https://images.unsplash.com/photo-1558985250-27a406d64cb3?w=600&q=80", price: 38, badge: "hot", badgeText: "🔥 Hot", desc: "Sandwich au cordon bleu avec sauce crémeuse et fromage fondant.", ingredients: [{e:"🍗",n:"Cordon Bleu"},{e:"🧀",n:"Fromage Fondu"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🥖",n:"Pain"},{e:"🫙",n:"Sauce Crémeuse"},{e:"🧅",n:"Oignon"},{e:"🥒",n:"Cornichons"}]},
    { name: "Colonel Fiche Sandwich", img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80", price: 35, badge: "", badgeText: "", desc: "Sandwich Colonel Fiche avec poulet croustillant et sauce signature.", ingredients: [{e:"🍗",n:"Poulet Colonel"},{e:"🧀",n:"Fromage"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🥖",n:"Pain"},{e:"🫙",n:"Sauce Colonel"},{e:"🧅",n:"Oignon"},{e:"🌿",n:"Herbes"}]},
    { name: "Colonel Chiken Sandwich", img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&q=80", price: 25, badge: "", badgeText: "", desc: "Sandwich poulet Colonel léger et savoureux.", ingredients: [{e:"🍗",n:"Poulet Crispy"},{e:"🥬",n:"Salade"},{e:"🍅",n:"Tomate"},{e:"🥖",n:"Pain"},{e:"🫙",n:"Sauce Maison"},{e:"🧅",n:"Oignon"},{e:"🥒",n:"Cornichons"},{e:"🌿",n:"Herbes"}]},
  ],
  pasticco: [
    { name: "Pasticco Poulet", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80", price: 35, badge: "popular", badgeText: "🔥 Populaire", desc: "Gratin de pâtes au poulet avec béchamel dorée et fromage fondu.", ingredients: [{e:"🍗",n:"Poulet"},{e:"🍝",n:"Pâtes"},{e:"🧀",n:"Fromage Fondu"},{e:"🥛",n:"Béchamel"},{e:"🧅",n:"Oignon"},{e:"🧄",n:"Ail"},{e:"🌿",n:"Herbes"},{e:"🧂",n:"Épices"}]},
    { name: "Pasticco Charcuterie", img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80", price: 35, badge: "", badgeText: "", desc: "Gratin de pâtes à la charcuterie fine avec béchamel onctueuse.", ingredients: [{e:"🥩",n:"Charcuterie"},{e:"🍝",n:"Pâtes"},{e:"🧀",n:"Fromage"},{e:"🥛",n:"Béchamel"},{e:"🧅",n:"Oignon"},{e:"🧄",n:"Ail"},{e:"🌿",n:"Herbes"},{e:"🧂",n:"Épices"}]},
    { name: "Pasticco Viand Haché", img: "https://images.unsplash.com/photo-1551183053-bf91798d832f?w=600&q=80", price: 40, badge: "special", badgeText: "✨ Spécial", desc: "Gratin de pâtes à la viande hachée épicée avec double fromage.", ingredients: [{e:"🥩",n:"Viande Hachée"},{e:"🍝",n:"Pâtes"},{e:"🧀",n:"Double Fromage"},{e:"🥛",n:"Béchamel"},{e:"🧅",n:"Oignon"},{e:"🧄",n:"Ail"},{e:"🌶️",n:"Épices"},{e:"🌿",n:"Persil"}]},
    { name: "Pasticco Mix", img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&q=80", price: 45, badge: "hot", badgeText: "👑 Premium", desc: "Poulet, viande hachée, triple fromage et béchamel maison.", ingredients: [{e:"🍗",n:"Poulet"},{e:"🥩",n:"Viande Hachée"},{e:"🍝",n:"Pâtes"},{e:"🧀",n:"Triple Fromage"},{e:"🥛",n:"Béchamel Maison"},{e:"🧅",n:"Oignon"},{e:"🌿",n:"Herbes"},{e:"🧂",n:"Épices Spéciales"}]},
  ],
  texmix: [
    { name: "Frites", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80", price: 10, badge: "", badgeText: "", desc: "Frites dorées et croustillantes assaisonnées à la perfection.", ingredients: [{e:"🥔",n:"Pommes de Terre"},{e:"🫚",n:"Huile"},{e:"🧂",n:"Sel"},{e:"🌶️",n:"Paprika"},{e:"🧄",n:"Ail en Poudre"},{e:"🌿",n:"Herbes"},{e:"🫙",n:"Ketchup"},{e:"🫙",n:"Mayonnaise"}]},
    { name: "Potatoes", img: "https://images.unsplash.com/photo-1598679253544-2c97992403ea?w=600&q=80", price: 10, badge: "", badgeText: "", desc: "Potatoes épicées en quartiers, croustillantes à l'extérieur.", ingredients: [{e:"🥔",n:"Pommes de Terre"},{e:"🫚",n:"Huile"},{e:"🧂",n:"Épices"},{e:"🌶️",n:"Paprika"},{e:"🧄",n:"Ail"},{e:"🌿",n:"Romarin"},{e:"🫙",n:"Sauce Dip"},{e:"🍋",n:"Citron"}]},
    { name: "Nuggets", img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80", price: 10, badge: "popular", badgeText: "🔥 Populaire", desc: "Nuggets de poulet croustillants servis avec sauce.", ingredients: [{e:"🍗",n:"Poulet"},{e:"🌾",n:"Panure"},{e:"🥚",n:"Œuf"},{e:"🧂",n:"Épices"},{e:"🫚",n:"Huile"},{e:"🫙",n:"Sauce Dip"},{e:"🍋",n:"Citron"},{e:"🌶️",n:"Paprika"}]},
    { name: "Onion Ring", img: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&q=80", price: 10, badge: "", badgeText: "", desc: "Rondelles d'oignons en panure dorée et croustillante.", ingredients: [{e:"🧅",n:"Oignons"},{e:"🌾",n:"Panure"},{e:"🥚",n:"Œuf"},{e:"🧂",n:"Épices"},{e:"🫚",n:"Huile"},{e:"🫙",n:"Sauce Ranch"},{e:"🌶️",n:"Paprika"},{e:"🍋",n:"Citron"}]},
    { name: "Corn Dog", img: "https://images.unsplash.com/photo-1619881590738-a111d176d906?w=600&q=80", price: 10, badge: "", badgeText: "", desc: "Saucisse enrobée de pâte de maïs dorée, servie avec moutarde.", ingredients: [{e:"🌭",n:"Saucisse"},{e:"🌽",n:"Pâte de Maïs"},{e:"🥚",n:"Œuf"},{e:"🧂",n:"Sel"},{e:"🫚",n:"Huile"},{e:"🫙",n:"Moutarde"},{e:"🫙",n:"Ketchup"},{e:"🍋",n:"Citron"}]},
    { name: "Chili Cheese", img: "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=600&q=80", price: 10, badge: "hot", badgeText: "🌶️ Spicy", desc: "Frites recouvertes de fromage fondu et de sauce chili épicée.", ingredients: [{e:"🍟",n:"Frites"},{e:"🧀",n:"Cheese Sauce"},{e:"🌶️",n:"Sauce Chili"},{e:"🧅",n:"Oignon"},{e:"🥩",n:"Viande Hachée"},{e:"🫑",n:"Jalapeños"},{e:"🌿",n:"Coriandre"},{e:"🧂",n:"Épices"}]},
    { name: "Picon Chicken", img: "https://images.unsplash.com/photo-1604908177522-f431f9e9fbd3?w=600&q=80", price: 10, badge: "", badgeText: "", desc: "Petits morceaux de poulet picon croustillants et savoureux.", ingredients: [{e:"🍗",n:"Poulet Picon"},{e:"🌾",n:"Panure Épicée"},{e:"🥚",n:"Œuf"},{e:"🧂",n:"Épices Secrètes"},{e:"🫚",n:"Huile"},{e:"🫙",n:"Sauce Dip"},{e:"🍋",n:"Citron"},{e:"🌶️",n:"Paprika"}]},
    { name: "Mozza Stick", img: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=600&q=80", price: 10, badge: "popular", badgeText: "🧀 Fromage", desc: "Bâtonnets de mozzarella panés et frits, filants à l'intérieur.", ingredients: [{e:"🧀",n:"Mozzarella"},{e:"🌾",n:"Panure"},{e:"🥚",n:"Œuf"},{e:"🧂",n:"Épices"},{e:"🫚",n:"Huile"},{e:"🍅",n:"Sauce Tomate"},{e:"🌿",n:"Herbes"},{e:"🍋",n:"Citron"}]},
    { name: "Kentucky Tex", img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80", price: 10, badge: "", badgeText: "", desc: "Morceaux de poulet style Kentucky croustillants et épicés.", ingredients: [{e:"🍗",n:"Poulet Kentucky"},{e:"🌾",n:"Panure Secrète"},{e:"🧂",n:"11 Épices"},{e:"🫚",n:"Huile"},{e:"🥚",n:"Œuf"},{e:"🫙",n:"Sauce Dip"},{e:"🍋",n:"Citron"},{e:"🌶️",n:"Paprika"}]},
  ],
  salade: [
    { name: "Salade Cesar", img: "https://images.unsplash.com/photo-1512852939750-1305098529bf?w=600&q=80", price: 15, badge: "", badgeText: "", desc: "Salade César classique avec laitue romaine, croûtons et parmesan.", ingredients: [{e:"🥬",n:"Laitue Romaine"},{e:"🧀",n:"Parmesan"},{e:"🍞",n:"Croûtons"},{e:"🫙",n:"Sauce César"},{e:"🧄",n:"Ail"},{e:"🍋",n:"Citron"},{e:"🫒",n:"Anchois"},{e:"🧂",n:"Poivre"}]},
    { name: "Chicken Cesar", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600&q=80", price: 25, badge: "popular", badgeText: "🔥 Populaire", desc: "Salade César avec poulet grillé, parmesan et sauce crémeuse.", ingredients: [{e:"🍗",n:"Poulet Grillé"},{e:"🥬",n:"Laitue Romaine"},{e:"🧀",n:"Parmesan"},{e:"🍞",n:"Croûtons"},{e:"🫙",n:"Sauce César"},{e:"🧄",n:"Ail"},{e:"🍋",n:"Citron"},{e:"🧂",n:"Poivre"}]},
    { name: "Fish Salade", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80", price: 25, badge: "special", badgeText: "🐟 Fish", desc: "Salade fraîche avec filet de poisson grillé et sauce légère.", ingredients: [{e:"🐟",n:"Poisson Grillé"},{e:"🥬",n:"Laitue"},{e:"🍅",n:"Tomates Cerises"},{e:"🥒",n:"Concombre"},{e:"🫒",n:"Olives"},{e:"🧅",n:"Oignon Rouge"},{e:"🍋",n:"Citron"},{e:"🫙",n:"Sauce Légère"}]},
  ],
  boissons: [
    { name: "Eau Minérale", img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80", price: 6, badge: "", badgeText: "", desc: "Eau minérale fraîche et pure pour accompagner votre repas.", ingredients: [{e:"💧",n:"Eau Minérale"},{e:"🧊",n:"Fraîche"},{e:"🏔️",n:"Source Naturelle"},{e:"✅",n:"Sans Calories"},{e:"✅",n:"Sans Sucre"},{e:"💚",n:"Saine"},{e:"🌿",n:"Pure"},{e:"⚗️",n:"Minéraux"}]},
    { name: "Boisson Gazeuse", img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600&q=80", price: 8, badge: "popular", badgeText: "🔥 Populaire", desc: "Boisson gazeuse bien fraîche — Cola, Fanta, Sprite au choix.", ingredients: [{e:"🥤",n:"Boisson Gazeuse"},{e:"🧊",n:"Très Fraîche"},{e:"🍋",n:"Citron Option"},{e:"🍊",n:"Orange Option"},{e:"🥤",n:"Cola Option"},{e:"💧",n:"Eau Gazeuse"},{e:"🍬",n:"Sucre"},{e:"🌿",n:"Arômes"}]},
    { name: "Jus d'Orange", img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80", price: 14, badge: "special", badgeText: "🍊 Frais", desc: "Jus d'orange fraîchement pressé, naturel et vitaminé.", ingredients: [{e:"🍊",n:"Oranges Fraîches"},{e:"💧",n:"Eau Fraîche"},{e:"🍬",n:"Sucre au Goût"},{e:"🧊",n:"Glaçons"},{e:"🍋",n:"Citron"},{e:"🌿",n:"Menthe Option"},{e:"✅",n:"100% Naturel"},{e:"💪",n:"Vitamine C"}]},
    { name: "Tiramisu Drink", img: "https://images.unsplash.com/photo-1541658016709-82835ad0b222?w=600&q=80", price: 20, badge: "special", badgeText: "✨ Spécial", desc: "Boisson Tiramisu crémeuse — café, mascarpone et cacao.", ingredients: [{e:"☕",n:"Café Espresso"},{e:"🧀",n:"Mascarpone"},{e:"🍫",n:"Cacao"},{e:"🍬",n:"Sucre"},{e:"🥛",n:"Lait"},{e:"🧊",n:"Glaçons"},{e:"🌿",n:"Vanille"},{e:"🍪",n:"Biscuit"}]},
  ],
};

// ===== CART =====
let cart = [];

// ===== BURGER MENU (MOBILE) =====  ← FIX ADDED HERE
// ===== BURGER MENU (MOBILE) =====
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinks.classList.toggle('open');
  burger.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('active');
  });
});

document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
    navLinks.classList.remove('open');
    burger.classList.remove('active');
  }
});
// ===== CART FUNCTIONS =====
function addToCart(cat, index, btn) {
  const food = getMenuData()[cat][index];
  const existing = cart.find(i => i.name === food.name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name: food.name, price: food.price, img: food.img, qty: 1 });
  }
  updateCartUI();
  btn.textContent = '✅ Ajouté!';
  btn.classList.add('added');
  setTimeout(() => { btn.innerHTML = '🛒 Ajouter'; btn.classList.remove('added'); }, 1500);
  showToast(`✅ ${food.name} ajouté au panier!`);
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = count;
  document.getElementById('totalPrice').textContent = total + ' Dh';

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');

  if (cart.length === 0) {
    footerEl.style.display = 'none';
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <span>🍽️</span>
        <p>Votre panier est vide</p>
      </div>`;
  } else {
    footerEl.style.display = 'flex';
    itemsEl.innerHTML = cart.map((item) => `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.img}" alt="${item.name}"
          onerror="this.style.display='none'" />
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>${item.price * item.qty} Dh</p>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty('${item.name}', -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.name}', 1)">+</button>
          <button class="remove-btn" onclick="removeItem('${item.name}')">✕</button>
        </div>
      </div>
    `).join('');
  }
}

function changeQty(name, delta) {
  const item = cart.find(i => i.name === name);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart.splice(cart.indexOf(item), 1);
  updateCartUI();
}

function removeItem(name) {
  cart = cart.filter(i => i.name !== name);
  updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
  closeCart();
}

// ===== CART SIDEBAR =====
function openCart() {
  document.getElementById('cartOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartOverlay').classList.remove('active');
  document.body.style.overflow = '';
}
function closeCartOverlay(e) {
  if (e.target === document.getElementById('cartOverlay')) closeCart();
}

// ===== ORDER FORM =====
function openOrderForm() {
  if (cart.length === 0) { showToast('⚠️ Votre panier est vide!'); return; }
  closeCart();
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const miniEl = document.getElementById('orderSummaryMini');
  miniEl.innerHTML = `
    <h4>🛒 Votre Commande</h4>
    ${cart.map(i => `<div class="summary-item"><span>${i.qty}x ${i.name}</span><span>${i.price * i.qty} Dh</span></div>`).join('')}
    <div class="summary-total"><span>Total</span><span>${total} Dh</span></div>
  `;
  document.getElementById('step1').style.display = 'block';
  document.getElementById('step2').style.display = 'none';
  document.getElementById('step3').style.display = 'none';
  document.getElementById('orderFormOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeOrderForm() {
  document.getElementById('orderFormOverlay').classList.remove('active');
  document.body.style.overflow = '';
}
function closeOrderFormOverlay(e) {
  if (e.target === document.getElementById('orderFormOverlay')) closeOrderForm();
}

function goToStep2(e) {
  e.preventDefault();
  const name = document.getElementById('fullName').value;
  const phone = document.getElementById('phoneNumber').value;
  const address = document.getElementById('address').value;
  const landmark = document.getElementById('landmark').value;
  const instructions = document.getElementById('instructions').value;
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  document.getElementById('confirmItems').innerHTML =
    cart.map(i => `<div class="confirm-item"><span>${i.qty}x ${i.name}</span><span>${i.price * i.qty} Dh</span></div>`).join('');
  document.getElementById('confirmTotal').innerHTML =
    `<span>Total</span><span>${total} Dh</span>`;
  document.getElementById('confirmInfo').innerHTML = `
    <p>👤 Nom:<span>${name}</span></p>
    <p>📞 Téléphone:<span>${phone}</span></p>
    <p>📍 Adresse:<span>${address}</span></p>
    ${landmark ? `<p>🏘️ Repère:<span>${landmark}</span></p>` : ''}
    ${instructions ? `<p>📝 Instructions:<span>${instructions}</span></p>` : ''}
  `;
  document.getElementById('step1').style.display = 'none';
  document.getElementById('step2').style.display = 'block';
  document.getElementById('orderFormModal').scrollTop = 0;
}

function goBackToStep1() {
  document.getElementById('step2').style.display = 'none';
  document.getElementById('step1').style.display = 'block';
}

function submitFinalOrder() {
  const name         = document.getElementById('fullName').value;
  const phone        = document.getElementById('phoneNumber').value;
  const address      = document.getElementById('address').value;
  const landmark     = document.getElementById('landmark').value;
  const instructions = document.getElementById('instructions').value;
  const total        = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const itemsText = cart.map(i => `• ${i.qty}x ${i.name} — ${i.price * i.qty} Dh`).join('\n');

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxZHflXFffIwuZxB7IRBc6GlW1GW1TyzBQ7DMm8diXmaDPjqm7cNRt0gL-f_pIjdEjvZg/exec';

  const payload = {
    name, phone, address, landmark, instructions,
    items: itemsText,
    total: total + ' Dh'
  };

  fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).catch(err => console.log('Order sent:', err));

  document.getElementById('successName').textContent  = name;
  document.getElementById('successPhone').textContent = phone;
  document.getElementById('step2').style.display = 'none';
  document.getElementById('step3').style.display = 'block';
  document.getElementById('orderFormModal').scrollTop = 0;
}

// ===== CONTACT FORM =====
function submitOrder(e) {
  e.preventDefault();
  showToast('✅ Commande envoyée! On vous appelle bientôt 🎉');
  e.target.reset();
}

// ===== FOOD ITEM MODAL =====
function openModal(cat, index) {
 const food = getMenuData()[cat][index];
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  const ingredientsHTML = food.ingredients.map(ing => `
    <div class="ingredient-item">
      <span class="ingredient-emoji">${ing.e}</span>
      <span class="ingredient-name">${ing.n}</span>
    </div>
  `).join('');
  content.innerHTML = `
    <div class="modal-hero">
      <img src="${food.img}" alt="${food.name}"
        onerror="this.parentElement.innerHTML='<div style=font-size:6rem;display:flex;align-items:center;justify-content:center;height:100%>🍽️</div>'" />
    </div>
    <p class="modal-category">— ${cat.toUpperCase()} —</p>
    <h2 class="modal-title">${food.name}</h2>
    <p class="modal-price">${food.price} Dh</p>
    <p class="modal-desc">${food.desc}</p>
    <p class="ingredients-title">🧪 Ce qu'il y a dedans</p>
    <div class="ingredients-grid">${ingredientsHTML}</div>
    <button class="modal-order-btn" onclick="addToCartFromModal('${cat}', ${index}); closeModalDirect();">
      🛒 Ajouter au Panier — ${food.price} Dh
    </button>
  `;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function addToCartFromModal(cat, index) {
  const food = getMenuData()[cat][index];
  const existing = cart.find(i => i.name === food.name);
  if (existing) existing.qty += 1;
  else cart.push({ name: food.name, price: food.price, img: food.img, qty: 1 });
  updateCartUI();
  showToast(`✅ ${food.name} ajouté au panier!`);
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModalDirect(); closeOrderForm(); closeCart(); closeFoodPopup(); }
});

// ===== SLIDER =====
let currentIndex = 0, cardWidth = 0, maxIndex = 0, autoSlideInterval, activeCategory = 'burger';



document.querySelectorAll('.cat-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderCategory(tab.dataset.cat);
  });
});

function getCardDimensions() {
  const card = document.querySelector('.food-card');
  if (!card) return;
  cardWidth = card.offsetWidth + 24;
  const outer = document.querySelector('.slider-track-outer');
  const visible = Math.floor(outer.offsetWidth / cardWidth);
  maxIndex = Math.max(0, menuData[activeCategory].length - visible);
}

function goToSlide(index) {
  getCardDimensions();
  currentIndex = Math.max(0, Math.min(index, maxIndex));
  document.getElementById('sliderTrack').style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  updateDots();
}

function createDots() {
  const dotsContainer = document.getElementById('sliderDots');
  dotsContainer.innerHTML = '';
  getCardDimensions();
  for (let i = 0; i <= maxIndex; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentIndex));
}

document.getElementById('prevBtn').addEventListener('click', () => { goToSlide(currentIndex - 1); resetAutoSlide(); });
document.getElementById('nextBtn').addEventListener('click', () => { goToSlide(currentIndex + 1); resetAutoSlide(); });

function startAutoSlide() {
  autoSlideInterval = setInterval(() => goToSlide(currentIndex >= maxIndex ? 0 : currentIndex + 1), 3500);
}
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

window.addEventListener('resize', () => { getCardDimensions(); goToSlide(currentIndex); });

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== INIT =====
// ===== DYNAMIC MENU FROM DATABASE =====
let dbMenuData = {};
let dbCategories = [];

async function loadMenuFromDB() {
  try {
    const res = await fetch('/switchfood/api/menu_public.php');
    const data = await res.json();

    // Build dbMenuData grouped by category slug
    dbCategories = data.categories;
    data.items.forEach(item => {
      const slug = item.category_slug || 'autres';
      if (!dbMenuData[slug]) dbMenuData[slug] = [];
      dbMenuData[slug].push({
        name: item.name,
        img: item.image,
        price: parseFloat(item.price),
        badge: item.is_popular == 1 ? 'popular' : '',
        badgeText: item.is_popular == 1 ? '🔥 Populaire' : '',
        desc: item.description || '',
        ingredients: []
      });
    });

    // If DB has items, use them — otherwise fall back to hardcoded menuData
    if (data.items.length > 0) {
      // Rebuild category tabs dynamically
      buildCategoryTabs();
      const firstSlug = dbCategories[0]?.slug || 'burger';
      renderCategory(firstSlug);
    } else {
      // Fallback to hardcoded data
      renderCategory('burger');
    }

  } catch (err) {
    console.log('DB not available, using local data');
    renderCategory('burger');
  }
}

function buildCategoryTabs() {
  const tabsContainer = document.getElementById('categoryTabs');
  tabsContainer.innerHTML = dbCategories.map((cat, i) => `
    <button class="cat-tab ${i === 0 ? 'active' : ''}" data-cat="${cat.slug}">
      ${cat.icon} ${cat.name}
    </button>
  `).join('');

  // Re-attach click events
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderCategory(tab.dataset.cat);
    });
  });
}

// Override renderCategory to use DB data if available
const _originalRenderCategory = renderCategory;
function renderCategory(cat) {
  const data = Object.keys(dbMenuData).length > 0 ? dbMenuData : menuData;
  activeCategory = cat;
  currentIndex = 0;
  const track = document.getElementById('sliderTrack');
  const items = data[cat] || [];

  if (items.length === 0) {
    track.innerHTML = `<div style="color:var(--muted);padding:3rem;text-align:center">Aucun produit dans cette catégorie</div>`;
    return;
  }

  track.innerHTML = items.map((item, i) => `
    <div class="food-card" onclick="openModal('${cat}', ${i})">
      ${item.badge ? `<div class="card-badge ${item.badge}">${item.badgeText}</div>` : ''}
      <div class="card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy"
          onerror="this.parentElement.innerHTML='<div style=font-size:4rem;display:flex;align-items:center;justify-content:center;height:100%>🍽️</div>'" />
      </div>
      <div class="card-info">
        <h3>${item.name}</h3>
        <p>${item.desc.substring(0, 60)}...</p>
        <div class="card-footer">
          <span class="price">${item.price} Dh</span>
          <button class="order-btn" onclick="event.stopPropagation(); addToCart('${cat}', ${i}, this)">
            🛒 Ajouter
          </button>
        </div>
      </div>
    </div>
  `).join('');

  track.style.transform = 'translateX(0)';
  setTimeout(() => { getCardDimensions(); createDots(); }, 50);
  resetAutoSlide();
}

// Also update addToCart and openModal to use DB data
function getMenuData() {
  return Object.keys(dbMenuData).length > 0 ? dbMenuData : menuData;
}

// ===== INIT =====
loadMenuFromDB();

// ===== HERO FOOD POPUP =====
const foodPopupData = {
  tacos: {
    title: "Tacos 🌮",
    tagline: '"Le street food qui t\'envoie au paradis!"',
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    emoji: "🌮",
    facts: [
      { icon: "🔥", label: "Niveau Piment", value: "Moyen–Fort" },
      { icon: "🧀", label: "Fromage Fondu", value: "Oui! 100%" },
      { icon: "⏱️", label: "Prêt en", value: "~10 min" },
      { icon: "💰", label: "À partir de", value: "35 Dh" },
    ]
  },
  pizza: {
    title: "Pizza 🍕",
    tagline: '"Croustillante dehors, fondante dedans — parfaite!"',
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
    emoji: "🍕",
    facts: [
      { icon: "🧀", label: "Fromage", value: "Mozzarella+" },
      { icon: "🍅", label: "Sauce", value: "Tomate Maison" },
      { icon: "⏱️", label: "Prêt en", value: "~15 min" },
      { icon: "💰", label: "À partir de", value: "25 Dh" },
    ]
  },
  wrap: {
    title: "Wrap 🌯",
    tagline: '"Frais, léger, et incroyablement savoureux!"',
    img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80",
    emoji: "🌯",
    facts: [
      { icon: "🍗", label: "Protéines", value: "Poulet Grillé" },
      { icon: "🥗", label: "Légumes", value: "Ultra Frais" },
      { icon: "⏱️", label: "Prêt en", value: "~8 min" },
      { icon: "💰", label: "À partir de", value: "30 Dh" },
    ]
  },
  nuggets: {
    title: "Nuggets 🍗",
    tagline: '"Croustillants dehors, juteux dedans — addictifs!"',
    img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80",
    emoji: "🍗",
    facts: [
      { icon: "🌾", label: "Panure", value: "Secrète & Crousti" },
      { icon: "🫙", label: "Sauce Dip", value: "Incluse!" },
      { icon: "⏱️", label: "Prêt en", value: "~7 min" },
      { icon: "💰", label: "Prix", value: "10 Dh" },
    ]
  }
};

function showFoodPopup(type) {
  const data = foodPopupData[type];
  if (!data) return;
  document.getElementById('foodPopupImg').src = data.img;
  document.getElementById('foodPopupEmoji').textContent = data.emoji;
  document.getElementById('foodPopupTitle').textContent = data.title;
  document.getElementById('foodPopupTagline').textContent = data.tagline;
  document.getElementById('foodPopupFacts').innerHTML = data.facts.map(f => `
    <div class="popup-fact">
      <span class="popup-fact-icon">${f.icon}</span>
      <span class="popup-fact-label">${f.label}</span>
      <span class="popup-fact-value">${f.value}</span>
    </div>
  `).join('');
  document.getElementById('foodPopupOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeFoodPopup() {
  document.getElementById('foodPopupOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== PRELOADER =====
const preloader = document.getElementById('preloader');
const bar = document.getElementById('preloaderBar');
const preloaderText = document.getElementById('preloaderText');

let progress = 0;
const messages = [
  'Chargement...',
  'Préparation du menu...',
  'Tout est frais! 🔥',
  'C\'est prêt! 🍔'
];

const fillBar = setInterval(() => {
  progress += Math.random() * 18 + 5;
  if (progress >= 100) progress = 100;
  bar.style.width = progress + '%';

  if (progress < 30)       preloaderText.textContent = messages[0];
  else if (progress < 60)  preloaderText.textContent = messages[1];
  else if (progress < 90)  preloaderText.textContent = messages[2];
  else                     preloaderText.textContent = messages[3];

  if (progress >= 100) {
    clearInterval(fillBar);
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 600);
  }
}, 200);
// ===== FAQ TOGGLE =====
function toggleFaq(item) {
  const allItems = document.querySelectorAll('.faq-item');
  allItems.forEach(i => { if (i !== item) i.classList.remove('open'); });
  item.classList.toggle('open');
}