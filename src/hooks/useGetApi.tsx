import { useState } from 'react'
import api from '../services/api'
import { TSearchResult } from '../types'

export const useGetApi = () => {
  const [data, setData] = useState<TSearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)
  const [isError, setIsError] = useState(false)

  const fetchData = async (url: string) => {
    setIsLoading(true)

    try {
      const response = await api.get(url);
      setIsEmpty(!response.data?.length);
      setData(response.data || [])
    } catch {
      setIsError(true)
    }

    setIsLoading(false)
  }

  return { fetchData, data, isLoading, isError, isEmpty }
}