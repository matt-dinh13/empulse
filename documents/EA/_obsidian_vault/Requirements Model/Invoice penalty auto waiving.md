---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-830 (CBL-1519) MPF Invoice Penalty Auto Waiving"
domain: "Requirements Model"
element_id: 1272141
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Invoice penalty auto waiving

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-830 (CBL-1519) MPF Invoice Penalty Auto Waiving

## 📝 Notes

Business story
We suggest to use the current service of “CHECKTL_MPF” and enhance its capability so that it is also able to waive the penalty automatically, when customer provides the MPF invoice.
Bellow are conditions that need to be fulfilled in order to trigger the automatic service to delete the MPF Invoice Penalty:

	
- MPF penalty is already charged on contract.
	
- MPF penalty is not already paid.	
	
- The MPF invoice document is already uploaded and the service is evaluated in the system.
	
- Status of the contract is not Written Off, or Finished.
	
- There is no constraint on when customer can bring the invoice, other than the conditions above. No time period requested.

## 🔗 Connections (1)

- ← Generalization: [[REQ#1 - Enhance capability of CHECKTL service to automatically waive unpaid charged penalty if custo]]

## 📊 Appears In (1 diagrams)

- Custom: CLM-830 (CBL-1519) MPF Invoice Penalty Auto Waiving
