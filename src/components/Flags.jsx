
import { languages } from "../data/languages";
import { useTranslation } from "react-i18next";
import ModeView from "./ModeView";

const Flags = () => {
  const { i18n } = useTranslation("global");

  const handleClick = (lan) => {
    i18n.changeLanguage(lan);
    languages.map((lang) =>
      lang.language === lan ? (lang.isActive = true) : (lang.isActive = false)
    );
  };
  return (
      <div className="flex items-center justify-between">
        <ModeView />
        <div className="flex justify-end my-5 gap-x-3 w-[125px]">
          {languages.map((lang) => {
            return (
              <img
                key={lang.language}
                onClick={() => handleClick(lang.language)}
                className={`w-8 cursor-pointer border-2 rounded-full ${
                  lang.isActive ? "  border-[#007cb7] dark:border-[#F97316] " : ""
                }`}
                src={lang.img}
                alt={lang.language}
              />
            );
          })}
        </div>
      </div>
  );
};

export default Flags;
