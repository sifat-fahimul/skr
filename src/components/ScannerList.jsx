import React from "react";
import { Table } from "antd";
import { useGetAllScannerQuery } from "../redux/features/scanner/scannerApi";
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

const scanner = [
  {
    Id: 1,
    Manufacturer: "asus",
    Type: "ssss",
    BranchCode: "101",
    CreateDate: "2323-03-03T00:00:00",
    UpdateDate: "2023-03-12T00:00:00",
    InputBy: "shagor",
    UpdateBy: "rakshit",
    Remarks: "hob",
    Repait: 1,
  },
  {
    Id: 2,
    Manufacturer: "Dell",
    Type: "Isss",
    BranchCode: "102",
    CreateDate: "2023-07-03T00:00:00",
    UpdateDate: "2023-08-03T00:00:00",
    InputBy: null,
    UpdateBy: "Rakshit",
    Remarks: "Non",
    Repait: 2,
  },
  {
    Id: 3,
    Manufacturer: "Dell",
    Type: "Isss",
    BranchCode: "102",
    CreateDate: "2023-07-03T00:00:00",
    UpdateDate: "2023-08-03T00:00:00",
    InputBy: null,
    UpdateBy: "Rakshit",
    Remarks: "Non",
    Repait: 2,
  },
];

const ScannerList = () => {
  const { data, isLoading, isError, error } = useGetAllScannerQuery();

  // decide what to render
  let content = null;
  if (isLoading) content = <p>Loading...</p>;
  if (!isLoading && isError) content = <p>{error?.error}</p>;
  // if (!isLoading && !isError)
  content = (
    <div className="bg-gray-100 w-full">
      <div className="flex justify-between">
        <h1 className="text-4xl">Scanner List</h1>
        <input
          className="pl-3 placeholder:text-xs placeholder:text-gray-400 rounded outline-none border-none"
          type="text"
          placeholder="Search Manufacturer"
        />
      </div>
      {/* <div className="my-8 bg-white h-fit p-5 rounded-md">
    <div className="my-5 flex justify-between">
      <input
        className="pl-3 placeholder:text-xs placeholder:text-gray-500 bg-gray-200 w-72 rounded outline-none border-none"
        type="text"
        placeholder="Search..."
      />
      <div className="flex gap-4 w-80">
        <div className="rounded bg-gray-200 text-gray-500 flex-grow pr-3">
          <select
            className=" form-select outline-none border-none w-full h-full px-4 py-3 rounded bg-gray-200 text-gray-500 flex-grow "
            name=""
            id=""
          >
            <option value="Status" className="">
              Status
            </option>
            <option value="Active">Active</option>
            <option value="Disable">Disable</option>
            <option value="Show all">Show all</option>
          </select>
        </div>
        <div className="rounded bg-gray-200 text-gray-500 flex-grow pr-3">
          <select
            className=" form-select outline-none border-none w-full h-full px-4 py-3 rounded bg-gray-200 text-gray-500 flex-grow "
            name=""
            id=""
          >
            <option value="Show 20" className="">
              Show 20
            </option>
            <option value="Show 30">Show 30</option>
            <option value="Show 40">Show 40</option>
          </select>
        </div>
      </div>
    </div>
    <hr className="" />
    <div>
      <Table columns={columns} dataSource={scanner} />
    </div>
  </div> */}
      <div className="mt-8">
        {/* dataSource will be data */}
        <Table columns={columns} dataSource={scanner} />
      </div>
    </div>
  );
  return content;
};

export default ScannerList;
