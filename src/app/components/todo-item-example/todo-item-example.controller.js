export default class ExampleItemController {

  $onInit() {
    // console.log('вошли в ExampleItemController');
    this.editMode = false;
  }

  onClickDelete() {
    this.onDelete({ todo: this.todo });
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  onClickEdit(formData) {
    this.onEdit({ todo: formData });
    this.toggleEditMode();
  }
}
