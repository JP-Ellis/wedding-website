const scriptProp = PropertiesService.getScriptProperties();

function intialSetup() {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty("key", activeSpreadsheet.getId());
}

function processRSVP(data) {
  const spreadsheet = SpreadsheetApp.openById(scriptProp.getProperty("key"));
  var sheet = spreadsheet.getSheetByName("RSVP Responses");

  var nextRow = sheet.getLastRow() + 1;

  for (field of ["name", "email", "phone", "attending"]) {
    if (!(field in data)) {
      throw `'${field}' missing from the parameters`;
    }
  }

  var newRow = [
    Utilities.formatDate(new Date(), "UTC", "yyyy-MM-dd'T'HH:mm:ss'Z'"),
    data["name"],
    data["email"],
    data["phone"],

    data["attending"],
    "dietary-requirements" in data ? data["dietary-requirements"] : "",
  ];
  if (data["has-guest"] === "no") {
    newRow.push("no");
  } else {
    const guest = data["guest"][0];
    newRow.push(guest["name"]);
    newRow.push(
      "dietary-requirements" in guest ? guest["dietary-requirements"] : ""
    );
  }

  sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

  return ContentService.createTextOutput(
    JSON.stringify({ result: "success", type: "RSVP", row: nextRow })
  ).setMimeType(ContentService.MimeType.JSON);
}

function processAccommodation(data) {
  const spreadsheet = SpreadsheetApp.openById(scriptProp.getProperty("key"));
  var sheet = spreadsheet.getSheetByName("Accommodation Responses");

  var nextRow = sheet.getLastRow() + 1;

  for (field of ["name", "accommodation"]) {
    if (!(field in data)) {
      throw `'${field}' missing from the parameters`;
    }
  }

  var newRow = [
    Utilities.formatDate(new Date(), "UTC", "yyyy-mm-dd'T'HH:mm:ss'Z'"),
    data["name"],
    data["accommodation"],
  ];

  sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

  return ContentService.createTextOutput(
    JSON.stringify({ result: "success", type: "accommodation", row: nextRow })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  Logger.log("[Lock] Obtaining");
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    Logger.log("[Lock] Timed out");
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: "lock timeout" })
    ).setMimeType(ContentService.MimeType.JSON);
  }
  Logger.log("[Lock] Done");

  try {
    const data = JSON.parse(e.postData.contents);
    Logger.log("Data: ", data);
    if ("accommodation" in data) {
      Logger.log("Processing as accommodation");
      return processAccommodation(data);
    } else if ("email" in data) {
      Logger.log("Processing as RSVP");
      return processRSVP(data);
    } else {
      Logger.log("Invalid data");
      throw "Data does not appear to be either an Accommodation or RSVP response.";
    }
  } catch (e) {
    Logger.log("Caught error: ", e);
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: e })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
