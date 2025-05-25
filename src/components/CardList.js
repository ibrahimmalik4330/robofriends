import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div
      style={{
        padding: "20px 0",
        border: "3px solid #000000",
        marginTop: "10px",
      }}
    >
      {robots.map((user, i) => {
        return (
          <Card
            key={user.id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
