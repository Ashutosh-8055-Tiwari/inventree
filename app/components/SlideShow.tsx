import Image from "next/image";
import image1 from "../../public/assets/bed37a8b5334aa21a4b48905211e3706.png";
import image2 from "../../public/assets/80bab81a5ec38c02457718dbf912921a.png";
import image3 from "../../public/assets/ea227da9bf7e88e6f3313b01e99cef46.png";
import image4 from "../../public/assets/fe24bfc23688ddc3ccb24d627df6f3ce.png";
import image5 from "../../public/assets/35386d97399aeee2c5862212ecbf9c04.jpg";
import image6 from "../../public/assets/f50e612675a38957a2742d20a95d808d.png";
import image7 from "../../public/assets/d3ab61a7a52e0b42b22fe6e7bd65182f.png";
import image8 from "../../public/assets/086388899abad382ca5da12149ff7492.jpg";
import image9 from "../../public/assets/106a7ad305ab8930540f3cac90ddb496.png";
import image10 from "../../public/assets/418d24ef0d3fd365ac02c6dc32f86ba2.png";

export default function Widget() {
    return (
        <div className="flex overflow-hidden bg-[#D7E1E9] py-5 h-[82px]">
            <div id="carousel" className="flex animate-scroll space-x-10">
            <Image src={image1} alt="Samsung" width={100} height={100} />
                <Image src={image2} alt="Microsoft" width={100} height={100} />
                <Image src={image3} alt="Dell" width={100} height={100} />
                <Image src={image4} alt="Apple" width={100} height={100} />
                <Image src={image5} alt="HP" width={100} height={100} />
                <Image src={image6} alt="Microsoft" width={100} height={100} />
                <Image src={image7} alt="Lenovo" width={100} height={100} />
                <Image src={image8} alt="Asus" width={100} height={100} />
                <Image src={image9} alt="AMD" width={100} height={100} />
                <Image src={image10} alt="BenQ" width={100} height={100} />
            </div>
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                .animate-scroll {
                    animation: scroll 17s linear infinite;
                }
            `}</style>
        </div>
    );
}
