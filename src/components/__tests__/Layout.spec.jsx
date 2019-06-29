import React from 'react'
import {render} from "@testing-library/react";

import { withLayout }from "../index";

jest.mock('../Clock', () => () => <div>This is dummy Clock</div>);
jest.mock('../Navbar', () => () => <div>This is dummy Navbar</div>);

describe('WithLayout', () => {
   it('should match the snapshot', () => {
       const dummyComponent = () => <div>This is dummy Component</div>;
       const DummyComponent = withLayout(dummyComponent);

       const {container} = render(<DummyComponent dummyProps="dummy" />);

       expect(container).toMatchSnapshot();
   })
});
