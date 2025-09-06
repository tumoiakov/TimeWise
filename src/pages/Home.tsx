import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <main className="flex flex-col h-full p-2">
      <Link to="/dashboard">{t("home.dashboardLink")}</Link>
      <h1>{t("home.title")}</h1>
    </main>
  );
}
