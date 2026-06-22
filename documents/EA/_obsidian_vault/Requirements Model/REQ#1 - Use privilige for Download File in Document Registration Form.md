---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2983 (CLM-1237) BSL: Remove Download File in Document Registration Form"
domain: "Requirements Model"
element_id: 1264202
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Use privilige for Download File in Document Registration Form

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2983 (CLM-1237) BSL: Remove Download File in Document Registration Form

## 📝 Notes

The goal is to modify visibility of Download button on Document registration form.
Currently visibility is set as follows:
Visibility: If Document->Document_File is not null (i.e. document has been uploaded to Cabinet by user; is not allowed to download printouts).
There should be also check for access right UC01_128 as is already used for download of file from Client/Contract documents

## 📊 Appears In (1 diagrams)

- Custom: CBL-2983 (CLM-1237) BSL: Remove Download File in Document Registration Form
