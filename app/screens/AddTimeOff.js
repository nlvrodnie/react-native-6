import { React, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { theme } from "../core/theme";
import { Card, Title, Paragraph } from "react-native-paper";
import RangePicker from "../components/RangePicker";
import Moment from "react-moment";
import "moment-timezone";
import RNPickerSelect from "react-native-picker-select";
function add(props) {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const close = (data) => setOpen(data);
  const getRange = (start, end) => {
    setStartDate(start);
    console.log("start", start);
    setEndDate(end);
  };

  return (
    <>
      <RangePicker isOpen={open} close={close} getRange={getRange} />
      <View style={styles.container}>
        <Card>
          <Card.Title title="Add" subtitle="Add timeoff request" />
          <Card.Content>
            <Formik
              initialValues={{ email: "", notes: "", startDate: new Date() }}
              onSubmit={(values) => console.log(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                  {/* <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            /> */}
                  <View
                    style={{
                      padding: 2,
                      borderRadius: 5,
                      borderColor: "gray",
                      borderWidth: 1,
                    }}
                  >
                    <RNPickerSelect
                      onValueChange={(value) => console.log(value)}
                      style={pickerStyle}
                      items={[
                        { label: "Football", value: "football" },
                        { label: "Baseball", value: "baseball" },
                        { label: "Hockey", value: "hockey" },
                      ]}
                    />
                  </View>
                  <TextInput
                    label="Reason"
                    returnKeyType="next"
                    value={values.notes}
                    onChangeText={handleChange("notes")}
                    autoCapitalize="none"
                  />
                  <Button
                    mode="contained"
                    style={{ backgroundColor: theme.colors.primary }}
                    onPress={() => setOpen(true)}
                  >
                    Pick Date Timeoff Request
                  </Button>
                  {startDate && (
                    <>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                          }}
                        >
                          <Text>Start Date:</Text>
                          <Moment
                            date={startDate}
                            element={Text}
                            format="YYYY-MM-DD"
                          />
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                          }}
                        >
                          <Text>End Date: </Text>
                          <Moment
                            date={endDate}
                            element={Text}
                            format="YYYY-MM-DD"
                          />
                        </View>
                      </View>
                    </>
                  )}

                  <Button
                    mode="contained"
                    style={{ backgroundColor: theme.colors.primary }}
                    onPress={console.log("sometdfd")}
                  >
                    Add
                  </Button>
                </View>
              )}
            </Formik>
          </Card.Content>
        </Card>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "#F1F2F6",
  },
});
const pickerStyle = {
  inputIOS: {
    color: "black",
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
  },
  inputAndroid: {
    borderColor: "black",
    borderRadius: 20,
    borderWidth: 1,
  },
  placeholderColor: "white",
  underline: { borderTopWidth: 1, borderRadius: 20 },
  icon: {
    position: "absolute",
    backgroundColor: "transparent",
    borderTopWidth: 5,
    borderTopColor: "#00000099",
    borderRightWidth: 5,
    borderRightColor: "transparent",
    borderLeftWidth: 5,
    borderLeftColor: "transparent",
    width: 0,
    height: 0,
    top: 20,
    right: 15,
  },
};

export default add;
