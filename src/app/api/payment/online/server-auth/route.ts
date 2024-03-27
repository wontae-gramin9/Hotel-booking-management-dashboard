import request, { gql } from "graphql-request"
import { APOLLO_ROUTER_URL } from "@/constant/graphql"

const SEND_PAYMENT_APPROVAL_MUTATION = gql`
  mutation SendPaymentApproval($tid: String!, $amount: String!) {
    serverAuth(input: { tid: $tid, amount: $amount }) {
      resultCode
    }
  }
`

type SendPaymentApprovalResponse = {
  serverAuth: {
    resultCode: string
  }
}

export async function POST(req: Request) {
  const response: FormData = await req.formData()
  const tid = response.get("tid")?.toString()
  const amount = Number(response.get("amount"))

  const data: SendPaymentApprovalResponse = await request(APOLLO_ROUTER_URL, SEND_PAYMENT_APPROVAL_MUTATION, {
    tid,
    amount,
  })

  const resultCode = data.serverAuth.resultCode

  return Response.json({ resultCode })
}
