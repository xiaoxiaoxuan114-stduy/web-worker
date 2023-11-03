import React, { useState, useEffect } from 'react'

const Havefun: React.FC = () => {
  const [worker, setWorker] = useState<Worker | null>()
  useEffect(() => {
    // 如果使用next框架的话，请注意区分node和browser环境，下面是next的例子
    setWorker(typeof window !== 'undefined' && window.Worker ?
        new Worker(
          new URL('@/components/hooks/workerMain.worker.js', import.meta.url),
          { type: 'module' }
        ) :
        null)
    return () => {
      // 销毁事件
      worker?.removeEventListener('message', workerListener)
      // 销毁worker线程
      worker?.terminate()
    }
  }, [])
  
  // worker 返回事件，便于注册和销毁
  const workerListener = ({ data }: any) => {
    console.log(data)
  }
  
  const useWorker = () => {
    worker?.addEventListener('message', workerListener)
    worker?.postMessage('hello, this is main thread')
  }
  return (<button onClick={useWorker}>call web-worker</button>)
}

Havefun.displayName = 'Havefun'
export default Havefun
