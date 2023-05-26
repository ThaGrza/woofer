import { useState } from "react";
import "./Homepage.css";
import Navbar from "../../components/navbar/Navbar";
import SearchParks from "../../components/searchParks/SearchParks";
import Footer from "../../components/footer/Footer";
import ParksDisplay from "../../components/parksDisplay/ParksDisplay";
import ParksApi from "../../components/parksApi/ParksApi";

interface Park{
  name: string;
  formatted_address: string;
  rating: number;
}
const Homepage = () => {
  const [location, setLocation] = useState("");
  const [parks, setParks] = useState<Park[]>([]);

  const handleSearch = (value: string) => {
    setLocation(value);
    getData();
  };

  const getData = () => {
      ParksApi(location).then(function (res){
          setParks(res);
      })
  };

  return (
    <div className="homepage-container">
      <Navbar />
      <SearchParks onSearchChange={handleSearch} />
      {parks.map((park: Park) => (
      <ParksDisplay
      name={park.name}
      address={park.formatted_address}
      rating={park.rating}
      />
      ))}
      <Footer />
    </div>
  );
};

export default Homepage;
