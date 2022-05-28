import * as React from "react";
import { Button } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";

export default function ReadMeExampleSingle({ isOpen, close, getDate }) {
  const [date, setDate] = React.useState();
  const [open] = React.useState(isOpen);

  const onDismissSingle = React.useCallback(() => {
    close(false);
  });

  const onConfirmSingle = React.useCallback(
    (params) => {
      close(false);
      setDate(params.date);
      getDate(params);
    },
    [setDate]
  );

  return (
    <>
      <DatePickerModal
        locale="en"
        mode="single"
        visible={isOpen}
        onDismiss={onDismissSingle}
        date={date}
        onConfirm={onConfirmSingle}
        // validRange={{
        //   startDate: new Date(2021, 1, 2),  // optional
        //   endDate: new Date(), // optional
        //   disabledDates: [new Date()] // optional
        // }}
        // onChange={} // same props as onConfirm but triggered without confirmed by user
        // saveLabel="Save" // optional
        // uppercase={false} // optional, default is true
        // label="Select date" // optional
        // animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
      />
    </>
  );
}
