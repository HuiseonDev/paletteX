import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="p-6 space-y-4">
        {/* 텍스트 입력 */}
        <Input
          variant="text"
          placeholder="텍스트 입력"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          fullWidth
          color="#3b82f6"
        />

        {/* 비밀번호 입력 */}
        <Input
          variant="password"
          placeholder="비밀번호 입력"
          showToggle
          fullWidth
        />

        {/* 숫자 입력 */}
        <Input variant="number" placeholder="숫자 입력" fullWidth />

        {/* 검색창 입력 */}
        <Input variant="search" placeholder="검색어 입력" fullWidth />
      </div>
    </>
  );
}

export default App;
