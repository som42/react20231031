import { Button, Center } from "@chakra-ui/react";

function App() {
  function handleOuterBoxClick(e) {
    e.stopPropagation();
    console.log("바깥 상자 클릭됨");
  }
  function handleInnerBoxClick(e) {
    e.stopPropagation();
    console.log("안쪽 상자 클릭됨");
  }
  function handleButtonClick(e) {
    e.stopPropagation();
    console.log("버튼 클릭됨");
  }
  return (
    <>
      <Center onClick={handleOuterBoxClick} w="200px" h="100px" bg="red.100">
        <Center onClick={handleInnerBoxClick} w="140px" h="70px" bg="red.300">
          <Button onClick={handleButtonClick} w="80px" h="50px" bg="red.500">
            button
          </Button>
        </Center>
      </Center>
    </>
  );
}

export default App;
