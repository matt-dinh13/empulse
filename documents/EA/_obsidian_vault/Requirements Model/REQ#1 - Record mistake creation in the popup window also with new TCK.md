---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7809 (CLM-2439) Registration mistake enhancement"
domain: "Requirements Model"
element_id: 1458766
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Record mistake creation in the popup window also with new TCK

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7809 (CLM-2439) Registration mistake enhancement

## 📝 Notes

Instead of redirection to new TCK module we should use current Popup window as for old TCK but load list of Mistake types from new TCK by API, then store ticket to new TCK by API.
Reason: redirection to TCK module and back is time consuming

Driven by system property RecordMistake_UsePopup

## 📊 Appears In (1 diagrams)

- Custom: CBL-7809 (CLM-2439) Registration mistake enhancement
