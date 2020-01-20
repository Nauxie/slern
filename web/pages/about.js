import Header from '../components/Header'

export default function About() {
    return (
        <div className='king'>
            <Header />
            <p className='centertext'>This is the about page.</p>

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
        .centertext {
            text-align: center;
        }
        `}</style>

        </div>
    );
}