const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};
const onDragStart = (event: React.DragEvent<HTMLInputElement>) => {
  console.log(event)
}
const EventComponent: React.FC = () => {
  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart} >Drag me </div>
    </div>
  );
};
export default EventComponent;
