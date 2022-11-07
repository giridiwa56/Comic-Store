import React, { useState, useEffect } from "react";
import axios from "axios";


const Comic = () => {
  const [comics, setComics] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const getComics = async () => {
    try {
      const comics = await axios({
        method: "get",
        url: "http://localhost:3000/comics",
      });
      setComics(comics.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getComics();
  }, []);
  
  
  
  return (
      <section className="comic">
        <div className="text-center text-xs pt-5">
          <h3 className="text-2x text-ff text-normal fw-bolder">List Comic</h3>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-sm-12">
              <form method="GET">
                <input
                  type="text"
                  className="form-search"
                  placeholder="Search Comic" onChange={(event) =>{
                    setSearchTerm(event.target.value);
                  }}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="rows">
          {comics.filter((val) =>{ 
            if (searchTerm == ""){
              return val
            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
        }).map((comic) => {
            const { title, image, description, genre, price } = comic;
            return (
              <div className="coloumn">
                <div className="comic-property">
                  <div className="card">
                      <div className="comic-thumb">
                        <img src={image} alt="comic"/>
                        <div className="comic-tag">{genre}</div>
                      </div>

                      <div className="comic-content">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <span className="badge bg-info">Rp.{price}</span>
                      </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
  );
};

export default Comic;
