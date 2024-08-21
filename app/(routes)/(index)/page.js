"use client";
import "./style.css";
import Profile from "./componets/profile";
import Gallery from "./componets/gallery";

export default function Page() {
  var userData = [
    {
      image: "/imag/Profile pic.png",
      name: "Isabela Torres",
      biograpy: `Amante de viagens, cultura e gastronomia. 🌍✈️ 
                        Aqui compartilho as histórias registradas em cada clique,
                        explorando cantinhos fascinantes do nosso planeta a partir da
                        movimentada cidade de São Paulo. 🏙️📸`,
      location: " São Paulo, Brazil",
      country: 0,
      photos: 20,
    },
  ];
  return (
    <>
      {userData.map((daVez, i) => (
        <Profile
          image={daVez.image}
          name={daVez.name}
          biograpy={daVez.biograpy}
          location={daVez.location}
          country={daVez.country}
          photos={daVez.photos}
        />
      ))}

      <Gallery />
    </>
  );
}
