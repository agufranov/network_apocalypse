const tintColor = '#005462';
const greenCup = '#dceea2'

export const styles = {
  text: {
    flex: 1,
    textAlignVertical: "center",
    textAlign: "center",
    fontFamily: 'Roboto-Bold',
    //marginHorizontal: 30,
    marginVertical: 10,
    fontSize: 18,
    color: '#1119',
  },
  textWarning: {
    fontFamily: 'Roboto-Bold',
    height: 40,
    textAlignVertical: "center",
    textAlign: "center",
    marginHorizontal: 30,
    marginVertical: 10,
    paddingHorizontal: 16,
    paddingVertical: 0,
    fontSize: 18,
    backgroundColor: "red",
    borderRadius: 10,
    color: '#fffd',
  }, textInput: {
    height: 40,
    textAlign: "center",
    marginHorizontal: 30,
    marginVertical: 10,
    paddingHorizontal: 16,
    paddingVertical: 7,
    fontSize: 18,
    borderRadius: 16,
    color: tintColor,
    borderColor: tintColor,
    borderWidth: 2,
  },
  tabRowText: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontFamily: 'Roboto-Bold',
    alignItems: "center"
  },
  infoblock: {
    marginTop: 40,
    flexDirection: "column",
      //justifyContent: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
              //padding: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  flex1: {
    flex: 1
  },
  buttonText: {
    textAlign: 'center',
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#999999'
  },
  simpleTextInput: {
    height: 33,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#0005',
    //flex: 1,
    fontSize: 17,
    padding: 6,
  },
  simpleText: {
    color: '#888',
    fontSize: 16,
    padding: 4,
    marginTop: 5,
    marginBottom: 5
  }
};