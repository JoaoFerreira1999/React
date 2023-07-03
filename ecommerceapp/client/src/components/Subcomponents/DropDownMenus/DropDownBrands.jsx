import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
  {
    key: '1',
    label: 'RayBan',
  },
  {
    key: '2',
    label: 'Persol',
  },
  {
    key: '3',
    label: 'Oakley',
  },
  {
    key: '4',
    label: 'Tom Ford',
  },
  {
    key: '5',
    label: 'Carerra',
  },
  {
    key: '6',
    label: 'Gucci',
  },
  {
    key: '7',
    label: 'Vogue',
  },
  {
    key: '8',
    label: 'Ana Hickman',
  },
  {
    key: '9',
    label: 'Prada',
  },
  {
    key: '10',
    label: 'Mormaii',
  },
  {
    key: '11',
    label: 'Dior',
  },
  {
    key: '12',
    label: 'Dolce & Gabana',
  },
];
const DropDownBrands = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Brands
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export  {DropDownBrands};