import React from "react"
import { render } from "@testing-library/react"

import { PostLink } from "../index";

describe('PostLink', () => {
    it('should match the snapshot', () => {
        const {container} = render(<PostLink id="12" title='dummy'/>);

        expect(container).toMatchSnapshot();
    });
});
