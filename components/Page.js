import Link from "next/link";
import { connect } from "react-redux";
import Clock from "./Clock";
import AddCount from "./AddCount";
import ChangePageSize from "./ChangePageSize";
import CartID from "./CartID";

const Page = ({ title, linkTo, tick }) => (
  <div>
    <h1>{title}</h1>
    <Clock lastUpdate={tick.lastUpdate} light={tick.light} />
    <AddCount />
    <ChangePageSize />
    <CartID />
    <nav>
      <Link href={linkTo}>
        <a>Navigate</a>
      </Link>
    </nav>
  </div>
);

export default connect((state) => state)(Page);
