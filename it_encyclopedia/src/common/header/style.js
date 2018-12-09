import styled from "styled-components";
import logoPic from "../../statics/logo.png";
export const HeaderWrapper = styled.div`
  position: relatice;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({ href: "/" })`
  position: absolute;
  top: 10;
  left: 0:
  display: block;
  width:100px;
  height: 58px;
  background:url(${logoPic});
`;
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin-top: 0;
  margin-left: 200px;
  padding-right: 180px;
  box-sizing: border-box;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  coloe: #333;

  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #086a87;
  }
`;
export const SearchWrapper = styled.div`
  float: left;
  position: relative;

  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "Search"
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  padding: 0 35px 0 20px;
  margin-left: 20px;
  box-sizing: border box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {    //同级的要加&
    width: 250px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 250px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 13px;
  margin-right: 18px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #0a2229;
  font-size: 14px;
  &.reg {
    color: #086a87;
  }
  &.writting {
    color: #fff;
    background: #086a87;
  }
`;
