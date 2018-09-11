import React from 'react';
import { connect } from 'react-redux'

const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'blue'
}

let View = ({ data }) => (
  data ?
    <article style={articleStyle} >
      <div style={{ textAlign: 'center' }}>
        <h1>{data.title}</h1>
        <h2>{data.description}</h2>
        <h3>{data.comment}</h3>
      </div>
    </article> :
    null
);

const mapStateToProps = (state) => ({ data: state.data })
View = connect(mapStateToProps, null)(View)
export default View;