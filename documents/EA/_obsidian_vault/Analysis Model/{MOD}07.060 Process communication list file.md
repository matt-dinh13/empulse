---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Import list of communication/Access Rights"
domain: "Analysis Model"
element_id: 1757636
diagrams: 4
connections: 11
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}07.060 Process communication list file

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Import list of communication/Access Rights

## 📝 Notes

The purpose of this technical use case is to process communication file (file with planned or executed, incoming or outgoing communication related to client and his contracts) imported manually from use case 07.010 Import communication list or automatically via web service from use case 07.061 Automatic import communication list.

Processing consists of file validation, parsing into elements (communication events, records,...) - validation of elements and recording the data, and user notification (via WS response or dialog messages, internal messages and result file stored on the user's side).

## 🔗 Connections (9)

- ← Abstraction «trace»: [[ResultAutomaticCommunicationListImportWS]]
- → Dependency: [[Communication file content validation]]
- → Dependency: [[Create communication events from the file]]
- ← Dependency «invokes»: [[07.010 Import communication list (UseCase 1757642)]]
- → Realisation: [[07.060 Process communication list]]
- → Dependency: [[Message structure of error report]]
- → Dependency: [[Message structure of success report]]
- ← Dependency «invokes»: [[07.061 Automatic import communication list (UseCase 1757635)]]
- ← UseCase: [[Time (Actor 1880869)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: CBL-11956 (CLM-4061 ) Complaints Data and Communication Data to Hadoop
- Logical: Automatic Import response
- Use Case: Import list of communication
