import { Fragment } from 'react/jsx-runtime';
import './App.css';
import { Form } from './components/Form';
import { useState } from 'react';
import { SimpleContent } from './components/SimpleContent';
import { DataFlow } from './components/DataFlow';
import { ProductList } from './components/ProductList/ProductList';
import { Effect } from './components/Effect';
import { UseMemo } from './components/UseMemo';
import { UseRef } from './components/UseRef';
import { HookPerso } from './components/HookPerso';
import { Counter } from './components/Counter';
import { Memoisation } from './components/Memoisation';
import { Portal } from './components/Portal';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Lazy } from './components/Lazy';
import { UseReducer } from './components/UseReducer';
import { UseContext } from './components/UseContext';

function App() {
  return (
    <Fragment>
      <SimpleContent></SimpleContent>
      <Content></Content>
    </Fragment>
  );
}

function Content() {
  let counterElement;
  const [displayCounter, setDisplayCounter] = useState(false);
  const toggleCounter = () => {
    setDisplayCounter(!displayCounter);
  };
  if (displayCounter) {
    counterElement = <Counter></Counter>;
  }

  let formElement;
  const [displayForm, setDisplayForm] = useState(false);
  const toggleForm = () => {
    setDisplayForm(!displayForm);
  };
  if (displayForm) {
    formElement = <Form></Form>;
  }

  let dataFlowElement;
  const [displayDataFlow, setDisplayDataFlow] = useState(false);
  const toggleDataFlow = () => {
    setDisplayDataFlow(!displayDataFlow);
  };
  if (displayDataFlow) {
    dataFlowElement = <DataFlow></DataFlow>;
  }

  let listElement;
  const [displayList, setDisplayList] = useState(false);
  const toggleList = () => {
    setDisplayList(!displayList);
  };
  if (displayList) {
    listElement = <ProductList></ProductList>;
  }

  let effectElement;
  const [displayEffect, setDisplayEffect] = useState(false);
  const toggleEffect = () => {
    setDisplayEffect(!displayEffect);
  };
  if (displayEffect) {
    effectElement = <Effect></Effect>;
  }

  let useMemoElement;
  const [displayUseMemo, setDisplayUseMemo] = useState(false);
  const toggleUseMemo = () => {
    setDisplayUseMemo(!displayUseMemo);
  };
  if (displayUseMemo) {
    useMemoElement = <UseMemo></UseMemo>;
  }

  let useRefElement;
  const [displayUseRef, setDisplayUseRef] = useState(false);
  const toggleUseRef = () => {
    setDisplayUseRef(!displayUseRef);
  };
  if (displayUseRef) {
    useRefElement = <UseRef></UseRef>;
  }

  let useHookPersoElement;
  const [displayHookPerso, setDisplayHookPerso] = useState(false);
  const toggleHookPerso = () => {
    setDisplayHookPerso(!displayHookPerso);
  };
  if (displayHookPerso) {
    useHookPersoElement = <HookPerso></HookPerso>;
  }

  let useMemoisationElement;
  const [displayMemoisation, setDisplayMemoisation] = useState(false);
  const toggleMemoisation = () => {
    setDisplayMemoisation(!displayMemoisation);
  };
  if (displayMemoisation) {
    useMemoisationElement = <Memoisation></Memoisation>;
  }

  let portalElement;
  const [displayPortal, setDisplayPortal] = useState(false);
  const togglePortal = () => {
    setDisplayPortal(!displayPortal);
  };
  if (displayPortal) {
    portalElement = <Portal></Portal>;
  }

  let errorBoundaryElement;
  const [displayErrorBoundary, setDisplayErrorBoundary] = useState(false);
  const toggleErrorBoundary = () => {
    setDisplayErrorBoundary(!displayErrorBoundary);
  };
  if (displayErrorBoundary) {
    portalElement = <ErrorBoundary></ErrorBoundary>;
  }

  let lazyElement;
  const [displayLazy, setDisplayLazy] = useState(false);
  const toggleLazy = () => {
    setDisplayLazy(!displayLazy);
  };
  if (displayLazy) {
    lazyElement = <Lazy></Lazy>;
  }

  let useReducerElement;
  const [displayUseReducer, setUseReducer] = useState(false);
  const toggleUseReducer = () => {
    setUseReducer(!displayUseReducer);
  };
  if (displayUseReducer) {
    useReducerElement = <UseReducer></UseReducer>;
  }

  let useContextElement;
  const [displayUseContext, setUseContext] = useState(true);
  const toggleUseContext = () => {
    setUseContext(!displayUseContext);
  };
  if (displayUseContext) {
    useContextElement = <UseContext></UseContext>;
  }

  return (
    <>
      <button type="button" onClick={toggleCounter}>
        Display Counter
      </button>

      <button type="button" onClick={toggleForm}>
        Display Form
      </button>

      <button type="button" onClick={toggleDataFlow}>
        Display DataFlow
      </button>

      <button type="button" onClick={toggleList}>
        Display List
      </button>

      <button type="button" onClick={toggleEffect}>
        Display Effect
      </button>

      <button type="button" onClick={toggleUseMemo}>
        Display UseMemo
      </button>

      <button type="button" onClick={toggleUseRef}>
        Display UseRef
      </button>

      <button type="button" onClick={toggleHookPerso}>
        Display Hook Perso
      </button>

      <button type="button" onClick={toggleMemoisation}>
        Display Memoisation
      </button>

      <button type="button" onClick={togglePortal}>
        Display Portail
      </button>

      <button type="button" onClick={toggleErrorBoundary}>
        Display ErrorBoundary
      </button>

      <button type="button" onClick={toggleLazy}>
        Display Lazy
      </button>

      <button type="button" onClick={toggleUseReducer}>
        Display UseReducer
      </button>

      <button type="button" onClick={toggleUseContext}>
        Display UseContext
      </button>

      <br />
      <br />
      {counterElement}
      {formElement}
      {dataFlowElement}
      {listElement}
      {effectElement}
      {useMemoElement}
      {useRefElement}
      {useHookPersoElement}
      {useMemoisationElement}
      {portalElement}
      {errorBoundaryElement}
      {lazyElement}
      {useReducerElement}
      {useContextElement}
    </>
  );
}

export default App;
