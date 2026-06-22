---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Requirement model/CBL-15121 (CSI-1682) Data export"
domain: "Modules"
element_id: 1691995
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Extension of BSA by new Data Export operation 

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Requirement model/CBL-15121 (CSI-1682) Data export

## 📝 Notes

Changes in the Logical model:
- new operation type DATA_EXPORT
- new Bulk Operation extension Data Export Operation table
- new Data Export Result table
- new Data Export System Config table/setting

Changes in the API:
- new schema bulkChangesDataExportPostRequestBody in the POST /rest/v1/bulk-changes
- attributes OPERATION_NOT_ALLOWED, CONTRACT_NOT_FOUND, INVALID_CONTRACT_STATUS is not mandatory in the GET /rest/v1/bulk-changes/{id}
- new GET API /rest/v1/bulk-changes/{id}/data-exports

Changes in the UI:
- new form for creation of Data export
- updated common Bulk operation detail form
  -- Download contract list button visibility
  -- new Download period list button
  -- statistics values is shown only if received

Changes in the UC and Access rights:
- new 08.741 Create Data Export bulk operation
- new 08.743 Execute Data Export bulk operation
- update of common UC 08.711 Execute bulk operation to support Data export
- new 08.706 Get list of subperiods for data export bulk operation

## 📊 Appears In (1 diagrams)

- Custom: CBL-15121 (CSI-1682) Data Export
