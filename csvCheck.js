// Common Errors
// When checking your CSV, we may return one or more of the following errors:
// Invalid encoding: if there are any odd characters in a file which could cause encoding errors
// Line breaks: if line breaks are not the same throughout the file

 const lineBreaks = (csv) => {
  let csv_lines = csv.split('\n');
  let csv_line_breaks = [];
  for (let i = 0; i < csv_lines.length; i++) {
    csv_line_breaks.push(csv_lines[i].split('\r').length - 1);
  }
  let csv_line_breaks_unique = csv_line_breaks.filter(function (item, pos) {
    return csv_line_breaks.indexOf(item) == pos;
  });
  if (csv_line_breaks_unique.length > 1) {
    console.log('Line breaks are not the same throughout the csv file.');
  }
};

// Undeclared header: if you do not specify in a machine readable way whether or not your CSV has a header row
 const undeclaredHeader = (csv) => {
  let csv_lines = csv.split('\n');
  let csv_headers = csv_lines[0].split(',');
  if (csv_headers.length == 1) {
    console.log('The csv headers have not been declared.');
  }
};

// Ragged rows: if every row in the file doesn't have the same number of columns
 const raggedRows = (csv) => {
  let csv_lines = csv.split('\n');
  let csv_headers = csv_lines[0].split(',');
  let csv_rows = [];
  for (let i = 1; i < csv_lines.length; i++) {
    csv_rows.push(csv_lines[i].split(','));
  }
  let csv_rows_columns = [];
  for (let i = 0; i < csv_rows.length; i++) {
    csv_rows_columns.push(csv_rows[i].length);
  }
  let csv_rows_columns_unique = csv_rows_columns.filter(function (item, pos) {
    return csv_rows_columns.indexOf(item) == pos;
  });
  if (csv_rows_columns_unique.length > 1) {
    console.log(
      "Every row in the file doesn't have the same number of columns."
    );
  }
};

// Blank rows: if there are any blank rows
 const blankRows = (csv) => {
  let csv_lines = csv.split('\n');
  let csv_rows = [];
  for (let i = 1; i < csv_lines.length; i++) {
    csv_rows.push(csv_lines[i].split(','));
  }
  let csv_rows_blank = [];
  for (let i = 0; i < csv_rows.length; i++) {
    if (csv_rows[i].length == 1 && csv_rows[i][0] == '') {
      csv_rows_blank.push(i);
    }
  }
  if (csv_rows_blank.length > 0) {
    console.log('There are blank rows in the csv.');
  }
};
// Stray/Unclosed quote: if there are any unclosed quotes in the file
 const unclosedQuote = (csv) => {
  let csv_lines = csv.split('\n');
  let csv_rows = [];
  for (let i = 1; i < csv_lines.length; i++) {
    csv_rows.push(csv_lines[i].split(','));
  }
  let csv_rows_unclosed_quotes = [];
  for (let i = 0; i < csv_rows.length; i++) {
    for (let j = 0; j < csv_rows[i].length; j++) {
      if (csv_rows[i][j].split('"').length % 2 != 0) {
        csv_rows_unclosed_quotes.push(i);
      }
    }
  }
  if (csv_rows_unclosed_quotes.length > 0) {
    console.log('There are unclosed quotes in the csv file.');
  }
};

// Whitespace: if there is any whitespace between commas and double quotes around fields
 const whiteSpace = (csv) => {
  let csv_lines = csv.split('\n');
  let csv_rows = [];
  for (let i = 1; i < csv_lines.length; i++) {
    csv_rows.push(csv_lines[i].split(','));
  }
  let csv_rows_whitespace = [];
  for (let i = 0; i < csv_rows.length; i++) {
    for (let j = 0; j < csv_rows[i].length; j++) {
      if (csv_rows[i][j].split('"').length % 2 != 0) {
        if (csv_rows[i][j].split('"').length > 2) {
          if (csv_rows[i][j].split('"')[1].split(' ').length > 1) {
            csv_rows_whitespace.push(i);
          }
        }
      }
    }
  }
  if (csv_rows_whitespace.length > 0) {
    console.log(
      'There is whitespace between commas and double quotes around fields in csv.'
    );
  }
};

