import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        let userProfile = response.data;
        this.props.setUserProfile(userProfile);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfileContainer)
);
