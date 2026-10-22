import myImage from "../assets/amr.webp";

function Footer() {
  return (
    <div id="footer" className="w-full min-h-fit flex flex-col bg-[#0d0d0d] text-xl text-[#f7ede2] font-kufam overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch">
        <div className="w-full md:w-1/2 px-6 sm:px-16 pt-10 pb-6 sm:pb-10 flex flex-col justify-start">
          <h1 className="text-[clamp(3rem,12vw,6rem)]">تواصل معي</h1>

          <div className="flex flex-col sm:flex-row flex-wrap mt-8 sm:mt-16 gap-8 sm:gap-16">
            <div>
              <p>ايميل</p>
              <a
                href="mailto:amroalnashmi8@hotmail.com"
                className="hover:opacity-70 transition-opacity break-all"
              >
                amroalnashmi8@hotmail.com
              </a>
            </div>
            <div>
              <p>هاتف</p>
              <a
                href="tel:+966576770740"
                dir="ltr"
                className="block hover:opacity-70 transition-opacity"
              >
                +966 57 677 0740
              </a>
            </div>
            <div>
              <p>واتس اب</p>
              <a
                href="https://wa.me/966576770740"
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="block hover:opacity-70 transition-opacity"
              >
                +966 57 677 0740
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 min-h-[50vw] md:min-h-0">
          <img
            src={myImage}
            alt=""
            loading="lazy"
            decoding="async"
            width="1704"
            height="923"
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;



