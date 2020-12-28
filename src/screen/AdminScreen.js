import React, { useEffect } from "react";
import Screen from "../components/Screen";
import no_image from "../assets/no_image.jpg";
import useItemApi from "../api/useItemApi";
import useApi from "../hooks/useApi";
import CartTableItem from "../components/table/CartTableItem";
import AdminTableItem from "../components/table/AdminTableItem";

const AdminScreen = () => {
  const itemApi = useItemApi();
  const getAllItemApi = useApi(itemApi.getAllItem);

  useEffect(() => {
    getAllItemApi.request();
  }, []);

  return (
    <Screen>
      <div class="row m-md-5 p-4 bg-white rounded shadow-lg">
        <div class="col-md-12">
          <div
            id="item_header"
            class="bg-dark text-white rounded p-2 my-4 text-uppercase font-weight-bold"
          >
            Add Item
          </div>
        </div>

        <div class="col-md-4">
          <strong class="text-muted">Item Image: </strong>
          <img
            src={no_image}
            id="item_imageview"
            alt="..."
            class="img-thumbnail"
          ></img>
        </div>

        <div class="col-md-8">
          <div class="form-row">
            <div class="form-group col-md-8">
              <strong class="text-muted">Item Name: </strong>
              <input
                type="text"
                class="form-control"
                id="item_name_input"
                aria-describedby="emailHelp"
                placeholder="Item Name"
                onreset="retrieveMe()"
              ></input>
            </div>

            <div class="form-group col-md-4">
              <strong class="text-muted">ID: </strong>
              <input
                type="number"
                id="id_input"
                class="form-control"
                disabled="true"
              ></input>
            </div>

            <div class="form-group col-md-4">
              <strong class="text-muted">Category: </strong>
              <select class="form-control" id="category_input">
                <option value="Shirt" selected="true">
                  Shirt
                </option>
                <option value="Pant">Pant</option>
                <option value="Shoe">Shoe</option>
              </select>
            </div>

            <div class="form-group col-md-4">
              <strong class="text-muted">Made in: </strong>
              <select class="form-control" id="origin_input">
                <option value="Vietnam" selected="true">
                  Vietnam
                </option>
                <option value="China">China</option>
                <option value="USA">USA</option>
              </select>
            </div>

            <div class="form-group col-md-4">
              <strong class="text-muted">Price($): </strong>
              <input
                type="number"
                id="price_input"
                class="form-control"
                step="1"
                max="9999"
                min="1"
                value="10"
              ></input>
            </div>

            <div class="form-group col-md-8">
              <strong class="text-muted">Description: </strong>
              <textarea
                name=""
                cols="30"
                rows="10"
                class="form-control"
                id="des_textarea"
              >
                Size: W:40cm x H:60cm
              </textarea>
            </div>

            <div class="form-group col-md-4">
              <strong class="text-muted">Actions: </strong>

              <label class="btn btn-info rounded-pill p-2 btn-block font-weight-bold">
                Change Image
                <input
                  type="file"
                  accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                  id="item_imagepicker"
                  onchange="pickImage(event)"
                  hidden
                ></input>
              </label>

              <button
                type="button"
                class="btn btn-success rounded-pill py-2 btn-block font-weight-bold"
                id="add_item_btn"
                onclick="checkValidOnAddItem()"
                hidden="true"
              >
                Add Item
              </button>

              <button
                type="button"
                class="btn btn-success rounded-pill py-2 btn-block font-weight-bold"
                id="update_item_btn"
                onclick="checkValidOnUpdateItem()"
                hidden="true"
              >
                Update Item
              </button>

              <label
                type="button"
                class="btn btn-danger rounded-pill py-2 btn-block font-weight-bold"
                id="cancel_btn"
                onclick="cancel()"
                hidden="true"
              >
                Cancel
              </label>

              <label
                type="button"
                class="btn btn-danger rounded-pill py-2 btn-block font-weight-bold"
                id="cancel_btn"
                onclick="uploadImageUsingS3()"
              >
                S3 Upload
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="row m-md-5">
        <div class="col-lg-12 p-4 bg-white rounded shadow-sm ">
          {/* <div class="table-responsive">
            <table class="table" id="item_table">
              <thead>
                <tr>
                  <th scope="col" class="border-0 bg-light">
                    <div class="p-2 px-3 text-uppercase">ID</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="p-2 px-3 text-uppercase">Product</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Price</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase"></div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase"></div>
                  </th>
                </tr>
              </thead>
              <tbody id="item_table_body"></tbody>
            </table>
          </div> */}
          {/* <Table
            _data={getAllItemApi.data}
            _headers={["ID", "Product", "", ""]}
            _component={AdminTableItem}
          ></Table> */}
        </div>
      </div>
    </Screen>
  );
};

export default AdminScreen;
