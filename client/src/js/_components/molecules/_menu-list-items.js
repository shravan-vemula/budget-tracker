import React from "react";
import List from "@material-ui/core/List";
import LeftNavIcon from "js/_components/atoms/_left-nav-icon";

const MenuItemsList = () => {
  const [activeLink, setActiveLink] = React.useState(1);
  const listItems = [
    { link: "/home/overview", itemName: "overview" },
    { link: "/home/income", itemName: "income" },
    { link: "/home/expenses", itemName: "expenses" },
    { link: "/home/budget", itemName: "budget" },
    { link: "/home/accounts", itemName: "account" },
  ];

  return (
    <div>
      <List>
        {listItems.map((listItem, index) => {
          index += 1;
          return (
            <LeftNavIcon
              key={index}
              link={listItem.link}
              itemName={listItem.itemName}
              index={index}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
          );
        })}
      </List>
    </div>
  );
};

export default MenuItemsList;
