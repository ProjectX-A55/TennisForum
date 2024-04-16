import PropTypes from 'prop-types';



/**
 * @param {{
* userData: {username: string, email: string, firstName: string, lastName: string, avatarUrl: string}, }} userData
* 
*/
const UserComments = ({ userData }) => {
    return (
        <div>User comments</div>
    )
};

UserComments.propTypes = {
    userData: PropTypes.object,
}

export default UserComments;