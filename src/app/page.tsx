import tw from 'tailwind-styled-components';

export default function Home() {
  return (
    <Wrapper>
      <GlobalMap>Map</GlobalMap>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`
const GlobalMap = tw.div`
  bg-red-500 flex-1
`
const ActionItems = tw.div`
  flex-1
`