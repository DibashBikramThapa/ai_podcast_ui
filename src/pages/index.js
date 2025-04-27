import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "@/components/Layout/View";
import Hero from '@/components/Hero/View';


export default function Home() {
  return (
    <Layout stay={true}>
    <Hero/>
    <ToastContainer />
    </Layout>
  );
}