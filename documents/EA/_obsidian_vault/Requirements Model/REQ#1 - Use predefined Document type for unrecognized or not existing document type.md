---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6373 (CLM-2071) Upload of rejected documents to new document type"
domain: "Requirements Model"
element_id: 1433695
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Use predefined Document type for unrecognized or not existing document type

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6373 (CLM-2071) Upload of rejected documents to new document type

## 📝 Notes

Extension of the Scanned docs processing support (UC 01.391 Transfer data to BSL).
For unrecognized or not existing document types a new Document object will be created and the scan will be uploaded to this one.

DefaultDocType will be defined in the global setting (AutoUpload_DefaultDocType), e.g. OTHER_DOCUMENT type.
Used only for IN.

## 📊 Appears In (1 diagrams)

- Custom: CBL-6373 (CLM-2071) Upload of rejected documents to new document type
