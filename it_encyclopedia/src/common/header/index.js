import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from "./style.js";
const Header = props => {
  //做成无状态组件，性能会比较高
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">Home</NavItem>
        <NavItem className="left">Download</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <NavItem className="right">Login</NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch
              className={props.focused ? "focused" : ""}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            />
          </CSSTransition>
          <i className={props.focused ? "focused iconfont" : "iconfont"}>
            &#xe62a;
          </i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting">
          <i className="iconfont">&#xe608;</i> Write an essay
        </Button>
        <Button className="reg">Sign up</Button>
      </Addition>
    </HeaderWrapper>
  );
};
// class Header extends Component {
//   render() {
//     return (
//       <HeaderWrapper>
//         <Logo />
//         <Nav>
//           <NavItem className="left active">Home</NavItem>
//           <NavItem className="left">Download</NavItem>
//           <NavItem className="right">
//             <i className="iconfont">&#xe636;</i>
//           </NavItem>
//           <NavItem className="right">Login</NavItem>
//           <SearchWrapper>
//             <CSSTransition
//               in={this.props.focused}
//               timeout={200}
//               classNames="slide"
//             >
//               <NavSearch
//                 className={this.props.focused ? "focused" : ""}
//                 onFocus={this.props.handleInputFocus}
//                 onBlur={this.props.handleInputBlur}
//               />
//             </CSSTransition>
//             <i className={this.props.focused ? "focused iconfont" : "iconfont"}>
//               &#xe62a;
//             </i>
//           </SearchWrapper>
//         </Nav>
//         <Addition>
//           <Button className="writting">
//             <i className="iconfont">&#xe608;</i> Write an essay
//           </Button>
//           <Button className="reg">Sign up</Button>
//         </Addition>
//       </HeaderWrapper>
//     );
//   }
// }
const mapStateToProps = state => {
  //state -store
  return {
    focused: state.focused //map the focused of store to props
  };
};
const mapDispathToProps = dispatch => {
  //dispatch deal with actions
  return {
    handleInputFocus() {
      const action = {
        type: "search_focus"
      };
      dispatch(action);
    },
    handleInputBlur() {
      const action = {
        type: "search_blur"
      };
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header);
