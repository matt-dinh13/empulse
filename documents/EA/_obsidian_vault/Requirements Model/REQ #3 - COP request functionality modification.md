---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4285 (CLM-1706) Payment made before due date"
domain: "Requirements Model"
element_id: 1365915
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #3 - COP request functionality modification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4285 (CLM-1706) Payment made before due date

## 📝 Notes

This request describes changes in Cooling Off Period request functionality raised by change in pairing client's prepayments.

	
- Extension of the COP preview with a new attribute of client's prepayments (total amount) - it use the same GUI as for FER, so no dev is probably needed here
	
- In order to unification of FER/CET data source usage, we will replace it with HO_SERVICE_REQUEST_DATA data source (i.e. calling UC 08.356 Generate service request document) with FER variant data. For some period, choosing of these data sources will be controlled by a switch.

## 📊 Appears In (1 diagrams)

- Custom: CBL-4285 (CLM-1706) Payment made before due date
