---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Import list of communication/Use Case"
domain: "Analysis Model"
element_id: 1239033
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Message structure of error report

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Import list of communication/Use Case

## 📝 Notes

If file was processed with error(s) then system notifies user through internal message with following text:

Import communication file:
File: (FILE_COMMUNICATION.NAME)
Imported: (FILE_COMMUNICATION.IMPORT_DATE_TIME as MM/DD/YYYY HH:MM.SS) 
System rejected import (date and time of end asynchronous job as MM/DD/YYYY HH:MM.SS), due following errors:
Error order; File row number; CUID; Attribute name; Error description
ERROR_ORDER; FILE_COMMUNICATION.ROW_NUMBER; FILE_COMMUNICATION.CUID; ATTRIBUTE_NAME; ERROR_DESCRIPTION

(Explanatory notes:

	
- ERROR_ORDER is order of error
	
- FILE_FEES.ROW_NUMBER is row number in input file where error was detected
	
- FILE_COMMUNICATION.CUID is identification number of client from input file
	
- ATTRIBUTE_NAME is name of item from input file from VAL_0710_Communication_File_Content_Validation
	
- ERROR_DESCRIPTION is error message from VAL_0710_Communication_File_Content_Validation)


Example:
Import communication file:
File: 20110315_Outgoing_calls.xml
Imported: 03/16/2011 10:30:00
System rejected import at 03/16/2011 10:30:16 due following errors:
Error order; File row number; CUID; Attribute name; Error description
1; 21; 12030; Contract number; Value doesn’t exist in system
2; 28; 25687; Type; Value doesn’t exist in enumeration
3; 32; 35679; Subtype; Value doesn’t exist in enumeration

Error descriptions MSG_{error description}:
ENUM_ERROR_WITH_PARAMS
CRM_ENUM_ERROR
CLIENT_NOT_FOUND
CONTRACT_DOES_NOT_BELONG_TO_CLIENT
CONTRACT_NOT_FOUND
DATA_TYPE_ERROR

## 🔗 Connections (1)

- ← Dependency: [[{MOD}07.060 Process communication list file]]

## 📊 Appears In (1 diagrams)

- Use Case: Import list of communication
