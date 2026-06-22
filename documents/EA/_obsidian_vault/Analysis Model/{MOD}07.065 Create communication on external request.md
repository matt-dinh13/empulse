---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Import list of communication/Access Rights"
domain: "Analysis Model"
element_id: 1869787
diagrams: 5
connections: 6
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}07.065 Create communication on external request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Import list of communication/Access Rights

## 📝 Notes

The function creates communication event (events) and one communication record related to a client (CUID) on an external system request. If the request is successfully processed, the function returns communicationRecordId. If any of requested communication events fails for validation, whore request is refused and fault response is returned. 
REST call example:
POST https://bsl.id00a1.cz.infra/bsl/openapi/v1.0/communicationmanagement/communications

## 🔗 Connections (5)

- ← Dependency: [[communications (Class 1844131)]]
- → Dependency: [[Communication file content validation]]
- → Dependency: [[Create communication events from the file]]
- → Realisation: [[{ADD}07.065 Create communication on external request]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: CBL-10452 (CLM-3304) [HomeX] Change Communication Management REST service to follow current behavior on BSL
- Custom: CBL-11956 (CLM-4061 ) Complaints Data and Communication Data to Hadoop
- Logical: Communications
- Use Case: Create communication on external request
