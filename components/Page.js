import Link from "next/link";
import { connect } from "react-redux";
import Clock from "./Clock";
import AddCount from "./AddCount";
import ChangePageSize from "./ChangePageSize";

const Page = ({ title, linkTo, tick }) => (
  <div>
    <h1>{title}</h1>
    <Clock lastUpdate={tick.lastUpdate} light={tick.light} />
    <AddCount />
    <ChangePageSize />
    <nav>
      <Link href={linkTo}>
        <a>Navigate</a>
      </Link>
    </nav>
  </div>
);

export default connect((state) => state)(Page);
