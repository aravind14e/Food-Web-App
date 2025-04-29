import React, { useState } from 'react';
import './MenuSection.css'; // Create this for styles

const categories = [
  { name: 'Salad', img: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FsYWR8ZW58MHx8MHx8fDA%3D' },
  { name: 'Rolls', img: 'https://media.istockphoto.com/id/2171126322/photo/turkish-traditional-street-food-tantuni-wrap-delicious-turkish-kebab.jpg?s=612x612&w=0&k=20&c=Y0wjeTg3-k8QDrejPyKjtdo0FiWzfqYdf8MXOOViLUI=' },
  { name: 'Deserts', img: 'https://media.istockphoto.com/id/1346128287/photo/chocolate-fondant-cake-molten-lava-cake.jpg?s=612x612&w=0&k=20&c=zX5BNyWrbrBLKqEehMfIXej0hLz8a8eGEPT2naOPHuk=' },
  { name: 'Sandwich', img: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhbmR3aWNofGVufDB8fDB8fHww' },
  { name: 'Cake', img: 'https://images.unsplash.com/photo-1602351447937-745cb720612f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNha2V8ZW58MHx8MHx8fDA%3D' },  
  { name: 'Non Veg', img: 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoaWNrZW58ZW58MHx8MHx8fDA%3D' },
  { name: 'Noodles', img: 'https://media.istockphoto.com/id/483137365/photo/asian-chow-mein-noodles.webp?a=1&b=1&s=612x612&w=0&k=20&c=XNoWFfeiYEW4AArOexFAZh4A0XWWtpjL167Ei13cYeo=' },
  { name: 'Juices', img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVpY2V8ZW58MHx8MHx8fDA%3D'},
];
const dishes = [
  {
    name: 'Veg Salad',
    img: 'https://plus.unsplash.com/premium_photo-1673590981810-894dadc93a6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D',
    rating: 4
  },
  {
    name: 'Paneer Tikka',
    img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhbmVlciUyMHRpa2thfGVufDB8fDB8fHww',
    rating: 5
  },
  {
    name: 'Tandoori Chicken',
    img: 'https://plus.unsplash.com/premium_photo-1669245207961-0281fd9396eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZ1bGwlMjBUYW5kb3JpJTIwQ2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 5
  },
  {
    name: 'Chocolate Cake',
    img: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHx8fDA%3D',
    rating: 4
  }
];

const categoryItems = {
  Salad: [
    { name: 'Greek Salad', img: 'https://images.unsplash.com/photo-1599021419847-d8a7a6aba5b4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZWslMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D', price:100 },
    { name: 'Caesar Salad', img: 'https://images.unsplash.com/photo-1564185722618-ae3ffa1ac5aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Flc2VyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D', price:130 },
    { name: 'Caprese Salad', img: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FwcmVzZSUyMHNhbGFkfGVufDB8fDB8fHww',price:150 },
    { name: 'Quinoa Salad', img: 'https://plus.unsplash.com/premium_photo-1705207702013-368450377046?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UXVpbm9hJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D',price:120 },
    { name: 'Fruit Salad', img: 'https://images.unsplash.com/photo-1641642399576-487909d0ddbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZydWl0JTIwc2FsYWR8ZW58MHx8MHx8fDA%3D',price:100 }
  ],
  Rolls: [
    { name: 'Spring Roll', img: 'https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaW5nJTIwcm9sbHxlbnwwfHwwfHx8MA%3D%3D0', price:70},
    { name: 'Egg Roll', img: 'https://media.istockphoto.com/id/1722497418/photo/egg-roll-prantha-with-egg-and-tomatoes-on-tawa.webp?a=1&b=1&s=612x612&w=0&k=20&c=4YwxclAeJDGavf5VnYAHVCDIuJn3MS-4DMlCLI_4S6s=',price:60 },
    { name: 'Chicken Roll', img: 'https://media.istockphoto.com/id/1352473088/photo/fresh-chicken-tikka-roll-with-fresh-tomatos-salad-cheese-and-onions-isolated-on-bright-blue.webp?a=1&b=1&s=612x612&w=0&k=20&c=_9rcASaVxWQwpHAf_DvVsLuU_I-4-hluUweD9wQVUjw=',price:80 },
    { name: 'Veg Roll', img: 'https://media.istockphoto.com/id/1051064908/photo/indian-veg-spring-roll-stuffed-with-various-vegetables-close-up-horizontal-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=XskQd7oI9LYlW8W299airObrPp8CDU2N9JDMuhRMRtQ=',price:40 }
  ],
  Deserts: [
    {
      name: 'Gulab Jamun',
      img: 'https://media.istockphoto.com/id/163064596/photo/gulab-jamun.webp?a=1&b=1&s=612x612&w=0&k=20&c=F_5_AgCdrsecO13W-wiuCZAwYZPBpN3UETTyYtQQlLM=',price:50
    },
    {
      name: 'Jalebi',
      img: 'https://media.istockphoto.com/id/1430753492/photo/indian-sweet-jalebi.webp?a=1&b=1&s=612x612&w=0&k=20&c=aO_1E0NcBstoEmqR8Bpw_eJpMT16eFUTcTdxHrOeHuM=',price:60
    },
    {
      name: 'Rasgulla',
      img: 'https://media.istockphoto.com/id/1044080542/photo/indian-rasgulla-or-rosogulla-dessert-sweet-served-in-a-bowl-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=DIQag-19lJnJ1PX5T2ppu2fc3hH0Pg83j2-9A-YPeSo=',price:50
    },
    {
      name: 'Kaju Katli',
      img: 'https://media.istockphoto.com/id/2168728765/photo/kaju-katli.webp?a=1&b=1&s=612x612&w=0&k=20&c=W6zoXYyhxllAewAzhNYTjFEwZTO2Qa02JKIzkjgQMPU=',price:50
    }
  ],
  Sandwich: [
    { name: 'Veg Sandwich', img: 'https://plus.unsplash.com/premium_photo-1664472757995-3260cd26e477?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwc2FuZHdpY2h8ZW58MHx8MHx8fDA%3D',price:40 },
    { name: 'Chicken Sandwich', img: 'https://images.unsplash.com/photo-1700768400970-428c50bffc11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoaWNrZW4lMjBzYW5kd2ljaHxlbnwwfHwwfHx8MA%3D%3D',price:80 },
    { name: 'Egg Sandwich', img: 'https://plus.unsplash.com/premium_photo-1700948867066-db7372041154?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWdnJTIwc2FuZHdpY2h8ZW58MHx8MHx8fDA%3D',price:60 },
  ],
  Cake: [
    { name: 'Chocolate Cake', img: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D',price:220 },
    { name: 'Cheesecake', img: 'https://plus.unsplash.com/premium_photo-1723579362074-7ae37a4b2783?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoZWVzZSUyMGNha2V8ZW58MHx8MHx8fDA%3D',price:200 },
    { name: 'Red Velvet Cake', img: 'https://plus.unsplash.com/premium_photo-1713719224048-5dde0b2424ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVkJTIwdmVsdmV0JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D',price:250 },
    { name: 'Black Forest Cake', img: 'https://media.istockphoto.com/id/1182587314/photo/black-forest-cake-decorated-with-whipped-cream-and-cherries.webp?a=1&b=1&s=612x612&w=0&k=20&c=hdr0XUhzAhe81YTuHMhnO4L1_0NrSon4FhgYql8DfbE=',price:300 }
  ],
 

  'Non Veg': [
    { name: 'Tandoori Chicken', img: 'https://media.istockphoto.com/id/155369528/photo/tandoori-chicken.webp?a=1&b=1&s=612x612&w=0&k=20&c=0fBSQEIbeiCusZ4ZdrFQt4qdgwOxrYrfRhODh1aZt8k=',price:180 },
    { name: 'Fish Fry', img: 'https://media.istockphoto.com/id/1264335635/photo/close-up-image-of-metal-tongs-turning-crispy-fried-fish-in-a-frying-pan-goan-fish-curry-recipe.webp?a=1&b=1&s=612x612&w=0&k=20&c=JBP_7fVhHYB4LYhKuVMkaVHqBrTDA8McUKmiWnsH7pQ=',price:140 },
    { name: 'Chicken Biryani', img: 'https://images.unsplash.com/photo-1701579231349-d7459c40919d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D',price:120 },
    { name: 'Chicken Kabab', img: 'https://media.istockphoto.com/id/1265209311/photo/fried-chicken-kebab-or-kabab.webp?a=1&b=1&s=612x612&w=0&k=20&c=k6elu7ogARiXzPbHTFtCqEg2A4HQ1w-FR0kbpM8Hc_Q=',price:140 }
  ],
 
  Noodles: [
    { name: 'Hakka Noodles', img: 'https://images.unsplash.com/photo-1741243412484-558eb91fe8c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhha2thJTIwTm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D',price:70 },
    { name: 'Schezwan Noodles', img: 'https://media.istockphoto.com/id/1144501138/photo/manchurian-hakka-schezwan-noodles-popular-indochinese-food-served-in-a-bowl-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=3A2uO-FPzPMWxRxUaoPY0pOdzEGyd6s-zE_r8h_3MEE=',price:90 },
    { name: 'Veg Noodles', img: 'https://plus.unsplash.com/premium_photo-1694670234085-4f38b261ce5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVnJTIwTm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D',price:90 },
    { name: 'Chicken Noodles', img: 'https://media.istockphoto.com/id/820178760/photo/chicken-and-vegetables-on-ramen-noodles.webp?a=1&b=1&s=612x612&w=0&k=20&c=z43FCDbHa__VJwXl1Ad533-GcC-1k4t2_oaE7IT1UkQ=',price:120 }
  ],
  Juices: [
    { name: 'Orange Juice', img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D',price:40 },
    { name: 'Apple Juice', img: 'https://plus.unsplash.com/premium_photo-1663089590359-6ec775dd518e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D',price:50 },
    { name: 'Mango Juice', img: 'https://images.unsplash.com/photo-1697642452436-9c40773cbcbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ28lMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D' ,price:50},
    { name: 'Pineapple Juice', img: 'https://images.unsplash.com/photo-1564956213070-84f5a0cb2407?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGluZWFwcGxlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D',price:50 },
    
  ]
};

export default function MenuSection({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  return (
    <section id="menu-section" className="menu-section">
      <h2>Explore our menu</h2>
      <p>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="menu-categories">
        {categories.map(cat => (
          <div
            className={`menu-category${selectedCategory === cat.name ? ' active' : ''}`}
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            style={{ cursor: 'pointer' }}
          >
            <img src={cat.img} alt={cat.name} />
            <div>{cat.name}</div>
          </div>
        ))}
      </div>
      <hr />
      <h3>{selectedCategory} Items</h3>
      <div className="menu-dishes">
        {categoryItems[selectedCategory] && categoryItems[selectedCategory].map(item => (
          <div className="menu-dish" key={item.name}>
            <img src={item.img} alt={item.name} />
            <div className="dish-title">{item.name}</div>
            <div style={{ fontWeight: 600, color: '#ff5630', margin: '4px 0' }}>₹{item.price}</div>
            <button className="add-btn" onClick={() => addToCart(item)} title="Add to cart">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill="#ff5630" />
                <path d="M12 8v8M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
