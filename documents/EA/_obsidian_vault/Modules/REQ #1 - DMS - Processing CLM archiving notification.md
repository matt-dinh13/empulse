---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-14638 (CSI-1225) Cabinet - Contract documents to Central Archive"
domain: "Modules"
element_id: 1658445
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 REQ #1 - DMS - Processing CLM archiving notification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-14638 (CSI-1225) Cabinet - Contract documents to Central Archive

## 📝 Notes

The required functionality should ensure archiving files related to DMS Documents and stored in the Cabinet.
Supposed process description:
CLM notifies about contracts to be archived. Notification message must contain:

	
- CUID, ContractCode, Document uuids related to the archived contract


The archiving notification with involved document uuids are received and processed by DMS. If archived document contains file reference, system created a notification message with following:

	
- CUID, ContractCode, Document uuid, Retention period (in years) related to DocumentType to be archiving


DMS notifies Cabinet to archive the file with appropriate uuid(s).

Additional requirement:

	
- for the archive purpose, it is needed to have information about length of archiving (retention period) for each document type


	
- proposal is to have this info on DocumentType entity


All changes tagged as CSI-1351

## 📊 Appears In (1 diagrams)

- Custom: CBL-14638 (CSI-1225) Cabinet - Contract documents to Central Archive
