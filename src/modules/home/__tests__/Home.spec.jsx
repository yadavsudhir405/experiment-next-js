import React from "react"
import { render } from "@testing-library/react"

import { Home } from "../index";

describe('HomeComponent', () => {
    it('should match the snapshot', () => {
        const {container} = render(<Home />);

        expect(container).toMatchSnapshot();
    });
});
