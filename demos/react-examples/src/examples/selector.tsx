import React, { useState } from "react";
import { Select, Spin } from "antd";

// 模拟接口请求
function mockFetch(data, delay = 800) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
}

// 模拟国家、省、市数据
const countryList = [
  { value: "china", label: "中国" },
  { value: "usa", label: "美国" },
];

const provinceMap = {
  china: [
    { value: "zhejiang", label: "浙江" },
    { value: "guangdong", label: "广东" },
  ],
  usa: [
    { value: "california", label: "加州" },
    { value: "texas", label: "德州" },
  ],
};

const cityMap = {
  zhejiang: [
    { value: "hangzhou", label: "杭州" },
    { value: "ningbo", label: "宁波" },
  ],
  guangdong: [
    { value: "guangzhou", label: "广州" },
    { value: "shenzhen", label: "深圳" },
  ],
  california: [
    { value: "losangeles", label: "洛杉矶" },
    { value: "sanfrancisco", label: "旧金山" },
  ],
  texas: [
    { value: "houston", label: "休斯顿" },
    { value: "austin", label: "奥斯汀" },
  ],
};

export default function CascadingSelect() {
  const [country, setCountry] = useState(null);
  const [province, setProvince] = useState(null);
  const [city, setCity] = useState(null);

  const [provinceOptions, setProvinceOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  const [loadingProvince, setLoadingProvince] = useState(false);
  const [loadingCity, setLoadingCity] = useState(false);

  // 国家变化
  const handleCountryChange = async (val) => {
    setCountry(val);
    setProvince(null);
    setCity(null);
    setProvinceOptions([]);
    setCityOptions([]);

    if (val) {
      setLoadingProvince(true);
      const data = await mockFetch(provinceMap[val]);
      setProvinceOptions(data);
      setLoadingProvince(false);
    }
  };

  // 省变化
  const handleProvinceChange = async (val) => {
    setProvince(val);
    setCity(null);
    setCityOptions([]);

    if (val) {
      setLoadingCity(true);
      const data = await mockFetch(cityMap[val]);
      setCityOptions(data);
      setLoadingCity(false);
    }
  };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      {/* 国家 */}
      <Select
        placeholder="选择国家"
        value={country}
        onChange={handleCountryChange}
        options={countryList}
        style={{ width: 160 }}
      />

      {/* 省 */}
      <Select
        placeholder="选择省"
        value={province}
        onChange={handleProvinceChange}
        options={provinceOptions}
        style={{ width: 160 }}
        disabled={!country}
        notFoundContent={loadingProvince ? <Spin size="small" /> : null}
      />

      {/* 市 */}
      <Select
        placeholder="选择市"
        value={city}
        onChange={setCity}
        options={cityOptions}
        style={{ width: 160 }}
        disabled={!province}
        notFoundContent={loadingCity ? <Spin size="small" /> : null}
      />
    </div>
  );
}
