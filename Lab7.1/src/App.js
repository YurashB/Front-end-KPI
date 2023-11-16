import Header from "./components/Header";
import ClassContent from "./components/content/ClassContent";
import Image from "./components/image/Image";


function App() {
    const data = {
        headerTitle: "Юраш Богдан Володимирович",
        birthData: "26 травня 2004 року, м. Сарни",
        education: [
            "Гімназія №5 м.Сарни",
            "НТУУ 'КПІ' м.Київ"
        ],
        hobbies: [
            "Спорт",
            "Астрономія",
            "Подорожування",
        ],
        films: [
            "'Інтерстеллар' 2014",
            "'1+1' 2011",
            "'Начало' 2010",
            "'Джокер' 2019",
        ],
        texts: [
            "Ві́день — федеральна столиця Австрії. Є одночасно однією з 9 земель Австрії, зусібіч оточеною територією іншої землі — Нижньої Австрії.",
            " Спочатку Відень був кельтським поселенням під назвою Віндобона, заснованим близько 500 року до н. е. на місці сучасного центрального округу міста. У 15 році до н. е. місто завоював XIII римський легіон «Gemina», воно перетворилося на форпост Римської імперії на шляху германських племен з півночі.",
            " До середини XII століття Відень — резиденція австрійських герцогів Бабенберґів. 1155 року герцог Генріх II Бабенберґ побудував будинок на площі Am Hof. У 1137—1147 роках збудували першу церкву на місці собору Святого Стефана. Сучасний собор споруджено в XIII—XV століттях.",
            "  Із XVI століття Відень — столиця багатонаціональної держави австрійських Габсбургів; з XVII століття і особливо у XVIII столітті місто стало осереддям численної придворної бюрократії. З XVIII століття тут розвивається мануфактурна промисловість (текстильне виробництво і виробництво предметів розкоші).",
            "На початку XX століття Відень — найбільше місто в Європі (понад 2 млн населення; зараз — 1,67 млн). Проте з поразкою Австро-Угорщини в Першій світовій війні місто втратило свій вплив.",
        ],
        image: {
            href: 'https://unsplash.com/photos/aerial-photography-of-city-buildings-5SjAaqqCCmY',
            src: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Photo of Vienna',
            size: {
                width: '730',
                height: '384'
            }
        }
    }

    return (
        <div className="App">
            <Header title={data.headerTitle}/>
            <ClassContent
                birthData={data.birthData}
                education={data.education}
                hobbies={data.hobbies}
                films={data.films}
                texts={data.texts}
                image={data.image}
            />
        </div>
    );
}

export default App;
