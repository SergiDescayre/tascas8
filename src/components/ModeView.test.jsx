import { describe,it,screen } from "vitest";
import { render,fireEvent } from "@testing-library/react";

import ModeView from "./ModeView";

describe("modeView component", () => {
    it("should render component", () => {
        render(
            <ModeView/>
        )
    })
})