import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreatePrinterMutation } from "../redux/features/printer/printerApi";
import getCurrentDateTime from "../hooks/getCurrentDateTime";

const AddPrinter = () => {
  const navigate = useNavigate();
  const [createPrinter, { isLoading, isError, error, isSuccess }] =
    useCreatePrinterMutation();
  const [Manufacturer, setManufacturer] = useState("");

  const [Type, setType] = useState("");
  const [BranchCode, setBranchCode] = useState("");
  const [InputBy, setInputBy] = useState("shagor");
  const [UpdateBy, setUpdateBy] = useState("shagor");
  const [Remarks, setRemarks] = useState("");
  const [Model, setModel] = useState("");
  const [Repait, setRepait] = useState("");

  useEffect(() => {
    if (isSuccess) navigate("/printer-list");
  }, [isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createPrinter({
      Manufacturer,
      Type,
      BranchCode,
      InputBy,
      UpdateBy,
      Remarks,
      Model,
      Repait,
      CreateDate: getCurrentDateTime(),
      UpdateDate: getCurrentDateTime(),
    });
  };
  return (
    <div className="bg-gray-100 w-full ">
      <div className="flex justify-between">
        <h1 className="text-4xl">Add New Printer</h1>
      </div>

      <div>
        <div className="my-8  h-fit ">
          <form action="" onSubmit={handleSubmit} className="w-8/12 m-auto">
            <div className=" gap-8">
              <div>
                <div class="mb-4 bg-white p-5 rounded-md">
                  <div>
                    <label
                      class="block text-gray-700 text-xs mb-2"
                      for="  Product-title"
                    >
                      Manufacturer Name
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                      id="Manufacturer-title"
                      type="text"
                      placeholder="Type here"
                      required
                      value={Manufacturer}
                      onChange={(e) => setManufacturer(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-3 my-5">
                    <div>
                      <label
                        class="block text-gray-700 text-xs mb-2"
                        for="  Product-title"
                      >
                        Type
                      </label>
                      <input
                        class="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                        id="Product-title"
                        type="text"
                        placeholder="Type here"
                        required
                        value={Type}
                        onChange={(e) => setType(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        class="block text-gray-700 text-xs mb-2"
                        for="  Product-title"
                      >
                        BranchCode
                      </label>
                      <input
                        class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                        id="Product-title"
                        type="text"
                        placeholder="Type here"
                        required
                        value={BranchCode}
                        onChange={(e) => setBranchCode(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div>
                      <label
                        class="block text-gray-700 text-xs mb-2"
                        for="  Product-title"
                      >
                        Model
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                        id="Product-title"
                        type="text"
                        placeholder="Type here"
                        required
                        value={Model}
                        onChange={(e) => setModel(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        class="block text-gray-700 text-xs mb-2"
                        for="  Product-title"
                      >
                        Repait
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                        id="Product-title"
                        type="number"
                        placeholder="Type here"
                        required
                        value={Repait}
                        onChange={(e) => setRepait(e.target.value)}
                      />
                    </div>
                    {/* <div>
                      <label
                        class="block text-gray-700 text-xs mb-2"
                        for="  Product-title"
                      >
                        Repait
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                        id="Product-title"
                        type="number"
                        placeholder="Type here"
                        required
                        value={Repait}
                        onChange={(e) => setRepait(e.target.value)}
                      />
                    </div> */}
                  </div>
                </div>
                <div class="mb-4 bg-white p-5 rounded-md">
                  <div>
                    <label
                      class="block text-gray-700 text-xs mb-2"
                      for="  Product-title"
                    >
                      Remarks
                    </label>
                    <textarea
                      rows={4}
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                      id="Product-title"
                      type="text"
                      placeholder="Type here"
                      required
                      value={Remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            {isError && (
              <div>
                <p className="text-center text-red-500 mb-3">{error?.error}</p>
              </div>
            )}
            <button
              disabled={isLoading}
              type="submit"
              className="group relative flex justify-center rounded-md w-full border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              ADD MONITOR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPrinter;
