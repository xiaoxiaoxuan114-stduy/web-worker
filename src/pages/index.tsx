import React, { useEffect, useRef, useState } from 'react'
import moment from 'moment'
import { trList, worker } from '@/hooks'

const Home: React.FC = () => {
  const [date, setDate] = useState(new Date())
  const [tableData, setTableData] = useState<number[][]>([])
  const timeShow = useRef<HTMLDivElement>(null)
  
  // 初始化
  useEffect(() => {
    // 时间（证明当前页面没有出现卡顿）
    const interval = setInterval(() => {
      setDate(new Date())
    }, 1000)
    // 初始化列表数据(>10k)
    setTableData(trList())
    if (worker && typeof window !== 'undefined') {
      // worker.postMessage({ type: 'average', cb: () => { console.log('worker') } })
      console.log(worker)
    }
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
      <div className={'h-[85%] overflow-auto'}>
        <table>
          <tbody>
          {
            tableData.map((trItem, trIndex) => (
              <tr key={trIndex}>
                {
                  trItem.map((item, index) => (
                    <td key={index}>{ item.toString() }</td>
                  ))
                }
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Home
