import Image from 'next/image';

interface TitleProps {
    title: string;
    titlecustom: string;
    align?: string;
}

const Title: React.FC<TitleProps> = ({ title, titlecustom, align }) => {
    return ( 
        <div className={`flex flex-col ${align}`}>
            <h2 className="font-medium text-2xl sm:text-[40px] sm:leading-[56px] mb-1"><span className="mr-2 bg-gradient-to-b from-[#FD5001] to-[#FFB901] text-transparent bg-clip-text">{titlecustom}</span>{title}</h2>
            <Image className=''
                src="/images/border.svg"
                alt="MicroFin"
                width={123}
                height={10}
            ></Image>
        </div>
     );
}

export default Title;