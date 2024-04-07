"use server"
import request, { gql } from "graphql-request"
import { APOLLO_ROUTER_URL } from "@/constant/graphql"
import { CouponFrame } from "@/models/coupon"

export async function getCouponFrame(couponFrameId: string) {
  const GET_ALL_COUPON_FRAME = gql`
    query GetAllCouponFrame($couponFrameId: String) {
      couponType(couponId: $couponFrameId) {
        expires
        statement
        name
        number
        type
      }
    }
  `

  const data: { couponType: CouponFrame[] } = await request(APOLLO_ROUTER_URL, GET_ALL_COUPON_FRAME, {
    couponFrameId,
  })

  const { couponType: couponFrameList } = data
  const [couponFrame] = couponFrameList
  return couponFrame
}