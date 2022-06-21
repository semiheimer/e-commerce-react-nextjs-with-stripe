import { uiActions } from "../ui-slice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "Sending",
        message: "Sending cart data!",
        isLoading: true,
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-4c5ec-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            subTotalPrice: cart.subTotalPrice,
          }),
        }
      );
      if (!response.ok) {
        dispatch(
          uiActions.showNotification({
            status: "Error",
            message: "Sending cart data failed!",
            isLoading: false,
          })
        );
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "Success",
          message: "Sent cart data successfully!",
          isLoading: false,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "Error",
          message: "Sending cart data failed!",
          isLoading: false,
        })
      );
    }
  };
};
