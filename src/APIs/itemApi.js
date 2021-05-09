import client from "./client";

export const createItem = (item, onUploadProgress) => {
  const data = new FormData();
  data.append("item_name", item.item_name);
  data.append("price", item.price);
  data.append("category", item.category);
  data.append("origin", item.origin);
  data.append("description", item.description);

  // item.images.forEach((image, index) =>
  //   data.append("images", {
  //     name: "image" + index,
  //     type: "image/jpeg",
  //     uri: image
  //   })
  // );

  // client.api.post(item, data, {
  //   onUploadProgress: progress => {
  //     console.log(progress.loaded / progress.total);
  //     onUploadProgress(progress.loaded / progress.total);
  //   }
  // });

  return client.api.post(`/item/`, item);
};

export const getItems = (skip, limit) =>
  client.api.get(`/items?skip=${skip}&limit=${limit}`);

export const getItemsByCategory = category =>
  client.api.get(`items/category/${category}`);

export const getLatestItem = () => client.api.get("/latest_item");

export const getItemById = id => client.api.get(`item/id/${id}`);

export const deleteItem = id => client.api.delete(`item/id/${id}`);

export const updateItem = (id, name, category, origin, price, description) =>
  client.api.put(`item/id/${id}`, {
    item_name: name,
    category: category,
    origin: origin,
    price: price,
    description: description
  });

export const getItemsByName = name => client.api.get(`items/name/${name}`);

export const uploadImage = formData => {
  return client.api.post(`/image`, formData);
};

export const searchItems = (
  itemName,
  category,
  origin,
  priceFrom,
  priceTo,
  skip,
  limit
) =>
  client.api.post(`items/search?skip=${skip}&limit=${limit}`, {
    itemName,
    category,
    origin,
    priceFrom,
    priceTo
  });
