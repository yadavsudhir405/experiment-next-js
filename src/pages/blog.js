import PostLink from '../components/PostLink';
import withLayout from "../components/layout";

const Blog = ()=> (
   <div>
       <h1> My Blog</h1>
        <ul>
            <li>
                <PostLink id ="1" title ='Hello Next.js'/>
            </li>
            <li>
                <PostLink id = "2" title ='Hello 1 Next.js'/>
            </li>
            <li>
                <PostLink id = "3" title ='Hello 2 Next.js'/>
            </li>
        </ul>
   </div>
);

export default withLayout(Blog);
