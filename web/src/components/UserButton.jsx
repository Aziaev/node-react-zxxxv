import {
  Button,
  Icon,
  Intent,
  Menu,
  MenuDivider,
  MenuItem,
  Popover,
  Position,
} from "@blueprintjs/core";
import { push } from "connected-react-router";
import React, { useCallback, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ME_PAGE_ROUTE } from "../pages/Me";
import { appActions } from "../pages/StartPage/store/actions";
import { userSelector } from "../pages/StartPage/store/selectors";

export default function UserButton() {
  const dispatch = useDispatch();
  const { name, verifiedAt } = useSelector(userSelector, shallowEqual) || {};

  const handleProfileClick = useCallback(() => {
    dispatch(push(ME_PAGE_ROUTE));
  }, [dispatch]);

  const handleLogoutClick = useCallback(() => {
    dispatch(appActions.flushUser());
  }, [dispatch]);

  const menuItems = useMemo(
    () => (
      <Menu>
        <MenuItem
          icon={verifiedAt ? "user" : "warning-sign"}
          intent={Intent.WARNING}
          text="Profile"
          onClick={handleProfileClick}
        />
        <MenuDivider />
        <MenuItem icon="log-out" text="Log out" onClick={handleLogoutClick} />
      </Menu>
    ),
    [handleProfileClick, handleLogoutClick, verifiedAt]
  );

  return (
    <Popover content={menuItems} position={Position.BOTTOM_RIGHT}>
      <>
        <Button className="bp3-minimal" icon="user">
          <span>{name}</span>{" "}
          {!verifiedAt && <Icon icon="warning-sign" intent={Intent.WARNING} />}
        </Button>
      </>
    </Popover>
  );
}
