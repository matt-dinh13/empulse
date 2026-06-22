---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4285 (CLM-1706) Payment made before due date"
domain: "Requirements Model"
element_id: 1365917
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - FER request functionality modification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4285 (CLM-1706) Payment made before due date

## 📝 Notes

This request describes changes in Full Early Repayment request functionality raised by change in pairing client's prepayments.

	
- Extension of the FER preview with a new attribute of client's prepayments (total amount)


	
- Modification of the HO_SERVICE_REQUEST_DATA data source (UC 08.356 Generate service request document) for FER printout - a new item "total prepayments" will be added here.
Notice: The HO_ER_REQUEST_DATA data source has been replaced by the HO_SERVICE_REQUEST_DATA data source for FER printout. Country which still using the HO_ER_REQUEST_DATA data source has to replace it by the latest version of the HO_SERVICE_REQUEST_DATA.

## 📊 Appears In (1 diagrams)

- Custom: CBL-4285 (CLM-1706) Payment made before due date
