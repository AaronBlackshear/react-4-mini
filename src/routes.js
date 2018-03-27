import React from 'react';
import { Switch, Route } from 'react-router-dom';
import React1 from './React1';
import React2 from './React2';
import React3 from './React3';

export default(
    <Switch>
        <Route exact path='/' component={React1} />
        <Route path='/2' component={React2} />
        <Route path='/3' component={React3} />
    </Switch>
)