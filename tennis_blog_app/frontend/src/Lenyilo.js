import React, { useEffect, useState } from "react";
import "./App.css"

const Lenyilo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/tipus"); // <-- ide a saját API-d URL-je
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
    return <p>Nincs tipus</p>;
  }

  return (
    <div>
      <h2>Téma</h2>
      <ul>
        {data.map((elem, index) => (
            <div>
                <div key={index} className="keret" >
                    {elem.tipus_nev}
                </div>
            </div>
        ))}
      </ul>
    </div>
  );
};

export default Lenyilo;
