import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const More = () => (
    <div>
      <Jumbotron>
        <h1 className="display-3">More...</h1>
        <p className="lead">
          Just a little more information about nothing in particular.
        </p>
        <p className="lead">
          <Button color="primary">More...</Button>
        </p>
      </Jumbotron>
    </div>
);

export default More;
