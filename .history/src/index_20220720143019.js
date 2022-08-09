import CsvToJson from "csvtojson";

const Ajv = require("ajv/dist/jtd");
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}


const schema = {
  properties: {
    OrderID: {type: "string"},
    Booker: {type: "string"},
    Value: {type: "float32"},
    Rating: {type: "int32"}
  },
  additionalProperties: true
};
const validate = ajv.compile(schema)
console.log(validate)
const serialize = ajv.compileSerializer(schema);

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
        console.log("array contents: ", arr); // if not ok, no values
        console.log("array contents 0: ", arr[0]);

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
          tableData.push(recordVals);

        }
        console.log('table data', tableData);
        console.log(arr.length);
        for (let i = 0; i < arr.length; i++) {
          console.log(arr[i])
          const validate = ajv.compile(schema)
          //const data = {foo: 1, bar: "abc"}
          const valid = validate(arr[i]);
          if (!valid) console.log(validate.errors);
          let msgs = document.getElementById("invalidMessages");
          let colName = validate.errors[0]["instancePath"].slice(1,);
          let colType = validate.errors[0]["keyword"];
          let problem = validate.errors[0]["message"];
          if (colType === "type") {
            msgs.textContent = `"${colName}" ${colType} ${problem}.`;
          } else if (validate.errors[0]["params"]["error"] === "missing") {
            let missingCol = validate.errors[0]["params"]["missingProperty"];
            msgs.textContent = `Cannot find required property "${missingCol}".`
          }


        }


        for (var i = 0; i < input.length; i++) {
          for (var key in input[i]) {
            if (col.indexOf(key) === -1) {
              col.push(key);
            }
          }
        }
        for (var i in col) {
          tableHeader.push({title: col[i]});
        }
        $(document).ready(function () {
            $('#example').DataTable({
              "dom": '<"top"ip>rt<"clear">',
              data: tableData, // extract this from input file
              columns: tableHeader,
            });
        });
      })}
    let myData = fr.readAsText(files.item(0));






  };
