import React from 'react';

const idX = x => x;


export const createConnect = (Consumer, defSelector = idX) => (
    (selector = defSelector) => Component => {
    const Connected = props => (
      <Consumer>
        {context => <Component {...selector(context)} {...props} />}
      </Consumer>
    );

    if (process.env.NODE_ENV !== 'production') {
      Connected.displayName = `connected(${
        Component.displayName || Component.name
        })`;
    }

    return Connected;
  }
);
