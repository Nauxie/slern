import TypingCustom from './TypingCustom'
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Typing from 'react-typing-animation';


const Header = () => (
    <div className='outestdiv'>
        <div className='outerdiv'>
            <div className='inner_outerdiv'>
                <ul className='titlelogo'>
                    <Link href='/'><a><li>slern</li></a></Link>
                </ul>
                <ul className='navigation'>
                    <Link href='/about'><a className='right_link'><li>about</li></a></Link>
                    <Link href='/signin'><a className='right_link'><li>sign in</li></a></Link>
                </ul>
            </div>
        </div >

        <style jsx>{`
    
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
            font-weight: 900;
          
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
            padding: 0px 10px;      
            
        }
        .navigation li{
            border-bottom: 1px solid #C0C9D0;
            padding-bottom: 1px; 
            font-size: 15px;
            
        }
        .navigation li:hover{
            border-bottom: 1px solid #4DA6F4;
            padding-bottom: 1px; 
            
        }
        .right_link {
            color: #4DA6F4;
            font-size: 20px;
        }
        a {
            text-decoration: none;
            font-family: 'Arial';
          }


        `}</style>
    </div >
);

export default Header;