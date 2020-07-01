import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// material UI imports
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = (theme) => ({
  root: {
    marginTop: 100,
    marginBottom: 40,
    textAlign: "center",
  },
  cardSearch: {
    width: 300,
    height: 200,
  },
  profileCenter: {
    height: 200,
    // width: 600,
    //    marginLeft: 300,
    textAlign: "center",
  },
  profileImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 0,
    paddingTop: 25,
    width: 100,
    height: 100,
  },
});

class CarePlan extends Component {
  state = {
    isEditing: false,
  };

  backToProfile = () => {
    this.props.history.goBack();
  };

  handleEditToggle = () => {
    console.log(
      "In edit/save toggle",
      this.state,
      "redux state",
      this.props.petCarePlan
    );
    this.props.dispatch({
      type: "SAVE_PET_DETAILS",
      payload: this.props.petCarePlan,
    });
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  handleInputChange = (property) => (event) => {
    console.log("in handleinputchange", event.target.value, this.state);
    this.props.dispatch({
      type: "UPDATE_PET_CARE_PLAN",
      payload: {
        [property]: event.target.value,
      },
    });
  };

  render() {
    return (
      <Container>
        {/* <p>{JSON.stringify(this.props.petCarePlan)}</p> */}
        {this.props.petCarePlan.map((carePlan) => {
          return (
            <div key={carePlan}>
              <img
          className={this.props.classes.profileImage}
          src={carePlan.media_url}
          alt={carePlan.profile_img}
          height="150" width="150"
        />
        <br />
        <Typography variant="h2" className={this.props.classes.profileCenter}>
          Care plan for {carePlan.pet_name}!
        </Typography>
        <Card>
          <CardContent>
            <div>
              <Typography>
                General Info:
                {this.state.isEditing ? (
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    color="secondary"
                    label="Pet Info"
                    size="small"
                    value={carePlan.pet_bio}
                    onChange={this.handleInputChange("pet_bio")}
                  />
                ) : (
                    carePlan.pet_bio
                  )}
              </Typography>
            </div>
            <br />
            <Typography>
              Pet Feeding Info: I like to eat{" "}
              {this.state.isEditing ? (
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  color="secondary"
                  label="Feedings Per Day"
                  size="small"
                  value={carePlan.feeding_per_day}
                  onChange={this.handleInputChange("feeding_per_day")}
                />
              ) : (
                  carePlan.feeding_per_day
                )}{" "}
              meals per day, and my favorite food is{" "}
              {this.state.isEditing ? (
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  color="secondary"
                  label="Pet Food Brand"
                  size="small"
                  value={carePlan.food_brand}
                  onChange={this.handleInputChange("food_brand")}
                />
              ) : (
                  carePlan.food_brand
                )}
              .
            </Typography>
            <br />
            <Typography>
              Please feed me{" "}
              {this.state.isEditing ? (
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  color="secondary"
                  label="Amount of food per meal"
                  size="small"
                  value={carePlan.amount_per_meal}
                  onChange={this.handleInputChange("amount_per_meal")}
                />
              ) : (
                  carePlan.amount_per_meal
                )}{" "}
              for each meal!
            </Typography>
            <br />
            <Typography>
              Pet Behavior Info:{" "}
              {this.state.isEditing ? (
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  color="secondary"
                  label="General Pet Behavior"
                  size="small"
                  value={carePlan.pet_behavior}
                  onChange={this.handleInputChange("pet_behavior")}
                />
              ) : (
                  carePlan.pet_behavior
                )}
              .
            </Typography>
            <br />
            <Typography>
              Pet Equipment Info:{" "}
              {this.state.isEditing ? (
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  color="secondary"
                  label="Special Care Equipment"
                  size="small"
                  value={carePlan.care_equipment}
                  onChange={this.handleInputChange("care_equipment")}
                />
              ) : (
                  carePlan.care_equipment
                )}
              .
            </Typography>
            <br />
            <Typography>
              Pet Stats: I am a{" "}
              {this.state.isEditing ? (
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  color="secondary"
                  label="Gender"
                  size="small"
                  value={carePlan.sex}
                  onChange={this.handleInputChange("sex")}
                />
              ) : (
                  carePlan.sex
                )}{" "}
              {this.state.isEditing ? (
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  color="secondary"
                  label="Breed"
                  size="small"
                  value={carePlan.breed}
                  onChange={this.handleInputChange("breed")}
                />
              ) : (
                  carePlan.breed
                )}
              . I weight{" "}
              {this.state.isEditing ? (
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  color="secondary"
                  label="Weight"
                  size="small"
                  value={carePlan.weight}
                  onChange={this.handleInputChange("weight")}
                />
              ) : (
                  carePlan.weight
                )}{" "}
              pounds and I am{" "}
              {this.state.isEditing ? (
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  color="secondary"
                  label="Age"
                  size="small"
                  value={carePlan.age}
                  onChange={this.handleInputChange("age")}
                />
              ) : (
                  carePlan.age
                )}{" "}
              years old.{" "}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={this.backToProfile}
            >
              Back to Profile
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleEditToggle}
            >
              {this.state.isEditing ? "Save" : "Edit"}
            </Button>
          </CardContent>
        </Card>

            </div>
          )
        })}
       
      </Container>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  petCarePlan: reduxState.petCarePlan,
});
export default withStyles(useStyles)(
  withRouter(connect(mapStateToProps)(CarePlan))
);
