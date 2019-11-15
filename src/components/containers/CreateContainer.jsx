import React, {Component} from 'react';
import {connect} from 'react-redux'
import CreateRecipe from '../CreateRecipe'

import {
    setTitle,
    setDescription,
    setIngredients,
    setPreparation,
    setDuration,
    setDate,

} from '../../store/Create/actions'

class CreateContainer extends Component {
    componentDidMount() {
        console.log(this.props.date)
    }
    render() {
        return <CreateRecipe
        title={this.props.title}
        description={this.props.description}
        ingredients={this.props.ingredients}

        preparation={this.props.preparation}
        duration={this.props.duration}
        
        date={this.props.date}

        setTitle={this.props.setTitle}
        setDescription={this.props.setDescription}
        setIngredients={this.props.setIngredients}
        setPreparation={this.props.setPreparation}
        setDuration={this.props.setDuration}
        setDate={this.props.setDate}
      
    />
    }
    
};

const mapStateToProps = state => {
    return {
        title: state.create.title,
        description: state.create.description,
        ingredients: state.create.ingredients,
        preparation: state.create.preparation,
        duration: state.create.duration,
        date: state.create.date,

    }
}
const mapDispatchToProps = {
    setTitle,
    setDescription,
    setIngredients,
    setPreparation,
    setDuration,
    setDate,
}
export default connect( mapStateToProps, mapDispatchToProps )(CreateContainer)