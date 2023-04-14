import React from "react";
import { Link } from "react-router-dom";
import { Space, Table, Tag } from "antd";
import { useGetAllCpuQuery } from "../redux/features/cpu/cpuApi";
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
    title: "Cores",
    dataIndex: "Cores",
    key: "Cores",
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
  {
    title: "Model",
    dataIndex: "Model",
    key: "Model",
  },
];
const data = [
  {
    key: "1",
    seller: [
      {
        name: "Eleanar Pena",
        img: "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/people/avatar1.jpg",
        seller_id: "#123",
      },
    ],

    email: "anyone@gmal.com",
    status: ["Active"],
    date: "03.12.2022",
  },
  {
    key: "2",
    seller: [
      {
        name: "Marry manasa",
        img: "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/people/avatar2.jpg",
        seller_id: "#123",
      },
    ],

    email: "noone@gmal.com",
    status: ["Active"],
    date: "23.01.2023",
  },
  {
    key: "3",
    seller: [
      {
        name: "Eleanar ganday",
        img: "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/people/avatar3.jpg",
        seller_id: "#123",
      },
    ],

    email: "example@email.com",
    status: ["InActive"],
    date: "03.01.2023",
  },
  {
    key: "4",
    seller: [
      {
        name: "Eleanar",
        img: "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/people/avatar4.jpg",
        seller_id: "#123",
      },
    ],

    email: "example@email.com",
    status: ["InActive"],
    date: "03.01.2023",
  },
  {
    key: "5",
    seller: [
      {
        name: "Eleanar",
        img: "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/people/avatar1.jpg",
        seller_id: "#123",
      },
    ],

    email: "example@email.com",
    status: ["Active"],
    date: "03.01.2023",
  },
  {
    key: "6",
    seller: [
      {
        name: "Eleanar",
        img: "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/people/avatar2.jpg",
        seller_id: "#123",
      },
    ],

    email: "example@email.com",
    status: ["InActive"],
    date: "03.01.2023",
  },
  {
    key: "7",
    seller: [
      {
        name: "Eleanar",
        img: "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/people/avatar3.jpg",
        seller_id: "#123",
      },
    ],

    email: "example@email.com",
    status: ["Active"],
    date: "03.01.2023",
  },
];

const cpu = [
  {
    Id: 1,
    Manufacturer: '"Dell"',
    Cores: "i3",
    ClockSpeed: "2.5",
    BranchCode: "101",
    CreateDate: "2023-07-03T00:00:00",
    UpdateDate: "2023-07-03T00:00:00",
    InputBy: "sa-gor",
    UpdateBy: "Sagor-2",
    Remarks: "hob",
    Repait: 2,
    Model: "i15",
  },
  {
    Id: 2,
    Manufacturer: "Hp",
    Cores: "i5",
    ClockSpeed: "4",
    BranchCode: "102",
    CreateDate: "2023-12-03T00:00:00",
    UpdateDate: "2023-12-03T00:00:00",
    InputBy: "sgaor",
    UpdateBy: "rakshit",
    Remarks: "hob",
    Repait: 1,
    Model: "2uatxp",
  },
  {
    Id: 1002,
    Manufacturer: "Dell",
    Cores: "I5",
    ClockSpeed: "2.5",
    BranchCode: "100",
    CreateDate: "2023-07-03T00:00:00",
    UpdateDate: null,
    InputBy: null,
    UpdateBy: "Rakshit",
    Remarks: "Non",
    Repait: 2,
    Model: "2uatxpps",
  },
  {
    Id: 1003,
    Manufacturer: '"Dell"',
    Cores: "i3",
    ClockSpeed: "2.5",
    BranchCode: "101",
    CreateDate: "2023-07-03T00:00:00",
    UpdateDate: "2023-07-03T00:00:00",
    InputBy: "sa-gor",
    UpdateBy: "Rakshit-2",
    Remarks: "hob",
    Repait: 2,
    Model: "i15",
  },
];

const CpuList = () => {
  const { data, isLoading, isError, error } = useGetAllCpuQuery();

  // decide what to render
  let content = null;
  if (isLoading) content = <p>Loading...</p>;
  if (!isLoading && isError) content = <p>{error?.error}</p>;
  // if (!isLoading && !isError)
  content = (
    <div className="bg-gray-100 w-full ">
      <div className="flex justify-between">
        <h2 className="text-4xl">CPU List</h2>
        <input
          className="pl-3 placeholder:text-xs placeholder:text-gray-400 rounded outline-none border-none"
          type="text"
          placeholder="Search Model Name"
        />
      </div>

      <div className="mt-8">
        {/* dataSource will be data */}
        <Table columns={columns} dataSource={cpu} />
      </div>
    </div>
  );
  return content;
};

export default CpuList;
