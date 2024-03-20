"use server"

import request, { gql } from "graphql-request"
import { APOLLO_ROUTER_URL } from "@/constant/graphql"
import { Card } from "@/models/card"

export async function getBillingKeyTerm() {
  const GET_BILLING_KEY_TERM_QUERY = gql`
    query GetBillingKeyTerm($type: TermsType!) {
      term(type: $type) {
        termsTitle
        content
      }
    }
  `

  type BillingKeyTermRequest = {
    type: "eletorn" | "colletperson" | "sharinginfo" | "telcommun"
  }

  type BillingKeyTermResponse = {
    termsTitle: string
    content: string
  }

  const data: { term: BillingKeyTermResponse } = await request(APOLLO_ROUTER_URL, GET_BILLING_KEY_TERM_QUERY, {
    type: "eletorn",
  } as BillingKeyTermRequest)

  const billingKeyTerm = data.term
  return billingKeyTerm
}

export async function getUserCardList(userId: string) {
  const GET_USER_CARD_LIST = gql`
    query GetUserCardList($userId: String!) {
      userbyid(userId: $userId) {
        cards {
          authDate
          cardCode
          cardName
          cardNum
          orderId
          id
          representative
          userId
        }
      }
    }
  `

  const data: { userbyid: { cards: Card[] } } = await request(APOLLO_ROUTER_URL, GET_USER_CARD_LIST, {
    userId,
  })
  const userCardList = data.userbyid.cards
  return userCardList
}
