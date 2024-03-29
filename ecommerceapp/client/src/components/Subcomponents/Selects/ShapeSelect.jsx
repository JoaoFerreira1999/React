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
        defaultValue="Shape"
        style={{
            width: 120,
        }}
        onChange={handleChange}
        listHeight={128}
        options={[
            {
                value: 'aviator',
                label: 'Aviator',
            },
            {
                value: 'butterfly',
                label: 'Butterfly',
            },
            {
                value: 'oval',
                label: 'Oval',
            },
            {
                value: 'rectangle',
                label: 'Rectangle',
            },
            {
                value: 'round',
                label: 'Round',
            },
            {
                value: 'square',
                label: 'Square',
            },
            {
                value: 'wayfarer',
                label: 'Wayfarer',
            },
            {
                value: 'sports',
                label: 'Sports',
            }
        ]}
        />
    </Space>
  </ConfigProvider>
);
export default ShapeSelect;
