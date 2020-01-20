import Link from 'next/link';
import TypingCustom from '../components/TypingCustom'
import Header from '../components/Header'
import Search from '../components/Search'

const Index = () => (
    <div className='king'>
        <Header />
        <div className='tagline'>
            <p>
                <span className='keyword'>for</span> <span className='variable'>cs_students</span> <span className='keyword'>by</span> <span className='variable'>cs_students</span>
            </p>

        </div>
        <Search />


        <style jsx>{`
         .king {
            background: rgb(225,225,246);
            background: linear-gradient(180deg, rgba(225,225,246,1) 0%, rgba(155,238,255,1) 100%);
            background-color:#ccc;
            position:fixed;
            width:100%;
            height:100%;
            top:0px;
            left:0px;
            z-index:1000;
        }
        .tagline {
            text-align: center;
            padding-bottom: 50px;
            color: #486491;
            font-size: 40px;
            font-family: Courier; 
        }
        .keyword {
            font-weight: 700;
            color: #5A52FF;
        }
        `}</style>

    </div>
);

export default Index;