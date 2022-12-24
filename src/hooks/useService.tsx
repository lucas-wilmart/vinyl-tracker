import { useState } from 'react'

interface UseServiceParameters<Result> {
  onError?: (error: unknown) => void
  onSuccess?: (result: Result) => void
}

type PromiseResult<T extends (...args: any[]) => Promise<any>> = Awaited<ReturnType<T>>

export default function useService<ServiceCallBack extends (...args: any[]) => Promise<any>>(
  callback: ServiceCallBack,
  params?: UseServiceParameters<PromiseResult<ServiceCallBack>>
) {
  const [pending, setPending] = useState(false)
  const [data, setData] = useState<PromiseResult<ServiceCallBack>>()

  const request = async (...args: Parameters<ServiceCallBack>) => {
    setPending(true)
    try {
      const result = await callback(...args)
      setData(result)

      if (params?.onSuccess) {
        params.onSuccess(result)
      }
    } catch (error) {
      if (params?.onError) {
        params.onError(error)
      }
    }
    setPending(false)
  }

  return {
    request,
    pending,
    data
  }
}
