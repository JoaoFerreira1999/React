import { Select, Space } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const SortSelect = () => (
  <Space wrap>
    <Select
      defaultValue="price"
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
);
export default SortSelect;
