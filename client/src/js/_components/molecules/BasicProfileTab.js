import React, { useEffect, useState } from "react";
import { fade, withStyles, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { Grid } from "@material-ui/core";
import AvatarIcon from "js/_components/atoms/AvatarIcon";
import Divider from "@material-ui/core/Divider";
import ChangePassword from "js/_components/molecules/ChangePassword";
import DeleteAccount from "js/_components/molecules/DeleteAccount";
import { myTheme } from "theme";
import Button from "@material-ui/core/Button";
import { getUserDetails, putUserDetails } from "js/services/UserServices";
import COLORS from "js/utils/colors";
import ToastMessage from "../atoms/_toast-message";


const BasicProfileInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
      fontFamily: myTheme.typography.fontFamily.default,
    },
  },
  input: {
    fontFamily: myTheme.typography.fontFamily.default,
    borderRadius: 4,
    backgroundColor: myTheme.palette.background,
    border: "1px solid #ced4da",
    width: "300px",
    fontSize: "14px",
    padding: "12px 18px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },

  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  AvatarAlignment: {
    paddingLeft: "80px",
  },
  AvatarFontSize: {
    fontSize: "100px",
  },
  InputField: {
    fontFamily: "Inter,sans-serif",
  },
}));
const userEmail = localStorage.getItem("user_email");
export default function BasicProfileTab(props) {
  const [name, setName] = useState("");
  const [phone, setPhoneNo] = useState("");
  const [country, setCountry] = useState("");
  const [openToastSuccess, setOpenToastSuccess] = React.useState(false);

  useEffect(() => {
    async function innerFunction() {
      const response = await getUserDetails(props.id);
      setName(response.data.name);
      setPhoneNo(response.data.phone);
      setCountry(response.data.country);
    }
    innerFunction();
  }, []);

  const data = {
    id: 1,
    name: name,
    email: userEmail,
    userId: "",
    phone: phone,
    country: country,
    createdAt: null,
    createdBy: null,
    modifiedAt: null,
    modifiedBy: null,
    userProfileSettingsDto: null,
    deleted: false,
  };

  const submitForm = () => {
    putUserDetails(props.id, data);
    handleSaveClick();
  };

  const handleToastClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenToastSuccess(false);
  };

  const handleSaveClick =() =>{
    setOpenToastSuccess(true);
  }

  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={8}>
            <div className={classes.paper}>
              <div className={classes.base}>
                <form className={classes.root} noValidate>
                  <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <FormControl className={classes.margin}>
                      <InputLabel
                        shrink
                        htmlFor="basicprofile-input"
                        className={classes.InputField}
                        style={{
                          color: COLORS.hexgrey,
                          fontSize: "15px",
                          fontWeight: "500",
                          fontFamily: myTheme.typography.fontFamily.default,
                        }}
                      >
                        FULL NAME
                      </InputLabel>
                      <BasicProfileInput
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="username"
                        placeholder="Enter your name"
                        style={{
                          color: COLORS.hexgrey,
                          fontSize: "15px",
                          fontWeight: "500",
                          fontFamily: myTheme.typography.fontFamily.default,
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <FormControl className={classes.margin}>
                      <InputLabel
                        shrink
                        htmlFor="basicprofile-input"
                        style={{
                          color: COLORS.hexgrey,
                          fontSize: "15px",
                          fontWeight: "500",
                          fontFamily: myTheme.typography.fontFamily.default,
                        }}
                      >
                        MOBILE NUMBER
                      </InputLabel>
                      <BasicProfileInput
                        value={phone}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        id="mobile-number"
                        placeholder="Enter your mobile number"
                        style={{
                          color: COLORS.hexgrey,
                          fontSize: "15px",
                          fontWeight: "500",
                          fontFamily: myTheme.typography.fontFamily.default,
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <FormControl className={classes.margin}>
                      <InputLabel
                        shrink
                        htmlFor="basicprofile-input"
                        style={{
                          color: COLORS.hexgrey,
                          fontSize: "15px",
                          fontWeight: "500",
                          fontFamily: myTheme.typography.fontFamily.default,
                        }}
                      >
                        COUNTRY
                      </InputLabel>
                      <BasicProfileInput
                        value={country}
                        id="country"
                        placeholder="Enter your country"
                        onChange={(e) => setCountry(e.target.value)}
                        style={{
                          color: COLORS.hexgrey,
                          fontSize: "15px",
                          fontWeight: "500",
                          fontFamily: myTheme.typography.fontFamily.default,
                        }}
                      />
                    </FormControl>
                  </Grid>
                </form>
              </div>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div className={classes.AvatarAlignment}>
              <AvatarIcon props={{ spacing: 150 }} />
            </div>
          </Grid>
        </Grid>
      </Grid>
      <div style={{ paddingBottom: "20px" }}></div>
      <Divider />
      <div style={{ paddingBottom: "20px" }}></div>
      <div id="emailHeading">
        <div>
          <span
            style={{
              color: COLORS.hexgrey,
              fontWeight: "bold",
              fontFamily: myTheme.typography.fontFamily.default,
              float: "left",
              fontSize: "16px",
            }}
          >
            {" "}
            Email Address
          </span>
        </div>
      </div>
      <div style={{ paddingBottom: "27px" }}></div>
      <div id="emailId">
        <div>
          <span
            style={{
              color: COLORS.hexgrey,
              fontFamily: myTheme.typography.fontFamily.default,
              float: "left",
              fontSize: "16px",
            }}
          >
            Your email address is{" "}
            <span
              style={{
                color: COLORS.hexgrey,
                fontFamily: myTheme.typography.fontFamily.default,
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {userEmail}
            </span>
          </span>
        </div>
      </div>

      <div style={{ paddingBottom: "40px" }}></div>
      <Divider />
      <div style={{ paddingBottom: "20px" }}></div>
      <ChangePassword />
      <div style={{ paddingBottom: "45px" }}></div>
      <Divider />
      <div style={{ paddingTop: "10px" }}></div>
      <div>
        <DeleteAccount />
      </div>
      <div style={{ paddingTop: "20px" }}></div>

      <div id="saveButton" style={{ flex: "right" }}>
        <span
          style={{
            fontWeight: "bold",
            fontFamily: myTheme.typography.fontFamily.default,
            float: "right",
          }}
        >
          <Button variant="contained"  color="primary" onClick={submitForm}>
            Save
          </Button>

          <ToastMessage
            openToastSuccess={openToastSuccess}
            message="Details Saved Successfully"
            handleToastClose={handleToastClose}
            type="success"
          />
        </span>
      </div>
    </div>
  );
}
