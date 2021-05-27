import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Redirect } from "react-router-dom";
import { getBanks } from "js/services/BankService";

function SearchBar() {
  const [onChangeValue, setOnChangeValue] = React.useState(false);
  const [useIndex, setUseIndex] = React.useState(0);
  const [banks, setBanks] = React.useState([]);

  useEffect(() => {
    getBanks().then((result) => {
      setBanks(result);
    });
  }, []);

  function findWithAttr(array, attr, value) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i][attr] === value) {
        return i;
      }
    }
  }

  const handleChange = (event, value) => {
    console.log("handling");
    console.log(value);
    var index = findWithAttr(banks, "bankName", value);
    console.log(banks[index]);
    setUseIndex(index);
    setOnChangeValue(true);
  };
  if (onChangeValue === true) {
    if (!banks[useIndex].redirectStatus) {
      console.log("true");
      return (
        <Redirect
          to={{
            pathname: "/SelectBank/LoginPage",
            state: {
              logo: banks[useIndex].imageSource,
              placeHolder: banks[useIndex].bankName,
            },
          }}
        />
      );
    } else {
      return (
        <Redirect
          to={{
            pathname: "/SelectBank/RedirectLogin",
            state: {
              url: banks[useIndex].url,
            },
          }}
        />
      );
    }
  }

  return (
    <div style={{ width: 700 }}>
      <Autocomplete
        id="free-solo-searchbar"
        size="small"
        freeSolo
        autoHighlight
        data-testId="SearchBarTest"
        onChange={handleChange}
        options={banks.map((option) => option.bankName)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Enter Bank Name"
            margin="normal"
            variant="outlined"
          />
        )}
      />
    </div>
  );
}

export default SearchBar;
