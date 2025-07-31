'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import HomeTop from './Home/page';
import MainLayout from "./Shared/main.layout";

export default function Home() {

  return (
    <MainLayout>
      <HomeTop />
    </MainLayout>
  )
}