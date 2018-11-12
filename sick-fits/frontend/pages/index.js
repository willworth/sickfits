import Link from 'next/link';
const Home = props => (
   <div>
       <p>This is the homepage</p>
       <Link href="/sell">
        <a>Sell!</a>
       </Link>
       
   </div>
);

export default Home;