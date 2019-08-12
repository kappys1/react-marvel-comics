import React, { useState } from 'react';
import { loadAllComics } from '../../modules/catalog/actions';
import './index.scss';
import { connect, useDispatch } from 'react-redux';

function Sidebar({ comics, status }) {
  const dispatch = useDispatch();
  const [order, setOrder] = useState({ name: '', type: '' });
  const orders = [
    { name: 'Titulo', value: 'title' },
    { name: 'Modificacion', value: 'modified' },
    { name: 'Numero Issue', value: 'issueNumber' },
    { name: 'Fecha de venta', value: 'onsaleDate' }
  ];

  const handleClickOrder = newOrder => {
    let result = {};
    if (order.name !== newOrder) {
      result = { name: newOrder, type: 'asc' };
    } else if (order.name === newOrder && order.type === 'asc') {
      result = { name: newOrder, type: 'desc' };
    } else {
      result = { name: '', type: '' };
    }

    setOrder(result);
    const orderTitle = `${result.type === 'desc' ? '-' : ''}${result.name}`;
    dispatch(loadAllComics(1, orderTitle));
  };

  const optionsOrder = orders.map((item, i) => {
    let icon = '';
    if (item.value === order.name) {
      icon =
        order.type === 'asc' ? (
          <i className="icon-cheveron-down"></i>
        ) : (
          <i className="icon-cheveron-up"></i>
        );
    }
    return (
      <div className="text-body" key={i} onClick={() => handleClickOrder(item.value)}>
        {item.name}
        {icon}
      </div>
    );
  });
  return (
    <div className="sidebar-content">
      <h2>Order</h2>
      {optionsOrder}
      <div className={`content-loading ${status.isLoading ? 'show' : ''}`}>
        <i className="icon-loading"></i>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  comics: state.catalog.comics,
  status: state.catalog.status
});

const mapDispathToProps = {
  loadAllComics
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Sidebar);
