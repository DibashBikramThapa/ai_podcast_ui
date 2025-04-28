import React, {use, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "@/components/Layout/View";
import Hero from '@/components/Hero/View';
import ChatHistory from '@/components/ChatHistory/View'


export default function Home() {

  return (
    <Layout stay={true}>
    <Hero/>
    <ToastContainer />
    </Layout>
  );
}