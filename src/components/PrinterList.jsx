import React, { useState } from "react";
import { Table } from "antd";
import { useGetAllPrinterQuery } from "../redux/features/printer/printerApi";
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
    title: "Type",
    dataIndex: "Type",
    key: "Type",
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

const printer = [
  {
    Id: 1,
    Manufacturer: "xp",
    Model: "2atuxp",
    Type: "ss",
    BranchCode: "102",
    CreateDate: "2023-09-03T00:00:00",
    UpdateDate: "2023-12-03T00:00:00",
    InputBy: "shagor",
    UpDateBy: "rakshit",
    Remarks: "sso",
    Repait: 1,
  },
  {
    Id: 2,
    Manufacturer: "Lenevo",
    Model: "2atuxp",
    Type: "ssTP",
    BranchCode: "103",
    CreateDate: "2023-08-03T00:00:00",
    UpdateDate: "2023-12-03T00:00:00",
    InputBy: "sha-gor",
    UpDateBy: "rakshit",
    Remarks: "Non",
    Repait: 4,
  },
  {
    Id: 3,
    Manufacturer: "xp",
    Model: "2atuxpZZ",
    Type: "ss",
    BranchCode: "102",
    CreateDate: "2023-09-03T00:00:00",
    UpdateDate: "2023-12-03T00:00:00",
    InputBy: "shagor",
    UpDateBy: "rakshit",
    Remarks: "sso",
    Repait: 4,
  },
];

const PrinterList = () => {
  const [searchText, setSearchText] = useState("");
  const { data, isLoading, isError, error } = useGetAllPrinterQuery();

  // decide what to render
  let content = null;
  if (isLoading) content = <p>Loading...</p>;
  if (!isLoading && isError) content = <p>{error?.error}</p>;
  // if (!isLoading && !isError)
  content = (
    <div className="bg-gray-100 w-full ">
      <div className="flex justify-between">
        <h2 className="text-4xl">Printer List</h2>
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
          dataSource={printer?.filter((e) =>
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

export default PrinterList;
