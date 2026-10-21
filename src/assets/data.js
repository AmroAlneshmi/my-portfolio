import photoshop from './photoshop.webp'
import ill from './illustrator.webp'
import premier from './premier.webp'
import afterEffect from './aftereffect.webp'
import html from './html.webp'
import css from './css.webp'
import js from './js.webp'
import php from './php.webp'
import react from './react.webp'
import tailwindcss from './tailwindcss.webp'
import mongodb from './mongodb.webp'

export const skills = {
    design: {
      items: [
        { id: 'd1', name: 'فوتوشوب', image: photoshop},
        { id: 'd2', name: 'اليستريتور', image: ill },
        { id: 'd3', name: 'بريمير', image: premier},
        { id: 'd4', name: 'افتر افكت', image: afterEffect},
      ],
    },
    programming: {
      items: [
        { id: 'p1', name: 'اتش تي ام ال', image: html},
        { id: 'p2', name: 'سي اس اس', image: css},
        { id: 'p3', name: 'جافا سكريبت', image: js},
        { id: 'p4', name: 'بي اتش بي', image: php},
        { id: 'p5', name: 'رياكت', image: react},
        { id: 'p6', name: 'تايلويند سي اس اس', image: tailwindcss},
        { id: 'p7', name: 'مونجو دي بي', image: mongodb},
      ],
    },
  }

export const certificates = [
    {name: 'مقدمة في الامن السيبراني', from: 'سيسكو', date: '2024'},
    {name: 'ويب هاكاثون', from: 'جامعة الرشيد الذكية', date: '2023'},
    {name: 'قيادة الحاسوب', from: 'معهد نيو هورايزن', date: '2019'},
    {name: 'عضو نادي مطوري جوجل', from: 'جامعة الرشيد الذكية', date: null},
    {name: 'عضو في معرض رواد الاعمال', from: 'جامعة الرشيد الذكية', date: null}
]

export const languages = [
    {name: 'العربية', level: 'الام'},
    {name: 'الانجليزية', level: 'متوسط'},
    {name: 'التركية', level: 'مبتدئ'}
]