function FormItem(props) {
  return (
    <div className={props.control}>
      <label htmlFor={props.id}>{props.children}</label>
      <input type={props.type} required id={props.id} />
    </div>
  );
}

export default FormItem;
