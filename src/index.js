import CsvToJson from "csvtojson";

import Ajv from 'ajv';
// import addFormat from 'ajv-formats';
const ajv = new Ajv({
  allErrors: true,
  strict: false,
  validateFormats: 'full',
});


ajv.addFormat('float', /^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/);

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
    const _schema = {
      $id: 'http://example.com/example.json',
      type: 'object',
      default: {},
      title: 'Root Schema',
      required: [
        'Order ID',
        'Customer',
        'Booker',
        'Ordered',
        'Required by',
        'Shipped',
        'REGION',
        'Country',
        'Order value',
        'Rating',
      ],
      properties: {
        'Order ID': {
          type: 'integer',
          format: 'float',
          default: 0,
          title: 'The Order ID Schema',
          examples: [10248],
        },
        Customer: {
          type: 'string',
          default: '',
          title: 'The Customer Schema',
          examples: ['VINET'],
        },
        Booker: {
          type: 'string',
          default: '',
          title: 'The Booker Schema',
          examples: ['Steven Buchanan'],
        },
        Ordered: {
          type: 'integer',
          format: 'float',
          default: 0,
          title: 'The Ordered Schema',
          examples: [4],
        },
        'Required by': {
          type: 'integer',
          format: 'float',
          default: 0,
          title: 'The Required by Schema',
          examples: [1],
        },
        Shipped: {
          type: 'integer',
          format: 'float',
          default: 0,
          title: 'The Shipped Schema',
          examples: [16],
        },
        REGION: {
          type: 'string',
          default: '',
          title: 'The REGION Schema',
          examples: ['Europe'],
        },
        Country: {
          type: 'string',
          default: '',
          title: 'The Country Schema',
          examples: ['France'],
        },
        'Order value': {
          type: 'integer',
          format: 'float',
          default: 0,
          title: 'The Order value Schema',
          examples: [440],
        },
        Rating: {
          type: 'number',
          format: 'float',
          default: 0,
          title: 'The Rating Schema',
          examples: [3],
          enum: [0, 1, 2, 3, 4, 5],
        },
      },
      examples: [
        {
          'Order ID': 10248,
          Customer: 'VINET',
          Booker: 'Steven Buchanan',
          Ordered: 4,
          'Required by': 1,
          Shipped: 16,
          REGION: 'Europe',
          Country: 'France',
          'Order value': 440,
          Rating: 4,
        },
      ],
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
for (let i = 0; i < arrayResult.length; i++) {
  let valid = ajv.validate(_schema, arrayResult[i]);
  console.log(valid);
  // let valid = testSchemaValidator(arrayResult[i]);
  // console.log(valid);
  if (!valid) {
    errorList.push(ajv.errors);
  }
}
console.log(errorList);
let msgs = document.getElementById('invalidMessages');
let success = document.getElementById('validFile');
let errText = [];
errorList.map((a) => {
  a.map((b) => {
    // console.log(b.instancePath.slice(1))
    let colName = b['instancePath'].slice(1);
    let colType = b['keyword'];
    let problem = b['message'];

    // console.log(`"${colName} ${(colType, problem)}".`);

    if (colType === 'type' || 'format') {
      var errMsg = `"${colName}" ${colType} ${problem}.`;
      errText.push(errMsg);
    } else if (b['params']['error'] === 'missing') {
      let missingCol = b['params']['missingProperty'];
      var errMsg = `Cannot find required property "${missingCol}".`;
      errText.push(errMsg);
    } else if (colType === 'enum') {
      let allowed = b['params']['allowedValues'];
      let missingCol = b['params']['missingProperty'];
      var errMsg = `"${colName}" must be either ${allowed}.`;
      errText.push(errMsg);
    }
  });
});
          function removeDuplicates(errText) {
            return [...new Set(errText)];
          }
          //console.log("errText cleaned: ", removeDuplicates(errText));
          msgs.innerHTML = `Issues:<br>${removeDuplicates(errText)}`
        
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