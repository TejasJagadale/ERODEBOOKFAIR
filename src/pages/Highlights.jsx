// pages/Highlights.jsx
import React, { useState } from "react";
import "../styles/Highlights.css";

const Highlights = () => {
  const [activeTab, setActiveTab] = useState("2018");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const highlightsData = {
    2025: {
      title: "2025 சிறப்பம்சங்கள்",
      items: [
        "19 ஆம் ஆண்டு ஈரோடு புத்தகத் திருவிழா வருகிற ஆகஸ்ட் 4 ஆம் தேதி முதல் 15 ஆம் தேதி வரை 12 நாட்களுக்கு ஈரோடு - வீரப்பன் சத்திரத்திலுள்ள சிக்கய்ய நாயக்கர் கல்லூரி மைதானத்தில் நடைபெறவுள்ளது.",
        "இத்திருவிழாவிற்கு ஈரோடு மாவட்டத்தின் அனைத்துப் பகுதிகளிலிருந்து மட்டுமல்லாது அண்டை மாவட்டங்களிலிருந்தும் பல்லாயிரக்கணக்கில் மக்கள் வருகை புரிகின்றனர்.",
        "இத்திருவிழா நுழைவுக் கட்டணமோ , அல்லது லாபத்தில் பங்கோ இல்லாமல் முழுக்க முழுக்க சேவை மனப்பான்மையோடு நடத்தப்படுவதாகும்."
      ],
      images: [
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2025/1.jpeg",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2025/2.jpeg",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2025/3.jpeg",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2025/4.jpeg"
      ]
    },
    2024: {
      title: "2024 சிறப்பம்சங்கள்",
      items: [
        "  ஈரோடு : தமிழ்நாடு அரசும் மக்கள் சிந்தனைப் பேரவையும் இணைந்து நடத்தும் ஈரோடு புத்தகத் திருவிழா - 2024, ஈரோடு சிக்கய்ய நாயக்கர் கல்லூரி மைதானத்தில் நடைபெற்று வருகிறது. இதில்  இன்று ( 6 ஆம் தேதி ) மாலை நடைபெற்ற சிந்தனை அரங்க சொற்பொழிவு நிகழ்ச்சிக்கு  சண்முகா சால்ட் & கெமிக்கல்ஸ் பிரைவேட் லிமிடெட் நிறுவனத்தின் மேலாண்மை இயக்குநர் வி.ராஜமாணிக்கம் தலைமை தாங்கி உரை நிகழ்த்தினார்."
      ],
      images: [
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2024(1)/1.jpeg",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2024(1)/2.jpeg",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2024(1)/3.jpeg",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2024(1)/4.jpeg"
      ]
    },
    2023: {
      title: "2023 சிறப்பம்சங்கள்",
      items: [
        "  மாணவர்களின் வாசிப்புப் பழக்கத்தை ஊக்கப்படுத்தும் விதத்தில் புதிய புதிய திட்டங்களை மக்கள் சிந்தனைப் பேரவை செயல்படுத்தி வருகிறது. அதில் குறிப்பிடத்தகுந்த ஒன்று புத்தக சேமிப்பு உண்டியல் திட்டம்.",
        " ஆண்டுதோறும் புத்தகத் திருவிழா நடைபெறுகிற 12 நாட்களிலும் ரூ.15/- மதிப்புள்ள உண்டியல் ரூ.5/-க்கு புத்தகத் திருவிழா அரங்கிலேயே கிடைக்க பேரவை ஏற்பாடு செய்து வருகிறது. ரூ. 10/-ஐ பேரவையே ஏற்கிறது. இவ்வாறு ஒவ்வோராண்டும் பல்லாயிரம் உண்டியல்கள் மாணவர்களால் வாங்கிச் செல்லப்படுகின்றன."
      ],
      images: [
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2023/1.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2023/2.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2023/3.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2023/4.JPG"
      ]
    },
    2022: {
      title: "2022 சிறப்பம்சங்கள்",
      items: [
        "  மக்கள் சிந்தனைப் பேரவையின் இணையவழி மாநிலப் பொதுக்குழுக் கூட்டம் 12.06.2022 ஆம் தேதி மாலை 4 மணிக்கு பேரவையின் தலைவர் த. ஸ்டாலின் குணசேகரன் தலைமையில் நடைபெற்றது. பேரவையின் துணைத்தலைவர் பேராசிரியர் கோ. விஜயராமலிங்கம் ( தஞ்சாவூர் ) , செயலாளர் ந. அன்பரசு                ( சென்னை ) , துணைச் செயலாளர் ஜா. தினகரன் ( அரியலூர் ) , பொருளார்  க. அழகன் ( கோவை ) ஆகியோரும் அனைத்து மாவட்டங்களிலுமுள்ள பேரவையின் பொதுக்குழு உறுப்பினர்களும் பங்கேற்றுக் கருத்து தெரிவித்தனர்."
      ],
      images: [
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2022/1.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2022/2.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2022/3.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2022/4.JPG"
      ]
    },
    2021: {
      title: "2021 சிறப்பம்சங்கள்",
      items: [
        "மக்கள் சிந்தனைப் பேரவையின் சார்பில் ‘ஈரோடு புத்தகத் திருவிழா – 2020 ’என்ற பெயரில் ஈரோடு நகரில் 31.07.2020 வெள்ளிக்கிழமை முதல் 11.08.2020 செவ்வாய்க்கிழமை வரை 12 நாட்களுக்கு புத்தகத் திருவிழா நடத்திட முடிவெடுத்துள்ளோம். ",
        " தமிழ் மற்றும் ஆங்கிலம் ஆகிய இரண்டு மொழிகளிலும் சிறந்த புத்தகங்களை வெளியிட்டுவரும் மிகச்சிறந்த பதிப்பகங்களை அழைத்து 230 அரங்குகளை அமைக்க எண்ணியுள்ளோம். கடந்த சில ஆண்டுகளில் ஈரோடு நகரிலும், நகரைச் சுற்றியுள்ள பகுதிகளிலும் நிறைய புதிய கல்வி நிலையங்கள் உருவாகியுள்ளன."
      ],
      images: [
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2021/1.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2021/2.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2021/3.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2021/4.JPG"
      ]
    },
    2020: {
      title: "2020 சிறப்பம்சங்கள்",
      items: [
        "மக்கள் சிந்தனைப் பேரவையின் சார்பில் ‘ஈரோடு புத்தகத் திருவிழா – 2020 ’என்ற பெயரில் ஈரோடு நகரில் 31.07.2020 வெள்ளிக்கிழமை முதல் 11.08.2020 செவ்வாய்க்கிழமை வரை 12 நாட்களுக்கு புத்தகத் திருவிழா நடத்திட முடிவெடுத்துள்ளோம். ",
        " தமிழ் மற்றும் ஆங்கிலம் ஆகிய இரண்டு மொழிகளிலும் சிறந்த புத்தகங்களை வெளியிட்டுவரும் மிகச்சிறந்த பதிப்பகங்களை அழைத்து 230 அரங்குகளை அமைக்க எண்ணியுள்ளோம். கடந்த சில ஆண்டுகளில் ஈரோடு நகரிலும், நகரைச் சுற்றியுள்ள பகுதிகளிலும் நிறைய புதிய கல்வி நிலையங்கள் உருவாகியுள்ளன."
      ],
      images: [
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2020/1.jpg",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2020/2.jpg",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2020/3.jpg",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2020/4.jpg"
      ]
    },
    2019: {
      title: "2019 சிறப்பம்சங்கள்",
      items: [
        "ஈரோடு புத்தகத் திருவிழாவிற்கு இது 15 ஆம் ஆண்டு என்பதால் சில சிறப்பம்சங்களை உள்ளடக்கிய நிகழ்வுகளாக அமைய முயற்சிகள் மேற்கொண்டு வருகிறோம்.தங்களிடம் தொலைபேசியில் பேசி இசைவு பெற்றபடி தாங்கள் பங்கேற்கும் நிகழ்ச்சியை அறிவியலுக்கான சிறப்பு நிகழ்ச்சியாக நடத்திடத் திட்டமிட்டுள்ளோம்.அறிவியல் மேதை ஜி.டி. நாயுடு விருது வழங்கும் நிகழ்வையும் அதேநாளில் வைத்துள்ளோம்.",
        " பெரியார் பல்கலைக் கழகத் துணை வேந்தர் பேராசிரியர் பி.கொழந்தைவேல் அவர்கள் விருதை வழங்கி உரை நிகழ்த்துவதாகவும் தாங்கள் தனித் தலைப்பில் சிறப்புச் சொற்பொழிவு நிகழ்த்துவதாகவும் நிகழ்ச்சியை வடிவமைத்துள்ளோம்."
      ],
      images: [
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2019/1.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2019/2.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2019/3.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2019/4.JPG"
      ]
    },
    2018: {
      title: "2018 சிறப்பம்சங்கள்",
      items: [
        "ஈரோடு புத்தகத் திருவிழாவிற்கான பணிகள் ஆண்டு முழுக்க ஏதாவது ஒரு முறையில் , ஏதோ ஒரு வடிவத்தில் நடந்து கொண்டிருந்தாலும் கடைசி மூன்று மாதங்கள் அதையொரு முழுநேரப் பணியாக மேற்கொள்வதை பேரவை வழக்கமாக வைத்துள்ளது.2018 ஆம் ஆண்டின் புத்தகத் திருவிழாப் பணிகள் எல்லாக் கோணங்களிலும் வேகமாகவும் , ஆழமாகவும் நடைபெறத் தொடங்கிவிட்டன.தொடக்கமாக , பவானி - சித்தோடு போன்ற ஈரோடு மாவட்டப் பகுதிகளில் நடைபெற்று வரும் சுவரெழுத்து விளம்பரப் பணி இரவு , பகல் நடைபெறுவதைப் படத்தில் காண்கிறோம்.இரண்டு , மூன்று குழுக்கள் சுவரெழுத்து விளம்பரத்தில் ஈடுபட்டுள்ளன. ",
        "கரூர் , திண்டுக்கல் , நாமக்கல் , சேலம் , தர்மபுரி , திருப்பூர் , கோவை , நீலகிரி ஆகிய மாவட்டங்களிலும் இச்சுவரெழுத்து விளம்பரம் மேற்கொள்ளப் படவுள்ளது.இது ஈரோட்டில் நடைபெறுகிற புத்தகத் திருவிழாவாக இருப்பினும் தேசியத் தரத்துடனும் மாநிலக் கண்ணோட்டத்துடனும் நடத்தப்படுவதாகும்."
      ],
      images: [
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2018/1.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2018/2.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2018/3.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2018/4.JPG"
      ]
    }
  };

  const [displayContent, setDisplayContent] = useState(highlightsData["2018"]);

  const handleTabChange = (year) => {
    if (activeTab !== year && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(year);
        setDisplayContent(highlightsData[year]);
        setIsTransitioning(false);
      }, 300); // Match this duration with your CSS transition duration
    }
  };

  return (
    <div className="highlights-container">
      <h1 className="highlights-main-title">ஆண்டு வாரியான சிறப்பம்சங்கள்</h1>

      <div className="tabs-container">
        {Object.keys(highlightsData).map((year) => (
          <button
            key={year}
            className={`tab-button ${activeTab === year ? "active" : ""}`}
            onClick={() => handleTabChange(year)}
            disabled={isTransitioning}
          >
            {year}
          </button>
        ))}
      </div>

      <div
        className={`tab-content ${isTransitioning ? "fade-out" : "fade-in"}`}
      >
        <h2 className="highlight-year-title">{displayContent.title}</h2>

        <div className="content-grid">
          <div className="highlights-list">
            <ul>
              {displayContent.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="highlights-images">
            {displayContent.images.map((image, index) => (
              <div key={index} className="image-container">
                <img src={image} alt={`Highlight ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
