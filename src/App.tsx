import { useEffect, useState } from "react";
import IntroScreen from "./components/IntroScreen";
import SplashScreen from "./components/SplashScreen";
import MainScreen from "./components/MainScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";

import AnimationScreen from "./components/AnimationScreen";
import MaterialsPage from "./components/MaterialsPage";
import ContactsPage from "./components/ContactsPage";
import AccountPage from "./components/AccountPage"; 


import type { PageKey } from "./types";

type Step = "intro" | "loading" | "main" | "login" | "register" | "app";

export default function App() {
  const [step, setStep] = useState<Step>("intro");
  const [activePage, setActivePage] = useState<PageKey>("animation");

  useEffect(() => {
    const timer = setTimeout(() => setStep("loading"), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (step === "loading") {
      const timer = setTimeout(() => setStep("main"), 5000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const goToLogin = () => setStep("login");
  const goToRegister = () => setStep("register");

  const onLoginSuccess = () => setStep("app");
  const onRegisterSuccess = () => setStep("app");

  // Перехід між сторінками всередині додатку
  const handleNavigate = (page: PageKey) => {
    setActivePage(page);
  };

  function renderAppContent() {
    switch (activePage) {
      case "animation":
        return <AnimationScreen onNavigate={handleNavigate} activePage={activePage} />;
      case "materials":
        return <MaterialsPage onNavigate={handleNavigate} activePage={activePage} />;
      case "contacts":
        return <ContactsPage onNavigate={handleNavigate} activePage={activePage} />;
      case "account":
        return <AccountPage onNavigate={handleNavigate} activePage={activePage} />;
      // Додай інші сторінки сюди, коли будуть
      default:
        return <AnimationScreen onNavigate={handleNavigate} activePage={activePage} />;
    }
  }

  function renderContent() {
    switch (step) {
      case "intro":
        return <IntroScreen />;
      case "loading":
        return <SplashScreen />;
      case "main":
        return <MainScreen onLoginClick={goToLogin} onRegisterClick={goToRegister} />;
      case "login":
        return (
          <LoginScreen
            onRegister={goToRegister}
            onGoClick={onLoginSuccess}
            onBack={() => setStep("main")}
          />
        );
      case "register":
        return (
          <RegisterScreen
            onGoClick={onRegisterSuccess}
            onBack={() => setStep("main")}
          />
        );
      case "app":
        return renderAppContent();
      default:
        return null;
    }
  }

  return (
    <div className="w-full h-screen bg-[#d4e8b2] flex justify-center items-center overflow-auto">
      {renderContent()}
    </div>
  );
}
