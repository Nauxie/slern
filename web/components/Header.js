import TypingCustom from './TypingCustom'
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Typing from 'react-typing-animation';


const Header = () => (
    <div className='outestdiv'>
        <div className='outerdiv'>
            <div className='inner_outerdiv'>
                <ul className='titlelogo'>
                    <Link href='/'><a><li>slern.io</li></a></Link>
                </ul>
                <ul className='navigation'>
                    <button className='header_button'><Link href='/about'><a><li>About</li></a></Link></button>
                    <button className='header_button'><Link href='/signin'><a><li>Sign In</li></a></Link></button>
                </ul>
            </div>
        </div >

        <style jsx>{`
        
        .header_button {
            background: white;
            box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.3);
            color: #62ADEF;
            font-size: 20px;
            font-weight: 500;
            align-items: center;
            border-radius: 21px;
            margin
            width: 120px;
            font-weight: bold;
            margin-left: 10px;
        }
        .header_button:hover {
            background: #D3DBE1;
        }
        .header_button a{
            color: #4DA6F4;
        }
        .outerdiv {
            width: 100%;
            height: 80px;
            display: block;
            font-family: Arial; 
            font-size: 20px;
            
        }       
        .inner_outerdiv {
            width: 1000px;
            height: 100%;
            display: block;
            margin: 0 auto;
        }

        .titlelogo {
            color: #9B85F6;
            font-weight: bold;
            font-family: 'Arial';
            height: 100%;
            display: table;
            float: left;
            list-style-type: none;


        }
        .titlelogo a{
            height: 100%;
            display: table;
            float: right;
            font-size: 30px;
            color: #4DA6F4;
          
        }
        .navigation {
            float: right;
            height: 100%;
            color: #9B85F6;
            font-family: 'Arial';
            list-style-type: none;
        }
        .navigation a{
            height: 100%;
            display: table;
            float: left;
            padding: 0px 20px;
        }
        a {
            text-decoration: none;
            font-family: 'Arial';
          }


        `}</style>
    </div >
);

export default Header;