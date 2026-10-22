import { languages } from '../assets/data'

function Languages() {
  return (
    <div className='w-full min-h-fit bg-[#0d0d0d] px-6 sm:px-16 pb-8 sm:pb-16 font-kufam text-xl'>
  <div className='flex flex-col md:flex-row items-start text-[#f7ede2] py-8 sm:py-16'>

    <h1 className='shrink-0 w-full md:w-1/5 list-item list-[square] list-inside ps-0 mb-6 md:mb-0'>
      اللغات
    </h1>

    <div className='w-full md:w-2/3 space-y-6 leading-loose'>
    {languages.map((language) => {
        return (
            <div key={language.name} className='flex items-start gap-3'>
              <p className='text-xl sm:text-2xl'>{language.name} <span className='text-base sm:text-lg mx-2 sm:mx-4'>{language.level}</span></p>
            </div>
        )
    })}
    </div>

  </div>
</div>
  )
}

export default Languages
