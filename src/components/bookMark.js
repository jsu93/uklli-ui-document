import React, { Component } from "react";
import propTypes from "prop-types";
import { Link, NavLink, Route } from "react-router-dom";

const CustomLinkExample = () => (
  <Router>
    <div>
      <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
      <OldSchoolMenuLink to="/about" label="About" />
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

const CustomLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div className={match ? "mark-item bgcolor" : "mark-item"}>
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
);

export default class BookMark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollState: 0,
      active: 0
    };
  }

  route(label, to) {
    return { label, to };
  }

  componentDidMount() {
    PR.prettyPrint();
  }

  render() {
    var { scrollState } = this.state;
    var routes = [
      ["头像选择组件", "avatar"],
      ["随机数字组件", "ball"],
      ["button组件", "button"],
      ["IconInput组件", "iconInput"],
      ["BannerCarousel组件", "bannerCarousel"],
      ["日期变换组件", "dataHelp"],
      ["日期选择组件", "datetimePicker"],
      ["下拉选框", "dropdownMenu"],
      ["Input组件", "input"],
      ["Iframe组件", "iframe"],
      ["MultipleHelper组件", "multipleHelper"],
      ["PagingBtn组件", "pagingBtn"],
      ["Popover组件", "popover"],
      ["RadioHelper组件", "radioHelper"],
      ["小数输入框组件", "rateInput"],
      ["switchButton组件", "switchButton"],
      ["TableBody组件", "tableBody"],
      ["TableHeader组件", "tableHeader"],
      ["Tabs组件", "tabs"],
      ["TipPanel组件", "tipPanel"],
      ["Toast组件(提示标签)", "toast"],
      ["Countdown组件", "countdownBg"],
      ["DescHelper组件", "descHelper"],
      ["ConditionHelper组件", "conditionHelper"],
      ["FormHelper组件", "formHelper"],
      ["FormLayout组件", "formLayout"],
      ["Loading组件", "LoadingDOM"],
      ["Ranger组件", "ranger"],
      ["tipButton组件", "tipButton"],
      ["Modal组件", "modal"],
      ["recordItemsHelper组件", "recordItemsHelper"]
    ];
    return (
      <div>
        <div
          className={
            "container-bookmark" +
            (scrollState == 1 ? " container-bookmark2" : "")
          }
          id="BookMark"
        >
          <div className="mark-items">
            <CustomLink label="概览" to="/" activeOnlyWhenExact={true} />
            {routes.map((item, idx) => (
              <CustomLink key={idx} label={item[0]} to={"/" + item[1]} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
