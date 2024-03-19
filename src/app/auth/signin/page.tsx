"use client"

import Image from "next/image"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <>
      <LoginPageTitle />
      <LoginForm />
    </>
  )
}
// 24-02-17 Wontae Choi
// 키오스크였을때만 들어갑니다
// 핸드폰으로 보냈을 때는 auth가 된 상태로 보내던가 하죠
const LoginPageTitle = () => {
  return <h1 className="text-center text-xl font-bold">핸드폰 번호로 로그인하기</h1>
}

const LoginForm = () => {
  return (
    <div className="container mx-auto max-w-screen-sm  overflow-hidden  rounded-lg border border-black-100">
      <div className=" px-4 py-6">
        <form>
          <div className="flex flex-col">
            <label htmlFor="phonenumber" className="dark:text-white mb-2 block text-sm font-medium text-black-700">
              전화번호
            </label>
            <input
              type="phonenumber"
              id="phonenumber"
              className="w-full rounded-lg border  border-black-100 bg-white-300 p-2.5 text-sm"
              placeholder="010-0000-0000"
              required
            />
          </div>
          <div className="my-6"></div>
          <div className="flex flex-col">
            <label htmlFor="password" className="dark:text-white mb-2 block text-sm font-medium text-black-700">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-lg border  border-black-100 bg-white-300 p-2.5 text-sm"
              placeholder="0000"
              required
            />
          </div>
          <div className="my-6"></div>
          <div className="flex flex-row justify-center">
            <button
              type="submit"
              className="rounded-lg border border-blue-700 bg-white-100 px-5 py-2.5 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
            >
              로그인
            </button>
          </div>
        </form>
        <button
          type="submit"
          className="rounded-lg border border-blue-700 bg-white-100 text-sm font-medium hover:bg-blue-300 hover:text-white-100 "
          onClick={() => signIn("kakao")}
        >
          <Image src="/kakao/90x45.png" width={90} height={45} alt="카카오 로그인"></Image>
        </button>
      </div>
    </div>
  )
}