import { createStore, useStore } from "@/1-SubscriptionStore/store";
import { Box } from "@/Box";

export const SubscriptionStoreExample = () => {
  return (
    <Box big>
      SubscriptionStore
      <Foo />
      <Bar />
    </Box>
  );
};

const store = createStore({ count: 1 });

const Foo = () => {
  const [state, setState] = useStore(store);

  return <Box>Foo: {state.count}</Box>;
};

const Bar = () => {
  const [state, setState] = useStore(store);

  return (
    <Box>
      Bar: {state.count}
      <button onClick={() => setState({ count: state.count + 1 })}>
        increase
      </button>
    </Box>
  );
};