// If we get the CSV from a URL, then we also check for these errors:
// Not found: if the file doesn't exist (we get a 404 Not Found response)
let file = '';
let file_exists = false;
let file_lines = file.split('\n');
if (file_lines.length > 0) {
  file_exists = true;
}
if (!file_exists) {
  console.log('404 error');
}
// Wrong content type: if the content type isn't set text/csv
// Common Warnings
// We also return the following warnings:
// Encoding: if you don't use UTF-8 as the encoding for the file

 const checkUTF8 = (csv) => {
  let utf8Text = csv;
  try {
    // Try to convert to utf-8
    utf8Text = decodeURIComponent(escape(csv));
    // If the conversion succeeds, text is not utf-8
  } catch (e) {
    // console.log(e.message); // URI malformed
    // This exception means text is utf-8
  }
  return utf8Text; // returned text is always utf-8
};
/*
// Check options: if the CSV file only contains a single comma-separated column; this usually means you're using a separator other than a comm
let csv_lines = csv.split('\n');
let csv_rows = [];
for (let i = 1; i < csv_lines.length; i++) {
  csv_rows.push(csv_lines[i].split(','));
}
let csv_rows_columns = [];
for (let i = 0; i < csv_rows.length; i++) {
  csv_rows_columns.push(csv_rows[i].length);
}
let csv_rows_columns_unique = csv_rows_columns.filter(function (item, pos) {
  return csv_rows_columns.indexOf(item) == pos;
});
if (csv_rows_columns_unique.length == 1 && csv_rows_columns_unique[0] == 1) {
  console.log('The CSV file only contains a single comma-separated column.');
}
*/
// Inconsistent values: if any column contains inconsistent values, for example if most values in a column are numeric but there's a significant proportion that aren't

 const inconsistentValues = (csv) => {
  let csv_lines = csv.split('\n');
  let csv_rows = [];
  for (let i = 1; i < csv_lines.length; i++) {
    csv_rows.push(csv_lines[i].split(','));
  }
  let csv_rows_columns = [];
  for (let i = 0; i < csv_rows.length; i++) {
    csv_rows_columns.push(csv_rows[i].length);
  }
  let csv_rows_columns_unique = csv_rows_columns.filter(function (item, pos) {
    return csv_rows_columns.indexOf(item) == pos;
  });
  let csv_rows_columns_unique_max = Math.max.apply(
    Math,
    csv_rows_columns_unique
  );
  let csv_rows_columns_unique_max_index = csv_rows_columns_unique.indexOf(
    csv_rows_columns_unique_max
  );
  let csv_rows_columns_unique_max_columns =
    csv_rows_columns_unique[csv_rows_columns_unique_max_index];
  let csv_rows_columns_unique_max_columns_values = [];
  for (let i = 0; i < csv_rows.length; i++) {
    csv_rows_columns_unique_max_columns_values.push(
      csv_rows[i][csv_rows_columns_unique_max_columns]
    );
  }
  let csv_rows_columns_unique_max_columns_values_numeric = [];
  for (let i = 0; i < csv_rows_columns_unique_max_columns_values.length; i++) {
    if (!isNaN(csv_rows_columns_unique_max_columns_values[i])) {
      csv_rows_columns_unique_max_columns_values_numeric.push(
        csv_rows_columns_unique_max_columns_values[i]
      );
    }
  }
  if (
    csv_rows_columns_unique_max_columns_values_numeric.length /
      csv_rows_columns_unique_max_columns_values.length <
    0.9
  ) {
    console.log('There are inconsistent values in the csv file.');
  }
};

// Empty column name: if all the columns don't have a name
 const emptyColumnName = (csv) => {
  let csv_lines = csv.split('\n');
  let csv_headers = csv_lines[0].split(',');
  let csv_headers_blank = [];
  for (let i = 0; i < csv_headers.length; i++) {
    if (csv_headers[i] == '') {
      csv_headers_blank.push(i);
    }
  }
  if (csv_headers_blank.length > 0) {
    console.log("There are columns that don't have a name in the csv file.");
  }
};
// Duplicate column name: if all the column names aren't unique
 const duplicateColumnName = (csv) => {
  let csv_lines = csv.split('\n');
  let csv_headers = csv_lines[0].split(',');
  let csv_headers_unique = csv_headers.filter(function (item, pos) {
    return csv_headers.indexOf(item) == pos;
  });
  if (csv_headers_unique.length != csv_headers.length) {
    console.log('Not all the columns are unique.');
  }
};
// Title row: if there appears to be a title field in the first row of the CSV
// and if we get the CSV from a URL, we return these warnings:
// No content type: if you don't provide a Content-Type HTTP header

let url = '';
let url_content_type = '';
let url_content_type_exists = false;
let url_lines = url.split('\n');
for (let i = 0; i < url_lines.length; i++) {
  if (url_lines[i].indexOf('Content-Type') != -1) {
    url_content_type = url_lines[i].split(':')[1].trim();
    url_content_type_exists = true;
  }
}
if (!url_content_type_exists) {
  console.log('There is no Content-Type HTTP header in the url.');
}
// No encoding: if you don't specify an encoding with a charset parameter
// Excel: if it looks like you're serving an Excel file rather than CSV (because the suffix for the file is .xls and there is no 'Content-Type' header)

export {lineBreaks,undeclaredHeader,raggedRows,blankRows,unclosedQuote,whiteSpace,checkUTF8,inconsistentValues,emptyColumnName,duplicateColumnName}
