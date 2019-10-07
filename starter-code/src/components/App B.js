//Trial Props & npm components
import React, { Component } from "react";
import User from "./components/User";
import ReactPlayer from "react-player";
class App extends Component {
    render() {
        const user1 = {
            firstName: "Harper",
            lastName: "Perez",
            avatarUrl: ""
        };
        const user2 = {
            firstName: "Hanna",
            lastName: "Montana",
            avatarUrl: ""
        };
        const formatName = user => {
            return `${user.firstName } ${ user.lastName }`
        };
        return (
            <div>
            <User
                firstName={user1.firstName}
                lastName = {user1.lastName}
                displayName={formatName(user1)}
                avatarUrl={user1.avatarUrl} />
            <User
                firstName={user2.firstName}
                lastName = {user2.lastName}
                displayName={formatName(user2)}
                avatarUrl={user2.avatarUrl} />
        <ReactPlayer
          url="https://vimeo.com/channels/top/22439234"
          playing
          controls
          volume="0.5"/>
      </div>
        );
    }
}
export default App;