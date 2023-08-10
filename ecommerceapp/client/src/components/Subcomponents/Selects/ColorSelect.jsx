import { ConfigProvider, Select, Space } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const ShapeSelect = () => (
    <ConfigProvider
    theme={{
    token: {
      colorBgBase: '#f2f2f2',
      colorBorder: "transparent",
      colorText: "black",
      fontFamily: 'Montserrat',
      controlItemBgActive: '#364d79',
    }
  }}
  >
    <Space wrap>
        <Select
        defaultValue="Color"
        style={{
            width: 120,
        }}
        onChange={handleChange}
        listHeight={128}
        options={[
            {
                value: 'black',
                label: 'Black',
            },
            {
                value: 'white',
                label: 'White',
            },
            {
                value: 'yellow',
                label: 'Yellow',
            },
            {
                value: 'gray',
                label: 'Rectangle',
            },
            {
                value: 'golden',
                label: 'Golden',
            },
            {
                value: 'brown',
                label: 'Brown',
            },
            {
                value: 'rouge',
                label: 'Rouge',
            }
        ]}
        />
    </Space>
  </ConfigProvider>
);
export default ShapeSelect;
