import { withRouter } from 'next/router';
import withLayout from "../src/components/layout";

const Post = withRouter((props) => (<h1>{props.router.query.title}</h1>));

export default withLayout(Post);
