import React from 'react'
import {render} from "@testing-library/react";

import {Navbar} from "../index";



describe('Navbar', () => {
    it('should match the snapshot', () => {

        const {container} = render(<Navbar />);

        expect(container).toMatchSnapshot();
    })
});
