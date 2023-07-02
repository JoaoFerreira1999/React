import { Select, Space } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const LangSelect = () => (
  <Space wrap>
    <Select
      defaultValue="eng"
      style={{
        width: 120,
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
);
export default LangSelect;
