import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchWeather } from "../actions";
import SearchBar from "../components/SearchBar";

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
 
