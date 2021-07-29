import React from 'react';



//Displays all the users to the page.
export default function Users(props) {
  const showUsers = (props) => {
    const { users } = props;

    if (users.length > 0) {
      return (
        users.map((user, index) => {
          console.log(user);
          return (
            <div className="user" key={index}>
              <h3 className="user_name">{user.name}</h3>
              <p className="user_catchphrase">{user.company.catchPhrase}</p>
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
