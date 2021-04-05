import client from "./client";

const createItem = ({ item, onUploadProgress }) => {
  const data = new FormData();
  data.append("item_name", item.item_name);
  data.append("price", item.price);
  data.append("category", item.category);
  data.append("origin", item.origin);
  data.append("description", item.description);

  item.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image
    })
  );

  client.api.post(item, data, {
    onUploadProgress: progress => {
      console.log(progress.loaded / progress.total);
      onUploadProgress(progress.loaded / progress.total);
    }
  });
};

const getItems = (skip, limit) =>
  client.api.get(`/items/skip/${skip}/limit/${limit}`);

const getItemsByCategory = category =>
  client.api.get(`items/category/${category}`);

const getLatestItem = () => client.api.get("/current_item");

const getItemById = id => client.api.get(`item/id/${id}`);

const deleteItem = id => client.api.delete(`item/id/${id}`);

const updateItem = id => client.api.put(`item/id/${id}`);

const getItemsByName = name => client.api.get(`items/name/${name}`);

export default {
  createItem,
  getItems,
  getItemsByCategory,
  getLatestItem,
  getItemById,
  deleteItem,
  updateItem,
  getItemsByName
};
