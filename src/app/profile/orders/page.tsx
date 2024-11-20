import OrdersList, { OrdersListProps } from "@/components/OrdersList";
import { item as ordersMock } from "@/components/OrdersList/mock";
import Profile from "@/pages/Profile";

function getProfileOrdersData() {
  const output = { items: ordersMock };

  return output;
}

export default function Orders() {
  const { items }: OrdersListProps = getProfileOrdersData();

  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  );
}
