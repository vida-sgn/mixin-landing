import mahpooshStore from "../../assets/mahpoosh-store.png";

const StoreMockup = () => {
  return (
    <div className="relative w-full max-w-[900px] mx-auto">

      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          shadow-xl
          bg-[#FCF8F1]
          transition-transform
          duration-500
          hover:scale-[1.015]
        "
      >
        <img
          src={mahpooshStore}
          alt="نمونه فروشگاه آنلاین ساخته شده با میکسین"
          className="
            block
            w-full
            h-full
            object-cover
            object-center
          "
        />
      </div>

    </div>
  );
}
export default StoreMockup;
