import { describe ,it, expect, beforeEach} from "vitest";

import { render, screen } from "@testing-library/react";

import Flags from "./Flags";

describe("Flags",()=> {

    beforeEach( () =>{
        render(<Flags />);
    })
    it("should be flags in the document", () => {
        const img = screen.getByAltText("ca")
        expect(img).toBeInTheDocument()
    })
})