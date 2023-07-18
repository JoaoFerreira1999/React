import React from 'react';
import { Rate } from 'antd';
const App = (props) => <Rate disabled defaultValue={props.rating} />;
export default App;