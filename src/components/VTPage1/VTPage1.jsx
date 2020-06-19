import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const styles = {
  root: {
    marginTop: 20,
    marginBottom: 40,
    textAlign: "center",
  },
  inputs: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-between",
  },
  flex: {
    flexGrow: 1,
    marginRight: 10,
  },
  city: {
    width: "50%",
    marginRight: 10,
  },
  btn: {
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "left",
  },
  cardBox: {
    textAlign: "center",
    width: "60%",
  },
  toggle: {
    display: "flex",
    justifyContent: "space-between",
  },
};

class VTPage1 extends Component {
  state = {
    ...this.props.VTInfo,
  };

  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.root} maxWidth="md">
        <Typography variant="h3">
          Hi NAME! Let's Set up your profile!
        </Typography>
        <div className={classes.inputs}>
          <TextField
            id="outlined-basic"
            label={"Home Address"}
            fullWidth
            variant="outlined"
            value={""}
            onChange={console.log("changed")}
          />
        </div>
        <div className={classes.inputs}>
          <TextField
            id="outlined-basic"
            label={"Apartment or Suite #"}
            fullWidth
            variant="outlined"
            value={""}
            onChange={console.log("changed")}
          />
        </div>
        <div className={classes.inputs}>
          <TextField
            id="outlined-basic"
            label={"City"}
            variant="outlined"
            value={""}
            onChange={console.log("changed")}
            className={classes.city}
          />
          <TextField
            id="outlined-basic"
            label={"State"}
            variant="outlined"
            value={""}
            onChange={console.log("changed")}
            className={classes.flex}
          />
          <TextField
            id="outlined-basic"
            label={"Zipcode"}
            variant="outlined"
            value={""}
            onChange={console.log("changed")}
          />
        </div>
        <div>
          <Typography variant="h5">
            You look purr-fect! Let's add a photo for your profile!
          </Typography>
          <Button
            className={classes.btn}
            onClick={this.handleUploadPhoto}
            variant="contained"
            color="primary"
          >
            Select Photo to Upload
          </Button>
        </div>
        <div>
          <Typography variant="h5">
            Tell us which services you'd like to offer.
          </Typography>
          <Typography variant="body1">
            Toggle selections to incule them in your profile.
          </Typography>
          <Container className={classes.cardBox}>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.toggle}>
                  <Typography variant="h5" className={classes.flex}>
                    Pet Sleepover
                  </Typography>
                  <CardActions>
                    <Button>toggle</Button>
                  </CardActions>
                </div>
                <Typography color="textSecondary">
                  You care for pets in the owner's home.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.toggle}>
                  <Typography variant="h5" className={classes.flex}>
                    Pet Boarding
                  </Typography>
                  <CardActions>
                    <Button>toggle</Button>
                  </CardActions>
                </div>
                <Typography color="textSecondary">
                  You care for pets at your home.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.toggle}>
                  <Typography variant="h5" className={classes.flex}>
                    Drop In Care
                  </Typography>
                  <CardActions>
                    <Button>toggle</Button>
                  </CardActions>
                </div>
                <Typography color="textSecondary">
                  You provide medical services in a client's home.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.toggle}>
                  <Typography variant="h5" className={classes.flex}>
                    Hospice Care
                  </Typography>
                  <CardActions>
                    <Button>toggle</Button>
                  </CardActions>
                </div>
                <Typography color="textSecondary">
                  You care for pets in client's home with hospice needs and services.
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(withStyles(styles)(VTPage1));
