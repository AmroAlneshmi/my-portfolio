import { certificates } from '../assets/data'

function Certificates() {
  return (
    <div className='w-full min-h-fit bg-[#0d0d0d] p-6 sm:p-16 font-kufam text-xl'>
  <div className='flex flex-col md:flex-row items-start text-[#f7ede2] py-8 sm:py-16'>

    <h1 className='shrink-0 w-full md:w-1/5 list-item list-[square] list-inside ps-0 mb-6 md:mb-0'>
      الشهادات و الإنجازات
    </h1>

    <div className='w-full md:w-2/3 space-y-6 leading-loose'>
    {certificates.map((certificate) => {
        return (
            <div key={certificate.name} className='flex items-start gap-3'>
              <p className='text-xl sm:text-2xl'>{certificate.name} <span className='text-base sm:text-lg mx-2 sm:mx-4'>{certificate.from} {certificate.date && <span>[{certificate.date}]</span>}</span></p>
            </div>
        )
    })}
    </div>

  </div>
</div>
  )
}

export default Certificates
