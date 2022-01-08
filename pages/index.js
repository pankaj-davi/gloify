import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Layout from '../component/Layout/Layout';
import MainContainer from '../component/MainContainer/MainContainer';
import { useDispatch } from 'react-redux';
import { TaskSliceAction } from '../store/TaskSlice';

export default function Home(props){

  const { task , user} = props.data;

  const dispatch = useDispatch();

  dispatch(TaskSliceAction.addTaskAndUserFromAPi({task , user }));

  return (
    <div className={styles.container}>
      <Head>
        <title>Mini Task Management</title>
        <meta name="description" content=">Mini Task Management for testing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
          <MainContainer  />
      </Layout>
      
    </div>
  )
}


export async function getServerSideProps() {

  const tasks = await fetch(`https://devza.com/tests/tasks/list`, {
    method: "GET",
    headers: {
      "AuthToken":process.env.API_KET,
    },
    redirect: 'follow'
  })

  const users = await fetch(`https://devza.com/tests/tasks/listusers`, {
    method: "GET",
    headers: {
      "AuthToken":process.env.API_KET,
    },
    redirect: 'follow'
  })
    
  
  const task = await tasks.json();
  const user = await users.json();

    
  return {
    props: {
      data: {
        task,
        user,
      }
    }
  }
}