import { createStore, useStore } from "@/1-SubscriptionStore/store";
import { Box } from "@/Box";

export const StoreWithSelectorExample = () => {
  return (
    <Box big>
      2-StoreSelector
      <Foo />
      <Bar />
    </Box>
  );
};

const store = createStore({ count1: 0, count2: 0 });

const Foo = () => {
  const [state, setState] = useStore(store);

  return <Box>Foo: </Box>;
};

const Bar = () => {
  const [state, setState] = useStore(store);

  return (
    <Box>
      Bar:
      <button onClick={() => {}}>increase</button>
    </Box>
  );
};
