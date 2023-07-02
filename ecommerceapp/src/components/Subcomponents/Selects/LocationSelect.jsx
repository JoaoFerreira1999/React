import { Select, Space } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const LocationSelect = () => (
  <Space wrap>
    <Select
      defaultValue="euwest"
      style={{
        width: 120,
        marginRight: '10px',
      }}
      onChange={handleChange}
      options={[
        {
          value: 'euwest',
          label: 'Europe West',
        },
        {
          value: 'na',
          label: 'North America',
        },
        {
          value: 'asia',
          label: 'Asia',
        },
        {
          value: 'russia',
          label: 'Russia',
        },
        {
          value: 'africa',
          label: 'Africa',
        },
        
      ]}
    />
  </Space>
);
export default LocationSelect;
