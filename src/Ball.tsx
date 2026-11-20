interface Props {
    number: number;
}

const Ball = ({ number }: Props) => {
    return (
        <div className='ball'>
            <p>{number}</p>
        </div>
    );
};

export default Ball;