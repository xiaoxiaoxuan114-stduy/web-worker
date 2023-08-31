import React, { useEffect, useRef, useState } from 'react'
import moment from 'moment'
import WorkerMain from '@/components/organisms/WorkerMain'

const Home: React.FC = () => {
  const [date, setDate] = useState(new Date())
  const timeShow = useRef<HTMLDivElement>(null)
  
  // 初始化
  useEffect(() => {
    // 时间（证明当前页面没有出现卡顿）
    const interval = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  
  useEffect(() => {
    if (timeShow.current)
      timeShow.current.innerText = moment(date).format('YYYY-MM-DD hh:mm:ss')
  }, [date]);
  
  return (
    <main className={`h-screen min-h-[900px]`}>
      <div ref={timeShow} className={'h-[5%] text-center font-bold text-2xl'} />
      <WorkerMain />
    </main>
  )
}

export default Home
