import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import FormItem from "./FormItem";
function NewMeetupForm(props) {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <FormItem control={classes.control} id="title" type="text">
          Meetup Title
        </FormItem>
        <FormItem control={classes.control} id="image" type="url">
          Meetup Image
        </FormItem>
        <FormItem control={classes.control} id="address" type="text">
          Address
        </FormItem>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
