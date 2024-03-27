import { SubscriptionStoreExample } from "@/1-SubscriptionStore/example";
import { StoreWithSelectorExample } from "@/2-StoreWithSelector/example";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <SubscriptionStoreExample />
      <StoreWithSelectorExample />
    </div>
  );
}
