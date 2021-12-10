import { StyleSheet } from "react-native";

export const historyStyles = StyleSheet.create({
  container: {
    margin: 20,
  },

  box: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    height: 60,
  },

  date: {
    fontSize: 22,
    fontWeight: "bold",
    color: '#EEEEEE',
    marginTop: 20,
  },

  headerText: {
    fontSize: 25,
    textAlign: "center",
    color: "black",
    marginTop: 5,
    fontWeight: "bold",
  },

  subtitleText: {
    fontSize: 15,
    textAlign: "center",
    color: "black",
    marginTop: 1,
    marginBottom: 10,
  },

  headerImage: {
    width: 1500,
    height: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    fontSize: 15,
  },

  detailContainer: {
    backgroundColor: "#393E46",
    margin: '5%',
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    padding: '5%',
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  logBox: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    height: 60,
  },
});
