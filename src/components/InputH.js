import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const App = () => (
  <Space direction="vertical " align='end'>
    <Search
      placeholder="Search"
      onSearch={onSearch}
      style={{
        width: 300,
        padding: '5px'


      }}
    />
  </Space>
);
export default App;