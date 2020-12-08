import useClient from "./useClient";

// const item = "/item";
// const allItem = "/items";
// const allItemByCategory = "/items/category/Shirt";
// const currentItem = "/current_item";
// const itemById = "/item/id/1";
// const allItemByName = "/items/name/Sh";

const useItemApi = () => {
  const client = useClient();

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

  const getAllItem = () => client.api.get("/items");

  const getAllItemByCategory = category =>
    client.api.get(`items/category/${category}`);

  const getCurrentItem = () => client.api.get("/current_item");

  const getItemById = id => client.api.get(`item/id/${id}`);

  const deleteItem = id => client.api.delete(`item/id/${id}`);

  const updateItem = id => client.api.put(`item/id/${id}`);

  const getAllItemByName = name => client.api.get(`items/name/${name}`);

  return {
    createItem,
    getAllItem,
    getAllItemByCategory,
    getCurrentItem,
    getItemById,
    deleteItem,
    updateItem,
    getAllItemByName
  };
};

export default useItemApi;
