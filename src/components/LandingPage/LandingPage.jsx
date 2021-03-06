import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
  landingPg: {
    borderRadius: 0,
    width: "100%",
    height: "auto",
    position: "relative",
  },
  btngroup: {
    position: "absolute",
    top: "70%",
    left: "79%",
  },
  btngroup2: {
    position: "absolute",
    top: "70%",
    left: "87%",
  },
  dogText: {
    position: "absolute",
    top: "50%",
    left: "70%",
    textAlign: "center",
  },
  catImage: {
    position: "relative",
    borderRadius: 0,
    width: "100%",
    height: "auto",
  },
  description: {
    textAlign: "center",
    fontFamily: "Quicksand",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 400,
    marginLeft: 400,
    color: "#195C60",
    paddingTop: 20,
    paddingBottom: 20,
  },
  services: {
    textAlign: "center",
    fontFamily: "Quicksand",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 400,
    marginLeft: 400,
    paddingTop: "50px",
  },
  cards: {
    fontFamily: "Quicksand",
    margin: "25px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: 100,
  },
  catText: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    justifyContent: "center",
    padding: 10,
  },
  catSubText: {
    textAlign: "center",
    justifyContent: "center",
    padding: 15,
  },
  catPaw: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "center",
    borderRadius: 40,
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 0,
    paddingTop: 25,
    width: 200,
    height: 200,
  },
  servProv: {
    paddingTop: 35,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    height: 50,
    width: 200,
    borderRadius: 12,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 2,
    marginTop: 30,
  },

  missionHeader: {
    textAlign: "center",
    fontFamily: "Quicksand",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 400,
    marginLeft: 400,
    paddingTop: 100,
    paddingBottom: 20,
  },
  btn: {
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    marginTop: 25,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  cardService: {
    minHeight: 475,
    maxWidth: 300,
  },
  backCat: {
    background: 'url("../images/homeCat.png") no-repeat center center',
    backgroundSize: "cover",
  },
  catTextCon: {
    marginLeft: 100,
    marginTop: "5%",
    backgroundColor: "transparent",
  },
});

class LandingPage extends Component {
  handleJoinClick = () => {
    this.props.history.push("/register");
  };

  handSignInClick = () => {
    this.props.history.push("/login");
  };

  serviceProviderClick = () => {
    this.props.history.push("/register");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <img
            className={classes.landingPg}
            src="../images/homeDog.png"
            alt="dog"
          />
          <Typography variant="h3" className={classes.dogText}>
            Welcome to Pet Techs!
          </Typography>
          <Button
            className={classes.btngroup2}
            onClick={this.handleJoinClick}
            variant="contained"
            color="primary"
          >
            Join
          </Button>
          <Button
            className={classes.btngroup}
            onClick={this.handSignInClick}
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </Grid>
        <div>
          <Grid>
            <Grid container spacing={3}>
              <Typography className={classes.description} variant="h5">
                You love your pets. We love that you love your pets. Pet Techs
                is here to make sure you have qualified individuals to help you
                take care of them.
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div>
          <Typography className={classes.services} variant="h5">
            <b>Our Services</b>
          </Typography>
          <Grid
            container
            direction="row"
            justify="center"
            className={classes.cards}
            spacing={2}
          >
            <Grid item xs={12} sm={12} md={2}>
              <Card className={classes.cardService}>
                <CardContent>
                  <div>
                    <img
                      className={classes.image}
                      src="/images/sleepover-icon.png"
                      alt="sleepoverIcon"
                      height="75"
                      width="75"
                    />
                    <Typography variant="h6">
                      <b>Pet Sleepovers</b>
                    </Typography>
                    <Typography variant="subtitle1">
                      We love slumber parties! Providers watch your pet in the
                      comfort of your own home. Jo need for you to pack up and
                      transport!
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <Card className={classes.cardService}>
                <CardContent>
                  <div>
                    <img
                      className={classes.image}
                      src="/images/boarding-icon.png"
                      alt="boardingIcon"
                      height="75"
                      width="75"
                    />
                    <Typography variant="h6">
                      <b>Pet Boarding</b>
                    </Typography>
                    <Typography variant="subtitle1">
                      Our care providers have cozy homes for your four legged
                      friends. Have them watched in a providers home with pet
                      boarding.
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <Card className={classes.cardService}>
                <CardContent>
                  <div>
                    <img
                      className={classes.image}
                      src="/images/drop-in-care-icon.png"
                      alt="dropInCare"
                      height="75"
                      width="75"
                    />
                    <Typography variant="h6">
                      <b>Drop in Care</b>
                    </Typography>
                    <Typography variant="subtitle1">
                      Service providers drop by your home to help provide
                      insulin injections, basic medical needs, or routing care.
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <Card className={classes.cardService}>
                <CardContent>
                  <div>
                    <img
                      className={classes.image}
                      src="/images/hospice-icon.png"
                      alt="hospiceIcon"
                      height="75"
                      width="75"
                    />
                    <Typography variant="h6">
                      <b>Hospice Care</b>
                    </Typography>
                    <Typography variant="subtitle1">
                      Hospice service centers around providers coming to your
                      home, helping with general hospice comfort, maintenance
                      and care.
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <Paper className={classes.backCat} elevation={0}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={7}>
              <Paper className={classes.catTextCon}>
                <Typography variant="h4" className={classes.catText}>
                  "I really appreciate the Pet Techs service providers! They've
                  got my back when I need help with my pets, always going above
                  and beyond with their care!"
                </Typography>
                <Typography variant="h5" className={classes.catSubText}>
                  - James, Eden Prairie Minnesota
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <img
                src="../images/catPaw.png"
                alt="cat high five"
                className={classes.catPaw}
              />
            </Grid>
          </Grid>
        </Paper>
        <Grid className={classes.servProv}>
          <div>
            <img
              className={classes.servProv}
              src="/images/service-provider.png"
              alt="serviceProviderIcon"
              height="200"
              width="200"
            />
          </div>
          <div>
            <Typography className={classes.description} variant="h5">
              Find the best caretaker for your critter.
            </Typography>
          </div>
          <div>
            <Button
              className={classes.button}
              onClick={this.serviceProviderClick}
              variant="contained"
              color="primary"
            >
              Find a service provider
            </Button>
          </div>
        </Grid>
        <Grid>
          <div></div>
          <div>
            <Typography className={classes.missionHeader} variant="h3">
              Our Mission
            </Typography>
            <img
              className={classes.image}
              src="/images/mission-logo.png"
              alt="missionLogoIcon"
              height="300"
              width="300"
            />
          </div>
          <div>
            <Typography className={classes.description} variant="h5">
              We're here to connect veterinary technicians with pet owners who
              want to hire qualified individuals to help give different kinds of
              out-of-clinic care. Either in your home or theirs, you want to
              know your precious animals are in great hands. We are committed to
              giving quality and professional care and to give you ease of mind.{" "}
            </Typography>
          </div>
          <Grid>
            <div>
              <Button
                className={classes.btn}
                onClick={this.handleJoinClick}
                variant="contained"
                color="primary"
              >
                Join
              </Button>
              <Button
                className={classes.btn}
                onClick={this.handSignInClick}
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
