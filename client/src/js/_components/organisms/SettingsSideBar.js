import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ProfileSettingsTab from "js/_components/organisms/ProfileSettingsTab";
import { myTheme } from "theme";
import COLORS from "js/utils/colors";

const SettingsTab = withStyles((theme) => ({
  root: {
    borderRight: "0px",
    fontWeight: '500',
    fontFamily: myTheme.typography.fontFamily.default, 
    textTransform:'none',
    fontSize:"14px",
    color:COLORS.hexgrey,
  },
  selected: {
    color: "white",
  },
  wrapper: {
    alignItems: "flex-start",
   
  },
}))(Tab);

const SettingsTabs = withStyles((theme) => ({
  flexContainer: {
    flexDirection: "column",
  },
  indicator: {
    backgroundColor: COLORS.hex,
    width: "600px",
    borderRadius: "10px",
  }
}))(Tabs);

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
    display: "flex",
    height: '100%',
    width:'100%',
    zIndex: 0,
  },
  tab: {
    zIndex: 1,
    borderRadius: "10px",
    fontSize: "12px",
    fontWeight: 500,
    width: "220px",
  },
  tabs: {
    backgroundColor: COLORS.white,
    color: COLORS.black,
    borderRadius: "10px",
  },
  base: {
    paddingTop: "50px",
  },
  indicator: {
    backgroundColor: COLORS.hex,
    width: "600px",
    borderRadius: "10px",
    color: COLORS.white,
  },
}));

function TabPanel(props) {  
  const { children, value, index, ...other } = props; 

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
         {children}
        </Box>
      )}
    </div>
  );
}
 
export default function SettingsSideBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(props.id,"in settings side bar")
  return (
    <div>
      <Grid
        container
      >
        <div className={classes.base}  data-testid="sidebar">
          <div className={classes.root}>
            <div  >
              <SettingsTabs
                data-testid="settingTab"
                classes={{
                  indicator: classes.indicator,
                }}
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Settings side bar"
                className={classes.tabs}
                style={{ paddingTop: "25px" }}       
              >
                <SettingsTab
                  label="Profile Settings"
                  {...a11yProps(0)}
                  className={classes.tab}
                  style={{fontSize:"14px", fontWeight:'{500}'}}
                />
                <SettingsTab
                  label="Manage Transactions"
                  {...a11yProps(1)}
                  className={classes.tab}
                  style={{fontSize:"14px", fontWeight: '{500}'}}
                />
                <SettingsTab
                  label="Manage Bank Accounts"
                  {...a11yProps(2)}
                  className={classes.tab}
                  style={{fontSize:"14px", fontWeight: '{500}'}}
                />
                <SettingsTab
                  label="Manage Categories"
                  {...a11yProps(3)}
                  className={classes.tab}
                  style={{fontSize:"14px", fontWeight:"{500}"}}
                />
                <SettingsTab
                  label="Support"
                  {...a11yProps(4)}
                  className={classes.tab}
                  style={{fontSize:"14px", fontWeight: '{500}'}}
                />
                <SettingsTab
                  label="Privacy"
                  {...a11yProps(5)}
                  className={classes.tab}
                  style={{fontSize:"14px", fontWeight: '{500}'}}
                />
              </SettingsTabs>
            </div>
            <TabPanel value={value} index={0} style={{fontFamily: myTheme.typography.fontFamily.default}}>
              <ProfileSettingsTab id={props.id}/>
            </TabPanel>
            <TabPanel value={value} index={1} style={{fontFamily: myTheme.typography.fontFamily.default}}>
              Manage Transactions to be implemented
            </TabPanel>
            <TabPanel value={value} index={2} style={{fontFamily: myTheme.typography.fontFamily.default}}>
              Manage Bank Accounts to be implemented
            </TabPanel>
            <TabPanel value={value} index={3} style={{fontFamily: myTheme.typography.fontFamily.default}}>
              Manage Categories to be implemented
            </TabPanel>
            <TabPanel value={value} index={4} style={{fontFamily: myTheme.typography.fontFamily.default}}>
              Support to implemented
            </TabPanel>
            <TabPanel value={value} index={5} style={{fontFamily: myTheme.typography.fontFamily.default}}>
              Privacy to be implemented
            </TabPanel>
          </div>
        </div>
      </Grid>
    </div>
  );
}
