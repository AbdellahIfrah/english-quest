export interface VocabItem {
    en: string;
    es: string;
    icon: string;
  }
  
  export interface VocabCategory {
    title: string;
    icon: string;
    color: string;
    items: VocabItem[];
  }
  
  export interface GrammarCategory {
    title: string;
    rules: string;
    items: VocabItem[];
  }
  
  export const vocabularyData: Record<string, VocabCategory> = {
    places: {
      title: "Places Around Town",
      icon: "🏙️",
      color: "bg-blue-500",
      items: [
        { en: "Amusement park", es: "Parque de atracciones", icon: "🎢" },
        { en: "Bakery", es: "Panadería", icon: "🥖" },
        { en: "Bank", es: "Banco", icon: "🏦" },
        { en: "Bookshop", es: "Tienda de libros", icon: "📚" },
        { en: "Butcher's", es: "Carnicería", icon: "🥩" },
        { en: "Café", es: "Cafetería", icon: "☕" },
        { en: "Chemist", es: "Farmacia", icon: "💊" },
        { en: "Cinema", es: "Cine", icon: "🎬" },
        { en: "Department store", es: "Centro comercial", icon: "🏬" },
        { en: "Hospital", es: "Hospital", icon: "🏥" },
        { en: "Hotel", es: "Hotel", icon: "🏨" },
        { en: "Library", es: "Biblioteca", icon: "📖" },
        { en: "Museum", es: "Museo", icon: "🏛️" },
        { en: "Park", es: "Parque", icon: "🌳" },
        { en: "Port", es: "Puerto", icon: "⚓" },
        { en: "Post office", es: "Correos", icon: "📮" },
        { en: "Restaurant", es: "Restaurante", icon: "🍽️" },
        { en: "Sports centre", es: "Polideportivo", icon: "⚽" },
        { en: "Theatre", es: "Teatro", icon: "🎭" }
      ]
    },
    home: {
      title: "The Home",
      icon: "🏠",
      color: "bg-emerald-500",
      items: [
        { en: "Armchair", es: "Sillón", icon: "🪑" },
        { en: "Bathroom", es: "Baño", icon: "🛁" },
        { en: "Bed", es: "Cama", icon: "🛏️" },
        { en: "Bedroom", es: "Dormitorio", icon: "🛏️" },
        { en: "Chair", es: "Silla", icon: "🪑" },
        { en: "Cooker", es: "Juego de cocina", icon: "🍳" },
        { en: "Curtain", es: "Cortina", icon: "🪟" },
        { en: "Dining room", es: "Comedor", icon: "🍽️" },
        { en: "Fridge", es: "Nevera", icon: "🧊" },
        { en: "Kitchen", es: "Cocina", icon: "🍳" },
        { en: "Living room", es: "Salón", icon: "🛋️" },
        { en: "Rubbish bin", es: "Cubo de basura", icon: "🗑️" },
        { en: "Rug", es: "Alfombra", icon: "🪡" },
        { en: "Shower", es: "Ducha", icon: "🚿" },
        { en: "Sink", es: "Lavabo", icon: "🚰" },
        { en: "Sofa", es: "Sofá", icon: "🛋️" },
        { en: "Table", es: "Mesa", icon: "🪑" },
        { en: "Toilet", es: "Aseo", icon: "🚽" },
        { en: "Wardrobe", es: "Armario", icon: "🚪" }
      ]
    },
    weather: {
      title: "Weather",
      icon: "🌤️",
      color: "bg-amber-500",
      items: [
        { en: "Cloud", es: "Nube", icon: "☁️" },
        { en: "Cloudy", es: "Nublado", icon: "⛅" },
        { en: "Cold", es: "Frío", icon: "🥶" },
        { en: "Cool", es: "Fresco", icon: "🌬️" },
        { en: "Dry", es: "Seco", icon: "🌵" },
        { en: "Fog", es: "Niebla", icon: "🌫️" },
        { en: "Foggy", es: "Cubierto de niebla", icon: "🌫️" },
        { en: "Freezing", es: "Mucho frío", icon: "🧊" },
        { en: "Hot", es: "Calor", icon: "🥵" },
        { en: "Ice", es: "Hielo", icon: "🧊" },
        { en: "Icy", es: "Cubierto de hielo", icon: "❄️" },
        { en: "Lightning", es: "Rayo", icon: "⚡" },
        { en: "Rain", es: "Lluvia", icon: "🌧️" },
        { en: "Rainy", es: "Lluvioso", icon: "🌧️" },
        { en: "Snow", es: "Nieve", icon: "❄️" },
        { en: "Snowy", es: "De nieve", icon: "☃️" },
        { en: "Storm", es: "Tormenta", icon: "🌩️" },
        { en: "Stormy", es: "Tormentoso", icon: "⛈️" },
        { en: "Sun", es: "Sol", icon: "☀️" },
        { en: "Sunny", es: "Soleado", icon: "☀️" },
        { en: "Temperature", es: "Temperatura", icon: "🌡️" },
        { en: "Thunder", es: "Trueno", icon: "💥" },
        { en: "Warm", es: "Templado", icon: "🌤️" },
        { en: "Wet", es: "Húmedo", icon: "💧" },
        { en: "Wind", es: "Viento", icon: "💨" },
        { en: "Windy", es: "Ventoso / mucho viento", icon: "🌬️" }
      ]
    },
    clothes: {
      title: "Clothes",
      icon: "👕",
      color: "bg-purple-500",
      items: [
        { en: "Boots", es: "Botas", icon: "🥾" },
        { en: "Coat", es: "Abrigo", icon: "🧥" },
        { en: "Dress", es: "Vestido", icon: "👗" },
        { en: "Hat", es: "Sombrero", icon: "🎩" },
        { en: "Jacket", es: "Chaqueta", icon: "🧥" },
        { en: "Jeans", es: "Vaqueros", icon: "👖" },
        { en: "Leggings", es: "Mallas", icon: "👖" },
        { en: "Sandals", es: "Sandalias", icon: "👡" },
        { en: "Shirt", es: "Camisa", icon: "👔" },
        { en: "Shoes", es: "Zapatos", icon: "👟" },
        { en: "Shorts", es: "Pantalones cortos", icon: "🩳" },
        { en: "Skirt", es: "Falda", icon: "👗" },
        { en: "Socks", es: "Calcetines", icon: "🧦" },
        { en: "Suit", es: "Traje", icon: "🕴️" },
        { en: "Sweater", es: "Suéter", icon: "🧶" },
        { en: "Swimsuit", es: "Bañador", icon: "🩱" },
        { en: "T-shirt", es: "Camiseta", icon: "👕" },
        { en: "Tracksuit", es: "Chándal", icon: "🏃" },
        { en: "Trainers", es: "Deportivas", icon: "👟" },
        { en: "Trousers", es: "Pantalón", icon: "👖" }
      ]
    },
    food: {
      title: "Food and Tableware",
      icon: "🍕",
      color: "bg-rose-500",
      items: [
        { en: "Beans", es: "Alubias", icon: "🫘" },
        { en: "Beef", es: "Carne de vaca", icon: "🥩" },
        { en: "Bowl", es: "Bol", icon: "🥣" },
        { en: "Bread", es: "Pan", icon: "🍞" },
        { en: "Cake", es: "Tarta", icon: "🍰" },
        { en: "Cereal", es: "Cereal", icon: "🥣" },
        { en: "Cheese", es: "Queso", icon: "🧀" },
        { en: "Chicken", es: "Pollo", icon: "🍗" },
        { en: "Chips", es: "Patatas fritas", icon: "🍟" },
        { en: "Coffee", es: "Café", icon: "☕" },
        { en: "Cup", es: "Taza", icon: "☕" },
        { en: "Egg", es: "Huevo", icon: "🥚" },
        { en: "Fish", es: "Pez", icon: "🐟" },
        { en: "Fizzy drink", es: "Bebida con gas", icon: "🥤" },
        { en: "Fork", es: "Tenedor", icon: "🍴" },
        { en: "Glass", es: "Vaso", icon: "🥛" },
        { en: "Ham", es: "Jamón", icon: "🍖" },
        { en: "Hamburger", es: "Hamburguesa", icon: "🍔" },
        { en: "Hot dog", es: "Perrito caliente", icon: "🌭" },
        { en: "Ice cream", es: "Helado", icon: "🍦" },
        { en: "Juice", es: "Zumo", icon: "🧃" },
        { en: "Knife", es: "Cuchillo", icon: "🔪" },
        { en: "Lamb", es: "Cordero", icon: "🥩" },
        { en: "Lemon", es: "Limón", icon: "🍋" },
        { en: "Melon", es: "Melón", icon: "🍈" },
        { en: "Mushroom", es: "Champiñones", icon: "🍄" },
        { en: "Noodles", es: "Fideos", icon: "🍜" },
        { en: "Oil", es: "Aceite", icon: "🫗" },
        { en: "Olive", es: "Aceituna", icon: "🫒" },
        { en: "Omelette", es: "Tortilla", icon: "🍳" },
        { en: "Onion", es: "Cebolla", icon: "🧅" },
        { en: "Peas", es: "Gisantes", icon: "🫛" },
        { en: "Pie", es: "Pastel", icon: "🥧" },
        { en: "Plate", es: "Plato", icon: "🍽️" },
        { en: "Pork", es: "Cerdo", icon: "🥩" },
        { en: "Potato", es: "Patata", icon: "🥔" },
        { en: "Rice", es: "Arroz", icon: "🍚" },
        { en: "Salad", es: "Ensalada", icon: "🥗" },
        { en: "Salt", es: "Sal", icon: "🧂" },
        { en: "Sauce", es: "Salsa", icon: "🥫" },
        { en: "Sausage", es: "Salchicha", icon: "🌭" },
        { en: "Seafood", es: "Mariscos", icon: "🦐" },
        { en: "Serviette", es: "Servilleta", icon: "🧻" },
        { en: "Shrimp", es: "Gamba", icon: "🦐" },
        { en: "Soup", es: "Sopa", icon: "🥣" },
        { en: "Spoon", es: "Cuchara", icon: "🥄" },
        { en: "Steak", es: "Filete", icon: "🥩" },
        { en: "Sugar", es: "Azúcar", icon: "🍬" },
        { en: "Tomato", es: "Tomate", icon: "🍅" }
      ]
    }
  };
  
  export const grammarData: Record<string, GrammarCategory> = {
    tobe: {
      title: "Verbo To Be",
      rules: "I am (Yo soy/estoy)\nYou are (Tú eres/estás)\nHe / She / It is (Él/Ella/Eso es/está)\nWe / They are (Nosotros/Ellos son/están)",
      items: [
        { en: "I am student", es: "Yo soy estudiante", icon: "🧑‍🎓" },
        { en: "She is happy", es: "Ella está feliz", icon: "😊" },
        { en: "They are at home", es: "Ellos están en casa", icon: "🏠" }
      ]
    },
    possessive: {
      title: "Pronombres Posesivos",
      rules: "Mine (Mío / Mía)\nYours (Tuyo / Tuya)\nHis (Suyo - de él)\nHers (Suyo - de ella)\nOurs (Nuestro / Nuestra)\nTheirs (Suyo - de ellos)",
      items: [
        { en: "This book is mine", es: "Este libro es mío", icon: "📘" },
        { en: "The house is theirs", es: "La casa es de ellos", icon: "🏡" }
      ]
    },
    ing: {
      title: "Verbos en -ING",
      rules: "Se añade -ING al verbo para acciones en progreso:\n• Read ➔ Reading (Leyendo)\n• Run ➔ Running (Corriendo)\n• Eat ➔ Eating (Comiendo)",
      items: [
        { en: "She is reading", es: "Ella está leyendo", icon: "📖" },
        { en: "He is eating", es: "Él está comiendo", icon: "🍕" }
      ]
    }
  };