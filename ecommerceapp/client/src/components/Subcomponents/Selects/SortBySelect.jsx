import { ConfigProvider, Select, Space } from 'antd';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const SortSelect = () => (
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
        defaultValue="Order By"
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: 'price',
            label: 'Price',
          },
          {
            value: 'brand',
            label: 'Brand',
          },
          {
            value: 'color',
            label: 'Color',
          },
          {
            value: 'size',
            label: 'Size',
          },
        ]}
      />
    </Space>
  </ConfigProvider>
);
export default SortSelect;
