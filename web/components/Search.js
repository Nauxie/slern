import TypingCustom from '../components/TypingCustom'

const Header = () => (
    <div id="cover">
        <form method="get" action="">
            <div class="tb">
                <div class="td">
                    <input type="text" placeholder="Try 'Regular expressions'..."></input>
                </div>
            </div>
        </form>
        <style jsx>{`
        .tb
        {
            display: table;
            width: 100%;
            
        }
        .td
        {
            display: table-cell;
            vertical-align: middle;
        }
        
        input
        {
            color: #fff;
            padding: 0;
            margin: 0;
            border: 0;
            background-color: transparent;
            outline: none;
        }
        
        #cover
        {
            position: absolute;
            top: 40%;
            left: 0;
            right: 0;
            width: 1050px;
            padding: 35px;
            margin: -83px auto 0 auto;
            background-color: #529DDE;
            border-radius: 20px;
            box-shadow: 0 10px 40px #D4E8F9, 0 0 0 20px #83C0F6;
            transform: scale(0.5);
        }
        
        form
        {
            height: 96px;
        }
        
        input[type="text"]
        {
            width: 100%;
            height: 96px;
            font-size: 60px;
            line-height: 1;
        }
        
        input[type="text"]::placeholder
        {
            color: #C1DDF6;
        }
        
        #s-cover
        {
            width: 1px;
            padding-left: 35px;
        }   
        
        button
        {
            position: relative;
            display: block;
            width: 84px;
            height: 96px;
            cursor: pointer;
        }
        
        #s-circle
        {
            position: relative;
            top: -8px;
            left: 0;
            width: 43px;
            height: 43px;
            margin-top: 0;
            border-width: 15px;
            border: 15px solid #fff;
            background-color: transparent;
            border-radius: 50%;
            transition: 0.5s ease all;
        }
        
        button span
        {
            position: absolute;
            top: 68px;
            left: 43px;
            display: block;
            width: 45px;
            height: 15px;
            background-color: transparent;
            border-radius: 10px;
            transform: rotateZ(52deg);
            transition: 0.5s ease all;
        }
        
        button span:before, button span:after
        {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 45px;
            height: 15px;
            background-color: #fff;
            border-radius: 10px;
            transform: rotateZ(0);
            transition: 0.5s ease all;
        }
        
        #s-cover:hover #s-circle
        {
            top: -1px;
            width: 67px;
            height: 15px;
            border-width: 0;
            background-color: #fff;
            border-radius: 20px;
        }
        
        #s-cover:hover span
        {
            top: 50%;
            left: 56px;
            width: 25px;
            margin-top: -9px;
            transform: rotateZ(0);
        }
        
        #s-cover:hover button span:before
        {
            bottom: 11px;
            transform: rotateZ(52deg);
        }
        
        #s-cover:hover button span:after
        {
            bottom: -11px;
            transform: rotateZ(-52deg);
        }
        #s-cover:hover button span:before, #s-cover:hover button span:after
        {
            right: -6px;
            width: 40px;
            background-color: #fff;
        }
        `}</style>
    </div>
);


export default Header;
