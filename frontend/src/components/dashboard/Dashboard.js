import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Education from './Education';

// css
import '../../css/dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </p>
            <ProfileActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <div style={{ marginBottom: '60px' }} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger"
            >
              Delete My Account
            </button>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              View Result
            </Link>
            <p></p>
            <table className="table riped  table-hover table-bordered container">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Date</th>
                  <th>Username</th>
                  <th>Total Claim</th>
                  <th>Txid</th>
                  <th>Balance Stake</th>
                  <th>Status</th>
                  <th>Claim</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>2022-9-25</td>
                  <td>@Farmui</td>
                  <td>1000 USDT</td>
                  <td>0x199065636269659</td>
                  <td>3000</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>
                    <button>Claim</button>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>002</td>
                  <td>2022-9-25</td>
                  <td>@Sergey</td>
                  <td>2000 USDT</td>
                  <td>0x458418435786527457</td>
                  <td>3000</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>
                    <button>Claim</button>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>003</td>
                  <td>2022-9-25</td>
                  <td>@HiHi</td>
                  <td>1000 USDT</td>
                  <td>0x5554877215875454</td>
                  <td>3000</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>
                    <button>Claim</button>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>2022-9-25</td>
                  <td>@Murhammad</td>
                  <td>1000 USDT</td>
                  <td>0x2413241849898949</td>
                  <td>3000</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>
                    <button>Claim</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
