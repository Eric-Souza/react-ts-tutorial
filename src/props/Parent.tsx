import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
      Default text
    </ChildAsFC>
  );
};

export default Parent;
