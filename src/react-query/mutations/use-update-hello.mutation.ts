import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryKeys } from '../query-keys'

async function updateHello(newMessage: string) {
  return { message: newMessage }
}

export function useUpdateHelloMutation() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: updateHello,
    onSuccess: (data) => {
      qc.setQueryData(queryKeys.hello(), data)
    },
  })
}
