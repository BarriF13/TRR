import { ChildAsFC } from './Child';

const Parent = () => {
  return <ChildAsFC color="blue" onClick={() => console.log('clicked')} >
    zaghart
  </ChildAsFC>;
};
export default Parent;
