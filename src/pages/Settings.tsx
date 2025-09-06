import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Settings() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col h-full p-2">
      <nav className="w-full p-3">
        <ul className="w-full flex flex-row items-center">
          <li>
            <Link to="/" className="flex items-center">
              <ArrowLongLeftIcon className="h-5 w-5 mr-2" />
              {t("settings.homeLink")}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="h-full w-full flex flex-col gap-12 items-center justify-center"></div>
    </main>
  );
}
