import React from "react";
import {connect} from 'react-redux'
import "./Directory.scss";
import MenuItem from "../menu-item/MenuItem";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directorySelector";

const directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...item }) => (
        <MenuItem key={id} {...item} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})

export default connect(mapStateToProps)(directory);
