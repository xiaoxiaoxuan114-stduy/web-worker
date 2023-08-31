import React, { useEffect, useState } from 'react'
import { trList, worker, variance } from '../hooks/workerMain'

const WorkerMain: React.FC = () => {
  const [tableData, setTableData] = useState<number[][]>([])
  const [left, setLeft] = useState<string>('无')
  const [right, setRight] = useState<string>('无')
  
  useEffect(() => {
    // 初始化列表数据(>10k)
    setTableData(trList())
    return () => {
    }
  }, [])
  
  const useWebWorker = () => {
    setRight('计算中...')
    worker?.addEventListener('message', ({ data: { data }}: any) => {
      setRight(data.toString())
    })
    worker?.postMessage({ data: tableData.flat() })
  }
  
  const getAverage = () => {
    setLeft('计算中...')
    let ave: number
    // 模拟大量运算
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    ave = variance(tableData.flat())
    setLeft(ave.toString())
  }
  
  return (<>
    <div className={'h-[85%] overflow-auto'}>
      <table className={''}>
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
    <div className={'h-[10%] flex justify-center'} >
      <div className={'w-[50%] h-full text-center'}>
        <div className={'font-bold text-2xl'}>计算结果：{ left }</div>
        <button onClick={getAverage}>开始计算方差（传统）</button>
      </div>
      <div className={'w-[50%] h-full text-center'}>
        <div className={'font-bold text-2xl'}>计算结果：{ right }</div>
        <button onClick={useWebWorker}>开始计算方差（web-worker）</button>
      </div>
    </div>
  </>)
}

WorkerMain.displayName = 'WorkerMain'
export default WorkerMain
