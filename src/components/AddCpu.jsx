import React, { useState } from "react";
import getCurrentDateTime from "../hooks/getCurrentDateTime";

const AddCpu = () => {
  const [Manufacturer, setManufacturer] = useState("");
  const [Cores, setCores] = useState("");
  const [ClockSpeed, setClockSpeed] = useState("");
  const [BranchCode, setBranchCode] = useState("");
  const [InputBy, setInputBy] = useState("shagor");
  const [UpdateBy, setUpdateBy] = useState("shagor");
  const [Remarks, setRemarks] = useState("");
  const [Model, setModel] = useState("");
  const [Repait, setRepait] = useState("");

  //   {
  //     "Id": 3,
  //     "Manufacturer": "\"Dell\"",
  //     "Cores": "i3",
  //     "ClockSpeed": "2.5",
  //     "BranchCode": "101",
  //     "CreateDate": "2023-07-03T00:00:00",
  //     "UpdateDate": "2023-07-03T00:00:00",
  //     "InputBy": "sa-gor",
  //     "UpdateBy": "Rakshit-2",
  //     "Remarks": "hob",
  //     "Repait": 2,
  //     "Model": "i15"
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      Manufacturer,
      Cores,
      ClockSpeed,
      BranchCode,
      InputBy,
      UpdateBy,
      Remarks,
      Model,
      Repait,
      CreateDate: getCurrentDateTime(),
      UpdateDate: getCurrentDateTime(),
    };
    console.log("obj", obj);
  };
  return (
    <div className="bg-gray-100 w-full ">
      <div className="flex justify-between">
        <h1 className="text-4xl">Add New Monitor</h1>

        {/* <div className="flex gap-4 w-80  ">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Save to draft
          </button>
          <Link
            to=""
            className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Publish
          </Link>
        </div> */}
      </div>

      <div>
        <div className="my-8  h-fit flex justify-between ">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex gap-8">
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
                        Cores
                      </label>
                      <input
                        class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                        id="Product-title"
                        type="text"
                        placeholder="Type here"
                        value={Cores}
                        onChange={(e) => setCores(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        class="block text-gray-700 text-xs mb-2"
                        for="  Product-title"
                      >
                        ClockSpeed
                      </label>
                      <input
                        class="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                        id="Product-title"
                        type="text"
                        placeholder="Type here"
                        value={ClockSpeed}
                        onChange={(e) => setClockSpeed(e.target.value)}
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
                        value={Repait}
                        onChange={(e) => setRepait(e.target.value)}
                      />
                    </div>
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
                      // type="text"
                      placeholder="Type here"
                      value={Remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                    />
                  </div>
                </div>
                {/* <div class="mb-4 bg-white p-5 rounded-md">
                  <div>
                    <label
                      class="block text-gray-700 text-xs mb-2"
                      for="  Product-title"
                    >
                      Image
                    </label>
                    <input
                      class="file:p-2 file:border-none file:bg-gray-300 file:rounded  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                      id="Product-title"
                      type="file"
                      // placeholder="Type here"
                    />
                  </div>
                </div> */}
              </div>
              {/* <div className="mb-4 bg-white p-5 rounded-md">
                <div>
                  <label
                    class="block text-gray-700 text-xs mb-2"
                    for="  Product-title"
                  >
                    Price
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                    id="Product-title"
                    type="text"
                    placeholder="Type here"
                  />
                </div>
                <div className="my-4">
                  <label class="block text-gray-700 text-xs mb-1" for="Status">
                    Status
                  </label>
                  <div className="rounded bg-gray-200 text-gray-500 w-60 pr-3 my-3">
                    <select
                      className=" form-select outline-none border-none w-full h-full px-4 py-3 rounded bg-gray-200 text-gray-500 flex-grow "
                      name=""
                      id="Status"
                    >
                      <option value="published">Published</option>
                      <option value="Draft">Draft</option>
                    </select>
                  </div>
                </div>

                <div className="my-4">
                  <label
                    class="block text-gray-700 text-xs mb-2"
                    for="  Product-title"
                  >
                    Tags
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                    id="Product-title"
                    type="text"
                    placeholder="Type here"
                  />
                </div>
                <div className="my-4">
                  <a href="" className="mx-4">
                    x Tech
                  </a>
                  <a href="" className="mx-4">
                    x shirt
                  </a>
                  <a href="" className="mx-4">
                    x Mobile
                  </a>
                </div>
                <hr />
                <div className="my-4">
                  <p className="text-lg mb-4">Categories</p>
                  <input
                    type="checkbox"
                    id="Shirt"
                    name="Shirt"
                    value="Shirt"
                  />
                  <label for="Shirt"> Shirt</label>
                  <br />
                  <input
                    type="checkbox"
                    id="T-Shirt"
                    name="T-Shirt"
                    value="T-Shirt"
                  />
                  <label for="T-Shirt"> T-Shirt</label>
                  <br />
                  <input
                    type="checkbox"
                    id="Sneakers"
                    name="Sneakers"
                    value="Sneakers"
                  />
                  <label for="Sneakers"> Sneakers</label>
                  <br />
                  <input
                    type="checkbox"
                    id="Joggers"
                    name="Joggers"
                    value="Joggers"
                  />
                  <label for="Joggers"> Joggers</label>
                  <br />
                  <input
                    type="checkbox"
                    id="Vests"
                    name="Vests"
                    value="Vests"
                  />
                  <label for="Vests"> Vests</label>
                  <br />
                  <input
                    type="checkbox"
                    id="Knitwear"
                    name="Knitwear"
                    value="Knitwear"
                  />
                  <label for="Knitwear"> Knitwear</label>
                  <br />
                  <input
                    type="checkbox"
                    id="Shorts"
                    name="Shorts"
                    value="Shorts"
                  />
                  <label for="Shorts"> Shorts</label>
                  <br />
                </div>
              </div> */}
            </div>
            <button
              type="submit"
              className="group relative flex justify-center rounded-md w-full border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              ADD CPU
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCpu;
