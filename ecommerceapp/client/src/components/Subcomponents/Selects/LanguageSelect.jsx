import { ConfigProvider, Select, Space } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const LangSelect = () => (
  <ConfigProvider
      theme={{
      token: {
        colorBgBase: '#364d79',
        colorBorder: "transparent",
        colorText: "white",
        fontFamily: 'Montserrat',
        controlItemBgActive: '#364d79'
      }
    }}
    >
    <Space wrap>
      <Select
        defaultValue="eng"
        style={{
          width: 'auto',
        }}
        onChange={handleChange}
        options={[
          {
            value: 'prt',
            label: 'Prt',
          },
          {
            value: 'eng',
            label: 'Eng',
          },
        ]}
      />
    </Space>
  </ConfigProvider>
);
export default LangSelect;
