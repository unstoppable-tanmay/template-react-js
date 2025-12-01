import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../query-keys'

async function fetchHello() {
  return { message: 'Hello Query' }
}

export function useHelloQuery() {
  return useQuery({ queryKey: queryKeys.hello(), queryFn: fetchHello })
}
