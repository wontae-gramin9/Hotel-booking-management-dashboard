"use client"

// import { gql } from "@apollo/client"
import Link from "next/link"
import StretchedTicket from "@/src/components/molecules/Ticket/StretchedTicket"

// const GET_USER_COUPON_LIST = gql`
//   query GetUserTicketList($userId: string) {
//     UserTicket(userId: $userId) {
//       id
//       ticketType
//       expiresAt
//     }
//   }
// `
export default function UserSeatTicketPage() {
  return (
    <>
      <UserTicketPageTitle />
      <StretchedTicket
        ticket={{
          id: "1",
          type: "time",
          bookable: "seat",
          price: 10000,
          period: 86400,
          issuedAt: 1706946429,
          expiresAt: 1707551229,
        }}
      ></StretchedTicket>
      <StretchedTicket
        ticket={{
          id: "1",
          type: "time",
          bookable: "seat",
          price: 10000,
          period: 86400,
          issuedAt: 1706946429,
          expiresAt: 1707551229,
        }}
      ></StretchedTicket>
      <div className="flex flex-row gap-2">
        <Link href="/ticket/used">
          <button
            type="button"
            className="bg-white-100 hover:text-white-100 rounded-lg border border-blue-700 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 "
          >
            사용 완료
          </button>
        </Link>
        <Link href="/ticket/oneoff">
          <button
            type="button"
            className="bg-white-100 hover:text-white-100 rounded-lg border border-blue-700 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 "
          >
            일회권 구매
          </button>
        </Link>
        <Link href="/ticket/billing">
          <button
            type="button"
            className="bg-white-100 hover:text-white-100 rounded-lg border border-blue-700 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 "
          >
            정기권 구매
          </button>
        </Link>
      </div>
      <p>
        url route의 맞는 bookableType에 따라 UserTicket [ id ticketType expiresAt, userId ]의 리스트를 요청
        <br />
        사용하기 위해 티켓을 눌렀을 때 나오는 모달에는 선택된 티켓을 프로퍼티로 보내겠음
      </p>
      <div className="border">query GetUserTicketList($userId: string) [ UserTicket(userId: $userId) ]</div>
    </>
  )
}

const UserTicketPageTitle = () => {
  return <h1 className="text-center text-xl font-bold">이용권 사용하기</h1>
}