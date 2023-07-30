import { DoneCheckboxComponent } from "../register/done-checkbox/done-checkbox.component";

export function generateInitialTableSettings(doneField = true) {
  const settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: "ID",
        type: "number",
      },

      description: {
        title: "Description",
        type: "string",
      },
      value: {
        title: "Value",
        type: "string",
      },
      lastUpdate: {
        title: "Last update",
        type: "string",
      },
    },
    pager: {
      perPage: 5,
    },
  };

  if (doneField) {
    settings.columns = {
      ...settings.columns,
      checkbox: {
        title: "Done",
        type: "custom",
        renderComponent: DoneCheckboxComponent,
      },
    } as any;
  }

  return settings;
}
