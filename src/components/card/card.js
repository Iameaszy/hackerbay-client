import React, { Component } from 'react';
import './card.css';
import moment from 'moment';

const cardStyle = {
  width: '50%',
  height: '250px',
  background: 'rgb(208, 240, 235)',
  borderRadius: '1rem',
  margin: 'auto',
  boxShadow: '0px 0px 8px 1px red',
};

export default class Card extends Component {
  render() {
    const data = this.props.data;
    return (
      <aside style={cardStyle} className="Card">
        <div
          title={
            data.status && data.status === 'online'
              ? 'webite is active'
              : 'website is down'
          }
          className={
            data.status && data.status === 'online'
              ? 'Card-indicator_green'
              : 'Card-indicator_red'
          }
        />
        <div
          title={
            data.status && data.status === 'online'
              ? 'website is active'
              : 'website is down'
          }
          className={
            data.status && data.status === 'online'
              ? 'Card-indicator_green2'
              : 'Card-indicator_red2'
          }
        />
        <h3 className="Card-title">
          <a href={data.url}>{data.name}</a>
        </h3>
        <ul className="Card-description_wrapper">
          <li className="Card-description">
            <p className="Card-description_label">Created: </p>
            <p className="Card-description_detail">
              {moment(data.createdAt).fromNow()}
            </p>
          </li>
          <li className="Card-description">
            <p className="Card-description_label">Modified: </p>
            <p className="Card-description_detail">
              {moment(data.updatedAt).fromNow()}
            </p>
          </li>
        </ul>
        <ul className="Card-action_wrapper">
          <div className="Card-delete_confirmation">
            <p>
              are you sure you want to delete this? <span>X</span>{' '}
              <span role="img" arial-labelledby="delete">
                &#9989;
              </span>{' '}
            </p>
          </div>
          <li className="Card-action_edit">
            <a href="a">Edit</a>
          </li>
          <li className="Card-action_delete">
            <a href="a">Delete</a>
          </li>
        </ul>
      </aside>
    );
  }
}
