import React, { useState } from "react";
import { Table } from "antd";
import { useGetAllMonitorQuery } from "../redux/features/monitor/monitorApi";
const columns = [
  {
    title: "#ID",
    dataIndex: "Id",
    key: "Id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Manufacturer",
    dataIndex: "Manufacturer",
    key: "Manufacturer",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Model",
    dataIndex: "Model",
    key: "Model",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "ScreenSize",
    dataIndex: "ScreenSize",
    key: "ScreenSize",
  },
  {
    title: "BranchCode",
    dataIndex: "BranchCode",
    key: "BranchCode",
  },
  {
    title: "Remarks",
    dataIndex: "Remarks",
    key: "Remarks",
  },
  {
    title: "Repair Count",
    dataIndex: "Repait",
    key: "Repait",
  },
];

const monitor = [
  {
    Id: 1,
    Manufacturer: "Dell",
    Model: "dellflip",
    ScreenSize: '24"',
    BranchCode: "101",
    CreateDate: "2023-07-03T00:00:00",
    UpdateDate: "2023-07-03T00:00:00",
    InputBy: "shagor",
    UpdateBy: "rakshit",
    Remarks: "1",
    Repait: 2,
  },
  {
    Id: 2,
    Manufacturer: "lenevo",
    Model: "scsv",
    ScreenSize: '12"',
    BranchCode: "102",
    CreateDate: "2023-12-01T00:00:00",
    UpdateDate: "2023-07-03T00:00:00",
    InputBy: "sk",
    UpdateBy: "rt",
    Remarks: "1",
    Repait: 1,
  },
  {
    Id: 3,
    Manufacturer: "Dell",
    Model: "2uatxpps",
    ScreenSize: null,
    BranchCode: "100",
    CreateDate: "2023-07-03T00:00:00",
    UpdateDate: null,
    InputBy: null,
    UpdateBy: "Rakshit",
    Remarks: "Non",
    Repait: 2,
  },
  {
    Id: 4,
    Manufacturer: "Dell",
    Model: "2uatxpps",
    ScreenSize: null,
    BranchCode: "100",
    CreateDate: "2023-07-03T00:00:00",
    UpdateDate: null,
    InputBy: null,
    UpdateBy: "Rakshit",
    Remarks: "Non",
    Repait: 2,
  },
  {
    Id: 5,
    Manufacturer: "Dell",
    Model: "2uatxpps",
    ScreenSize: null,
    BranchCode: "100",
    CreateDate: "2023-07-03T00:00:00",
    UpdateDate: null,
    InputBy: null,
    UpdateBy: "Rakshit-2",
    Remarks: "Non",
    Repait: 2,
  },
];

const MonitorList = () => {
  const [searchText, setSearchText] = useState("");
  const { data, isLoading, isError, error } = useGetAllMonitorQuery();

  // decide what to render
  let content = null;
  if (isLoading) content = <p>Loading...</p>;
  if (!isLoading && isError) content = <p>{error?.error}</p>;
  // if (!isLoading && !isError)
  content = (
    <div className="bg-gray-100 w-full ">
      <div className="flex justify-between">
        <h2 className="text-4xl">Monitor List</h2>
        <input
          className="pl-3 placeholder:text-xs placeholder:text-gray-400 rounded outline-none border-none"
          type="text"
          placeholder="Search Model Name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="mt-8">
        {/* dataSource will be data */}
        <Table
          columns={columns}
          dataSource={monitor?.filter((e) =>
            e?.Model.toLocaleLowerCase().includes(
              searchText.toLocaleLowerCase()
            )
          )}
        />
      </div>
    </div>
  );
  return content;
};

export default MonitorList;
