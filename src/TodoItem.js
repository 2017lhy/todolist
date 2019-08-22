import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component 
{
    constructor(props)
    {
        super(props)
        this.handelDelete = this.handelDelete.bind(this)
    }

    handelDelete()
    {
        this.props.delete(this.props.index)
    }

    render() 
    {
        const { text } = this.props;
        return (
            <div className="item" onClick={this.handelDelete}>
                {text}
            </div>
        )
    }
}

TodoItem.propTypes = {
    text:PropTypes.string.isRequired,
    delete:PropTypes.func
}

// TodoItem.defaultProps = {
//     text:'hello'
// }

export default TodoItem;
