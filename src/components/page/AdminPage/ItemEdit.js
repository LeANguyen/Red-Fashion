import React, { useState, useEffect } from "react";
import * as itemApi from "../../../APIs/itemApi";
import useApi from "../../../hooks/useApi";
import Input from "../../common/Input";
import Dropdown from "../../common/Dropdown";
import Button from "../../common/Button";
import no_image from "../../../assets/no_image.jpg";
import Container from "../../common/Container";
import { useHistory, useLocation } from "react-router-dom";
import querySearch from "stringquery";
import baseURL from "../../../APIs/baseURL";
import Space from "../../common/Space";
import NumberInput from "../../common/NumberInput";
import DropdownItem from "../../common/DropdownItem";

const ItemEdit = () => {
  const history = useHistory();
  const location = useLocation();
  const query = querySearch(location.search);
  const idQ = query.id;
  const getItemByIdApi = useApi(itemApi.getItemById);
  const createItemApi = useApi(itemApi.createItem);
  const updateItemApi = useApi(itemApi.updateItem);
  const uploadImageApi = useApi(itemApi.uploadImage);
  const getLatestItemApi = useApi(itemApi.getLatestItem);

  const [name, setName] = useState("TEST ITEM");
  const [category, setCategory] = useState("Shirt");
  const [origin, setOrigin] = useState("Vietnam");
  const [price, setPrice] = useState("100");
  const [description, setDescription] = useState("TEST DESC");
  const [imgSrc, setImgSrc] = useState(no_image);

  useEffect(() => {
    if (idQ) {
      getItemByIdHandling(idQ);
    }
  }, [idQ]);

  const pickImage = event => {
    const file = event.target.files[0];
    if (file.size > 100 * 1024) {
      alert("Sorry, the max allowed size for images is 100KB");
    } else {
      setImgSrc(URL.createObjectURL(file));
    }
  };

  const updateItemHandling = async (...args) => {
    const response = await updateItemApi.request(...args);
    if (response.ok) {
      await uploadImageHandling(imgSrc, "item" + idQ + ".png");
    } else {
      alert("Error update item!!!");
    }
  };

  const getItemByIdHandling = async (...args) => {
    const response = await getItemByIdApi.request(...args);
    if (response.ok) {
      setName(response.data[0].item_name);
      setCategory(response.data[0].category);
      setPrice(response.data[0].price);
      setOrigin(response.data[0].origin);
      setImgSrc(baseURL + "/images/store/item-" + response.data[0].id + ".png");
    } else {
      alert("FFF");
    }
  };

  const createItemHandling = async (...args) => {
    const item = {
      item_name: args[0],
      price: args[1],
      category: args[2],
      origin: args[3],
      description: args[4]
    };
    const response = await createItemApi.request(item);
    if (response.ok) {
      await getLatestItemHandling();
    } else {
      alert("Create Item Failed");
    }
  };

  const getLatestItemHandling = async () => {
    const response = await getLatestItemApi.request();
    if (response.ok) {
      const imgName = "item" + response.data[0]["max"] + ".png";
      await uploadImageHandling(imgSrc, imgName);
    } else {
      alert("getLatestItemHandling Failed");
    }
  };

  const uploadImageHandling = async (imgSrc, imgName) => {
    // data => blob => file
    const data = await fetch(imgSrc);
    const blob = await data.blob();
    const file = await new File([blob], imgName, blob);

    // send form data
    const formData = new FormData();
    formData.append("image_file", file);
    const response = await uploadImageApi.request(formData);
    if (response.ok) {
      alert("uploadImageHandling Succ");
      history.go(0);
    } else {
      alert("uploadImageHandling Failed");
    }
  };

  const rowSpace = (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );

  return (
    <div class="row">
      <div class="col-md-4">
        <strong class="text-muted text-lg">Item's Image:</strong>
        <img
          src={imgSrc}
          id="item_imageview"
          alt="..."
          class="img-thumbnail"
        ></img>
        <div className="d-block d-md-none">
          <br></br>
          <br></br>
        </div>
      </div>
      <div class="col-md-8">
        <div className="row">
          <div class="col-md-8">
            <h5 class="text-muted text-lg">Item's Name: </h5>
            <Input
              _wrapperClass="input-1"
              _placeholder="Item's Name"
              _onChange={event => setName(event.target.value)}
              _value={name}
            ></Input>
          </div>
          <div className="d-block d-md-none">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div class="col-md-4">
            <h5 class="text-muted font-weight-bold">ID:</h5>
            <Input _wrapperClass="input-1" _value={idQ}></Input>
          </div>
        </div>

        <br></br>

        <div className="row">
          <div class="col-md-4">
            <h5 class="text-muted font-weight-bold">Category:</h5>
            <Dropdown
              _text={category}
              _className="btn-pink d-block"
              _displayToggle
              _iconName="black-tie"
              _dropdownHover
            >
              <DropdownItem _onClick={() => setCategory("Shirt")}>
                Shirt
              </DropdownItem>
              <DropdownItem _onClick={() => setCategory("Pant")}>
                Pant
              </DropdownItem>
              <DropdownItem _onClick={() => setCategory("Shoe")}>
                Shoe
              </DropdownItem>
            </Dropdown>
          </div>
          <div className="d-block d-md-none">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>

          <div class="col-md-4">
            <h5 class="text-muted font-weight-bold">Origin:</h5>
            <Dropdown
              _text={origin}
              _className="btn-pink btn-block rounded"
              _displayToggle
              _iconName="star"
              _dropdownClick
            >
              <DropdownItem _onClick={() => setCategory("Vietnam")}>
                Vietnam
              </DropdownItem>
              <DropdownItem _onClick={() => setCategory("China")}>
                China
              </DropdownItem>
              <DropdownItem _onClick={() => setCategory("USA")}>
                USA
              </DropdownItem>
            </Dropdown>
          </div>
          <div className="d-block d-md-none">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>

          <div class="col-md-4">
            <h5 class="text-muted font-weight-bold">Price($):</h5>
            <Input
              _inputType="number"
              _maxLength={2}
              _width={25}
              _wrapperClass="input-1 w-100"
              _onChange={event => setPrice(event.target.value)}
              _value={price}
            ></Input>
            {/* <NumberInput></NumberInput> */}
          </div>
        </div>

        <br></br>

        <div className="row">
          <div class="col-md-8">
            <h5 class="text-muted font-weight-bold">Description:</h5>
            <textarea
              name=""
              cols="30"
              rows="10"
              class="form-control"
              id="des_textarea"
              onChange={event => setDescription(event.target.value)}
            >
              Size: W:40cm x H:60cm
            </textarea>
          </div>

          <div class="col-md-4">
            <br></br>
            <label class="btn-blue btn-block text-center">
              <i className="fa fa-picture-o"></i>
              <Space></Space>
              <Space></Space>
              Change Image
              <input
                type="file"
                accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                id="item_imagepicker"
                onChange={event => pickImage(event)}
                hidden
              ></input>
            </label>
            {idQ ? (
              <>
                <br></br>
                <Button
                  _className="btn-yellow btn-block"
                  _onClick={() =>
                    updateItemHandling(
                      idQ,
                      name,
                      category,
                      origin,
                      price,
                      description
                    )
                  }
                  _iconName="pencil"
                >
                  Update Item
                </Button>
                <br></br>
                <Button
                  _className="btn-red btn-block"
                  _iconName="times"
                  _onClick={() => {
                    history.push("/admin");
                    history.go(0);
                  }}
                >
                  Cancel
                </Button>
                <br></br>
              </>
            ) : (
              <>
                <br></br>
                <Button
                  _className="btn-green btn-block"
                  _onClick={() => {
                    createItemHandling(
                      name,
                      price,
                      category,
                      origin,
                      description
                    );
                  }}
                  _loading={createItemApi.loading}
                  _iconName="pencil"
                >
                  Add Item
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemEdit;
