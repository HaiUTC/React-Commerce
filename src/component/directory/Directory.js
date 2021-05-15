<<<<<<< HEAD
import React from "react";
import {connect} from 'react-redux'
import {DirectoryMenu} from './Directory-Styled'
import MenuItem from "../menu-item/MenuItem";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directorySelector";

const directory = ({sections}) => {
  return (
    <DirectoryMenu>
      {sections.map(({ id, ...item }) => (
        <MenuItem key={id} {...item} />
      ))}
    </DirectoryMenu>
  );
};
const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})

export default connect(mapStateToProps)(directory);
=======
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
>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
