import React, { useEffect, useState } from "react";

const BASE_IMG_URL = "https://picsum.photos/seed/sameimage/300";

function App() {
  return <CustomBlur />;
}

const CustomBlur = () => {
  // Bulanıklık değerini saklamak için bir state tanimlayalim
  const [blurValue, setBlurValue] = useState(0);

  // Kaydırıcı değeri değiştiğinde çağrılacak fonksiyon
  const handleBlurChange = (event) => {
    // State'i güncelleme, kaydırıcının yeni değerine ayarlanır
    setBlurValue(event.target.value);
  };

  // useEffect hook'u kullanarak, blurValue değiştiğinde resmin blur efektini güncelliyoruz
  useEffect(() => {
    // Resmi almak için id'si "blur-image" olan resim elementini seçiyoruz
    const image = document.getElementById("blur-image");
    // Eğer resim elementi varsa, filter özelliğini blur efektini uygulayacak şekilde güncelliyoruz
    if (image) {
      image.style.filter = `blur(${blurValue}px)`;
    }
  }, [blurValue]); // blurValue değeri değiştiğinde useEffect'in tekrar çalışmasını sağlıyoruz

  // JSX döndürüyoruz, resim, kaydırıcı ve bir metin içeren bir div
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        {/* Resim elementi, blur efektini uygulamak için id'si "blur-image" */}
        <img
          id="blur-image"
          src={`${BASE_IMG_URL}`}
          alt="Random"
          className="rounded-lg"
        />
        {/* Kullanıcıya blur efektini ayarlaması için bir metin */}
        <p className="flex justify-center items-center ">Blur icin kaydirin</p>
        {/* Blur değerini ayarlamak için bir kaydırıcı */}
        <input
          type="range"
          min="1"
          max="10"
          value={blurValue}
          onChange={handleBlurChange}
          className="block mt-4 w-full"
        />
      </div>
    </div>
  );
};

export default App;
