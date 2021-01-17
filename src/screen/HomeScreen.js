import React, { useState, useEffect } from "react";
import Screen from "../components/Screen";
import Video from "../components/Video";
import Carousel from "../components/Carousel";
import CardList from "../components/CardList";
import useItemApi from "../api/useItemApi";
import useApi from "../hooks/useApi";
import FormLoader from "../components/form/FormLoader";
import FormButton from "../components/form/FormButton";

const HomeScreen = () => {
  const [currentItemId, setCurrentItemId] = useState();
  const [cardList, setCardList] = useState([]);
  const [endOfList, setEndOfList] = useState(false);

  const itemApi = useItemApi();
  const getAllItemApi = useApi(itemApi.getAllItem);
  const getStartItemApi = useApi(itemApi.getStartItem);
  const getMoreItemApi = useApi(itemApi.getMoreItem);

  const getStartItemApiExtraHandling = async () => {
    const response = await getStartItemApi.request();
    if (response.ok) {
      setCurrentItemId(response.data[response.data.length - 1].id);
      setCardList(response.data);
    }
  };

  const getMoreItemApiExtraHandling = async id => {
    const response = await getMoreItemApi.request(id);
    if (response.ok) {
      if (response.data.length == 0) {
        setEndOfList(true);
      } else {
        let newCardList = [...cardList];
        newCardList = newCardList.concat([...response.data]);
        setCurrentItemId(response.data[response.data.length - 1].id);
        setCardList(newCardList);
      }
    }
  };

  useEffect(() => {
    getStartItemApiExtraHandling();
  }, []);

  return (
    <div>
      <Screen>
        <Carousel></Carousel>
        <div className="bg-dark py-5 px-lg-5">
          <h1 className="text-center">LATEST PRODUCT</h1>
          {cardList !== [] && (
            <>
              <CardList _data={cardList}></CardList>
              <FormButton
                _text={
                  <FormLoader
                    _height={15}
                    _color={"rgb(255, 255, 255)"}
                  ></FormLoader>
                }
                _variant="info"
                _onClick={() => {
                  getMoreItemApiExtraHandling(currentItemId);
                }}
              ></FormButton>
            </>
          )}
          {(getStartItemApi.isLoading || getMoreItemApi.isLoading) && (
            <>
              <FormLoader></FormLoader>
              <p className="text text-info text-center">Fetching Data...</p>
            </>
          )}
        </div>

        <div className="row p-5">
          <div className="col-lg-8">
            <Video></Video>
          </div>
          <div className="col-lg-4 bg-dark shadow-lg rounded text-white">
            <div className="bg-light rounded-bottom">
              <h1 className="text-center" style={{ color: "palevioletred" }}>
                About Us
              </h1>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </Screen>
    </div>
  );
};

export default HomeScreen;
