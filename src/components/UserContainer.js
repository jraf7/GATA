import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function UserContainer() {
  return (
    <div style={{ margin: 20 }}>
      <Container>
        <Typography
          component="div"
          align="center"
          variant="h2"
          style={{
            backgroundColor: "#cfe8fc",
            height: "100px"
          }}
        >
          Welcome Back, User
        </Typography>
      </Container>
    </div>
  );
}

export default UserContainer;
