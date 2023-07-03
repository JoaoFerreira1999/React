import { ConfigProvider, Select, Space } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const LocationSelect = () => (
  <ConfigProvider
    theme={{
      token: {
        colorBgBase: '#364d79',
        colorBorder: "transparent",
        colorText: "white",
        fontFamily: 'Montserrat',
        controlItemBgActive: '#364d79',
      }
    }}
  >
    <Space wrap>
      <Select
        defaultValue="euwest"
        style={{
          width: 'auto',
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
  </ConfigProvider>
);
export default LocationSelect;
