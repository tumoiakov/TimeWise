import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { TimerBtnState, timerBtnStateData } from "../utils/timer";
import { useState } from "react";

export default function Home() {
  const { t } = useTranslation();

  const [btnState, setBtnState] = useState<TimerBtnState>("active");

  const btnStateData = timerBtnStateData[btnState];

  return (
    <main className="flex flex-col h-full p-2">
      <nav className="w-full p-3">
        <ul className="w-full flex flex-row gap-6 lg:gap-12 items-center justify-start">
          <li aria-current="page">{t("home.homeLink")}</li>
          <li>
            <Link to="/dashboard">{t("home.dashboardLink")}</Link>
          </li>
          <li className="ml-auto px-2">
            <Link to="/settings">
              <Cog6ToothIcon className="h-5 w-5" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="h-full w-full flex flex-col gap-12 items-center justify-center">
        <div className="flex items-center justify-center">
          <span className="text-8xl">43:44</span>
        </div>
        <div className="flex items-center justify-center gap-6 text-2xl">
          {btnStateData.map((btn) => (
            <button key={btn} type="button">
              {t(btn)}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
