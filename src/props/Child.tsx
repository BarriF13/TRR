export interface ChildProps {
  color: string;
  onClick: () => void;
}
//--not a very good approach
// export const Child = ({ color, onClick }: ChildProps) => {
//   return (
//     <div>
//       {color}
//       <button onClick={onClick}>Click me</button>
//     </div>
//   );
// };
//--better approach 
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
