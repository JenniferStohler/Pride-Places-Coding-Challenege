import React from 'react';



//Displays all the users to the page.
export default function Users(props) {
  const showUsers = (props) => {
    const { users } = props;

    if (users.length > 0) {
      return (
        users.map((user) => {
          console.log(user);
          return (
            <div className="user" key={user._id}>
              <h3 className="post_title" key={user.name}>{user.name}</h3>
              <p className="Post_body" key={user.company.catchPhrase}>{user.company.catchPhrase}</p>
            </div>
          )
        })
      )
    } else {
      return (<h3>No users to show</h3>)
    }
  }
  return (
    <>
    { showUsers(props) }
    </>
  )
}
