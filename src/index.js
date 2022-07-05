import CsvToJson from "csvtojson";

const Ajv = require("ajv/dist/jtd")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
const schema = {
  properties: {
    foo: {type: "int32"}
  },
  optionalProperties: {
    bar: {type: "string"}
  }
}
const serialize = ajv.compileSerializer(schema)
const data = {
  foo: 1,
  bar: "abc"
}

// fetch data
let tableCols = [];
document.getElementById("import").onclick = function () {
  // empty array where we will store stringified json
  let arr;
  // finding imported file
  let files = document.getElementById("selectFiles").files;
  if (files.length <= 0) {
    return false;
  }
  let fr = new FileReader();
  //load csv and convert to JSON
  fr.onload = function (e) {
    //console.log('fetching file'); //ok
    CsvToJson()
      .fromString(e.target.result)
      .then((arr) => {
        let input = arr;
        //console.log("array contents: ", arr); // if not ok, no values
        // need to reshape this as list of lists

        var col = [];
        var record = [];
        var tableData = [];
        var tableHeader = [];

        for (var i = 0; i < input.length; i++) {
          var record = input[i];
          var recordVals = [];
          var numCols = Object.keys(record).length;
          for (var j = 0; j < numCols; j++) {
            var key = Object.keys(record)[j];
            var value = record[key];
            recordVals.push(value);
          }
          //console.log('values extracted: ', recordVals);
          tableData.push(recordVals);
        }
        console.log('data', tableData);

        for (var i = 0; i < input.length; i++) {
          for (var key in input[i]) {
            if (col.indexOf(key) === -1) {
              col.push(key);
            }
          }
        }
        //console.log("cols", col);
        for (var i in col) {
          tableHeader.push({title: col[i]});
        }

        console.log('header', tableHeader);


        $(document).ready(function () {
            $('#example').DataTable({
              "dom": '<"wrapper"iprt>',
              data: tableData, // extract this from input file
              columns: tableHeader,
            });
        });



      })}
    let myData = fr.readAsText(files.item(0));
    //return myData;


  };

console.log(serialize(data))
const parse = ajv.compileParser(schema)
const json = '{"foo": 1, "bar": "abc"}'
const invalidJson = '{"unknown": "abc"}'
console.log("parse and log valid here", parseAndLog(json)) // logs {foo: 1, bar: "abc"}
console.log("parse and log invalid here", parseAndLog(invalidJson)) // logs error and position

function parseAndLog(json) {
  const data = parse(json)
  if (data === undefined) {
    console.log("error message", parse.message) // error message from the last parse call
    console.log("error position", parse.position) // error position in string
  } else {
    console.log("data", data)
  }
}
