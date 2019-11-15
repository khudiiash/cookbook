import React, { Component } from "react";
import { connect } from "react-redux";
import EditRecipe from "../EditRecipe";

import {
  setTitle,
  setDescription,
  setIngredients,
  setPreparation,
  setDuration,
  setDate
} from "../../store/Edit/actions";

class EditContainer extends Component {

  render() {
      
    return (
      <EditRecipe
        title={this.props.title}
        description={this.props.description}
        ingredients={this.props.ingredients}
        preparation={this.props.preparation}
        duration={this.props.duration}
        date={this.props.title}
        setTitle={this.props.setTitle}
        match={this.props.match}
        setDescription={this.props.setDescription}
        setIngredients={this.props.setIngredients}
        setPreparation={this.props.setPreparation}
        setDuration={this.props.setDuration}
        setDate={this.props.setDate}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.edit.title,
    description: state.edit.description,
    ingredients: state.edit.ingredients,
    preparation: state.edit.preparation,
    duration: state.edit.duration,
    date: state.edit.date
  };
};
const mapDispatchToProps = {
  setTitle,
  setDescription,
  setIngredients,
  setPreparation,
  setDuration,
  setDate,
};
export default connect(mapStateToProps, mapDispatchToProps)(EditContainer);
