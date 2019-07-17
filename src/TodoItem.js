import React from 'react'

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

export default TodoItem;
