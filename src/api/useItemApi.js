import useClient from "./useClient";

const item = "/item";
const allItem = "/items";
const allItemByCategory = "/items/category/Shirt";
const currentItem = "/current_item";
const itemById = "/item/id/1";
const allItemByName = "/items/name/Sh";

const useItemApi = ({}) => {
  const client = useClient();

  const createItem = ({ itemData, onUploadProgress }) => {
    const data = new FormData();
    data.append("item_name", itemData.item_name);
    data.append("price", itemData.price);
    data.append("category", itemData.category);
    data.append("origin", itemData.origin);
    data.append("description", itemData.description);

    itemData.images.forEach((image, index) =>
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

  const getAllItem = () => client.api.get(allItem);

  const getAllItemByCategory = () => client.api.get(allItemByCategory);

  const getCurrentItem = () => client.api.get(currentItem);

  const getItemById = () => client.api.get(itemById);

  const deleteItem = () => client.api.delete(itemById);

  const updateItem = () => client.api.put(itemById);

  const getAllItemByName = () => client.api.get(allItemByName);

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
