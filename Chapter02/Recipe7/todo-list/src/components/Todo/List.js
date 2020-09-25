import React from 'react';

const List = props => (
  <ul>
    {props.items.map((item, key) => (
      <li key={key} className={`${item.completed ? 'completed' : 'pending'}`}>
        {item.task}




           {/**
             *  If the task is completed we assign the
             *  .completed class otherwise .pending
             */}


        <div className="actions">
          <span className={item.completed ? 'hide' : 'done'} onClick={() => props.markAsCompleted(item.id)}>
            <i className="fa fa-check"></i>
          </span>



                {/**
                 * using a callback on the onClick we call
                 * our removeTask function
                 */}          
          <span className="trash" onClick={() => props.removeTask(item.id)}>
            <i className="fa fa-trash"></i>
          </span>
        </div>
      </li>
    ))}
  </ul>
);

export default List;
