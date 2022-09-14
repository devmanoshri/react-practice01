// import React from "react";
import "./App.css";
import Greet from "./components/greet";
import WelcomeComponent from "./components/welcome";
import Message from "./components/Message";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Fragment from "./components/fragment";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import DataFetching from "./components/DataFetching";
// import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import DataFetchingOne from "./components/DataFetchingOne";
import CounterTwo from "./components/CounterTwo";

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <CounterTwo />
      {/* <DataFetchingOne /> */}
      {/* <CounterOne /> */}
      {/* <UserContext.Provider value={"Viswas"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <DataFetching /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <PostForm /> */}
      {/* <PostList /> */}
      {/* <Fragment /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <ClassClick></ClassClick>
      <FunctionClick> </FunctionClick> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>Is a grate scientist</p>
      </Greet>
      <Greet name="Clerk" heroName="Superman">
        <button>Call him</button>
    </Greet>*/}
      {/* <Greet name="Diana" heroName="Wonder Woman"></Greet>
      <WelcomeComponent></WelcomeComponent> */}
      {/* <Message /> */}
    </div>
  );
}

export default App;
