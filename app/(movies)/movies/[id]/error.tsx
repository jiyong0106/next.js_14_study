"use client";

const Error = () => {
  return (
    <div>에러났음</div>
  )
}

export default Error

//error 컴포넌트는 클라이언트 컴포넌트로 동작
//에러가 발생하면 에러 컴포넌트가 렌더링됨
//에러파일은 바로 옆에 있는 페이지에서 발생하는 에러에만 작동함 -> 현재 movies/id 에서만 에러 발생함 