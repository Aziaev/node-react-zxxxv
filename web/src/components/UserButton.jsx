import {
  Button,
  Menu,
  MenuDivider,
  MenuItem,
  Popover,
  Position,
} from "@blueprintjs/core";
import { push } from "connected-react-router";
import { useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ME_PAGE_ROUTE } from "../pages/Me";
import { appActions } from "../pages/StartPage/store/actions";
import { userSelector } from "../pages/StartPage/store/selectors";

export default function UserButton() {
  const dispatch = useDispatch();

  function handleProfileClick() {
    dispatch(push(ME_PAGE_ROUTE));
  }

  function handleLogoutClick() {
    dispatch(appActions.flushUser());
  }

  const exampleMenu = useMemo(
    () => (
      <Menu>
        <MenuItem icon="user" text="Profile" onClick={handleProfileClick} />
        <MenuDivider />
        <MenuItem icon="log-out" text="Log out" onClick={handleLogoutClick} />
      </Menu>
    ),
    [handleProfileClick, handleLogoutClick]
  );

  const user = useSelector(userSelector, shallowEqual);

  return (
    <Popover content={exampleMenu} position={Position.BOTTOM_RIGHT}>
      <Button className="bp3-minimal" icon="user" text={user.name} />
    </Popover>
  );
}
