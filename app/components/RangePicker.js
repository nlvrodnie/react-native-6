import * as React from "react";
import { Button } from "react-native-paper";

import { DatePickerModal } from "react-native-paper-dates";

export default function ReadMeExampleRange({ isOpen, getRange, close }) {
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const onDismiss = React.useCallback(() => {
    close(false);
  });

  const onConfirm = React.useCallback(({ startDate, endDate }) => {
    getRange(startDate, endDate);
    console.log("startsss", startDate);
    close(false);
  });

  return (
    <>
      <DatePickerModal
        locale="en"
        mode="range"
        visible={isOpen}
        onDismiss={onDismiss}
        startDate={startDate}
        endDate={endDate}
        onConfirm={onConfirm}
        // validRange={{
        //   startDate: new Date(2021, 1, 2),  // optional
        //   endDate: new Date(), // optional
        //   disabledDates: [new Date()] // optional
        // }}
        // onChange={} // same props as onConfirm but triggered without confirmed by user
        // saveLabel="Save" // optional
        // uppercase={false} // optional, default is true
        // label="Select period" // optional
        // startLabel="From" // optional
        // endLabel="To" // optional
        // animationType="slide" // optional, default is slide on ios/android and none on web
      />
    </>
  );
}
