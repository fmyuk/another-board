import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import configureStore from "../../client/configureStore";

export const ssr = (
  state: Parameters<typeof configureStore>[0],
  PageComponent: () => JSX.Element
) => {
  const store = configureStore(state);
  const contents = renderToString(
    <Provider store={store}>
      <PageComponent />
    </Provider>
  );
  const preloadedState = store.getState();
  return { contents, preloadedState };
};