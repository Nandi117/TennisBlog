import React, { useEffect, useState } from "react";
import "./App.css"

const BlogLista = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/osszesAdat"); // <-- ide a saját API-d URL-je
        const json = await res.json();
        setData(json); // feltételezve, hogy a json egy tömb
      } catch (error) {
        console.error("Hiba a fetch során:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Betöltés...</p>;
  }

  if (data.length === 0) {
    return <p>Nincs blog bejegyzés</p>;
  }

  return (
    <div>
      <h2>Cikkek</h2>
      <ul>
        {data.map((elem, index) => (
            <div>
                <div key={index} className="keret" >
                    {elem.blog_szoveg}
                </div>
            </div>
        ))}
      </ul>
    </div>
  );
};

export default BlogLista;
