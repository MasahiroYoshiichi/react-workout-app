import type {CourseType} from 'domains/course_selects/types';
import athImage from '../features/assets/training.jpg'
import exeImage from '../features/assets/training4.jpg'
import fitImage from '../features/assets/training7.jpg'


export const courseData: CourseType[] = [{
    courseId: 'athlete',
    title: 'AthleteCourse',
    text: "このコースでは、高負荷かつ持久力が鍛えられるトレーニングを提供しています。 スポーツをされている方や日常的にトレーニングをされている方にお薦めできます。 内容はウエイトトレーニングと自重トレーニングをミックスした、 ハイブリッドトレーニングになります。 あなたのトレーニングに新たな刺激を与えてくれることでしょう。 さぁ!アスリートコースで新たな肉体、能力を手に入れましょう!",
    image: athImage,
}, {
    courseId: 'exercise',
    title: 'ExerciseCourse',
    text: "このコースでは、中負荷~低負荷を中心としたトレーニングを提供しています。 スポーツ経験者や活動的な方にお薦めできます。 内容は中負荷~低負荷の自重トレーニングと、 ダンベルトレーニングがメインになります。 良い汗をかいて、毎日の生活をより充実したものにしましょう。 さぁ！エクササイズコースで楽しく体づくりを始めましょう！",
    image: exeImage,
},
    {
        courseId: 'fitness',
        title: 'FitnessCourse',
        text: "このコースでは、低負荷なトレーニングを中心とした、 誰でも始めやすいトレーニングを提供しています。 生活に運動を取り入れたい方や健康を意識されている方にお薦めできます。 内容はストレッチや低負荷の自重トレーニングなど、 体への負担が少ない構成になります。 トレーニングを始める方への第一歩です。 さぁ！フィットネスコースで健康的な生活を始めてみましょう！",
        image: fitImage,
    },
]
