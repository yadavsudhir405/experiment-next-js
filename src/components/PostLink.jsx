import Link from 'next/Link';

const PostLink = props => (
  <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
    <a href="_blank">{props.title}</a>
  </Link>
);

export default PostLink;
