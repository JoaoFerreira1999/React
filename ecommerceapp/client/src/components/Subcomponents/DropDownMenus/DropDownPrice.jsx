import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Slider } from 'antd';

const items = [
  {
    key: '1',
    label: 'Aviator',
  },
  {
    key: '2',
    label: 'Butterfly',
  },
  {
    key: '3',
    label: 'Oval',
  },
  {
    key: '4',
    label: 'Rectangle',
  },
  {
    key: '5',
    label: 'Round',
  },
  {
    key: '6',
    label: 'Square',
  },
  {
    key: '7',
    label: 'Wayfarer',
  }
];
const DropDownShape = () => (
  <Dropdown>
    <a onClick={(e) => e.preventDefault()}>
      <Space style={{backgroundColor: "#ededed", padding: "7px", borderRadius: "20px"}}>
        Shapes
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default DropDownShape;