import { useState, useEffect } from "react";
import axios from "axios";
import "../info.css";
import { Card } from "./card";


export function Info() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [show, setShow] = useState(true);

  // url Api + token
  const compet = `https://www.scorebat.com/embed/competition/${search}/?token=MjA2MzVfMTY3NTM3MzEzNl9iNjg3ZmUxZmY2OGU4OTI5NmQ3ZDUxNzliZDI2ZWUwM2Q3NDdiMzRl`
  const video = `https://www.scorebat.com/video-api/v3/feed/?token=MjA2MzVfMTY3Mzg2Njk1OF8yNzRhY2IyOWI3ZGNjZWY5YmNjMTIwOWI1NzAyNDgxMTlmNDk2MjQ3`;
  // useEffect
  useEffect(() => {
    axios({
      method: "GET",
      url: video,
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data.response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Highlights">
      <h1 className="title">F⚽⚽tball T⚽tal</h1>
      <h2 className="title"> Highlights</h2>

      <div className="container">
       
        {data ? (
          data.map((value, index) => {
            return (
              <Card
                key={index}
                competitionUrl={value.competitionUrl}
                matchviewUrl={value.matchviewUrl}
                thumbnail={value.thumbnail}
                competition={value.competition}
                title={value.title}
              />
            );
          })
        ) : (
          <img src="https://img.freepik.com/vector-gratis/ilustracion-vectorial-diseno-grafico_24908-54512.jpg?w=2000" />
        )}
      </div>
    </div>
  );
}
