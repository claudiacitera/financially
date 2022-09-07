import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { Provider } from '../imports/ui/context/context';

Meteor.startup(() => {
  render(<Provider><App/></Provider>, document.getElementById('root'));
});
