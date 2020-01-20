import Typing from 'react-typing-animation'

export default function TypingCustom(props) {
    return (
        <Typing>
            <Typing.Delay ms={parseInt(props.delay)} />
            {props.title}
        </Typing>

    );
}