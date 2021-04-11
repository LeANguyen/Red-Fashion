import React, { useState, useEffect } from "react";
import CardList from "../components/card/CardList";
import Page from "../components/temp/Page";

import itemApi from "../api/itemApi";
import useApi from "../hooks/useApi";
import Button from "../components/common/Button";
import AppLoader from "../components/common/AppLoader";
import ItemCard from "../components/card/ItemCard";
import AppCarousel from "../components/common/AppCarousel";

import carousel1 from "../assets/1.jpg";
import carousel2 from "../assets/2.jpeg";
import carousel3 from "../assets/3.jpg";
import ad from "../assets/ad.mp4";
import Space from "../components/common/Space";
import colors from "../config/colors";
const HomePage = () => {
  const [items, setItems] = useState([]);

  const getItemsApi = useApi(itemApi.getItems);

  const getItemsHandling = async (skip, limit) => {
    const newItems = [...items];
    const response = await getItemsApi.request(skip, limit);
    if (response.ok) {
      setItems(newItems.concat(response.data));
    }
  };

  useEffect(() => {
    getItemsHandling(items.length, 1);
  }, []);

  return (
    <div>
      <Page>
        {/* banner carousel */}
        <AppCarousel
          _id="banner"
          _images={[carousel1, carousel3]}
        ></AppCarousel>

        {/* item card list */}
        <div style={{ backgroundColor: colors.dark }}>
          <div className="container">
            <br></br>
            <br></br>
            <h2
              className="text-orange text-center"
              style={{ fontWeight: "bold" }}
            >
              LATEST ITEMS
            </h2>
            {getItemsApi.success && items.length !== 0 && (
              <>
                <CardList _data={items} _component={ItemCard}></CardList>
                <br></br>
                <Button
                  _onClick={() => {
                    getItemsHandling(items.length, 1);
                  }}
                  _block
                  _className={`btn-orange btn-block`}
                >
                  Load More
                </Button>
              </>
            )}
            {getItemsApi.loading && <AppLoader></AppLoader>}
            <br></br>
            <br></br>
          </div>
        </div>

        {/* About us section */}
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <video width="100%" height="100%" controls className="rounded">
                <source src={ad} type="video/mp4"></source>
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-lg-4 bg-dark rounded shadow-lg">
              <div className="bg-light rounded-bottom py-1">
                <h4 className="text-center text-danger">About Us</h4>
              </div>
              <br></br>
              <p className="text-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <br></br>
          <br></br>
        </div>
      </Page>
    </div>
  );
};

export default HomePage;
