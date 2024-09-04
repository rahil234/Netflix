import Row from "./Row";
import { requests } from "../../api/apiRequest";

function Rows() {
  return (
    <>
      {" "}
      <Row title={"Upcoming"} contentApiUrl={requests.UpComing} />
      <Row title={"Now Playing"} contentApiUrl={requests.Now_playing} />
      <Row title={"My List"} contentApiUrl={requests.TrendingDay} />
      <Row title={"Comedies"} contentApiUrl={requests.TopRated} />
      <Row
        title={"South Indian Cinema"}
        contentApiUrl={requests.TrendingWeek}
      />
      <Row
        title={"Top 10 Movies in India Today"}
        contentApiUrl={requests.Discover_Movies}
      />
    </>
  );
}

export default Rows;
