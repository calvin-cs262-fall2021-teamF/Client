import { StyleSheet } from "react-native";

export const historyStyles = StyleSheet.create({
  container: {
    margin: 18,
  },

  box: {
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
    marginBottom: 3,
    height: 60,
  },
  date: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 3,
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
	}
});
