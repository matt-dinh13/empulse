---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9294 (CLM-3051) Process cabinet identifier in API request"
domain: "Requirements Model"
element_id: 1688816
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #2 - Send document.dmsId on KYC document update

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9294 (CLM-3051) Process cabinet identifier in API request

## 📝 Notes

Goal of this task is to start send the attribute document.dmsId to PIF. This attribute will be added to KYC document update, which is executed on document add/edit.
As part of this task shared procedure Fill DMS File attributes in update customer request for filling Document.dmsId and Document.dmsIdBack will be implemented.

This feature is controlled by:
Global database parameter updateDmsIdInPif

## 📊 Appears In (1 diagrams)

- Custom: REQ #2 - Send document.dmsId on KYC document update
