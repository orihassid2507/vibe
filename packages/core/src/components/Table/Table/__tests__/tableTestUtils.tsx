import React from "react";
import * as TableContextModule from "../../context/TableContext/TableContext";
import { TableContext } from "../../context/TableContext/TableContext.types";
import * as TableRowMenuContextModule from "../../context/TableRowMenuContext/TableRowMenuContext";
import { TableRowMenuContext } from "../../context/TableRowMenuContext/TableRowMenuContext.types";
import { RowSizes } from "../TableConsts";

export function mockUseTable() {
  jest.mock("../../context/TableContext/TableContext", () => ({
    __esModule: true,
    ...jest.requireActual("../../context/TableContext/TableContext")
  }));

  jest.spyOn(TableContextModule, "useTable").mockImplementation(
    () =>
      ({
        columns: [],
        emptyState: <div />,
        errorState: <div />,
        size: RowSizes.MEDIUM,
        tableRootRef: { current: null },
        isVirtualized: false,
        markTableAsVirtualized: jest.fn(),
        isScrolled: false,
        setIsScrolled: jest.fn(),
        headRef: { current: null },
        onHeadScroll: jest.fn(),
        virtualizedListRef: { current: null },
        onVirtualizedListScroll: jest.fn()
      } satisfies TableContext)
  );
}

export function mockUseTableRowMenu() {
  jest.mock("../../context/TableRowMenuContext/TableRowMenuContext", () => ({
    __esModule: true,
    ...jest.requireActual("../../context/TableRowMenuContext/TableRowMenuContext")
  }));

  jest.spyOn(TableRowMenuContextModule, "useTableRowMenu").mockImplementation(
    () =>
      ({
        hoveredRowId: null,
        resetHoveredRow: jest.fn(),
        onMouseOverRow: jest.fn(),
        onMouseLeaveRow: jest.fn(),
        onMouseOverRowMenu: jest.fn(),
        onMouseLeaveRowMenu: jest.fn(),
        menuButtonPosition: 0,
        setTableMenuShown: jest.fn(),
        setTableMenuHidden: jest.fn()
      } satisfies TableRowMenuContext)
  );
}
