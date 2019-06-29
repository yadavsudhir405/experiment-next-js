import React from 'react';
import { render } from "@testing-library/react";

import Index from '../index';
import { withLayout } from "../../src/components";

jest.mock('../../src/modules/home', () => ({
    Home: () => ()=> <div>This is dummy page2</div>
}));

jest.mock('../../src/components', () => ({
    withLayout: () => () =><div>This id dummy Layout</div>

}));

describe('Index Page', () => {
    it('should render the index page', () => {
        const IndexPage = withLayout(Index);
        const  container  =  render(<IndexPage />);

        expect(container).toMatchSnapshot();
    });
});
