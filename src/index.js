import CsvToJson from "csvtojson";

const Ajv2020 = require("ajv/dist/2020");

function convertIntObj(input) {
      const res = {}
      for (const key in input) {
        res[key] = {};
        for (const prop in input[key]) {
          const parsed = parseInt(input[key][prop], 10);
          res[key][prop] = isNaN(parsed) ? input[key][prop] : parsed;
        }
      }
      return res;
    }

const ajv = new Ajv2020({allErrors:true, strict:true});
const schema = {
  type: "object",
  properties: {
    OrderID: {type: "string"},
    Booker: {type: "string"},
    Value: {type: "number"},
    Rating: {
      type: "number",
      enum: ["0","1","2","3","4","5"]
    }
  },
  additionalProperties: true
};

//const serialize = ajv.compileSerializer(schema);

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
        var result = convertIntObj(input);
        var arrayResult = Object.values(result);
        console.log("arrayResult: ", arrayResult);
        //console.log("array contents: ", arr); // if not ok, no values
        var col = [];
        var record = [];
        var tableData = [];
        var tableHeader = [];
        for (var i = 0; i < arr.length; i++) {
          var record = arr[i];
          var recordVals = [];
          var numCols = Object.keys(record).length;
          for (var j = 0; j < numCols; j++) {
            var key = Object.keys(record)[j];
            var value = record[key];
            recordVals.push(value);
          }
          tableData.push(recordVals);
        }
        //console.log('table data', tableData);
        //console.log(arr.length);
        const errorList = [];
        for (let i = 0; i < arr.length; i++) {
          const validate = ajv.compile(schema)
          const valid = validate(arr[i]);
          if (!valid) {
            //console.log(validate.errors);
            errorList.push(validate.errors);
          }
          let msgs = document.getElementById("invalidMessages");
          let success = document.getElementById("validFile");
          //if (valid) console.log("success!");
          let errs = errorList[0];
          let errText = [];
          for (var k = 0; k < errs.length; k++) {
            let colName = errs[k]["instancePath"].slice(1,);
            let colType = errs[k]["keyword"];
            let problem = errs[k]["message"];
            if (colType === "type") {
              var errMsg = `"${colName}" ${colType} ${problem}.`;
              errText.push(errMsg);
            } else if (errs[k]["params"]["error"] === "missing") {
              let missingCol = errs[k]["params"]["missingProperty"];
              var errMsg = `Cannot find required property "${missingCol}".`;
              errText.push(errMsg);
            } else if (colType === "enum") {
              let allowed = errs[k]["params"]["allowedValues"];
              let missingCol = errs[k]["params"]["missingProperty"];
              var errMsg = `"${colName}" must be one of ${allowed}.`;
              errText.push(errMsg);
            }
          }
          function removeDuplicates(errText) {
            return [...new Set(errText)];
          }
          //console.log("errText cleaned: ", removeDuplicates(errText));
          msgs.innerHTML = `Issues:<br>${removeDuplicates(errText)}`
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
          console.log(tableData,tableHeader);
            $('#example').DataTable({
              "dom": '<"top"ip>rt<"clear">',
              data: tableData, // extract this from input file
              columns: tableHeader,
            });
        });
      })}
    let myData = fr.readAsText(files.item(0));
  };
