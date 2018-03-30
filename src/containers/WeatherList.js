import { connect } from "react-redux";

import WeatherList from "../components/WeatherList";

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
