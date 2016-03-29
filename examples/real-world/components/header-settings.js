import React from 'react'
import cx from 'classnames'

/**
 * @class UserSettings
 * Extended from React Class and BaseClass
 * View for user settings
 */

export default class Settings extends React.Component {

  static propTypes = {
    user: React.PropTypes.shape({
      logged: React.PropTypes.bool.isRequired,
      jokes: React.PropTypes.array.isRequired
    })
  }

  render() {
    const {user} = this.props
    return (
      <div className={cx('header__settings img img--rounded img--small img--bg-img', {
        'isLoggedIn': user.logged
      })} style={{
        backgroundImage: `url(/images/${user.avatar})`
      }}>
        <i className="header__settings__icon icon-settings"></i>
      </div>
    );
  }
}
