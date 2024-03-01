export const metadata = {
  title: "about us",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}

//레이아웃 컴포넌트는 만들어서 사용할 수 있다.
//루트페이지에 있는 레이아웃 컴포넌트는 페이지에 전체적용?
//같은 폴더에 있는 상위 페이지에 레이아웃 컴포넌트를 만들면 그 폴더의 하위 컴포넌트들도 레이아웃을 다같이 적용
//밑에서 위로는 안됨  
